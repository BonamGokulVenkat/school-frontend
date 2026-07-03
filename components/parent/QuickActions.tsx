import Link from "next/link";
import { MessageSquare, FileText, Bell, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface QuickActionsProps {
  actions: {
    title: string;
    icon: string;
    link: string;
  }[];
}

const iconMap: Record<string, React.ElementType> = {
  MessageSquare: MessageSquare,
  FileText: FileText,
  Bell: Bell,
  Calendar: Calendar,
};

export function QuickActions({ actions }: QuickActionsProps) {
  return (
    <Card className="border-slate-200 shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold text-slate-900">
          Quick Actions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-2">
          {actions.map((action) => {
            const Icon = iconMap[action.icon] || Bell;
            return (
              <Button
                key={action.title}
                variant="outline"
                className="h-auto flex-col gap-2 border-slate-200 py-4 hover:border-purple-200 hover:bg-purple-50 hover:text-purple-700"
                asChild
              >
                <Link href={action.link}>
                  <Icon className="h-5 w-5" />
                  <span className="text-xs font-medium">{action.title}</span>
                </Link>
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}