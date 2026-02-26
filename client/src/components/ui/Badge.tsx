import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'blue' | 'green' | 'orange' | 'red' | 'purple' | 'gradient';
  className?: string;
}

const variantStyles = {
  default: 'bg-surface-tertiary text-text-secondary',
  blue: 'bg-accent-blue/10 text-accent-blue',
  green: 'bg-accent-green/10 text-accent-green',
  orange: 'bg-accent-orange/10 text-accent-orange',
  red: 'bg-accent-red/10 text-accent-red',
  purple: 'bg-accent-purple/10 text-accent-purple',
  gradient: 'bg-gradient-to-r from-accent-blue/10 to-accent-purple/10 text-accent-blue',
};

export default function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span className={cn('badge transition-all duration-200', variantStyles[variant], className)}>
      {children}
    </span>
  );
}
