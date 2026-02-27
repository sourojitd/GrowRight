// GrowRight Sidebar — Sourojit D
import { useState, useRef, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  Baby,
  Target,
  Sparkles,
  Gift,
  BookOpen,
  Route,
  Syringe,
  Settings,
  Shield,
  LogOut,
  ChevronDown,
  Check,
  X,
} from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useAuthStore } from '@/stores/authStore';
import { useChildren } from '@/hooks/useChildren';
import { cn } from '@/lib/utils';
import type { Child } from '@/types';

// Early development features are for children 0-5 years (0-72 months)
const EARLY_DEV_MAX_MONTHS = 72;

const allNavItems = [
  { to: '/dashboard', icon: LayoutDashboard, label: 'Dashboard', earlyDevOnly: false },
  { to: '/children', icon: Baby, label: 'Children', earlyDevOnly: false },
  { to: '/milestones', icon: Target, label: 'Milestones', earlyDevOnly: true },
  { to: '/activities', icon: Sparkles, label: 'Activities', earlyDevOnly: true },
  { to: '/toys', icon: Gift, label: 'Toys', earlyDevOnly: true },
  { to: '/syllabus', icon: BookOpen, label: 'Syllabus', earlyDevOnly: false },
  { to: '/roadmap', icon: Route, label: 'Roadmap', earlyDevOnly: true },
  { to: '/vaccinations', icon: Syringe, label: 'Vaccinations', earlyDevOnly: true },
];

// ─── Child Selector Dropdown ─────────────────────────
interface ChildSelectorProps {
  children: Child[];
  selectedChild: Child | null;
  onSelect: (child: Child) => void;
}

