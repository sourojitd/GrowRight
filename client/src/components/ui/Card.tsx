import { HTMLAttributes, forwardRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  interactive?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  variant?: 'default' | 'glass' | 'gradient-border' | 'elevated';
}

const paddingMap = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

const variantStyles = {
  default: 'bg-white rounded-2xl shadow-card',
  glass: 'glass-card rounded-2xl',
  'gradient-border': 'card-gradient-border shadow-card',
  elevated: 'bg-white rounded-2xl shadow-card-elevated',
};

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, interactive = false, padding = 'md', variant = 'default', children, ...props }, ref) => {
    if (interactive) {
      return (
        <motion.div
          ref={ref}
          whileHover={{ y: -2 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className={cn(
            variantStyles[variant],
            'cursor-pointer',
            paddingMap[padding],
            className
          )}
          {...(props as any)}
        >
          {children}
        </motion.div>
      );
    }

    return (
      <div
        ref={ref}
        className={cn(
          variantStyles[variant],
          paddingMap[padding],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
export default Card;
