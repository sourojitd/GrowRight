import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ProgressProps {
  value: number; // 0-100
  color?: string;
  size?: 'sm' | 'md';
  showLabel?: boolean;
  gradient?: boolean;
  className?: string;
}

export default function Progress({
  value,
  color = 'bg-accent-blue',
  size = 'md',
  showLabel = false,
  gradient = false,
  className,
}: ProgressProps) {
  const clampedValue = Math.min(100, Math.max(0, value));

  return (
    <div className={cn('flex items-center gap-3', className)}>
      <div
        className={cn(
          'flex-1 bg-surface-tertiary rounded-full overflow-hidden',
          size === 'sm' ? 'h-1.5' : 'h-2.5'
        )}
      >
        <motion.div
          className={cn(
            'h-full rounded-full relative overflow-hidden',
            gradient
              ? 'bg-gradient-to-r from-accent-blue via-accent-purple to-accent-teal'
              : color
          )}
          initial={{ width: 0 }}
          animate={{ width: `${clampedValue}%` }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
      </div>
      {showLabel && (
        <span className="text-caption font-medium text-text-secondary min-w-[36px] text-right">
          {Math.round(clampedValue)}%
        </span>
      )}
    </div>
  );
}
