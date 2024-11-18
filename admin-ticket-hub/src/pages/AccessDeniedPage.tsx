import { Button } from '@/components/ui';
import { ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';

const AccessDeniedPage = () => {
  return (
    <div className='flex min-h-screen w-full flex-col items-center justify-center bg-background p-4 text-foreground'>
      <div className='max-w-md space-y-6 text-center'>
        <ShieldAlert className='mx-auto h-24 w-24 text-destructive' />
        <h1 className='text-4xl font-bold tracking-tighter sm:text-5xl'>
          Access Denied
        </h1>
        <p className='text-lg text-muted-foreground'>
          Sorry, you don't have permission to access this page. Please contact
          the administrator if you believe this is an error.
        </p>
        <Button asChild className='mt-4'>
          <Link to='/' replace>
            Go back to homepage
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default AccessDeniedPage;
