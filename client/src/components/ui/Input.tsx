import { InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    return (
      <div className="space-y-1.5">
        {label && (
          <label htmlFor={id} className="block text-subhead font-medium text-text-primary">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          className={cn(
            'input-field',
            error && 'border-accent-red focus:ring-accent-red/30 focus:border-accent-red',
            className
          )}
          {...props}
        />
        {error && <p className="text-caption text-accent-red">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';
export default Input;
