"use client";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import ModeToggle from "@/components/dark-mode/mode-toogle";
import { NavUser } from "@/components/layout/nav-user";
import { useSession } from "next-auth/react";
import * as React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Header = () => {
  const { data: session } = useSession();

  return (
    <header className="flex h-16 shrink-0 items-center justify-between px-4 gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 border-b-2">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
      </div>
      <div className="flex items-center gap-2">
        {session ? (
          <NavUser
            user={{
              name:
                session.user.usuario_displayname ||
                session.user.usuarioCiudad_persona_firstName,
              dniCuil:
                session.user.usuario_dni ||
                session.user.usuarioCiudad_persona_cuil,
              avatar: session.user?.image || "/default-avatar.jpg",
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
