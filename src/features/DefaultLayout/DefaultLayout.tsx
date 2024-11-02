import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { SidebarProvider } from "@/components/ui/sidebar";
import Navbar from "../Navbar/Navbar";

export default function DefaultLayout() {
  return (
    <SidebarProvider>
      <Navbar />
      <main className="w-full p-4">
        <Header />
        {/* <SidebarTrigger /> */}
        <div className="">
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  );
}
