import { Outlet } from 'react-router-dom';
import { SidebarProvider } from './components/ui';
import { useAuth } from './components/AuthProvider';
import AppSideBarContext from './components/AppSideBarContext';

const App = () => {
  const { token } = useAuth();
  return (
    <SidebarProvider>
      {token && <AppSideBarContext />}
      <Outlet />
    </SidebarProvider>
  );
};

export default App;
