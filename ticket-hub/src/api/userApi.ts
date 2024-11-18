import LoginCredentials from '@/types/logincredentials';
import AccessToken from '@/types/accesstoken';
import api from '.';
import User from '@/types/user';
import RegisterCredentials from '@/types/registercredentials';

export const loginUser = async (
  user: LoginCredentials,
): Promise<AccessToken> => {
  const response = await api.post<AccessToken>('/users/login', user, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data;
};

export const registerUser = async (
  data: RegisterCredentials,
): Promise<boolean> => {
  const response = await api.post('/users/register', data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.status !== 200) {
    return false;
  }
  return true;
};

export const getMe = async (): Promise<User> => {
  const response = await api.get<User>('/users/me');
  return response.data;
};

export const checkEmail = async (email: string): Promise<boolean> => {
  const response = await api.get(`/users/email-exists/${email}`);
  return response.data as boolean;
};

export const checkMobileNumber = async (number: string): Promise<boolean> => {
  const response = await api.get(`/users/mobile-number-exists/${number}`);
  return response.data as boolean;
};
