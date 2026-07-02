"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Bell, Search, GraduationCap } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { teacherDashboardData } from "@/lib/dummy/teacher/teacher-dashboard-data";

interface TeacherHeaderProps {
  onMenuClick?: () => void;
}

export function TeacherHeader({ onMenuClick }: TeacherHeaderProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const user = teacherDashboardData.user;
  const pendingTasks = teacherDashboardData.pendingTasks.filter(
    (t) => t.priority === "high"
  ).length;

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="flex h-16 items-center justify-between px-4">
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
          <Link href="/teacher" className="flex items-center gap-2 lg:hidden">
            <GraduationCap className="h-6 w-6 text-blue-600" />
            <span className="text-lg font-bold text-blue-600">EduNexus</span>
          </Link>
          <div className="hidden md:block">
            <p className="text-sm font-medium text-slate-900">
              Welcome back, {user.name.split(" ")[0]}!
            </p>
            <p className="text-xs text-slate-500">{user.department}</p>
          </div>
        </div>

        {/* Center Section - Search */}
        <div className="hidden flex-1 max-w-md md:block">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
            <Input
              placeholder="Search students, classes..."
              className="pl-9 border-slate-200"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                {pendingTasks > 0 && (
                  <Badge className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 text-xs">
                    {pendingTasks}
                  </Badge>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {teacherDashboardData.pendingTasks.slice(0, 3).map((task) => (
                <DropdownMenuItem key={task.id} className="flex flex-col items-start gap-1 p-3">
                  <div className="flex w-full items-center justify-between">
                    <span className="text-sm font-medium text-slate-900">
                      {task.title}
                    </span>
                    <Badge
                      variant="secondary"
                      className={
                        task.priority === "high"
                          ? "bg-red-100 text-red-700"
                          : task.priority === "medium"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-green-100 text-green-700"
                      }
                    >
                      {task.priority}
                    </Badge>
                  </div>
                  <p className="text-xs text-slate-500">{task.description}</p>
                  <span className="text-[10px] text-slate-400">
                    Due: {new Date(task.dueDate).toLocaleDateString()}
                  </span>
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/teacher/notifications" className="text-center text-sm text-blue-600">
                  View all tasks
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="bg-blue-100 text-blue-600">
                    {user.name.split(" ").map((n) => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/teacher/profile">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/teacher/settings">Settings</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-600" asChild>
                <Link href="/logout">Logout</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}