import { create } from 'zustand';
import { api } from '@/lib/api';
import type { User, LoginCredentials, RegisterCredentials, AuthResponse } from '@/types';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (credentials: RegisterCredentials) => Promise<void>;
  logout: () => Promise<void>;
  fetchProfile: () => Promise<void>;
  setUser: (user: User) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: !!localStorage.getItem('accessToken'),
  isLoading: false,

  login: async (credentials) => {
    set({ isLoading: true });
    try {
      const { data } = await api.post<{ success: boolean; data: AuthResponse }>(
        '/auth/login',
        credentials
      );
      const { user, accessToken, refreshToken } = data.data;
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      set({ user, isAuthenticated: true, isLoading: false });
    } catch (error) {
      set({ isLoading: false });
      throw error;
    }
  },

  register: async (credentials) => {
    set({ isLoading: true });
    try {
      const { data } = await api.post<{ success: boolean; data: AuthResponse }>(
        '/auth/register',
        credentials
      );
      const { user, accessToken, refreshToken } = data.data;
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      set({ user, isAuthenticated: true, isLoading: false });
    } catch (error) {
      set({ isLoading: false });
      throw error;
    }
  },

  logout: async () => {
    try {
      await api.post('/auth/logout');
    } catch {
      // Ignore logout API errors
    } finally {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      set({ user: null, isAuthenticated: false });
    }
  },

  fetchProfile: async () => {
    try {
      const { data } = await api.get<{ success: boolean; data: User }>('/auth/me');
      set({ user: data.data, isAuthenticated: true });
    } catch {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      set({ user: null, isAuthenticated: false });
    }
  },

  setUser: (user) => set({ user }),
}));
