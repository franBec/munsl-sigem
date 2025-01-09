import * as React from "react";

import { SidebarGroupMenu } from "@/components/layout/sidebar/sidebar-group-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { EscudoMunicipalCollapsable } from "@/components/logo/escudo-municipal";
import SidebarFooterInfo from "@/components/layout/sidebar/sidebar-footer-info";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="pl-2">
          <EscudoMunicipalCollapsable />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroupMenu />
      </SidebarContent>
      <SidebarFooter>
        <SidebarFooterInfo />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
