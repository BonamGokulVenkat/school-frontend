import {
  BookOpen,
  CheckCircle2,
  ClipboardList,
  FileEdit,
  FileText,
  Users,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { TeacherAssignmentStats } from "@/lib/dummy/teacher/teacher-assignments-data";

interface AssignmentStatsProps {
  stats: TeacherAssignmentStats;
}

const statConfig = [
  {
    key: "total",
    label: "Total Assignments",
    icon: ClipboardList,
    description: "All created tasks",
  },
  {
    key: "published",
    label: "Published",
    icon: BookOpen,
    description: "Visible to students",
  },
  {
    key: "draft",
    label: "Drafts",
    icon: FileEdit,
    description: "Not published yet",
  },
  {
    key: "closed",
    label: "Closed",
    icon: FileText,
    description: "Submission ended",
  },
  {
    key: "submissions",
    label: "Submissions",
    icon: Users,
    description: "Received from students",
  },
  {
    key: "graded",
    label: "Graded",
    icon: CheckCircle2,
    description: "Evaluation completed",
  },
] as const;

export function AssignmentStats({ stats }: AssignmentStatsProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-6">
      {statConfig.map((item) => {
        const Icon = item.icon;

        return (
          <Card key={item.key} className="border-slate-200 bg-white">
            <CardContent className="p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-medium text-slate-500">{item.label}</p>
                  <p className="mt-2 text-2xl font-semibold text-slate-950">
                    {stats[item.key]}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">{item.description}</p>
                </div>

                <div className="rounded-xl bg-slate-100 p-2 text-slate-700">
                  <Icon className="h-5 w-5" />
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}