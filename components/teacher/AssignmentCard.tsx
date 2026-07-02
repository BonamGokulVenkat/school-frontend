"use client";

import type { ElementType } from "react";
import { useState } from "react";
import {
  Calendar,
  ChevronDown,
  ChevronRight,
  Clock,
  Edit,
  FileText,
  Paperclip,
  Trash2,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  TeacherAssignment,
  getAssignmentPriorityColor,
  getAssignmentStatusColor,
} from "@/lib/dummy/teacher/teacher-assignments-data";

interface AssignmentCardProps {
  assignment: TeacherAssignment;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onViewSubmissions: (id: string) => void;
}

export function AssignmentCard({
  assignment,
  onEdit,
  onDelete,
  onViewSubmissions,
}: AssignmentCardProps) {
  const [expanded, setExpanded] = useState(false);

  const submissionRate =
    assignment.submissions.total > 0
      ? Math.round((assignment.submissions.submitted / assignment.submissions.total) * 100)
      : 0;

  const gradingRate =
    assignment.submissions.submitted > 0
      ? Math.round((assignment.submissions.graded / assignment.submissions.submitted) * 100)
      : 0;

  return (
    <Card className="flex h-full flex-col border-slate-200 bg-white">
      <CardHeader className="space-y-3">
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-1">
            <CardTitle className="line-clamp-2 text-base text-slate-950">
              {assignment.title}
            </CardTitle>
            <p className="text-sm text-slate-500">
              {assignment.subject} • {assignment.className}
            </p>
          </div>

          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="shrink-0"
            onClick={() => setExpanded((current) => !current)}
          >
            {expanded ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </Button>
        </div>

        <div className="flex flex-wrap gap-2">
          <Badge className={getAssignmentStatusColor(assignment.status)}>
            {capitalize(assignment.status)}
          </Badge>
          <Badge className={getAssignmentPriorityColor(assignment.priority)}>
            {capitalize(assignment.priority)}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="flex-1 space-y-4">
        <p className={expanded ? "text-sm text-slate-600" : "line-clamp-2 text-sm text-slate-600"}>
          {assignment.description}
        </p>

        <div className="grid gap-2 text-sm text-slate-600">
          <InfoItem icon={Calendar} label="Due Date" value={formatDate(assignment.dueDate)} />
          <InfoItem icon={Clock} label="Due Time" value={assignment.dueTime} />
          <InfoItem icon={FileText} label="Marks" value={`${assignment.totalMarks} marks`} />
          <InfoItem icon={Users} label="Section" value={`Section ${assignment.section}`} />
        </div>

        <div className="space-y-3 rounded-xl bg-slate-50 p-3">
          <div>
            <div className="mb-1 flex items-center justify-between text-xs">
              <span className="font-medium text-slate-600">Submission Rate</span>
              <span className="text-slate-500">{submissionRate}%</span>
            </div>
            <Progress value={submissionRate} />
          </div>

          <div>
            <div className="mb-1 flex items-center justify-between text-xs">
              <span className="font-medium text-slate-600">Grading Progress</span>
              <span className="text-slate-500">{gradingRate}%</span>
            </div>
            <Progress value={gradingRate} />
          </div>

          <div className="grid grid-cols-3 gap-2 text-center text-xs">
            <div>
              <p className="font-semibold text-slate-950">{assignment.submissions.total}</p>
              <p className="text-slate-500">Total</p>
            </div>
            <div>
              <p className="font-semibold text-slate-950">{assignment.submissions.submitted}</p>
              <p className="text-slate-500">Submitted</p>
            </div>
            <div>
              <p className="font-semibold text-slate-950">{assignment.submissions.graded}</p>
              <p className="text-slate-500">Graded</p>
            </div>
          </div>
        </div>

        {expanded && assignment.attachments?.length ? (
          <div className="space-y-2">
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
              Attachments
            </p>

            <div className="space-y-2">
              {assignment.attachments.map((attachment) => (
                <div
                  key={attachment}
                  className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-600"
                >
                  <Paperclip className="h-4 w-4 text-slate-400" />
                  {attachment}
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </CardContent>

      <CardFooter className="grid grid-cols-3 gap-2 border-t border-slate-100 p-4">
        <Button type="button" variant="outline" onClick={() => onViewSubmissions(assignment.id)}>
          View
        </Button>

        <Button type="button" variant="outline" onClick={() => onEdit(assignment.id)}>
          <Edit className="mr-2 h-4 w-4" />
          Edit
        </Button>

        <Button type="button" variant="outline" onClick={() => onDelete(assignment.id)}>
          <Trash2 className="mr-2 h-4 w-4" />
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
}

interface InfoItemProps {
  icon: ElementType;
  label: string;
  value: string;
}

function InfoItem({ icon: Icon, label, value }: InfoItemProps) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="flex items-center gap-2 text-slate-500">
        <Icon className="h-4 w-4" />
        {label}
      </span>
      <span className="font-medium text-slate-700">{value}</span>
    </div>
  );
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function capitalize(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}