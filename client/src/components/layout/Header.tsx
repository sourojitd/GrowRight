import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Bell, Menu } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useChildStore } from '@/stores/childStore';
import NotificationsDropdown from './NotificationsDropdown';

const titles: Record<string, string> = {
  '/dashboard': 'Dashboard',
  '/children': 'Children',
  '/children/add': 'Add Child',
  '/milestones': 'Milestones',
  '/activities': 'Activities',
  '/toys': 'Toy Recommendations',
  '/syllabus': 'Syllabus Comparator',
  '/roadmap': 'Development Roadmap',
  '/vaccinations': 'Vaccination Checklist',
  '/settings': 'Settings',
  '/admin': 'Admin Dashboard',
};

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  const location = useLocation();
  const { user } = useAuth();
  const selectedChild = useChildStore((s) => s.selectedChild);
  const [showNotifications, setShowNotifications] = useState(false);

  const title = titles[location.pathname] || 'GrowRight';

  return (
    <header className="sticky top-0 z-20 glass-subtle border-b border-white/20">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 lg:py-4">
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 -ml-2 rounded-xl hover:bg-surface-secondary/80 transition-colors"
          >
            <Menu className="w-5 h-5 text-text-secondary" />
          </button>
          <motion.h2
            key={title}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="text-headline lg:text-title text-text-primary"
          >
            {title}
          </motion.h2>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowNotifications((v) => !v)}
              className="relative p-2 rounded-xl hover:bg-surface-secondary/80 transition-colors"
            >
              <Bell className="w-5 h-5 text-text-secondary" strokeWidth={1.5} />
              {selectedChild && (
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-accent-red rounded-full animate-glow" />
              )}
            </motion.button>
            <NotificationsDropdown
              isOpen={showNotifications}
              onClose={() => setShowNotifications(false)}
            />
          </div>

          <div className="flex items-center gap-3 pl-2 sm:pl-4 border-l border-border-light">
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center text-white text-caption sm:text-subhead font-bold cursor-pointer"
            >
              {user?.name?.charAt(0)?.toUpperCase() || '?'}
            </motion.div>
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
