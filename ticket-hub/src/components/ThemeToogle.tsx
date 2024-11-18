import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';
import { Button } from '@/components/ui';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <Button variant='outline' size='icon' onClick={toggleTheme}>
      {theme === 'light' ? (
        <Sun className='h-[1.2rem] w-[1.2rem]' />
      ) : (
        <Moon className='h-[1.2rem] w-[1.2rem]' />
      )}
      <span className='sr-only'>Toggle theme</span>
    </Button>
  );
};

export default ThemeToggle;
