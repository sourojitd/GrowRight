import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Bell } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

const titles: Record<string, string> = {
  '/dashboard': 'Dashboard',
  '/children': 'Children',
  '/children/add': 'Add Child',
  '/milestones': 'Milestones',
  '/activities': 'Activities',
  '/syllabus': 'Syllabus Comparator',
  '/roadmap': 'Development Roadmap',
  '/settings': 'Settings',
  '/admin': 'Admin Dashboard',
};

export default function Header() {
  const location = useLocation();
  const { user } = useAuth();

  const title = titles[location.pathname] || 'GrowRight';

  return (
    <header className="sticky top-0 z-20 glass-subtle border-b border-white/20">
      <div className="flex items-center justify-between px-8 py-4">
        <motion.h2
          key={title}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="text-title text-text-primary"
        >
          {title}
        </motion.h2>

        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative p-2 rounded-xl hover:bg-surface-secondary/80 transition-colors"
          >
            <Bell className="w-5 h-5 text-text-secondary" strokeWidth={1.5} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-accent-red rounded-full animate-glow" />
          </motion.button>

          <div className="flex items-center gap-3 pl-4 border-l border-border-light">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center text-white text-subhead font-bold">
              {user?.name?.charAt(0)?.toUpperCase() || '?'}
            </div>
            <div className="hidden sm:block">
              <p className="text-subhead font-medium text-text-primary">{user?.name}</p>
              <p className="text-caption text-text-tertiary">{user?.email}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
