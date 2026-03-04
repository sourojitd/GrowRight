import { useEffect } from 'react';
import { useChildStore } from '@/stores/childStore';
import { useAuthStore } from '@/stores/authStore';

export function useChildren() {
  const store = useChildStore();
  const { user } = useAuthStore();

  useEffect(() => {
    if (!user?.id) return;
    if (store.fetchedForUserId !== user.id && !store.isLoading) {
      store.fetchChildren(user.id);
    }
  }, [user?.id, store.fetchedForUserId, store.isLoading, store.fetchChildren]);

  // hasFetched is true only when we have data for the currently logged-in user
  const hasFetched = store.fetchedForUserId === user?.id;

  return { ...store, hasFetched };
}
