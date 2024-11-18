import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

interface LogoProps {
  className?: string;
  size?: 'default' | 'xs' | 'sm' | 'lg';
}

export const Logo = ({ className, size }: LogoProps) => {
  return (
    <svg
      aria-hidden='true'
      className={cn(logoVariants({ size }), className)}
      viewBox='0 0 100 101'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='50' cy='50' r='40' fill='#4A90E2' />

      <path
        d='M30 35 L70 35 L70 65 L30 65 L30 35'
        stroke='white'
        strokeWidth='3'
        fill='none'
        strokeDasharray='4,4'
      />

      <path
        d='M45 45 L55 55 M55 45 L45 55'
        stroke='white'
        strokeWidth='3'
        strokeLinecap='round'
      />

      <text
        x='110'
        y='65'
        fontFamily='Arial, sans-serif'
        fontSize='40'
        fontWeight='bold'
        fill='#2C3E50'
      >
        Event
        <tspan fill='#4A90E2'>X</tspan>
      </text>
    </svg>
  );
};

const logoVariants = cva('fill-primary text-card', {
  variants: {
    size: {
      default: 'h-8 w-8',
      xs: 'h-4 w-4',
      sm: 'h-6 w-6',
      lg: 'h-10 w-10',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});
