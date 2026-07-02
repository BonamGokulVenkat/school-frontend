"use client";

import { ChevronRight, Download, Search } from "lucide-react";
import { useMemo, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Submission,
  getSubmissionStatusColor,
} from "@/lib/dummy/teacher/teacher-assignments-data";

interface SubmissionsListProps {
  assignmentTitle: string;
  submissions: Submission[];
  onViewSubmission: (id: string) => void;
  onGrade: (id: string) => void;
  onBack: () => void;
}

export function SubmissionsList({
  assignmentTitle,
  submissions,
  onViewSubmission,
  onGrade,
  onBack,
}: SubmissionsListProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSubmissions = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    if (!query) {
      return submissions;
    }

    return submissions.filter((submission) => {
      return (
        submission.studentName.toLowerCase().includes(query) ||
        submission.rollNo.toLowerCase().includes(query) ||
        submission.status.toLowerCase().includes(query)
      );
    });
  }, [searchQuery, submissions]);

  return (
    <Card className="border-slate-200 bg-white">
      <CardHeader className="space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Button type="button" variant="ghost" className="-ml-3 mb-2" onClick={onBack}>
              ← Back to assignments
            </Button>
            <CardTitle className="text-xl text-slate-950">Submissions</CardTitle>
            <p className="mt-1 text-sm text-slate-500">{assignmentTitle}</p>
          </div>

          <div className="relative w-full sm:max-w-xs">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search submissions..."
              className="pl-9"
            />
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="overflow-hidden rounded-xl border border-slate-200">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[850px] text-sm">
              <thead className="bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="px-4 py-3">Student</th>
                  <th className="px-4 py-3">Roll No</th>
                  <th className="px-4 py-3">Submitted</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Marks</th>
                  <th className="px-4 py-3 text-right">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {filteredSubmissions.map((submission) => (
                  <tr key={submission.id} className="bg-white">
                    <td className="px-4 py-3">
                      <div>
                        <p className="font-medium text-slate-950">{submission.studentName}</p>
                        <p className="text-xs text-slate-500">{submission.studentId}</p>
                      </div>
                    </td>

                    <td className="px-4 py-3 text-slate-600">{submission.rollNo}</td>

                    <td className="px-4 py-3 text-slate-600">
                      {submission.submittedDate ? formatDate(submission.submittedDate) : "-"}
                    </td>

                    <td className="px-4 py-3">
                      <Badge className={getSubmissionStatusColor(submission.status)}>
                        {capitalize(submission.status)}
                      </Badge>
                    </td>

                    <td className="px-4 py-3 text-slate-600">
                      {submission.marks !== undefined ? (
                        <span className="font-medium text-slate-950">
                          {submission.marks}/{submission.totalMarks}
                        </span>
                      ) : (
                        "-"
                      )}
                    </td>

                    <td className="px-4 py-3">
                      <div className="flex justify-end gap-2">
                        {submission.status === "submitted" || submission.status === "late" ? (
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => onGrade(submission.id)}
                          >
                            Grade
                          </Button>
                        ) : (
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => onViewSubmission(submission.id)}
                          >
                            View
                            <ChevronRight className="ml-1 h-4 w-4" />
                          </Button>
                        )}

                        {submission.attachment && (
                          <Button type="button" variant="ghost" size="icon">
                            <Download className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredSubmissions.length === 0 && (
            <div className="py-10 text-center text-sm text-slate-500">No submissions found.</div>
          )}
        </div>
      </CardContent>
    </Card>
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