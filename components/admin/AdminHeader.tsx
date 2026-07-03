"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { 
  Menu,
  Bell,
  Search,
  User,
  LogOut,
  Settings,
  HelpCircle,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";

interface AdminHeaderProps {
  onMenuClick: () => void;
}

interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
  type: "info" | "success" | "warning" | "error";
}

const notifications: Notification[] = [
  {
    id: "1",
    title: "New Student Registration",
    message: "5 new students have registered for Grade 6",
    time: "2 minutes ago",
    read: false,
    type: "info",
  },
  {
    id: "2",
    title: "Teacher Leave Request",
    message: "Mrs. Sharma has requested leave for next week",
    time: "15 minutes ago",
    read: false,
    type: "warning",
  },
  {
    id: "3",
    title: "Attendance Report Ready",
    message: "Weekly attendance report is now available",
    time: "1 hour ago",
    read: true,
    type: "success",
  },
  {
    id: "4",
    title: "System Update",
    message: "New features have been deployed to the platform",
    time: "3 hours ago",
    read: true,
    type: "info",
  },
];

export function AdminHeader({ onMenuClick }: AdminHeaderProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [notificationCount] = useState(
    notifications.filter((n) => !n.read).length
  );

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={onMenuClick}
          >
            <Menu className="h-5 w-5" />
          </Button>

          {/* Search */}
          <div className="hidden md:flex relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input
              placeholder="Search..."
              className="w-[200px] lg:w-[300px] border-slate-200 pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2">
          {/* Notifications */}
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                {notificationCount > 0 && (
                  <Badge
                    className="absolute -right-1 -top-1 h-5 w-5 rounded-full bg-red-500 p-0 text-[10px] font-bold text-white"
                  >
                    {notificationCount}
                  </Badge>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-0" align="end">
              <div className="flex items-center justify-between border-b border-slate-200 p-4">
                <h4 className="font-semibold text-slate-900">Notifications</h4>
                <Button variant="ghost" size="sm" className="text-xs text-blue-600 hover:text-blue-700">
                  Mark all as read
                </Button>
              </div>
              <ScrollArea className="max-h-[300px]">
                <div className="space-y-1 p-2">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={cn(
                        "rounded-lg p-3 transition-colors hover:bg-slate-50",
                        !notification.read && "bg-blue-50/50"
                      )}
                    >
                      <div className="flex items-start gap-2">
                        <div className="flex-1">
                          <p className="text-sm font-medium text-slate-900">
                            {notification.title}
                          </p>
                          <p className="text-xs text-slate-500">
                            {notification.message}
                          </p>
                          <p className="mt-1 text-[10px] text-slate-400">
                            {notification.time}
                          </p>
                        </div>
                        {!notification.read && (
                          <div className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
              <div className="border-t border-slate-200 p-2">
                <Button variant="ghost" size="sm" className="w-full text-xs text-slate-500 hover:text-slate-900">
                  View all notifications
                </Button>
              </div>
            </PopoverContent>
          </Popover>

          {/* Profile Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2 px-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/admin-avatar.jpg" />
                  <AvatarFallback className="bg-blue-100 text-blue-700 text-xs font-bold">
                    AD
                  </AvatarFallback>
                </Avatar>
                <div className="hidden text-left md:block">
                  <p className="text-sm font-medium text-slate-900">Admin</p>
                  <p className="text-[10px] text-slate-500">Administrator</p>
                </div>
                <ChevronDown className="h-4 w-4 text-slate-400" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium text-slate-900">Admin User</p>
                  <p className="text-xs text-slate-500">admin@edunexus.edu</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem>
                <HelpCircle className="mr-2 h-4 w-4" />
                Help
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-600">
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="border-t border-slate-200 p-2 md:hidden">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <Input
            placeholder="Search..."
            className="w-full border-slate-200 pl-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
    </header>
  );
}