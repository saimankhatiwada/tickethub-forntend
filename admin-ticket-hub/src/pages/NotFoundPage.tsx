import { Button } from '@/components/ui';
import { FileQuestion } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className='flex min-h-screen items-center justify-center bg-background px-4 py-8 text-foreground'>
      <div className='w-full max-w-md text-center'>
        <FileQuestion className='mx-auto mb-6 h-16 w-16 text-muted-foreground sm:mb-8 sm:h-24 sm:w-24' />
        <h1 className='mb-2 text-3xl font-bold sm:mb-4 sm:text-4xl'>
          404 - Page Not Found
        </h1>
        <p className='mb-6 text-lg text-muted-foreground sm:mb-8 sm:text-xl'>
          Oops! The page you're looking for doesn't exist.
        </p>
        <Button asChild className='w-full sm:w-auto'>
          <Link to='/' replace>
            Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
