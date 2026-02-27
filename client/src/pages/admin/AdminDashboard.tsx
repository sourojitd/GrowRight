import { motion } from 'framer-motion';
import { Users, Baby, Target, Sparkles, Route, ToggleLeft, TrendingUp } from 'lucide-react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiGet, apiPatch } from '@/lib/api';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import AnimatedCounter from '@/components/shared/AnimatedCounter';
import StaggerContainer, { staggerItem } from '@/components/shared/StaggerContainer';
import { PageSpinner } from '@/components/ui/Spinner';
import type { AdminStats } from '@/types';
import SEO from '@/components/shared/SEO';
import toast from 'react-hot-toast';

const statCardStyles = [
  'stat-card-blue',
  'stat-card-green',
  'stat-card-orange',
  'stat-card-purple',
  'stat-card-teal',
  'stat-card-green',
];

const statCardIcons = [
  'bg-gradient-to-br from-accent-blue/20 to-accent-teal/20 text-accent-blue',
  'bg-gradient-to-br from-accent-green/20 to-accent-teal/20 text-accent-green',
  'bg-gradient-to-br from-accent-orange/20 to-accent-red/10 text-accent-orange',
  'bg-gradient-to-br from-accent-purple/20 to-accent-blue/10 text-accent-purple',
  'bg-gradient-to-br from-accent-teal/20 to-accent-blue/20 text-accent-teal',
  'bg-gradient-to-br from-accent-green/20 to-accent-teal/20 text-accent-green',
];

export default function AdminDashboard() {
  const queryClient = useQueryClient();

  const { data: stats, isLoading } = useQuery({
    queryKey: ['admin', 'stats'],
    queryFn: () => apiGet<AdminStats>('/admin/dashboard'),
  });

  const { data: flags = [] } = useQuery({
    queryKey: ['admin', 'flags'],
    queryFn: () =>
      apiGet<Array<{ name: string; description: string; isEnabled: boolean }>>(
        '/admin/feature-flags'
      ),
  });

  const toggleFlagMutation = useMutation({
    mutationFn: ({ name, isEnabled }: { name: string; isEnabled: boolean }) =>
      apiPatch(`/admin/feature-flags/${name}`, { isEnabled }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin', 'flags'] });
      toast.success('Flag updated');
    },
  });

  if (isLoading) return <PageSpinner />;

  const statCards = [
    { label: 'Total Users', value: stats?.totalUsers || 0, icon: Users },
    { label: 'Total Children', value: stats?.totalChildren || 0, icon: Baby },
    { label: 'Milestones Tracked', value: stats?.totalMilestonesTracked || 0, icon: Target },
    { label: 'Activities Completed', value: stats?.totalActivitiesCompleted || 0, icon: Sparkles },
    { label: 'Roadmaps', value: stats?.totalRoadmaps || 0, icon: Route },
    { label: 'Signups (7d)', value: stats?.recentSignups || 0, icon: TrendingUp },
  ];

  return (
    <StaggerContainer className="space-y-8">
      <SEO title="Admin Dashboard" description="Platform overview and management tools." path="/admin" />
      <motion.div variants={staggerItem}>
        <h1 className="text-display-sm text-text-primary">Admin Dashboard</h1>
        <p className="text-body text-text-secondary mt-1">Platform overview and management</p>
      </motion.div>

      {/* Stats Grid */}
      <motion.div variants={staggerItem} className="grid grid-cols-2 lg:grid-cols-3 gap-5">
        {statCards.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05, type: 'spring', stiffness: 200, damping: 20 }}
          >
            <Card variant="elevated" className={`${statCardStyles[idx]} flex items-center gap-4`}>
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${statCardIcons[idx]}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-caption text-text-tertiary">{stat.label}</p>
                <p className="text-title text-text-primary">
                  <AnimatedCounter target={stat.value} />
                </p>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Users by Tier */}
      {stats?.usersByTier && (
        <motion.div variants={staggerItem}>
          <Card variant="elevated">
            <h3 className="text-headline text-text-primary mb-4">Users by Subscription</h3>
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {stats.usersByTier.map((tier) => (
                <div key={tier.tier} className="p-3 sm:p-4 rounded-xl bg-surface-secondary text-center">
                  <p className="text-display-sm text-text-primary">
                    <AnimatedCounter target={tier.count} />
                  </p>
                  <Badge
                    variant={
                      tier.tier === 'FREE' ? 'default' : tier.tier === 'PRO' ? 'blue' : 'purple'
                    }
                    className="mt-1"
                  >
                    {tier.tier}
                  </Badge>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      )}

      {/* Feature Flags */}
      <motion.div variants={staggerItem}>
        <Card variant="elevated">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-orange/15 to-accent-red/10 flex items-center justify-center">
              <ToggleLeft className="w-5 h-5 text-accent-orange" />
            </div>
            <div>
              <h3 className="text-headline text-text-primary">Feature Flags</h3>
              <p className="text-caption text-text-secondary">Toggle features on/off</p>
            </div>
          </div>

          <div className="space-y-3">
            {flags.map((flag) => (
              <div
                key={flag.name}
                className="flex items-center justify-between gap-3 p-3 sm:p-4 rounded-xl bg-surface-secondary"
              >
                <div className="min-w-0 flex-1">
                  <p className="text-subhead font-medium text-text-primary truncate">{flag.name}</p>
                  <p className="text-caption text-text-secondary line-clamp-2">{flag.description}</p>
                </div>
                <button
                  onClick={() =>
                    toggleFlagMutation.mutate({ name: flag.name, isEnabled: !flag.isEnabled })
                  }
                  className={`w-12 h-7 rounded-full transition-all duration-300 relative flex-shrink-0 ${
                    flag.isEnabled ? 'bg-accent-green shadow-glow-green' : 'bg-surface-tertiary'
                  }`}
                >
                  <motion.div
                    layout
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    className={`absolute top-0.5 w-6 h-6 rounded-full bg-white shadow-sm ${
                      flag.isEnabled ? 'left-[22px]' : 'left-0.5'
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>
    </StaggerContainer>
  );
}
