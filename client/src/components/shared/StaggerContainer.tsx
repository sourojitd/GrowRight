import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

const container = {
  hidden: { opacity: 0 },
  show: (staggerDelay: number) => ({
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: 0.1,
    },
  }),
};

export const staggerItem = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 200, damping: 20 },
  },
};

export default function StaggerContainer({
  children,
  className,
  staggerDelay = 0.06,
}: StaggerContainerProps) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      custom={staggerDelay}
      className={className}
    >
      {children}
    </motion.div>
  );
}
