"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@radix-ui/react-separator";
import { DynamicBreadcrumb } from "@/components/utill/dynamic-breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { getIcon } from "@/lib/icons";
import { getColorByString } from "@/lib/color";
import { Button } from "@/components/ui/button";
import { NavUser } from "@/components/nav/nav-user";
import { ModeToggle } from "@/components/utill/mode-toggle";

const actions = [
  { name: "Notifications", icon: "Bell", badge: 3 },
  { name: "Messages", icon: "Mail", badge: 2 },
];

export function StickyHeader() {
  // Example user
  const user = { name: "Admin User", email: "admin@zenithfilings.com", avatar: "/avatars/shadcn.jpg" };
  const userColor = getColorByString(user.email);
  const MoreIcon = getIcon("MoreHorizontal");

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center gap-2 px-4 w-full">
        {/* Sidebar trigger always visible */}
        <SidebarTrigger />
        <Separator orientation="vertical" className="mr-2 h-4" />
        {/* Breadcrumb: show on md+, collapse to home icon or ... on mobile */}
        <div className="flex-1 flex items-center min-w-0">
          <div className="hidden md:block min-w-0">
            <DynamicBreadcrumb />
          </div>
          <div className="md:hidden flex items-center min-w-0">
            {(() => { const HomeIcon = getIcon("Home"); return (
              <Button variant="ghost" size="icon" className="p-1">
                <HomeIcon className="h-5 w-5" />
              </Button>
            ) })()}
          </div>
        </div>
        {/* Search: full width on mobile, inline on desktop */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="hidden md:flex items-center gap-2 max-w-sm w-full">
            <div className="relative flex-1">
              {(() => { const SearchIcon = getIcon("Search"); return <SearchIcon className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" /> })()}
              <input
                type="text"
                placeholder="Search clients, tasks, services..."
                className="w-full pl-8 pr-4 py-2 text-sm bg-muted/50 rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
              />
            </div>
          </div>
        </div>
        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-2">
          {actions.map((action) => {
            const Icon = getIcon(action.icon);
            return (
              <Button key={action.name} variant="ghost" size="sm" className="relative">
                <Icon className="h-4 w-4" />
                {action.badge && (
                  <Badge variant="destructive" className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                    {action.badge}
                  </Badge>
                )}
              </Button>
            );
          })}
          <ModeToggle />
          {/* User avatar chip/profile section */}
          <div className="ml-2">
            <NavUser user={user} />
          </div>
        </div>
        {/* Mobile: More menu */}
        <div className="md:hidden flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="ml-1">
                <MoreIcon className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="p-0 rounded-t-xl">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-2 p-4">
                {/* Search bar in sheet */}
                <div className="relative mb-2">
                  {(() => { const SearchIcon = getIcon("Search"); return <SearchIcon className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" /> })()}
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full pl-8 pr-4 py-2 text-sm bg-muted/50 rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                  />
                </div>
                {/* Actions */}
                {actions.map((action) => {
                  const Icon = getIcon(action.icon);
                  return (
                    <Button key={action.name} variant="outline" size="lg" className="w-full flex items-center justify-start relative">
                      <Icon className="h-5 w-5 mr-2" />
                      {action.name}
                      {action.badge && (
                        <Badge variant="destructive" className="ml-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                          {action.badge}
                        </Badge>
                      )}
                    </Button>
                  );
                })}
                {/* User info */}
                <div className="flex items-center gap-3 mt-4 p-3 rounded-lg bg-muted/50">
                  <Avatar>
                    <AvatarFallback className={userColor + " text-xs font-bold"}>
                      {user.name.split(" ").map((n) => n[0]).join("").toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="font-medium text-sm">{user.name}</span>
                    <span className="text-xs text-muted-foreground">{user.email}</span>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      {/* Mobile search bar (full width, below header) */}
      <div className="md:hidden border-t bg-muted/30">
        <div className="flex items-center gap-2 p-2">
          <div className="relative flex-1">
            {(() => { const SearchIcon = getIcon("Search"); return <SearchIcon className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" /> })()}
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-8 pr-4 py-2 text-sm bg-background rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
            />
          </div>
        </div>
      </div>
    </header>
  );
} 