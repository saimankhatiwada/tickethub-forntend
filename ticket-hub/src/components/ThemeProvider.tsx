import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import { getItem, setItem } from '@/lib/localStorage';

interface ThemeContextType {
  theme: 'light' | 'dark' | 'system';
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
}

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: 'light' | 'dark' | 'system';
  storageKey?: string;
}

const initialState: ThemeContextType = {
  theme: 'dark',
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeContextType | undefined>(
  initialState,
);

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider');

  return context;
};

const ThemeProvider = ({
  children,
  defaultTheme = 'dark',
  storageKey = 'ticket-hub-theme',
  ...props
}: ThemeProviderProps) => {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>(
    () => getItem(storageKey) || defaultTheme,
  );
  const systemTheme: 'light' | 'dark' = window.matchMedia(
    '(prefers-color-scheme: dark)',
  ).matches
    ? 'dark'
    : 'light';

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove('light', 'dark');

    const newTheme = theme === 'system' ? systemTheme : theme;

    root.classList.add(newTheme);

    if (!getItem(storageKey)) {
      setItem(storageKey, newTheme);
    }
  }, [storageKey, systemTheme, theme]);

  const value: ThemeContextType = {
    theme,
    setTheme: (newTheme) => {
      const themeToSet = newTheme === 'system' ? systemTheme : newTheme;
      setItem(storageKey, themeToSet);
      setTheme(themeToSet);
    },
  };

  return (
    <ThemeProviderContext.Provider value={value} {...props}>
      {children}
    </ThemeProviderContext.Provider>
  );
};

export default ThemeProvider;
