import {
  Calendar,
  ChevronRight,
  LayoutDashboard,
  SquareTerminal,
  User,
} from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from './ui';
import { Link } from 'react-router-dom';

const AppSideBarMainContent = () => {
  return (
    <SidebarGroup>
      <SidebarMenu>
        <Collapsible
          key='Main'
          asChild
          defaultOpen={true}
          className='group/collapsible'
        >
          <SidebarMenuItem>
            <CollapsibleTrigger asChild>
              <SidebarMenuButton tooltip='Main'>
                <SquareTerminal />
                <span>Main</span>
                <ChevronRight className='ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90' />
              </SidebarMenuButton>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarMenuSub>
                <SidebarMenuSubItem key='Dashboard'>
                  <SidebarMenuSubButton asChild>
                    <Link to='/dashboard'>
                      <LayoutDashboard />
                      <span>Dashboard</span>
                    </Link>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
                <SidebarMenuSubItem key='Events'>
                  <SidebarMenuSubButton asChild>
                    <Link to='/events'>
                      <Calendar />
                      <span>Event</span>
                    </Link>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
                <SidebarMenuSubItem key='Users'>
                  <SidebarMenuSubButton asChild>
                    <Link to='/users'>
                      <User />
                      <span>User</span>
                    </Link>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              </SidebarMenuSub>
            </CollapsibleContent>
          </SidebarMenuItem>
        </Collapsible>
      </SidebarMenu>
    </SidebarGroup>
  );
};

export default AppSideBarMainContent;
