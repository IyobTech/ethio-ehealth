import { create } from 'zustand';
import { Language } from '@/i18n';

interface LanguageStore {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const useLanguageStore = create<LanguageStore>((set) => ({
  language: 'en',
  setLanguage: (lang: Language) => set({ language: lang }),
}));

interface AuthStore {
  isAuthenticated: boolean;
  user: any | null;
  token: string | null;
  login: (token: string, user: any) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  isAuthenticated: false,
  user: null,
  token: null,
  login: (token: string, user: any) =>
    set({ isAuthenticated: true, user, token }),
  logout: () =>
    set({ isAuthenticated: false, user: null, token: null }),
}));

interface UIStore {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  sidebarOpen: boolean;
  toggleSidebar: () => void;
}

export const useUIStore = create<UIStore>((set) => ({
  isDarkMode: false,
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
  sidebarOpen: true,
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
}));
