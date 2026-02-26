import { prisma } from '../config/database';
import { cacheService } from './cache.service';
import { logger } from '../config/logger';
import { CACHE_TTL } from '../utils/constants';
import { cacheKey } from '../utils/helpers';

interface FeatureFlagRule {
  userRoles?: string[];
  subscriptionTiers?: string[];
  userIds?: string[];
  percentage?: number;
}

class FeatureFlagService {
  /**
   * Check if a feature flag is enabled.
   */
  async isEnabled(
    flagName: string,
    context?: { userId?: string; role?: string; tier?: string }
  ): Promise<boolean> {
    const key = cacheKey('flag', flagName);

    // Check cache first
    const cached = await cacheService.get<{ enabled: boolean; rules: FeatureFlagRule | null }>(key);
    if (cached) {
      return this.evaluateRules(cached.enabled, cached.rules, context);
    }

    // Fetch from database
    try {
      const flag = await prisma.featureFlag.findUnique({
        where: { name: flagName },
      });

      if (!flag) return false;

      const rules = flag.rules as FeatureFlagRule | null;

      // Cache the flag
      await cacheService.set(key, { enabled: flag.isEnabled, rules }, CACHE_TTL.MEDIUM);

      return this.evaluateRules(flag.isEnabled, rules, context);
    } catch (error) {
      logger.warn('Feature flag check failed', { flagName, error });
      return false;
    }
  }

  /**
   * Get all feature flags.
   */
  async getAll(): Promise<Array<{ name: string; isEnabled: boolean; description: string | null }>> {
    const flags = await prisma.featureFlag.findMany({
      select: { name: true, isEnabled: true, description: true },
      orderBy: { name: 'asc' },
    });
    return flags;
  }

  /**
   * Toggle a feature flag.
   */
  async toggle(flagName: string, enabled: boolean): Promise<void> {
    await prisma.featureFlag.update({
      where: { name: flagName },
      data: { isEnabled: enabled },
    });

    // Invalidate cache
    await cacheService.del(cacheKey('flag', flagName));
    logger.info('Feature flag toggled', { flagName, enabled });
  }

  private evaluateRules(
    enabled: boolean,
    rules: FeatureFlagRule | null,
    context?: { userId?: string; role?: string; tier?: string }
  ): boolean {
    if (!enabled) return false;
    if (!rules || !context) return enabled;

    // Check user-specific override
    if (rules.userIds?.length && context.userId) {
      if (rules.userIds.includes(context.userId)) return true;
    }

    // Check role-based access
    if (rules.userRoles?.length && context.role) {
      if (!rules.userRoles.includes(context.role)) return false;
    }

    // Check subscription tier
    if (rules.subscriptionTiers?.length && context.tier) {
      if (!rules.subscriptionTiers.includes(context.tier)) return false;
    }

    // Percentage rollout
    if (rules.percentage !== undefined && context.userId) {
      const hash = this.simpleHash(context.userId + flagName);
      if (hash % 100 >= rules.percentage) return false;
    }

    return true;
  }

  private simpleHash(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash |= 0;
    }
    return Math.abs(hash);
  }
}

export const featureFlagService = new FeatureFlagService();
