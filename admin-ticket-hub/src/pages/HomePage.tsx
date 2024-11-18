import { Logo } from '@/components/ui';

const HomePage = () => {
  return (
    <div className='flex min-h-screen w-full flex-col items-center justify-center'>
      <div className='space-y-8 p-8 text-center'>
        <div className='flex items-center justify-center space-x-2 text-primary'>
          <Logo size='lg' />
          <span className='bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-4xl font-bold text-transparent'>
            EventX
          </span>
        </div>
        <h1 className='text-5xl font-extrabold tracking-tight sm:text-6xl'>
          Where Event Meets Magic
        </h1>
        <p className='mx-auto max-w-prose text-xl italic text-muted-foreground'>
          "The best events are those where the unexpected becomes the
          unforgettable."
        </p>
      </div>
    </div>
  );
};

export default HomePage;
