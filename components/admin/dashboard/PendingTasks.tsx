import {
  AlertCircle,
  Users,
  Calendar,
  FileText,
  Clock,
  CreditCard,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PendingTask } from "@/lib/dummy/admin/admin-dashboard-data";

interface PendingTasksProps {
  tasks: PendingTask[];
}

const taskIcons = {
  enrollment: Users,
  leave: Calendar,
  report: FileText,
  fee: CreditCard,
  exam: Clock,
};

const priorityColors = {
  high: "bg-red-100 text-red-700 border-red-200",
  medium: "bg-amber-100 text-amber-700 border-amber-200",
  low: "bg-blue-100 text-blue-700 border-blue-200",
};

const taskLabels = {
  enrollment: "Enrollment",
  leave: "Leave Request",
  report: "Report",
  fee: "Fee Collection",
  exam: "Exam Schedule",
};

export function PendingTasks({ tasks }: PendingTasksProps) {
  return (
    <Card className="border-slate-200 shadow-sm">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-lg font-semibold">
            <AlertCircle className="h-5 w-5 text-amber-500" />
            Pending Tasks
          </CardTitle>
          <Badge variant="outline" className="bg-slate-100">
            {tasks.length} items
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {tasks.map((task) => {
          const Icon = taskIcons[task.type] || AlertCircle;
          return (
            <div
              key={task.id}
              className="flex items-center justify-between rounded-lg border border-slate-100 p-3 transition-colors hover:bg-slate-50"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-slate-100 p-2 text-slate-600">
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900">{task.title}</p>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-[10px] bg-slate-100">
                      {taskLabels[task.type]}
                    </Badge>
                    {task.due && (
                      <span className="text-[10px] text-slate-400">
                        Due: {task.due}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Badge
                  variant="outline"
                  className={`${priorityColors[task.priority]} text-[10px]`}
                >
                  {task.priority}
                </Badge>
                <span className="text-sm font-bold text-slate-900">
                  {task.count}
                </span>
                <Button variant="ghost" size="sm" className="h-7 text-xs text-blue-600 hover:bg-blue-50">
                  View
                </Button>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}