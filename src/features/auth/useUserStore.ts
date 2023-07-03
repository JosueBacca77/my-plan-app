import { create } from 'zustand';

type UserStore = {
  user: boolean;
  setUser: (user: boolean) => void;
};

const useUserStore = create<UserStore>((set) => ({
  user: false,
  setUser: (user) => set((state) => ({ ...state, user: user })),
}));

export default useUserStore;