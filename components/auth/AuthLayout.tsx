import { ReactNode } from "react";
import Link from "next/link";
import { GraduationCap } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
  footerText: string;
  footerLinkText: string;
  footerLinkHref: string;
}

export function AuthLayout({
  children,
  title,
  subtitle,
  footerText,
  footerLinkText,
  footerLinkHref,
}: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50/50 px-4 py-12">
      <Card className="w-full max-w-md border-slate-200 shadow-lg">
        <CardContent className="p-6 sm:p-8">
          {/* Logo */}
          <div className="mb-8 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-2xl font-bold text-blue-600"
            >
              <GraduationCap className="h-8 w-8" />
              <span>EduNexus</span>
            </Link>
            <h1 className="mt-4 text-2xl font-bold tracking-tight text-slate-900">
              {title}
            </h1>
            <p className="mt-2 text-sm text-slate-500">{subtitle}</p>
          </div>

          {/* Form Content */}
          {children}

          {/* Footer */}
          <div className="mt-6 text-center text-sm text-slate-500">
            {footerText}{" "}
            <Link
              href={footerLinkHref}
              className="font-medium text-blue-600 hover:text-blue-700"
            >
              {footerLinkText}
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}