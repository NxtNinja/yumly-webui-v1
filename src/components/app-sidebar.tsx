import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

import { Home, List, Bookmark, Edit3 } from "lucide-react";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Home",
      url: "/",
      icon: <Home />, // Icon for Home
      items: [],
    },
    {
      title: "Categories",
      icon: <List />, // Icon for Categories
      items: [
        {
          title: "Breakfast",
          url: "#breakfast",
        },
        {
          title: "Lunch",
          url: "#lunch",
        },
        {
          title: "Dinner",
          url: "#dinner",
        },
        {
          title: "Snacks",
          url: "#snacks",
        },
        {
          title: "Desserts",
          url: "#desserts",
        },
      ],
    },
    {
      title: "Create Recipe",
      url: "#create-recipe",
      icon: <Edit3 />, // Icon for Create Recipe
      items: [],
    },
    {
      title: "My Bookmarks",
      url: "#my-bookmarks",
      icon: <Bookmark />, // Icon for My Bookmarks
      items: [],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      variant="floating"
      {...props}
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              asChild
            >
              <a href="#">
                <div className="">
                  <img
                    src="/app-logo.svg"
                    alt="App-Logo"
                  />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">YUMLY</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className="gap-2">
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a
                    href={item.url}
                    className="flex items-center gap-2 font-medium"
                  >
                    {item.icon} {item.title}
                  </a>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub className="ml-0 border-l-0 px-1.5">
                    {item.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton asChild>
                          <a href={item.url}>{item.title}</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
