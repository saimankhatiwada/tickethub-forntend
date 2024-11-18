import { Separator, Sidebar } from './ui';
import AppSideBarHeader from './AppSideBarHeader';
import AppSideBarFooter from './AppSideBarFooter';
import AppSideBarContent from './AppSideBarContent';

const AppSideBar = () => {
  return (
    <Sidebar collapsible='icon'>
      <AppSideBarHeader />
      <Separator />
      <AppSideBarContent />
      <Separator />
      <AppSideBarFooter />
    </Sidebar>
  );
};

export default AppSideBar;
