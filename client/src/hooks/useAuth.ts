import { useEffect } from 'react';
import { useAuthStore } from '@/stores/authStore';

export function useAuth() {
  const { user, isAuthenticated, isLoading, fetchProfile } = useAuthStore();

  useEffect(() => {
    if (isAuthenticated && !user) {
      fetchProfile();
    }
  }, [isAuthenticated, user, fetchProfile]);

  return {
    user,
    isAuthenticated,
    isLoading,
    isAdmin: user?.role === 'ADMIN',
  };
}
