import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from './Button';

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
}

export default function EmptyState({ icon: Icon, title, description, actionLabel, onAction }: EmptyStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      className="flex flex-col items-center justify-center py-16 text-center"
    >
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-surface-secondary to-surface-tertiary flex items-center justify-center mb-4">
        <Icon className="w-8 h-8 text-text-tertiary" strokeWidth={1.5} />
      </div>
      <h3 className="text-headline text-text-primary mb-1">{title}</h3>
      <p className="text-subhead text-text-secondary max-w-md">{description}</p>
      {actionLabel && onAction && (
        <Button onClick={onAction} variant="gradient" className="mt-6">
          {actionLabel}
        </Button>
      )}
    </motion.div>
  );
}
