import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiGet, apiPatch } from '@/lib/api';
import type { Milestone, MilestoneProgress, MilestoneStatus } from '@/types';

export function useMilestones(childId?: string) {
  const queryClient = useQueryClient();

  const milestonesQuery = useQuery({
    queryKey: ['milestones', 'child', childId],
    queryFn: () =>
      apiGet<{
        child: { id: string; name: string; ageMonths: number };
        milestones: Milestone[];
        summary: { total: number; achieved: number; inProgress: number; notStarted: number };
      }>(`/milestones/child/${childId}`),
    enabled: !!childId,
  });

  const progressQuery = useQuery({
    queryKey: ['milestones', 'progress', childId],
    queryFn: () => apiGet<MilestoneProgress[]>(`/milestones/child/${childId}/progress`),
    enabled: !!childId,
  });

  const updateStatusMutation = useMutation({
    mutationFn: ({
      milestoneId,
      status,
      notes,
    }: {
      milestoneId: string;
      status: MilestoneStatus;
      notes?: string;
    }) => apiPatch(`/milestones/child/${childId}/${milestoneId}`, { status, notes }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['milestones', 'child', childId] });
      queryClient.invalidateQueries({ queryKey: ['milestones', 'progress', childId] });
    },
  });

  return {
    milestones: milestonesQuery.data?.milestones || [],
    summary: milestonesQuery.data?.summary,
    childInfo: milestonesQuery.data?.child,
    progress: progressQuery.data || [],
    isLoading: milestonesQuery.isLoading,
    updateStatus: updateStatusMutation.mutate,
    isUpdating: updateStatusMutation.isPending,
  };
}
