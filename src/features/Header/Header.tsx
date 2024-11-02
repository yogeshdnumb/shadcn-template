import { Button } from "@/components/ui/button";
import ColorSchemeToggler from "./components/ColorSchemeToggler";
import Logo from "./components/Logo";
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import useAuth from "@/hooks/useAuth";
import { Link } from "react-router-dom";
import { AvatarImage, Avatar, AvatarFallback } from "@/components/ui/avatar";
import { LucideMenu, LucideSidebar } from "lucide-react";

export default function Header() {
  const { toggleSidebar } = useSidebar();

  const { user } = useAuth();
  return (
    <div className="mx-auto mb-4 flex h-14 items-center justify-between rounded-xl border-2 px-2">
      <div className="flex items-center gap-2">
        {/* <Button onClick={toggleSidebar} variant="ghost" className="w-10 h-10"> */}
        <Button asChild variant={"ghost"} size={"icon"}>
          <LucideMenu onClick={toggleSidebar} className="w-7 h-7 " />
        </Button>
        {/* </Button> */}
        <Button asChild size={"icon"} variant={"ghost"}>
          <Logo />
        </Button>
        <p className=" ">Shadcn Template</p>
      </div>
      <div className="flex items-center gap-2">
        {user && (
          <Avatar>
            <AvatarImage
              src={user?.profilePic}
              alt={user?.username}
            ></AvatarImage>
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        )}
        {user ? (
          <Button variant="secondary" asChild>
            <Link to={`${import.meta.env.VITE_BACKEND_URL}/auth/logout`}>
              Logout
            </Link>
          </Button>
        ) : (
          <Button variant="secondary" asChild>
            <Link to={`/login`}>Login</Link>
          </Button>
        )}
        <ColorSchemeToggler />
      </div>
    </div>
  );
}
