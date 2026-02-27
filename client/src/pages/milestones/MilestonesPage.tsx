import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Check, Clock, AlertCircle, ChevronDown } from 'lucide-react';
import { useChildren } from '@/hooks/useChildren';
import { useMilestones } from '@/hooks/useMilestones';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import EmptyState from '@/components/ui/EmptyState';
import AnimatedCounter from '@/components/shared/AnimatedCounter';
import { PageSpinner } from '@/components/ui/Spinner';
import { cn, getCategoryColor, getCategoryLabel, getStatusColor } from '@/lib/utils';
import type { MilestoneCategory, MilestoneStatus } from '@/types';
import SEO from '@/components/shared/SEO';
import toast from 'react-hot-toast';

const categories: MilestoneCategory[] = ['MOTOR', 'COGNITIVE', 'SPEECH', 'SOCIAL', 'EMOTIONAL'];

export default function MilestonesPage() {
  const { selectedChild } = useChildren();
  const { milestones, summary, isLoading, updateStatus, isUpdating } = useMilestones(selectedChild?.id);
  const [activeCategory, setActiveCategory] = useState<MilestoneCategory | 'ALL'>('ALL');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  if (!selectedChild) {
    return (
      <EmptyState
        icon={Target}
        title="Select a child"
        description="Add a child profile first to start tracking milestones."
        actionLabel="Add Child"
        onAction={() => window.location.assign('/children/add')}
      />
    );
  }

  if (isLoading) return <PageSpinner />;

  const filtered =
    activeCategory === 'ALL'
      ? milestones
      : milestones.filter((m) => m.category === activeCategory);

  const handleStatusChange = (milestoneId: string, status: MilestoneStatus) => {
    updateStatus(
      { milestoneId, status },
      {
        onSuccess: () => toast.success('Milestone updated'),
        onError: () => toast.error('Failed to update'),
      }
    );
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
      <SEO title="Milestones" description="Track your child's developmental milestones across cognitive, motor, language, social, and self-care categories." path="/milestones" />
      {/* Header with summary */}
      <div>
        <h1 className="text-display-sm text-text-primary">
          Milestones for <span className="text-gradient">{selectedChild.name}</span>
        </h1>
        <p className="text-body text-text-secondary mt-1">
          {selectedChild.ageFormatted} old — tracking {summary?.total || 0} milestones
        </p>
      </div>

      {/* Summary cards */}
      {summary && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5">
          <Card variant="elevated" className="stat-card-green flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-green/20 to-accent-teal/20 flex items-center justify-center">
              <Check className="w-5 h-5 text-accent-green" />
            </div>
            <div>
              <p className="text-title text-text-primary">
                <AnimatedCounter target={summary.achieved} />
              </p>
              <p className="text-caption text-text-tertiary">Achieved</p>
            </div>
          </Card>
          <Card variant="elevated" className="stat-card-blue flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-teal/20 flex items-center justify-center">
              <Clock className="w-5 h-5 text-accent-blue" />
            </div>
            <div>
              <p className="text-title text-text-primary">
                <AnimatedCounter target={summary.inProgress} />
              </p>
              <p className="text-caption text-text-tertiary">In Progress</p>
            </div>
          </Card>
          <Card variant="elevated" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-surface-tertiary flex items-center justify-center">
              <AlertCircle className="w-5 h-5 text-text-tertiary" />
            </div>
            <div>
              <p className="text-title text-text-primary">
                <AnimatedCounter target={summary.notStarted} />
              </p>
              <p className="text-caption text-text-tertiary">Not Started</p>
            </div>
          </Card>
        </div>
      )}

      {/* Category Filter */}
      <div className="flex gap-2 overflow-x-auto pb-1">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setActiveCategory('ALL')}
          className={cn(
            'px-4 py-2 rounded-full text-subhead font-medium transition-all duration-200 whitespace-nowrap',
            activeCategory === 'ALL'
              ? 'bg-accent-blue text-white shadow-glow-blue'
              : 'bg-surface-secondary text-text-secondary hover:bg-surface-tertiary'
          )}
        >
          All ({milestones.length})
        </motion.button>
        {categories.map((cat) => {
          const count = milestones.filter((m) => m.category === cat).length;
          return (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                'px-4 py-2 rounded-full text-subhead font-medium transition-all duration-200 whitespace-nowrap',
                activeCategory === cat
                  ? getCategoryColor(cat)
                  : 'bg-surface-secondary text-text-secondary hover:bg-surface-tertiary'
              )}
            >
              {getCategoryLabel(cat)} ({count})
            </motion.button>
          );
        })}
      </div>

      {/* Milestone List */}
      <div className="space-y-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((milestone) => (
            <motion.div
              key={milestone.id}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <Card
                variant="elevated"
                padding="none"
                className={cn(
                  'overflow-hidden transition-all',
                  milestone.isOverdue && 'border-l-4 border-l-accent-orange'
                )}
              >
                <button
                  onClick={() => setExpandedId(expandedId === milestone.id ? null : milestone.id)}
                  className="w-full flex items-start sm:items-center gap-3 sm:gap-4 p-4 sm:p-5 text-left"
                >
                  <div className={cn('w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0', getCategoryColor(milestone.category))}>
                    <Target className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-subhead font-medium text-text-primary">{milestone.title}</p>
                    <p className="text-caption text-text-secondary">
                      {milestone.ageRangeStartMonth}–{milestone.ageRangeEndMonth} months
                    </p>
                    <div className="flex flex-wrap items-center gap-1.5 mt-1.5 sm:hidden">
                      {milestone.isOverdue && <Badge variant="orange">Overdue</Badge>}
                      {milestone.isUpcoming && <Badge variant="blue">Upcoming</Badge>}
                      <Badge className={getStatusColor(milestone.status || 'NOT_STARTED')}>
                        {(milestone.status || 'NOT_STARTED').replace(/_/g, ' ')}
                      </Badge>
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center gap-3">
                    {milestone.isOverdue && <Badge variant="orange">Overdue</Badge>}
                    {milestone.isUpcoming && <Badge variant="blue">Upcoming</Badge>}
                    <Badge className={getStatusColor(milestone.status || 'NOT_STARTED')}>
                      {(milestone.status || 'NOT_STARTED').replace(/_/g, ' ')}
                    </Badge>
                  </div>
                  <ChevronDown
                    className={cn(
                      'w-5 h-5 text-text-tertiary transition-transform duration-200 flex-shrink-0 mt-2.5 sm:mt-0',
                      expandedId === milestone.id && 'rotate-180'
                    )}
                  />
                </button>

                <AnimatePresence>
                  {expandedId === milestone.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 border-t border-border-light pt-4">
                        <p className="text-subhead text-text-secondary mb-4">
                          {milestone.description}
                        </p>

                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-caption text-text-tertiary mr-2">Set status:</span>
                          {(['NOT_STARTED', 'IN_PROGRESS', 'ACHIEVED'] as MilestoneStatus[]).map(
                            (status) => (
                              <Button
                                key={status}
                                size="sm"
                                variant={milestone.status === status ? 'gradient' : 'secondary'}
                                onClick={() => handleStatusChange(milestone.id, status)}
                                disabled={isUpdating}
                              >
                                {status === 'ACHIEVED' && <Check className="w-3.5 h-3.5" />}
                                {status.replace(/_/g, ' ')}
                              </Button>
                            )
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
