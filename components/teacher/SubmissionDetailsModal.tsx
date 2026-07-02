"use client";

import { FormEvent, useEffect, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Submission,
  getSubmissionStatusColor,
} from "@/lib/dummy/teacher/teacher-assignments-data";

interface SubmissionDetailsModalProps {
  open: boolean;
  submission: Submission | null;
  mode: "view" | "grade";
  onClose: () => void;
  onGrade: (id: string, marks: number, feedback: string) => void;
}

export function SubmissionDetailsModal({
  open,
  submission,
  mode,
  onClose,
  onGrade,
}: SubmissionDetailsModalProps) {
  const [marks, setMarks] = useState("");
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    if (submission) {
      setMarks(submission.marks?.toString() ?? "");
      setFeedback(submission.feedback ?? "");
    }
  }, [submission]);

  if (!submission) {
    return null;
  }

  const currentSubmission = submission;
  const isGradeMode = mode === "grade";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const numericMarks = Number(marks);

    if (
      Number.isNaN(numericMarks) ||
      numericMarks < 0 ||
      numericMarks > currentSubmission.totalMarks
    ) {
      return;
    }

    onGrade(currentSubmission.id, numericMarks, feedback);
  }

  return (
    <Dialog open={open} onOpenChange={(value) => !value && onClose()}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>{isGradeMode ? "Grade Submission" : "Submission Details"}</DialogTitle>
        </DialogHeader>

        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="font-semibold text-slate-950">{currentSubmission.studentName}</p>
              <p className="text-sm text-slate-500">
                Roll No: {currentSubmission.rollNo} • ID: {currentSubmission.studentId}
              </p>
            </div>

            <Badge className={getSubmissionStatusColor(currentSubmission.status)}>
              {capitalize(currentSubmission.status)}
            </Badge>
          </div>

          <div className="mt-4 grid gap-2 text-sm text-slate-600">
            <div className="flex justify-between">
              <span>Submitted Date</span>
              <span className="font-medium text-slate-800">
                {currentSubmission.submittedDate
                  ? formatDate(currentSubmission.submittedDate)
                  : "-"}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Attachment</span>
              <span className="font-medium text-slate-800">
                {currentSubmission.attachment ?? "No attachment"}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Total Marks</span>
              <span className="font-medium text-slate-800">
                {currentSubmission.totalMarks}
              </span>
            </div>
          </div>
        </div>

        {isGradeMode ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="marks">Marks</Label>
              <Input
                id="marks"
                type="number"
                value={marks}
                onChange={(event) => setMarks(event.target.value)}
                max={currentSubmission.totalMarks}
                min={0}
                placeholder={`Out of ${currentSubmission.totalMarks}`}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="feedback">Feedback</Label>
              <Textarea
                id="feedback"
                value={feedback}
                onChange={(event) => setFeedback(event.target.value)}
                placeholder="Write feedback for the student..."
                rows={4}
              />
            </div>

            <DialogFooter>
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit">Save Grade</Button>
            </DialogFooter>
          </form>
        ) : (
          <>
            <div className="space-y-2">
              <Label>Marks</Label>
              <div className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700">
                {currentSubmission.marks !== undefined
                  ? `${currentSubmission.marks}/${currentSubmission.totalMarks}`
                  : "Not graded yet"}
              </div>
            </div>

            <div className="space-y-2">
              <Label>Feedback</Label>
              <div className="min-h-24 rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700">
                {currentSubmission.feedback || "No feedback added yet."}
              </div>
            </div>

            <DialogFooter>
              <Button type="button" onClick={onClose}>
                Close
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
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