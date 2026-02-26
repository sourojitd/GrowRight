import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Clock, Package, Check, Star } from 'lucide-react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiGet, apiPost } from '@/lib/api';
import { useChildren } from '@/hooks/useChildren';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import EmptyState from '@/components/ui/EmptyState';
import { PageSpinner } from '@/components/ui/Spinner';
import StaggerContainer, { staggerItem } from '@/components/shared/StaggerContainer';
import { cn, getCategoryColor, getCategoryLabel } from '@/lib/utils';
import type { Activity, MilestoneCategory } from '@/types';
import toast from 'react-hot-toast';

const categories: MilestoneCategory[] = ['MOTOR', 'COGNITIVE', 'SPEECH', 'SOCIAL', 'EMOTIONAL'];

export default function ActivitiesPage() {
  const { selectedChild } = useChildren();
  const queryClient = useQueryClient();
  const [activeCategory, setActiveCategory] = useState<MilestoneCategory | 'ALL'>('ALL');

  const { data: activities = [], isLoading } = useQuery({
    queryKey: ['activities', 'child', selectedChild?.id],
    queryFn: () =>
      selectedChild
        ? apiGet<(Activity & { isCompleted: boolean })[]>(`/activities/child/${selectedChild.id}`)
        : apiGet<Activity[]>('/activities'),
    enabled: true,
  });

  const logMutation = useMutation({
    mutationFn: ({ activityId }: { activityId: string }) =>
      apiPost(`/activities/child/${selectedChild!.id}/${activityId}`, {}),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['activities'] });
      toast.success('Activity logged!');
    },
    onError: () => toast.error('Failed to log activity'),
  });

  if (!selectedChild) {
    return (
      <EmptyState
        icon={Sparkles}
        title="Select a child"
        description="Add a child profile to see recommended activities."
        actionLabel="Add Child"
        onAction={() => window.location.assign('/children/add')}
      />
    );
  }

  if (isLoading) return <PageSpinner />;

  const filtered =
    activeCategory === 'ALL'
      ? activities
      : activities.filter((a) => a.category === activeCategory);

  return (
    <StaggerContainer className="space-y-8">
      <motion.div variants={staggerItem}>
        <h1 className="text-display-sm text-text-primary">Activities</h1>
        <p className="text-body text-text-secondary mt-1">
          Age-appropriate activities for <span className="text-gradient">{selectedChild.name}</span> ({selectedChild.ageFormatted})
        </p>
      </motion.div>

      {/* Category Filter */}
      <motion.div variants={staggerItem} className="flex gap-2 overflow-x-auto pb-1">
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
          All
        </motion.button>
        {categories.map((cat) => (
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
            {getCategoryLabel(cat)}
          </motion.button>
        ))}
      </motion.div>

      {/* Activity Grid */}
      <motion.div variants={staggerItem} className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filtered.map((activity, index) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.04, type: 'spring', stiffness: 200, damping: 20 }}
          >
            <Card
              variant="gradient-border"
              className={cn(
                'relative',
                'isCompleted' in activity && activity.isCompleted && 'bg-accent-green/5'
              )}
            >
              {'isCompleted' in activity && activity.isCompleted && (
                <div className="absolute top-4 right-4">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-accent-green to-accent-teal flex items-center justify-center shadow-glow-green">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                </div>
              )}

              <div className="flex items-start gap-3 mb-3">
                <Badge className={getCategoryColor(activity.category)}>
                  {getCategoryLabel(activity.category)}
                </Badge>
                {activity.durationMinutes && (
                  <span className="flex items-center gap-1 text-caption text-text-tertiary">
                    <Clock className="w-3 h-3" />
                    {activity.durationMinutes} min
                  </span>
                )}
              </div>

              <h3 className="text-headline text-text-primary mb-1">{activity.title}</h3>
              <p className="text-subhead text-text-secondary mb-3">{activity.description}</p>

              {activity.instructions && (
                <p className="text-caption text-text-tertiary mb-3 leading-relaxed">
                  {activity.instructions}
                </p>
              )}

              {activity.materials.length > 0 && (
                <div className="flex items-center gap-2 mb-4">
                  <Package className="w-3.5 h-3.5 text-text-tertiary" />
                  <span className="text-caption text-text-secondary">
                    {activity.materials.join(', ')}
                  </span>
                </div>
              )}

              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant={'isCompleted' in activity && activity.isCompleted ? 'secondary' : 'gradient'}
                  onClick={() => logMutation.mutate({ activityId: activity.id })}
                  disabled={logMutation.isPending}
                >
                  {'isCompleted' in activity && activity.isCompleted ? (
                    <>
                      <Star className="w-3.5 h-3.5" /> Do Again
                    </>
                  ) : (
                    <>
                      <Check className="w-3.5 h-3.5" /> Mark Done
                    </>
                  )}
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {filtered.length === 0 && (
        <EmptyState
          icon={Sparkles}
          title="No activities found"
          description="Try selecting a different category."
        />
      )}
    </StaggerContainer>
  );
}
