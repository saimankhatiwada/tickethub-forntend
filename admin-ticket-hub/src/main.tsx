import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './index.css';
import Router from './Router.tsx';
import { Toaster } from './components/ui';
import ThemeProvider from './components/ThemeProvider';
import AuthProvider from './components/AuthProvider.tsx';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <AuthProvider>
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <Router />
        <Toaster richColors />
      </QueryClientProvider>
    </ThemeProvider>
  </AuthProvider>,
);
