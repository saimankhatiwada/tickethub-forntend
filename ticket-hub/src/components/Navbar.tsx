import ThemeToogle from './ThemeToogle';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Separator,
} from './ui';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthProvider';
import { useUserStore } from '@/state/user/useUserStore';

const Navbar = () => {
  const { setToken } = useAuth();
  const { user, removeUser } = useUserStore();

  const signOut = () => {
    setToken(null);
    removeUser();
  };

  return (
    <>
      <div className='flex flex-row items-center justify-between gap-8 px-8 py-4'>
        <Link to='/'>Home</Link>
        <div className='flex-end flex flex-row items-center gap-8'>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar>
                <AvatarImage src={user?.imageUrl} alt='@shadcn' />
                <AvatarFallback>TH</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              <DropdownMenuItem onClick={signOut}>Sign Out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <ThemeToogle />
        </div>
      </div>
      <Separator />
    </>
  );
};

export default Navbar;
