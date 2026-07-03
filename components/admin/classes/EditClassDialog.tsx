"use client";

import { useState, useEffect } from "react";
import { Edit } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import { ClassRecord } from "@/lib/dummy/admin/class-management-data";
import {
  gradeOptions,
  sectionOptions,
  teacherOptions,
  statusOptions,
} from "@/lib/dummy/admin/class-management-data";

interface EditClassDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  classData: ClassRecord | null;
  onSave?: (data: unknown) => void;
}

export function EditClassDialog({ open, onOpenChange, classData, onSave }: EditClassDialogProps) {
  const defaultFormData = {
    grade: "",
    section: "",
    roomTeacher: "",
    room: "",
    maxCapacity: "",
    academicYear: "",
    status: "active",
    subjects: [] as string[],
  };

  const createFormDataFromClass = (data: ClassRecord) => ({
    grade: data.grade,
    section: data.section,
    roomTeacher: data.roomTeacher,
    room: data.room,
    maxCapacity: data.maxCapacity.toString(),
    academicYear: data.academicYear,
    status: data.status,
    subjects: [...data.subjects],
  });

  const [formData, setFormData] = useState(() =>
    classData && open ? createFormDataFromClass(classData) : defaultFormData
  );

  const [subjectInput, setSubjectInput] = useState("");

  const handleDialogOpenChange = (nextOpen: boolean) => {
    if (nextOpen && classData) {
      setFormData(createFormDataFromClass(classData));
    }
    onOpenChange(nextOpen);
  };

  const handleAddSubject = () => {
    if (subjectInput && !formData.subjects.includes(subjectInput)) {
      setFormData({
        ...formData,
        subjects: [...formData.subjects, subjectInput],
      });
      setSubjectInput("");
    }
  };

  const handleRemoveSubject = (subject: string) => {
    setFormData({
      ...formData,
      subjects: formData.subjects.filter((s) => s !== subject),
    });
  };

  const handleSubmit = () => {
    if (onSave) {
      onSave(formData);
    }
    onOpenChange(false);
  };

  if (!classData) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Edit className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Edit Class</DialogTitle>
          <DialogDescription>
            Update the class details and configuration.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Grade</Label>
              <Select
                value={formData.grade}
                onValueChange={(value) => setFormData({ ...formData, grade: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select grade" />
                </SelectTrigger>
                <SelectContent>
                  {gradeOptions.map((grade) => (
                    <SelectItem key={grade.value} value={grade.value}>
                      {grade.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Section</Label>
              <Select
                value={formData.section}
                onValueChange={(value) => setFormData({ ...formData, section: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select section" />
                </SelectTrigger>
                <SelectContent>
                  {sectionOptions.map((section) => (
                    <SelectItem key={section.value} value={section.value}>
                      {section.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Room Teacher</Label>
            <Select
              value={formData.roomTeacher}
              onValueChange={(value) => setFormData({ ...formData, roomTeacher: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Assign room teacher" />
              </SelectTrigger>
              <SelectContent>
                {teacherOptions.map((teacher) => (
                  <SelectItem key={teacher.value} value={teacher.value}>
                    {teacher.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Room Number</Label>
              <Input
                placeholder="e.g., Room 201"
                value={formData.room}
                onChange={(e) => setFormData({ ...formData, room: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label>Max Capacity</Label>
              <Input
                type="number"
                placeholder="35"
                value={formData.maxCapacity}
                onChange={(e) =>
                  setFormData({ ...formData, maxCapacity: e.target.value })
                }
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Academic Year</Label>
              <Select
                value={formData.academicYear}
                onValueChange={(value) =>
                  setFormData({ ...formData, academicYear: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select academic year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2026-27">2026-27</SelectItem>
                  <SelectItem value="2025-26">2025-26</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Status</Label>
              <Select
                value={formData.status}
                onValueChange={(value) => setFormData({ ...formData, status: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  {statusOptions.map((status) => (
                    <SelectItem key={status.value} value={status.value}>
                      {status.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Subjects</Label>
            <div className="flex gap-2">
              <Input
                placeholder="Enter subject name"
                value={subjectInput}
                onChange={(e) => setSubjectInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleAddSubject();
                  }
                }}
              />
              <Button type="button" variant="outline" onClick={handleAddSubject}>
                Add
              </Button>
            </div>
            <div className="flex flex-wrap gap-1 mt-2">
              {formData.subjects.map((subject) => (
                <Badge key={subject} variant="secondary" className="flex items-center gap-1">
                  {subject}
                  <button
                    onClick={() => handleRemoveSubject(subject)}
                    className="ml-1 hover:text-red-600"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700" onClick={handleSubmit}>
            Save Changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}