import { ButtonHTMLAttributes, forwardRef } from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

const variants = {
  primary: 'bg-accent-blue text-white hover:bg-accent-blue-hover shadow-sm hover:shadow-glow-blue',
  secondary: 'bg-surface-secondary text-text-primary border border-border-light hover:bg-surface-tertiary hover:border-border',
  ghost: 'text-accent-blue hover:bg-accent-blue/5',
  danger: 'bg-accent-red text-white hover:bg-accent-red/90',
  gradient: 'btn-gradient',
};

const sizes = {
  sm: 'px-3 py-1.5 text-subhead rounded-lg',
  md: 'px-5 py-2.5 text-subhead rounded-xl',
  lg: 'px-6 py-3 text-body rounded-xl',
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, children, disabled, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: disabled || isLoading ? 1 : 0.97 }}
        whileHover={{ scale: disabled || isLoading ? 1 : 1.01 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        className={cn(
          'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          variants[variant],
          sizes[size],
          className
        )}
        disabled={disabled || isLoading}
        {...(props as any)}
      >
        <span className="relative z-10 inline-flex items-center gap-2">
          {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
          {children}
        </span>
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
export default Button;
