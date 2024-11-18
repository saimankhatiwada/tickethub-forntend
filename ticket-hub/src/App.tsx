import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useAuth } from './components/AuthProvider';

const App = () => {
  const { token } = useAuth();

  return (
    <>
      {token && <Navbar />}
      <Outlet />
    </>
  );
};

export default App;
