import { create } from "zustand";

type LayoutState = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

const useLayoutStore = create<LayoutState>((set) => ({
  darkMode: false,
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
}));
export default useLayoutStore;
