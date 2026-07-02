import { useState } from "react";
import {
  Calendar,
  Clock,
  User,
  FileText,
  Download,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Assignment,
  getSubjectColorClass,
  getStatusBadge,
  getPriorityBadge,
} from "@/lib/dummy/student/assignments-data";

interface AssignmentCardProps {
  assignment: Assignment;
  onViewDetails?: (id: string) => void;
  onSubmit?: (id: string) => void;
}

export function AssignmentCard({ assignment, onViewDetails, onSubmit }: AssignmentCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const isOverdue = assignment.status === "overdue";
  const isPending = assignment.status === "pending";
  const isSubmitted = assignment.status === "submitted";
  const isGraded = assignment.status === "graded";

  const getStatusIcon = () => {
    if (isGraded) return <CheckCircle className="h-4 w-4 text-green-600" />;
    if (isSubmitted) return <Clock className="h-4 w-4 text-blue-600" />;
    if (isOverdue) return <AlertCircle className="h-4 w-4 text-red-600" />;
    return <AlertCircle className="h-4 w-4 text-yellow-600" />;
  };

  const getDaysRemaining = () => {
    if (isGraded || isSubmitted) return null;
    const due = new Date(assignment.dueDate);
    const now = new Date();
    const diff = due.getTime() - now.getTime();
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    if (days < 0) return "Overdue";
    if (days === 0) return "Due today";
    return `${days} days left`;
  };

  return (
    <Card className={`border-slate-200 shadow-sm transition-all hover:shadow-md ${
      isOverdue ? "border-red-200 bg-red-50/30" : ""
    } ${isPending ? "border-yellow-200 bg-yellow-50/30" : ""}`}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <Badge className={getSubjectColorClass(assignment.subjectColor)}>
                {assignment.subject}
              </Badge>
              <Badge className={getStatusBadge(assignment.status)}>
                {assignment.status.charAt(0).toUpperCase() + assignment.status.slice(1)}
              </Badge>
              <Badge className={getPriorityBadge(assignment.priority)}>
                {assignment.priority.charAt(0).toUpperCase() + assignment.priority.slice(1)} Priority
              </Badge>
            </div>
            <CardTitle className="mt-2 text-lg font-semibold text-slate-900">
              {assignment.title}
            </CardTitle>
          </div>
          <div className="flex items-center gap-2">
            {getStatusIcon()}
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pb-3">
        <div className="space-y-3">
          {/* Quick Info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-slate-400" />
              Due: {new Date(assignment.dueDate).toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric', 
                year: 'numeric' 
              })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-slate-400" />
              {assignment.dueTime}
            </span>
            <span className="flex items-center gap-1.5">
              <User className="h-4 w-4 text-slate-400" />
              {assignment.teacher}
            </span>
            <span className="flex items-center gap-1.5">
              <FileText className="h-4 w-4 text-slate-400" />
              {assignment.totalMarks} marks
            </span>
          </div>

          {/* Days Remaining */}
          {!isGraded && !isSubmitted && (
            <div className="flex items-center gap-2">
              <span className={`text-sm font-medium ${
                isOverdue ? "text-red-600" : "text-blue-600"
              }`}>
                {getDaysRemaining()}
              </span>
            </div>
          )}

          {/* Grade Info */}
          {isGraded && assignment.obtainedMarks !== undefined && (
            <div className="rounded-lg bg-green-50 p-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-green-800">Grade</p>
                  <p className="text-lg font-bold text-green-600">
                    {assignment.obtainedMarks}/{assignment.totalMarks}
                  </p>
                </div>
                <Progress
                  value={(assignment.obtainedMarks / assignment.totalMarks) * 100}
                  className="h-2 w-32"
                />
              </div>
            </div>
          )}

          {/* Expanded Content */}
          {isExpanded && (
            <div className="space-y-3 border-t border-slate-100 pt-3">
              <div>
                <h4 className="text-sm font-medium text-slate-700">Description</h4>
                <p className="mt-1 text-sm text-slate-600">{assignment.description}</p>
              </div>

              {assignment.attachments && assignment.attachments.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium text-slate-700">Attachments</h4>
                  <div className="mt-1 flex flex-wrap gap-2">
                    {assignment.attachments.map((file, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        className="h-8 text-xs"
                      >
                        <Download className="mr-1 h-3 w-3" />
                        {file}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {assignment.feedback && (
                <div className="rounded-lg bg-blue-50 p-3">
                  <h4 className="text-sm font-medium text-blue-800">Feedback</h4>
                  <p className="mt-1 text-sm text-blue-700">{assignment.feedback}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className="flex gap-2 pt-0">
        {isPending && !isOverdue && (
          <Button
            className="bg-blue-600 hover:bg-blue-700"
            size="sm"
            onClick={() => onSubmit?.(assignment.id)}
          >
            Submit Assignment
          </Button>
        )}
        <Button
          variant="outline"
          size="sm"
          onClick={() => onViewDetails?.(assignment.id)}
        >
          View Details
        </Button>
        {isPending && isOverdue && (
          <Badge variant="destructive" className="ml-auto">
            Late Submission
          </Badge>
        )}
      </CardFooter>
    </Card>
  );
}