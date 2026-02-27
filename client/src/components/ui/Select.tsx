import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  id?: string;
  label?: string;
  error?: string;
  options: SelectOption[];
  placeholder?: string;
  value?: string;
  onChange?: (e: { target: { value: string } }) => void;
  disabled?: boolean;
  className?: string;
}

export default function Select({
  id,
  label,
  error,
  options,
  placeholder = 'Select...',
  value,
  onChange,
  disabled,
  className,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((o) => o.value === value);

  const handleSelect = useCallback(
    (optionValue: string) => {
      onChange?.({ target: { value: optionValue } });
      setIsOpen(false);
      setHighlightIndex(-1);
    },
    [onChange]
  );

  // Close on click outside
  useEffect(() => {
    if (!isOpen) return;
    function handleClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        setHighlightIndex(-1);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [isOpen]);

  // Scroll highlighted option into view
  useEffect(() => {
    if (highlightIndex >= 0 && listRef.current) {
      const items = listRef.current.querySelectorAll('[data-option]');
      items[highlightIndex]?.scrollIntoView({ block: 'nearest' });
    }
  }, [highlightIndex]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;

    switch (e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault();
        if (isOpen && highlightIndex >= 0 && options[highlightIndex]) {
          handleSelect(options[highlightIndex].value);
        } else {
          setIsOpen(true);
          setHighlightIndex(options.findIndex((o) => o.value === value));
        }
        break;
      case 'ArrowDown':
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          setHighlightIndex(options.findIndex((o) => o.value === value));
        } else {
          setHighlightIndex((prev) => (prev < options.length - 1 ? prev + 1 : 0));
        }
        break;
      case 'ArrowUp':
        e.preventDefault();
        if (isOpen) {
          setHighlightIndex((prev) => (prev > 0 ? prev - 1 : options.length - 1));
        }
        break;
      case 'Escape':
        setIsOpen(false);
        setHighlightIndex(-1);
        break;
    }
  };

  return (
    <div className={cn('space-y-1.5', className)} ref={containerRef}>
      {label && (
        <label htmlFor={id} className="block text-subhead font-medium text-text-primary">
          {label}
        </label>
      )}

      <div className="relative">
        {/* Trigger */}
        <button
          type="button"
          id={id}
          role="combobox"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          disabled={disabled}
          onClick={() => !disabled && setIsOpen((v) => !v)}
          onKeyDown={handleKeyDown}
          className={cn(
            'w-full flex items-center justify-between px-4 py-3 rounded-xl text-left',
            'bg-surface-secondary border transition-all duration-200',
            'focus:outline-none focus:ring-2 focus:ring-accent-blue/30 focus:border-accent-blue',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            isOpen
              ? 'border-accent-blue ring-2 ring-accent-blue/30'
              : error
                ? 'border-accent-red'
                : 'border-border-light hover:border-border-DEFAULT',
          )}
        >
          <span
            className={cn(
              'text-subhead truncate',
              selectedOption ? 'text-text-primary' : 'text-text-tertiary'
            )}
          >
            {selectedOption?.label || placeholder}
          </span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="flex-shrink-0 ml-2"
          >
            <ChevronDown className="w-4 h-4 text-text-tertiary" />
          </motion.div>
        </button>

        {/* Dropdown Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -6, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 28 }}
              className="absolute z-50 mt-1.5 w-full"
            >
              <div
                ref={listRef}
                role="listbox"
                className={cn(
                  'rounded-xl overflow-hidden',
                  'shadow-float border border-white/30',
                  // Glassmorphism
                  'bg-white/80 backdrop-blur-xl',
                  'max-h-60 overflow-y-auto',
                )}
                style={{
                  WebkitBackdropFilter: 'blur(24px) saturate(180%)',
                  backdropFilter: 'blur(24px) saturate(180%)',
                }}
              >
                <div className="py-1">
                  {options.map((option, index) => {
                    const isSelected = option.value === value;
                    const isHighlighted = index === highlightIndex;

                    return (
                      <motion.button
                        key={option.value}
                        type="button"
                        role="option"
                        aria-selected={isSelected}
                        data-option
                        onClick={() => handleSelect(option.value)}
                        onMouseEnter={() => setHighlightIndex(index)}
                        className={cn(
                          'w-full flex items-center justify-between px-4 py-2.5 text-left',
                          'transition-colors duration-100 cursor-pointer',
                          isHighlighted
                            ? 'bg-accent-blue/8'
                            : 'hover:bg-surface-secondary/60',
                          isSelected && 'font-medium',
                        )}
                        whileTap={{ scale: 0.99 }}
                      >
                        <span
                          className={cn(
                            'text-subhead truncate',
                            isSelected ? 'text-accent-blue' : 'text-text-primary'
                          )}
                        >
                          {option.label}
                        </span>
                        {isSelected && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                          >
                            <Check className="w-4 h-4 text-accent-blue flex-shrink-0" />
                          </motion.div>
                        )}
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {error && <p className="text-caption text-accent-red">{error}</p>}
    </div>
  );
}
