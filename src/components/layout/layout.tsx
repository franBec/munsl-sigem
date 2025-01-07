"use client";
import { AppSidebar } from "@/components/layout/sidebar/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { ReactNode } from "react";
import Header from "@/components/layout/header/header";
import { useSession } from "next-auth/react";
import LoadingPlaceholder from "@/components/layout/loading-placeholder";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: Readonly<LayoutProps>) => {
  const { status } = useSession();

  return (
    <>
      {status === "loading" ? (
        <LoadingPlaceholder />
      ) : (
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <Header />
            <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
              {children}
            </div>
          </SidebarInset>
        </SidebarProvider>
      )}
    </>
  );
};
export default Layout;
