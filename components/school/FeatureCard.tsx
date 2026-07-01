import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  color?: string;
}

export function FeatureCard({ icon, title, description, color = "text-blue-600" }: FeatureCardProps) {
  return (
    <Card className="border-slate-200 shadow-sm transition-shadow hover:shadow-md">
      <CardHeader className="p-5 pb-3">
        <div className={`mb-2 h-6 w-6 ${color}`}>{icon}</div>
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-5 pt-0">
        <p className="text-sm leading-relaxed text-slate-600">{description}</p>
      </CardContent>
    </Card>
  );
}