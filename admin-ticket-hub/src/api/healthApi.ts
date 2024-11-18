import { HealthStatus } from '@/types/healthStatus';
import api from '.';

export const checkSystemHealth = async (): Promise<HealthStatus> => {
  const response = await api.get('/health');
  return response.data as HealthStatus;
};
