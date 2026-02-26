// GrowRight Sidebar — Sourojit D
import { NavLink, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  Baby,
  Target,
  Sparkles,
  BookOpen,
  Route,
  Settings,
  Shield,
  LogOut,
  ChevronDown,
  X,
} from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useAuthStore } from '@/stores/authStore';
import { useChildren } from '@/hooks/useChildren';
import { cn } from '@/lib/utils';

const navItems = [
  { to: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/children', icon: Baby, label: 'Children' },
  { to: '/milestones', icon: Target, label: 'Milestones' },
  { to: '/activities', icon: Sparkles, label: 'Activities' },
  { to: '/syllabus', icon: BookOpen, label: 'Syllabus' },
  { to: '/roadmap', icon: Route, label: 'Roadmap' },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const { user, isAdmin } = useAuth();
  const logout = useAuthStore((s) => s.logout);
  const navigate = useNavigate();
  const { children, selectedChild, selectChild } = useChildren();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  const sidebarContent = (
    <>
      {/* Brand */}
      <div className="px-6 py-5 border-b border-border-light flex items-center justify-between">
        <div>
          <h1 className="text-title font-bold tracking-tight">
            <span className="text-gradient">Grow</span><span className="text-gradient-blue">Right</span>
          </h1>
          <p className="text-caption text-text-tertiary mt-0.5">Child Development Tracker</p>
        </div>
        <button
          onClick={onClose}
          className="lg:hidden p-1.5 rounded-lg hover:bg-surface-secondary transition-colors"
        >
          <X className="w-5 h-5 text-text-secondary" />
        </button>
      </div>

      {/* Child Selector */}
      {children.length > 0 && (
        <div className="px-4 py-3 border-b border-border-light">
          <div className="relative">
            <select
              value={selectedChild?.id || ''}
              onChange={(e) => {
                const child = children.find((c) => c.id === e.target.value);
                if (child) selectChild(child);
              }}
              className="w-full appearance-none bg-surface-secondary rounded-xl px-3 py-2.5 pr-8 text-subhead font-medium text-text-primary cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent-blue/30"
            >
              {children.map((child) => (
                <option key={child.id} value={child.id}>
                  {child.name} — {child.ageFormatted}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-tertiary pointer-events-none" />
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            onClick={onClose}
            className={({ isActive }) =>
              cn(
                'relative flex items-center gap-3 px-3 py-2.5 rounded-xl text-subhead font-medium transition-all duration-200 ease-out',
                isActive
                  ? 'bg-accent-blue/10 text-accent-blue'
                  : 'text-text-secondary hover:bg-surface-secondary hover:text-text-primary'
              )
            }
          >
            {({ isActive }) => (
              <motion.div
                className="flex items-center gap-3 w-full"
                whileHover={{ x: 2 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <item.icon className="w-5 h-5 flex-shrink-0" strokeWidth={isActive ? 2 : 1.5} />
                <span>{item.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute left-0 w-[3px] h-6 bg-gradient-to-b from-accent-blue to-accent-purple rounded-r-full"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </motion.div>
            )}
          </NavLink>
        ))}

        {isAdmin && (
          <>
            <div className="my-3 border-t border-border-light" />
            <NavLink
              to="/admin"
              onClick={onClose}
              className={({ isActive }) =>
                cn(
                  'flex items-center gap-3 px-3 py-2.5 rounded-xl text-subhead font-medium transition-all duration-150',
                  isActive
                    ? 'bg-accent-purple/10 text-accent-purple'
                    : 'text-text-secondary hover:bg-surface-secondary hover:text-text-primary'
                )
              }
            >
              <Shield className="w-5 h-5" strokeWidth={1.5} />
              <span>Admin</span>
            </NavLink>
          </>
        )}
      </nav>

      {/* Bottom section */}
      <div className="border-t border-border-light px-3 py-3 space-y-1">
        <NavLink
          to="/settings"
          onClick={onClose}
          className={({ isActive }) =>
            cn(
              'flex items-center gap-3 px-3 py-2.5 rounded-xl text-subhead font-medium transition-all duration-150',
              isActive
                ? 'bg-surface-tertiary text-text-primary'
                : 'text-text-secondary hover:bg-surface-secondary'
            )
          }
        >
          <Settings className="w-5 h-5" strokeWidth={1.5} />
          <span>Settings</span>
        </NavLink>

        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-subhead font-medium text-text-secondary hover:bg-accent-red/5 hover:text-accent-red transition-all duration-150"
        >
          <LogOut className="w-5 h-5" strokeWidth={1.5} />
          <span>Log out</span>
        </button>

        {/* User info */}
        <div className="flex items-center gap-3 px-3 py-2 mt-1">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center text-white text-caption font-bold">
            {user?.name?.charAt(0)?.toUpperCase() || '?'}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-caption font-medium text-text-primary truncate">{user?.name}</p>
            <p className="text-caption text-text-tertiary truncate">{user?.subscriptionTier}</p>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* Desktop sidebar — always visible */}
      <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-[260px] bg-surface-primary border-r border-border-light flex-col z-30">
        {sidebarContent}
      </aside>

      {/* Mobile sidebar — slide-in drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={onClose}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
            />
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed left-0 top-0 bottom-0 w-[280px] bg-surface-primary border-r border-border-light flex flex-col z-50 lg:hidden shadow-xl"
            >
              {sidebarContent}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
