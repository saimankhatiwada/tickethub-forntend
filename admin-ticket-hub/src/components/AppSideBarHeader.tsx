import { Logo, SidebarHeader } from './ui';

const AppSideBarHeader = () => {
  return (
    <SidebarHeader>
      <div className='flex items-center justify-between space-x-2'>
        <div className='flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground'>
          <Logo />
        </div>
        <div className='grid flex-1 text-left text-sm leading-tight'>
          <span className='truncate bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text font-semibold text-transparent'>
            EventX
          </span>
          <span className='truncate text-xs'>Where event meets magic</span>
        </div>
      </div>
    </SidebarHeader>
  );
};

export default AppSideBarHeader;
