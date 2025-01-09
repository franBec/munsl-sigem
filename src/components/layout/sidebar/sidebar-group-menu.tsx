"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { MenuHandler, menu } from "@/components/layout/sidebar/menu";
import { useSession } from "next-auth/react";

export function SidebarGroupMenu() {
  const [search, setSearch] = useState("");
  const { state } = useSidebar();
  const { data } = useSession();

  const isCitizenLogin = !!data?.user.usuarioCiudad_persona_cuil;
  const isAdminLogin = !!data?.user.usuario_userName;
  const permissions = data?.user.permisos;

  const filteredMenu = new MenuHandler(menu)
    .filterByAuth(isCitizenLogin, isAdminLogin, permissions)
    .filterBySearchInput(search)
    .getMenu();

  return (
    <SidebarGroup>
      {state === "expanded" && (
        <div>
          <input
            type="text"
            placeholder="Buscar..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      )}

      {filteredMenu.map(group => (
        <div key={group.label}>
          <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
          <SidebarMenu>
            {group.items.map(item => (
              <Collapsible
                key={item.title}
                asChild
                defaultOpen={item.isDefaultOpen}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip={item.title}>
                      <item.icon />
                      <span>{item.title}</span>
                      <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.urls.map(subItem => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton asChild>
                            <a href={subItem.url}>
                              <span>{subItem.title}</span>
                            </a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </div>
      ))}
    </SidebarGroup>
  );
}
