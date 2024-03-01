import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from '../types/user';

interface UserStore {
  user: User | null;
  setUser: (user: User) => void;
  removeUser: () => void;
}

export const useUser = create(
  persist<UserStore>(
    (set) => ({
      user: null,
      setUser: (user: User) => set({ user }),
      removeUser: () => set({ user: null }),
    }),
    {
      name: 'user',
    },
  ),
);
