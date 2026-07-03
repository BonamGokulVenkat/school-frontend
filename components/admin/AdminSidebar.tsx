"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { getIconByName } from "@/lib/utils/icon-map";
import {
  GraduationCap,
  Settings,
  LogOut,
  X,
  ChevronRight,
  ChevronDown,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { adminNavItems, NavItem } from "@/lib/utils/navigation";

interface AdminSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AdminSidebar({ isOpen, onClose }: AdminSidebarProps) {
  const pathname = usePathname();

  const NavItemComponent = ({ item }: { item: NavItem }) => {
    const Icon = getIconByName(item.icon);
    const isActive = pathname === item.href || pathname?.startsWith(item.href + "/");
    const [isExpanded, setIsExpanded] = useState(false);

    if (item.children) {
      return (
        <div className="space-y-1">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={cn(
              "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
              isActive
                ? "bg-blue-50 text-blue-700"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            )}
          >
            <Icon className="h-4 w-4" />
            <span className="flex-1 text-left">{item.title}</span>
            {isExpanded ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </button>
          {isExpanded && (
            <div className="ml-4 space-y-1 border-l border-slate-200 pl-4">
              {item.children.map((child) => (
                <NavItemComponent key={child.href} item={child} />
              ))}
            </div>
          )}
        </div>
      );
    }

    return (
      <Link
        href={item.href}
        className={cn(
          "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
          isActive
            ? "bg-blue-50 text-blue-700"
            : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
        )}
      >
        <Icon className="h-4 w-4" />
        <span>{item.title}</span>
      </Link>
    );
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/50 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-slate-200 bg-white transition-transform duration-300 lg:relative lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex h-16 items-center justify-between border-b border-slate-200 px-4">
          <Link href="/admin" className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-blue-600" />
            <span className="text-lg font-bold text-slate-900">EduNexus</span>
            <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Admin</span>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Navigation */}
        <ScrollArea className="flex-1 px-3 py-4">
          <nav className="space-y-1">
            {adminNavItems.map((item) => (
              <NavItemComponent key={item.href} item={item} />
            ))}
          </nav>
        </ScrollArea>

        {/* Footer with Settings & Logout */}
        <div className="border-t border-slate-200 p-4 space-y-2">
          <div className="flex items-center gap-3 rounded-lg bg-slate-50 p-3">
            <Avatar className="h-8 w-8 border-2 border-slate-100">
              <AvatarImage src="/admin-avatar.jpg" />
              <AvatarFallback className="bg-blue-100 text-blue-700 text-xs font-bold">
                AD
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-900 truncate">Admin User</p>
              <p className="text-xs text-slate-500 truncate">admin@edunexus.edu</p>
            </div>
          </div>

          <Button
            variant="ghost"
            className="w-full justify-start gap-3 px-3 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-600"
            asChild
          >
            <Link href="/settings?role=admin" className="w-full justify-start gap-3 px-3 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-600">
  <Settings className="h-4 w-4" />
  Settings
</Link>
          </Button>

          <Button
            variant="ghost"
            className="w-full justify-start gap-3 px-3 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-red-600"
            asChild
          >
            <Link href="/logout">
              <LogOut className="h-4 w-4" />
              Logout
            </Link>
          </Button>
        </div>
      </aside>
    </>
  );
}