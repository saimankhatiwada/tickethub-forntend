import { useAuth } from '@/components/AuthProvider';
import SignInForm from '@/components/SignInForm';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SignInPage = () => {
  const { token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate('/', { replace: true });
    }
  }, [navigate, token]);

  return (
    <div className='flex h-screen items-center justify-center'>
      <SignInForm />
    </div>
  );
};

export default SignInPage;
