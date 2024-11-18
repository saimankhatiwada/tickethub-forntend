import User from '@/types/user';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type userStore = {
  user: User | null;
  setUser: (user: User) => void;
  removeUser: () => void;
};

export const useUserStore = create<userStore>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        setUser: (user) => set(() => ({ user: user })),
        removeUser: () => set(() => ({ user: null })),
      }),
      { name: 'userStore' },
    ),
  ),
);
