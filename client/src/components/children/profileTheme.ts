export interface ProfileTheme {
  bannerGradient: string;
  avatarBg: string;
  avatarTextGradient: string;
  badgeVariant: 'blue' | 'purple' | 'green' | 'default';
  statCards: [string, string, string];
  progressColor: string;
  decorations: 'girl' | 'boy' | 'neutral';
}

export function getProfileTheme(gender?: string | null): ProfileTheme {
  switch (gender) {
    case 'FEMALE':
      return {
        bannerGradient: 'bg-gradient-to-br from-pink-200/40 via-purple-200/30 to-rose-200/40',
        avatarBg: 'bg-gradient-to-br from-pink-50 to-purple-50',
        avatarTextGradient: 'linear-gradient(135deg, #EC4899, #A855F7)',
        badgeVariant: 'purple',
        statCards: ['stat-card-pink', 'stat-card-orange', 'stat-card-purple'],
        progressColor: 'bg-pink-400',
        decorations: 'girl',
      };
    case 'MALE':
      return {
        bannerGradient: 'bg-gradient-to-br from-blue-200/40 via-cyan-200/30 to-teal-200/40',
        avatarBg: 'bg-gradient-to-br from-blue-50 to-cyan-50',
        avatarTextGradient: 'linear-gradient(135deg, #0071E3, #5AC8FA)',
        badgeVariant: 'blue',
        statCards: ['stat-card-blue', 'stat-card-orange', 'stat-card-teal'],
        progressColor: 'bg-accent-blue',
        decorations: 'boy',
      };
    default:
      return {
        bannerGradient: 'bg-gradient-to-br from-green-200/40 via-teal-200/30 to-emerald-200/40',
        avatarBg: 'bg-gradient-to-br from-green-50 to-teal-50',
        avatarTextGradient: 'linear-gradient(135deg, #34C759, #5AC8FA)',
        badgeVariant: 'green',
        statCards: ['stat-card-green', 'stat-card-orange', 'stat-card-teal'],
        progressColor: 'bg-accent-green',
        decorations: 'neutral',
      };
  }
}
