"use client";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import ModeToggle from "@/components/dark-mode/mode-toogle";
import { DropdownUser } from "@/components/layout/header/dropdown-user";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { enhanceUser } from "@/components/next-auth/enhance-user";

const Header = () => {
  const { data: session } = useSession();
  const user = session?.user ? enhanceUser(session.user) : null;

  return (
    <header className="flex h-16 shrink-0 items-center justify-between px-4 gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 border-b-2">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
      </div>
      <div className="flex items-center gap-2">
        {session ? (
          <DropdownUser
            user={{
              name: user?.getUserName(),
              dniCuil: user?.getUserDniCuil(),
              avatar: user?.getFotoPerfil(),
            }}
          />
        ) : (
          <Button asChild>
            <Link href="/auth/login">Iniciar Sesión</Link>
          </Button>
        )}
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
