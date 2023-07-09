import { create } from 'zustand';

type UserStore = {
  user: boolean | null;
  setUser: (user: boolean | null) => void;
};

const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set((state) => ({ ...state, user: user })),
}));

export default useUserStore;