"use client";

import { useState } from "react";
import { ParentSidebar } from "@/components/parent/ParentSidebar";
import { ParentHeader } from "@/components/parent/ParentHeader";

export default function ParentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-slate-50/50">
      <ParentSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      
      <div className="flex flex-1 flex-col">
        <ParentHeader onMenuClick={() => setIsSidebarOpen(true)} />
        <main className="flex-1 p-4 md:p-6 lg:p-8">
          <div className="mx-auto max-w-7xl">{children}</div>
        </main>
      </div>
    </div>
  );
}