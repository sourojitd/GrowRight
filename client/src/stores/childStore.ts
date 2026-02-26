import { create } from 'zustand';
import type { Child } from '@/types';
import { apiGet, apiPost, apiPatch, apiDelete } from '@/lib/api';

interface ChildState {
  children: Child[];
  selectedChild: Child | null;
  isLoading: boolean;
  fetchChildren: () => Promise<void>;
  selectChild: (child: Child | null) => void;
  addChild: (data: { name: string; dateOfBirth: string; gender?: string; notes?: string }) => Promise<Child>;
  updateChild: (childId: string, data: Partial<Child>) => Promise<void>;
  removeChild: (childId: string) => Promise<void>;
}

export const useChildStore = create<ChildState>((set, get) => ({
  children: [],
  selectedChild: null,
  isLoading: false,

  fetchChildren: async () => {
    set({ isLoading: true });
    try {
      const children = await apiGet<Child[]>('/children');
      set({ children, isLoading: false });

      // Auto-select first child if none selected
      if (!get().selectedChild && children.length > 0) {
        set({ selectedChild: children[0] });
      }
    } catch {
      set({ isLoading: false });
    }
  },

  selectChild: (child) => set({ selectedChild: child }),

  addChild: async (data) => {
    const child = await apiPost<Child>('/children', data);
    set((state) => ({
      children: [child, ...state.children],
      selectedChild: child,
    }));
    return child;
  },

  updateChild: async (childId, data) => {
    const updated = await apiPatch<Child>(`/children/${childId}`, data);
    set((state) => ({
      children: state.children.map((c) => (c.id === childId ? { ...c, ...updated } : c)),
      selectedChild: state.selectedChild?.id === childId ? { ...state.selectedChild, ...updated } : state.selectedChild,
    }));
  },

  removeChild: async (childId) => {
    await apiDelete(`/children/${childId}`);
    set((state) => ({
      children: state.children.filter((c) => c.id !== childId),
      selectedChild: state.selectedChild?.id === childId ? null : state.selectedChild,
    }));
  },
}));
