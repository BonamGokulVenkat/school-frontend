import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  PendingTask,
  getPriorityBadge,
  getTaskTypeIcon,
} from "@/lib/dummy/teacher/teacher-dashboard-data";

interface PendingTasksProps {
  tasks: PendingTask[];
}

export function PendingTasks({ tasks }: PendingTasksProps) {
  return (
    <Card className="border-slate-200 shadow-sm">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-lg">
            <span>📋</span>
            <span>Pending Tasks</span>
          </CardTitle>
          <Badge variant="secondary" className="text-xs">
            {tasks.length} tasks
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="rounded-lg border border-slate-100 p-3 transition-colors hover:bg-slate-50"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span>{getTaskTypeIcon(task.type)}</span>
                  <p className="text-sm font-medium text-slate-900 truncate">
                    {task.title}
                  </p>
                </div>
                <p className="mt-0.5 text-xs text-slate-500">{task.description}</p>
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <Badge className={getPriorityBadge(task.priority)}>
                    {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
                  </Badge>
                  <span className="text-xs text-slate-400">
                    Due: {new Date(task.dueDate).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </span>
                </div>
              </div>
              <Button variant="outline" size="sm" className="shrink-0">
                Complete
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}