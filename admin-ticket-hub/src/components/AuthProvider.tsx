import api from '@/api';
import { getMe } from '@/api/userApi';
import { useUserStore } from '@/state/user/useUserStore';
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useLayoutEffect,
  useEffect,
} from 'react';

interface AuthContextType {
  token?: string | null;
  setToken: (token: string | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return authContext;
};

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState<string | null>(null);
  const { setUser, removeUser } = useUserStore();

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const response = await getMe();
        setUser(response);
      } catch {
        removeUser();
        setToken(null);
      }
    };

    fetchMe();
  }, [token]);

  useLayoutEffect(() => {
    const authInterceptor = api.interceptors.request.use((config) => {
      config.headers.Authorization = token
        ? `Bearer ${token}`
        : config.headers.Authorization;
      return config;
    });

    return () => {
      api.interceptors.request.eject(authInterceptor);
    };
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
