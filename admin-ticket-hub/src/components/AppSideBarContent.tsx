import AppSideBarHealthContent from './AppSideBarHealthContent';
import AppSideBarMainContent from './AppSideBarMainContent';
import { SidebarContent } from './ui';

const AppSideBarContent = () => {
  return (
    <SidebarContent>
      <AppSideBarMainContent />
      <AppSideBarHealthContent />
    </SidebarContent>
  );
};

export default AppSideBarContent;
