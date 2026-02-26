import { useEffect } from 'react';
import { useChildStore } from '@/stores/childStore';

export function useChildren() {
  const store = useChildStore();

  useEffect(() => {
    if (store.children.length === 0 && !store.isLoading) {
      store.fetchChildren();
    }
  }, []);  // eslint-disable-line react-hooks/exhaustive-deps

  return store;
}
