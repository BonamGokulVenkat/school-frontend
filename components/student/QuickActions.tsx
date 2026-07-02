import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { QuickAction } from "@/lib/dummy/student/student-dashboard-data";

interface QuickActionsProps {
  actions: QuickAction[];
}

export function QuickActions({ actions }: QuickActionsProps) {
  return (
    <Card className="border-slate-200 shadow-sm">
      <CardContent className="p-4">
        <div className="grid grid-cols-4 gap-2">
          {actions.map((action) => (
            <Link
              key={action.id}
              href={action.link}
              className="group flex flex-col items-center gap-2 rounded-lg p-3 transition-colors hover:bg-slate-50"
            >
              <span className="text-2xl">{action.icon}</span>
              <span className="text-xs font-medium text-slate-600 group-hover:text-blue-600">
                {action.title}
              </span>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}