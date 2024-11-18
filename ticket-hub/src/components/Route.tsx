import { useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '@/components/AuthProvider';
import { Spinner } from '@/components/ui';
import { useUserStore } from '@/state/user/useUserStore';
import { env } from '@/lib/env';

interface RouteProps {
  children: ReactNode;
  isProtected: boolean;
}

const Route = ({ children, isProtected }: RouteProps) => {
  const navigate = useNavigate();
  const { token, setToken } = useAuth();
  const { user, removeUser } = useUserStore();

  useEffect(() => {
    if (isProtected && token === null) {
      navigate('/sign-in', { replace: true });
    }
    if(user && user.role !== env.ACCESS_ROLE){
      navigate('/access-denied', { replace: true });
      removeUser();
      setToken(null);
    }
  }, [isProtected, navigate, token, user]);

  return token === undefined ? (
    <div className='absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center'>
      <Spinner />
    </div>
  ) : (
    children
  );
};

export default Route;
