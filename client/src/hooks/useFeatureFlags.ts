import { useQuery } from '@tanstack/react-query';
import { apiGet } from '@/lib/api';

interface FeatureFlags {
  free_version: boolean;
}

export function useFeatureFlags() {
  const { data, isLoading } = useQuery({
    queryKey: ['feature-flags'],
    queryFn: () => apiGet<FeatureFlags>('/users/feature-flags'),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  return {
    isFreeVersion: data?.free_version ?? true,
    isLoading,
  };
}
