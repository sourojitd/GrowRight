import { useState } from 'react';
import { motion } from 'framer-motion';
import { Route, Plus, Calendar, Sparkles, ChevronRight, Archive } from 'lucide-react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiGet, apiPost, apiPatch } from '@/lib/api';
import { useChildren } from '@/hooks/useChildren';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import EmptyState from '@/components/ui/EmptyState';
import { PageSpinner } from '@/components/ui/Spinner';
import { cn, getCategoryColor, formatDate } from '@/lib/utils';
import type { Roadmap, RoadmapContent, MilestoneCategory } from '@/types';
import toast from 'react-hot-toast';

export default function RoadmapPage() {
  const { selectedChild } = useChildren();
  const queryClient = useQueryClient();
  const [expandedRoadmap, setExpandedRoadmap] = useState<string | null>(null);

  const { data: roadmaps = [], isLoading } = useQuery({
    queryKey: ['roadmaps', selectedChild?.id],
    queryFn: () => apiGet<Roadmap[]>(`/roadmaps/child/${selectedChild!.id}`),
    enabled: !!selectedChild,
  });

  const generateMutation = useMutation({
    mutationFn: () =>
      apiPost<Roadmap>(`/roadmaps/child/${selectedChild!.id}/generate`, {}),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['roadmaps'] });
      toast.success('Roadmap generated!');
    },
    onError: (err: any) => {
      toast.error(err.response?.data?.error || 'Failed to generate roadmap');
    },
  });

  if (!selectedChild) {
    return (
      <EmptyState
        icon={Route}
        title="Select a child"
        description="Add a child profile to generate development roadmaps."
        actionLabel="Add Child"
        onAction={() => window.location.assign('/children/add')}
      />
    );
  }

  if (isLoading) return <PageSpinner />;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-display-sm text-text-primary">Development Roadmap</h1>
          <p className="text-body text-text-secondary mt-1">
            Structured development plans for <span className="text-gradient">{selectedChild.name}</span>
          </p>
        </div>
        <Button
          variant="gradient"
          className="w-full sm:w-auto"
          onClick={() => generateMutation.mutate()}
          isLoading={generateMutation.isPending}
        >
          <Plus className="w-4 h-4" />
          Generate Roadmap
        </Button>
      </div>

      {roadmaps.length === 0 ? (
        <EmptyState
          icon={Route}
          title="No roadmaps yet"
          description="Generate a personalized development roadmap based on your child's milestone progress."
          actionLabel="Generate First Roadmap"
          onAction={() => generateMutation.mutate()}
        />
      ) : (
        <div className="space-y-4">
          {roadmaps.map((roadmap, index) => {
            const content = roadmap.content as RoadmapContent;
            const isExpanded = expandedRoadmap === roadmap.id;

            return (
              <motion.div
                key={roadmap.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06, type: 'spring', stiffness: 200, damping: 20 }}
              >
                <Card variant="gradient-border" padding="none">
                  <button
                    onClick={() => setExpandedRoadmap(isExpanded ? null : roadmap.id)}
                    className="w-full flex items-start sm:items-center gap-3 sm:gap-4 p-4 sm:p-6 text-left"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-accent-purple/15 to-accent-blue/15 flex items-center justify-center flex-shrink-0">
                      <Route className="w-5 h-5 sm:w-6 sm:h-6 text-accent-purple" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-subhead sm:text-headline text-text-primary">{roadmap.title}</h3>
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-1">
                        <span className="text-caption text-text-secondary flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {formatDate(roadmap.createdAt)}
                        </span>
                        <Badge variant={roadmap.generatedBy === 'AI' ? 'purple' : 'default'}>
                          {roadmap.generatedBy === 'AI' ? (
                            <>
                              <Sparkles className="w-3 h-3 mr-1" /> AI Generated
                            </>
                          ) : (
                            'Template'
                          )}
                        </Badge>
                        <Badge
                          variant={
                            roadmap.status === 'ACTIVE'
                              ? 'green'
                              : roadmap.status === 'COMPLETED'
                              ? 'blue'
                              : 'default'
                          }
                        >
                          {roadmap.status}
                        </Badge>
                      </div>
                    </div>
                    <ChevronRight
                      className={cn(
                        'w-5 h-5 text-text-tertiary transition-transform duration-200',
                        isExpanded && 'rotate-90'
                      )}
                    />
                  </button>

                  {isExpanded && content && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      className="border-t border-border-light"
                    >
                      <div className="p-6 space-y-6">
                        <p className="text-body text-text-secondary">{content.summary}</p>

                        {content.sections?.map((section, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.08, type: 'spring', stiffness: 200, damping: 20 }}
                            className="p-4 rounded-xl bg-surface-secondary"
                          >
                            <div className="flex items-center justify-between mb-3">
                              <h4 className="text-headline text-text-primary">
                                {section.title}
                              </h4>
                              <Badge>{section.durationWeeks} weeks</Badge>
                            </div>
                            <p className="text-subhead text-text-secondary mb-4">
                              {section.description}
                            </p>

                            <div className="space-y-3">
                              {section.activities.map((activity, aidx) => (
                                <div
                                  key={aidx}
                                  className="flex items-start gap-3 p-3 bg-white rounded-xl"
                                >
                                  <div
                                    className={cn(
                                      'w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0',
                                      getCategoryColor(activity.category as MilestoneCategory)
                                    )}
                                  >
                                    <Sparkles className="w-4 h-4" />
                                  </div>
                                  <div>
                                    <p className="text-subhead font-medium text-text-primary">
                                      {activity.name}
                                    </p>
                                    <p className="text-caption text-text-secondary">
                                      {activity.description}
                                    </p>
                                    <div className="flex items-center gap-3 mt-1">
                                      <span className="text-caption text-text-tertiary">
                                        {activity.frequency}
                                      </span>
                                      {activity.materials && activity.materials.length > 0 && (
                                        <span className="text-caption text-text-tertiary">
                                          Needs: {activity.materials.join(', ')}
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        ))}

                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="secondary"
                            onClick={() =>
                              apiPatch(`/roadmaps/${roadmap.id}/status`, {
                                status: 'ARCHIVED',
                              }).then(() => {
                                queryClient.invalidateQueries({ queryKey: ['roadmaps'] });
                                toast.success('Roadmap archived');
                              })
                            }
                          >
                            <Archive className="w-4 h-4" /> Archive
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </Card>
              </motion.div>
            );
          })}
        </div>
      )}
    </motion.div>
  );
}
