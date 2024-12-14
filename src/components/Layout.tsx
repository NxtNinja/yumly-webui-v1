import { ReactNode } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useRouter } from "next/router";

import { Raleway } from "next/font/google";
const raleway = Raleway({
  subsets: ["latin"],
  weight: "600",
});

const Layout = ({ children }: { children: ReactNode }) => {
  const { pathname } = useRouter();

  const hideSidebarRoutes = ["/auth/login", "/auth/register"];
  const isHideSidebarHidden = hideSidebarRoutes.includes(pathname);

  if (isHideSidebarHidden) {
    return <div className="">{children}</div>;
  }
  return (
    <SidebarProvider
      className={raleway.className}
      style={
        {
          "--sidebar-width": "19rem",
        } as React.CSSProperties
      }
    >
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center justify-between gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </header>
        <div className="">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Layout;