function ChildSelector({ children: childList, selectedChild, onSelect }: ChildSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setIsOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [isOpen]);

  return (
    <div className="px-3 py-2 border-b border-border-light flex-shrink-0" ref={ref}>
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        className={cn(
          'w-full flex items-center gap-2.5 px-2.5 py-2 rounded-xl transition-all duration-200',
          'bg-surface-secondary border cursor-pointer',
          'hover:border-border-DEFAULT focus:outline-none focus:ring-2 focus:ring-accent-blue/30',
          isOpen ? 'border-accent-blue ring-2 ring-accent-blue/30' : 'border-transparent'
        )}
      >
        <div className="w-6 h-6 rounded-md bg-gradient-to-br from-accent-blue to-accent-teal flex items-center justify-center text-white text-caption font-bold flex-shrink-0">
          {selectedChild?.name?.charAt(0)?.toUpperCase() || '?'}
        </div>
        <div className="flex-1 min-w-0 text-left">
          <p className="text-subhead font-medium text-text-primary truncate leading-tight">
            {selectedChild?.name || 'Select child'}
          </p>
          {selectedChild?.ageFormatted && (
            <p className="text-caption text-text-tertiary truncate leading-tight">{selectedChild.ageFormatted}</p>
          )}
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-4 h-4 text-text-tertiary" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -4, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 28 }}
            className="mt-1.5 rounded-xl overflow-hidden shadow-float border border-white/30 bg-white/80 backdrop-blur-xl"
            style={{
              WebkitBackdropFilter: 'blur(24px) saturate(180%)',
              backdropFilter: 'blur(24px) saturate(180%)',
            }}
          >
            <div className="py-1 max-h-52 overflow-y-auto">
              {childList.map((child) => {
                const isSelected = child.id === selectedChild?.id;
                return (
                  <button
                    key={child.id}
                    type="button"
                    onClick={() => {
                      onSelect(child);
                      setIsOpen(false);
                    }}
                    className={cn(
                      'w-full flex items-center gap-2.5 px-2.5 py-2 transition-colors duration-100',
                      isSelected ? 'bg-accent-blue/8' : 'hover:bg-surface-secondary/60'
                    )}
                  >
                    <div className={cn(
                      'w-6 h-6 rounded-md flex items-center justify-center text-white text-caption font-bold flex-shrink-0',
                      isSelected
                        ? 'bg-gradient-to-br from-accent-blue to-accent-purple'
                        : 'bg-gradient-to-br from-accent-blue/60 to-accent-teal/60'
                    )}>
                      {child.name.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0 text-left">
                      <p className={cn(
                        'text-subhead truncate',
                        isSelected ? 'text-accent-blue font-medium' : 'text-text-primary'
                      )}>
                        {child.name}
                      </p>
                      <p className="text-caption text-text-tertiary truncate">{child.ageFormatted}</p>
                    </div>
                    {isSelected && (
                      <Check className="w-4 h-4 text-accent-blue flex-shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Sidebar ─────────────────────────────────────────
interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const { user, isAdmin } = useAuth();
  const logout = useAuthStore((s) => s.logout);
  const navigate = useNavigate();
  const { children, selectedChild, selectChild } = useChildren();

  const isEarlyDev = !selectedChild || (selectedChild.ageMonths ?? 0) < EARLY_DEV_MAX_MONTHS;
  const navItems = allNavItems.filter((item) => !item.earlyDevOnly || isEarlyDev);

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  const sidebarContent = (
    <>
      {/* Brand */}
      <div className="px-5 py-3.5 border-b border-border-light flex items-center justify-between flex-shrink-0">
        <motion.div whileHover="hover" className="cursor-pointer">
          <h1 className="text-title font-bold tracking-tight flex">
            {'Grow'.split('').map((ch, i) => (
              <motion.span
                key={`g${i}`}
                className="text-gradient inline-block"
                variants={{ hover: { y: [0, -4, 0], transition: { delay: i * 0.04, duration: 0.3 } } }}
              >
                {ch}
              </motion.span>
            ))}
            {'Right'.split('').map((ch, i) => (
              <motion.span
                key={`r${i}`}
                className="text-gradient-blue inline-block"
                variants={{ hover: { y: [0, -4, 0], transition: { delay: (i + 4) * 0.04, duration: 0.3 } } }}
              >
                {ch}
              </motion.span>
            ))}
          </h1>
          <p className="text-caption text-text-tertiary mt-0.5">Child Development Tracker</p>
        </motion.div>
        <button
          onClick={onClose}
          className="lg:hidden p-1.5 rounded-lg hover:bg-surface-secondary transition-colors"
        >
          <X className="w-5 h-5 text-text-secondary" />
        </button>
      </div>

      {/* Child Selector */}
      {children.length > 0 && (
        <ChildSelector
          children={children}
          selectedChild={selectedChild}
          onSelect={selectChild}
        />
      )}

      {/* Navigation */}
      <nav className="flex-1 min-h-0 px-3 py-2 space-y-0.5 overflow-y-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            onClick={onClose}
            className={({ isActive }) =>
              cn(
                'relative flex items-center gap-3 px-3 py-[9px] rounded-xl text-subhead font-medium transition-all duration-200 ease-out',
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
            <div className="my-2 border-t border-border-light" />
            <NavLink
              to="/admin"
              onClick={onClose}
              className={({ isActive }) =>
                cn(
                  'flex items-center gap-3 px-3 py-[9px] rounded-xl text-subhead font-medium transition-all duration-150',
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
      <div className="border-t border-border-light px-3 py-2 space-y-0.5 flex-shrink-0">
        <NavLink
          to="/settings"
          onClick={onClose}
          className={({ isActive }) =>
            cn(
              'flex items-center gap-3 px-3 py-[9px] rounded-xl text-subhead font-medium transition-all duration-150',
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
          className="w-full flex items-center gap-3 px-3 py-[9px] rounded-xl text-subhead font-medium text-text-secondary hover:bg-accent-red/5 hover:text-accent-red transition-all duration-150"
        >
          <LogOut className="w-5 h-5" strokeWidth={1.5} />
          <span>Log out</span>
        </button>

        {/* User info */}
        <div className="flex items-center gap-2.5 px-3 py-1.5">
          <motion.div
            whileHover={{ rotate: 360, scale: 1.15 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className="w-7 h-7 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center text-white text-caption font-bold cursor-pointer"
          >
            {user?.name?.charAt(0)?.toUpperCase() || '?'}
          </motion.div>
          <div className="flex-1 min-w-0">
            <p className="text-caption font-medium text-text-primary truncate leading-tight">{user?.name}</p>
            <p className="text-caption text-text-tertiary truncate leading-tight">{user?.subscriptionTier}</p>
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
