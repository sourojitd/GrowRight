import { useEffect } from 'react';
import { useChildStore } from '@/stores/childStore';

export function useChildren() {
  const store = useChildStore();

  useEffect(() => {
    if (!store.hasFetched && !store.isLoading) {
      store.fetchChildren();
    }
  }, [store.hasFetched, store.isLoading, store.fetchChildren]);

  return store;
}
