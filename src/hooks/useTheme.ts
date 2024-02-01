import { create } from 'zustand';

type ITheme = {
  theme: 'light' | 'dark' | 'system';
};

type State = {
  theme: ITheme;
  toggleTheme: () => void;
};

export const useTheme = create<State>((set) => ({
  theme: {
    theme: 'system',
  },
  toggleTheme: () => {
    set((state) => {
      if (state.theme.theme === 'dark') {
        document.querySelector('body')?.classList.add('dark');
      } else {
        document.querySelector('body')?.classList.remove('dark');
      }
      return {
        theme: {
          ...state.theme,
          theme: state.theme.theme === 'light' ? 'dark' : 'light',
        },
      };
    });
  },
}));
