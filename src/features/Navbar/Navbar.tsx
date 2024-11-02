import { Home, User, Settings, LogOut, LogIn } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Menu items.
const items = [
  {
    icon: Home,
    label: "Home",
    url: "/",
  },
  {
    icon: User,
    label: "Profile",
    url: "/profile",
  },
  {
    icon: Settings,
    label: "Settings",
    url: "/settings",
  },
  { icon: LogIn, label: "Login", url: "/login" },
  { icon: LogOut, label: "Logout", url: "/logout" },
];

export default function Navbar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <SidebarMenuItem key={item.label}>
                        <SidebarMenuButton asChild>
                          <Link to={item.url}>
                            <item.icon />
                            <span>{item.label}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </TooltipTrigger>
                    <TooltipContent>{item.label}</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
