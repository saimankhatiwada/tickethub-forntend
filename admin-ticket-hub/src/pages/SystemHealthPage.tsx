import { checkSystemHealth } from '@/api/healthApi';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Spinner,
} from '@/components/ui';
import { HealthStatus } from '@/types/healthStatus';
import { useQuery } from '@tanstack/react-query';
import { AlertCircle, CheckCircle } from 'lucide-react';

const SystemHealthPage = () => {
  const { data, isLoading } = useQuery<HealthStatus>({
    queryFn: checkSystemHealth,
    queryKey: ['health-status'],
  });

  if (isLoading) {
    return (
      <div className='flex h-screen w-full items-center justify-center'>
        <Spinner />
      </div>
    );
  }

  if (!data) {
    return (
      <div className='flex h-screen w-full items-center justify-center'>
        <div className='text-red-500'>Failed to fetch health status</div>
      </div>
    );
  }

  const formatDuration = (duration: string) => {
    const [, , seconds] = duration.split(':');
    return `${parseFloat(seconds).toFixed(3)}s`;
  };

  return (
    <div className='flex min-h-screen w-full flex-col bg-background'>
      <div className='flex-none border-b bg-muted/40 p-6'>
        <div className='mx-auto max-w-7xl text-center'>
          <h1 className='mb-2 text-3xl font-bold'>Health Status</h1>
          <div
            className={`flex items-center justify-center space-x-2 text-xl font-semibold ${
              data.status === 'Healthy' ? 'text-green-500' : 'text-red-500'
            }`}
          >
            {data.status === 'Healthy' ? (
              <CheckCircle className='h-6 w-6' />
            ) : (
              <AlertCircle className='h-6 w-6' />
            )}
            <span>{data.status}</span>
          </div>
          <p className='mt-1 text-sm text-muted-foreground'>
            Total Duration: {formatDuration(data.totalDuration)}
          </p>
        </div>
      </div>
      <div className='flex flex-grow flex-col sm:flex-row'>
        {Object.entries(data.entries).map(([service, serviceData]) => (
          <div key={service} className={'flex-1 border-border p-6'}>
            <Card className='flex h-full flex-col'>
              <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                <CardTitle className='flex items-center space-x-2 text-xl font-bold'>
                  <span>
                    {service.charAt(0).toUpperCase() + service.slice(1)}
                  </span>
                </CardTitle>
                {serviceData.status === 'Healthy' ? (
                  <CheckCircle className='h-6 w-6 text-green-500' />
                ) : (
                  <AlertCircle className='h-6 w-6 text-red-500' />
                )}
              </CardHeader>
              <CardContent className='flex flex-grow flex-col items-center justify-center text-center'>
                <div
                  className={`mb-2 text-4xl font-bold ${
                    serviceData.status === 'Healthy'
                      ? 'text-green-500'
                      : 'text-red-500'
                  }`}
                >
                  {serviceData.status}
                </div>
                <p className='text-sm text-muted-foreground'>
                  Duration: {formatDuration(serviceData.duration)}
                </p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SystemHealthPage;
