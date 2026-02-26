import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, CheckCircle2 } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { formatDistanceToNow } from 'date-fns';
import { apiGet } from '@/lib/api';
import { useChildStore } from '@/stores/childStore';
import { getCategoryLabel } from '@/lib/utils';

interface ActivityHistoryItem {
  id: string;
  childId: string;
  activityId: string;
  completedAt: string;
  rating: number | null;
  notes: string | null;
  activity: {
    id: string;
    category: string;
    title: string;
    description: string;
  };
}

interface NotificationsDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NotificationsDropdown({ isOpen, onClose }: NotificationsDropdownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const selectedChild = useChildStore((s) => s.selectedChild);

  const { data: history } = useQuery({
    queryKey: ['activity-history', selectedChild?.id],
    queryFn: () => apiGet<ActivityHistoryItem[]>(`/activities/child/${selectedChild!.id}/history`),
    enabled: isOpen && !!selectedChild,
  });

  const items = (history || []).slice(0, 10);

  useEffect(() => {
    if (!isOpen) return;
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        onClose();
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={dropdownRef}
          initial={{ opacity: 0, y: -8, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.96 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="absolute right-0 top-full mt-2 w-80 sm:w-96 glass-subtle rounded-2xl shadow-modal border border-white/20 overflow-hidden z-50"
        >
          <div className="px-5 py-4 border-b border-white/10">
            <h3 className="text-headline text-text-primary">Recent Activity</h3>
            {selectedChild && (
              <p className="text-caption text-text-tertiary mt-0.5">{selectedChild.name}'s updates</p>
            )}
          </div>

          <div className="max-h-80 overflow-y-auto">
            {!selectedChild ? (
              <div className="px-5 py-10 text-center">
                <Bell className="w-8 h-8 text-text-tertiary mx-auto mb-2" strokeWidth={1.5} />
                <p className="text-subhead text-text-secondary">No child selected</p>
                <p className="text-caption text-text-tertiary mt-1">Select a child to see activity</p>
              </div>
            ) : items.length === 0 ? (
              <div className="px-5 py-10 text-center">
                <Bell className="w-8 h-8 text-text-tertiary mx-auto mb-2" strokeWidth={1.5} />
                <p className="text-subhead text-text-secondary">No recent activity</p>
                <p className="text-caption text-text-tertiary mt-1">Completed activities will appear here</p>
              </div>
            ) : (
              <div className="py-2">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="px-5 py-3 hover:bg-surface-secondary/50 transition-colors"
                  >
                    <div className="flex gap-3">
                      <div className="mt-0.5 flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-accent-green" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-subhead text-text-primary truncate">
                          {item.activity.title}
                        </p>
                        <p className="text-caption text-text-tertiary">
                          {getCategoryLabel(item.activity.category as any)} &middot;{' '}
                          {formatDistanceToNow(new Date(item.completedAt), { addSuffix: true })}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
