import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './index.css';
import Router from './Router';
import ThemeProvider from './components/ThemeProvider';
import AuthProvider from './components/AuthProvider';
import { Toaster } from './components/ui/sonner';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router />
        <Toaster richColors />
      </AuthProvider>
    </QueryClientProvider>
  </ThemeProvider>,
);
