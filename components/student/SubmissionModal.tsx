"use client";

import { useState } from "react";
import { X, Upload, File, Loader2 } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Assignment } from "@/lib/dummy/student/assignments-data";

interface SubmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { notes: string; file?: File }) => void;
  assignment: Assignment | null;
}

export function SubmissionModal({ isOpen, onClose, onSubmit, assignment }: SubmissionModalProps) {
  const [notes, setNotes] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!assignment) return null;

  const handleSubmit = async () => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    onSubmit({ notes, file: file || undefined });
    setIsSubmitting(false);
    onClose();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Submit Assignment</DialogTitle>
          <DialogDescription>
            Submit your assignment for&quot;{assignment.title} &quot;
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="rounded-lg bg-slate-50 p-3 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-500">Subject</span>
              <span className="font-medium text-slate-900">{assignment.subject}</span>
            </div>
            <div className="flex justify-between mt-1">
              <span className="text-slate-500">Due Date</span>
              <span className="font-medium text-slate-900">
                {new Date(assignment.dueDate).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>
            </div>
            <div className="flex justify-between mt-1">
              <span className="text-slate-500">Total Marks</span>
              <span className="font-medium text-slate-900">{assignment.totalMarks}</span>
            </div>
          </div>

          <div>
            <Label htmlFor="notes">Submission Notes</Label>
            <Textarea
              id="notes"
              placeholder="Add any notes for the teacher..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="mt-1"
              rows={3}
            />
          </div>

          <div>
            <Label htmlFor="file">Upload File</Label>
            <div className="mt-1 flex items-center gap-4">
              <Input
                id="file"
                type="file"
                onChange={handleFileChange}
                className="flex-1"
                accept=".pdf,.doc,.docx,.ppt,.pptx,.zip"
              />
              {file && (
                <span className="text-sm text-slate-600 flex items-center gap-1">
                  <File className="h-4 w-4" />
                  {file.name}
                </span>
              )}
            </div>
            <p className="mt-1 text-xs text-slate-500">
              Accepted formats: PDF, DOC, DOCX, PPT, PPTX, ZIP (Max 10MB)
            </p>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button
            className="bg-blue-600 hover:bg-blue-700"
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <Upload className="mr-2 h-4 w-4" />
                Submit Assignment
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}