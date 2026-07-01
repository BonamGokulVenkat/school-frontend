import { ReactNode } from "react";

interface SectionTitleProps {
  icon?: ReactNode;
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionTitle({ icon, title, subtitle, className = "" }: SectionTitleProps) {
  return (
    <div className={`mb-8 ${className}`}>
      <div className="flex items-center gap-3 text-2xl font-bold tracking-tight text-slate-900">
        {icon && <span className="text-2xl">{icon}</span>}
        <h2>{title}</h2>
      </div>
      {subtitle && <p className="mt-1 text-sm text-slate-500">{subtitle}</p>}
    </div>
  );
}