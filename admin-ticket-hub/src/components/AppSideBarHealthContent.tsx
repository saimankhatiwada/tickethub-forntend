import { Link } from 'react-router-dom';
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
import { ChevronRight, HeartPulse, SquareActivity } from 'lucide-react';

const AppSideBarHealthContent = () => {
  return (
    <SidebarGroup>
    <SidebarMenu>
      <Collapsible
        key='Health'
        asChild
        defaultOpen={false}
        className='group/collapsible'
      >
        <SidebarMenuItem>
          <CollapsibleTrigger asChild>
            <SidebarMenuButton tooltip='Health'>
              <HeartPulse />
              <span>Health</span>
              <ChevronRight className='ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90' />
            </SidebarMenuButton>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <SidebarMenuSub>
              <SidebarMenuSubItem key='status'>
                <SidebarMenuSubButton asChild>
                  <Link to='/health/status'>
                    <SquareActivity />
                    <span>Status</span>
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

export default AppSideBarHealthContent;
