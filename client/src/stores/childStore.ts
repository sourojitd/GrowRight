import { create } from 'zustand';
import type { Child } from '@/types';
import { apiGet, apiPost, apiPatch, apiDelete } from '@/lib/api';

function getPersistedChild(): Child | null {
  try {
    const raw = localStorage.getItem('selectedChild');
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function persistChild(child: Child | null) {
  if (child) {
    localStorage.setItem('selectedChild', JSON.stringify(child));
  } else {
    localStorage.removeItem('selectedChild');
  }
}

interface ChildState {
  children: Child[];
  selectedChild: Child | null;
  isLoading: boolean;
  fetchedForUserId: string | null;
  _fetchGen: number;
  fetchChildren: (userId: string) => Promise<void>;
  selectChild: (child: Child | null) => void;
  addChild: (data: { name: string; dateOfBirth: string; gender?: string; notes?: string }) => Promise<Child>;
  updateChild: (childId: string, data: Partial<Child>) => Promise<void>;
  removeChild: (childId: string) => Promise<void>;
}

export const useChildStore = create<ChildState>((set, get) => ({
  children: [],
  selectedChild: getPersistedChild(),
  isLoading: false,
  fetchedForUserId: null,
  _fetchGen: 0,

  fetchChildren: async (userId: string) => {
    const gen = get()._fetchGen;
    set({ isLoading: true });
    try {
      const children = await apiGet<Child[]>('/children');

      // Discard if a user switch happened while this fetch was in flight
      if (get()._fetchGen !== gen) return;

      const current = get().selectedChild;
      let selected: Child | null = null;
      if (current) {
        selected = children.find((c) => c.id === current.id) || null;
      }
      if (!selected && children.length > 0) {
        selected = children[0] ?? null;
      }

      persistChild(selected);
      set({ children, selectedChild: selected, isLoading: false, fetchedForUserId: userId });
    } catch {
      if (get()._fetchGen !== gen) return;
      set({ isLoading: false, fetchedForUserId: userId });
    }
  },

  selectChild: (child) => {
    persistChild(child);
    set({ selectedChild: child });
  },

  addChild: async (data) => {
    const child = await apiPost<Child>('/children', data);
    persistChild(child);
    set((state) => ({
      children: [child, ...state.children],
      selectedChild: child,
    }));
    return child;
  },

  updateChild: async (childId, data) => {
    const updated = await apiPatch<Child>(`/children/${childId}`, data);
    set((state) => {
      const newChildren = state.children.map((c) => (c.id === childId ? { ...c, ...updated } : c));
      const newSelected = state.selectedChild?.id === childId ? { ...state.selectedChild, ...updated } : state.selectedChild;
      persistChild(newSelected);
      return { children: newChildren, selectedChild: newSelected };
    });
  },

  removeChild: async (childId) => {
    await apiDelete(`/children/${childId}`);
    set((state) => {
      const newChildren = state.children.filter((c) => c.id !== childId);
      const newSelected = state.selectedChild?.id === childId
        ? newChildren[0] || null
        : state.selectedChild;
      persistChild(newSelected);
      return { children: newChildren, selectedChild: newSelected };
    });
  },
}));
