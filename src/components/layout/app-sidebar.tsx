"use client";

import * as React from "react";

import { NavMain } from "@/components/layout/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import EscudoMunicipalCollapsable from "@/components/logo/escudo-municipal-collapsable";
import { menu } from "@/components/layout/menu";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="pl-2">
          <EscudoMunicipalCollapsable />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain menu={menu} />
      </SidebarContent>
      <SidebarFooter>
        <p className="text-xs">{"<🐤/> SIGEM version 0.0.1"}</p>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
