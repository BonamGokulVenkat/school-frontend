"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
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
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import { gradeOptions, categoryOptions, statusOptions } from "@/lib/dummy/admin/subject-management-data";

interface AddSubjectDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAdd?: (data: unknown) => void;
}

export function AddSubjectDialog({ open, onOpenChange, onAdd }: AddSubjectDialogProps) {
  const [formData, setFormData] = useState({
    code: "",
    name: "",
    category: "",
    grades: [] as string[],
    teachers: [] as string[],
    description: "",
    credits: "",
    periodsPerWeek: "",
    status: "active",
    textbooks: [] as string[],
    syllabus: "",
  });

  const [gradeInput, setGradeInput] = useState("");
  const [teacherInput, setTeacherInput] = useState("");
  const [textbookInput, setTextbookInput] = useState("");

  const handleAddGrade = () => {
    if (gradeInput && !formData.grades.includes(gradeInput)) {
      setFormData({
        ...formData,
        grades: [...formData.grades, gradeInput],
      });
      setGradeInput("");
    }
  };

  const handleRemoveGrade = (grade: string) => {
    setFormData({
      ...formData,
      grades: formData.grades.filter((g) => g !== grade),
    });
  };

  const handleAddTeacher = () => {
    if (teacherInput && !formData.teachers.includes(teacherInput)) {
      setFormData({
        ...formData,
        teachers: [...formData.teachers, teacherInput],
      });
      setTeacherInput("");
    }
  };

  const handleRemoveTeacher = (teacher: string) => {
    setFormData({
      ...formData,
      teachers: formData.teachers.filter((t) => t !== teacher),
    });
  };

  const handleAddTextbook = () => {
    if (textbookInput && !formData.textbooks.includes(textbookInput)) {
      setFormData({
        ...formData,
        textbooks: [...formData.textbooks, textbookInput],
      });
      setTextbookInput("");
    }
  };

  const handleRemoveTextbook = (textbook: string) => {
    setFormData({
      ...formData,
      textbooks: formData.textbooks.filter((t) => t !== textbook),
    });
  };

  const handleSubmit = () => {
    if (onAdd) {
      onAdd(formData);
    }
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="mr-2 h-4 w-4" />
          Add Subject
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Add New Subject</DialogTitle>
          <DialogDescription>
            Create a new subject with curriculum details and teacher assignments.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Subject Code</Label>
              <Input
                placeholder="e.g., MATH-101"
                value={formData.code}
                onChange={(e) => setFormData({ ...formData, code: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label>Subject Name</Label>
              <Input
                placeholder="e.g., Mathematics"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Category</Label>
              <Select
                value={formData.category}
                onValueChange={(value) => setFormData({ ...formData, category: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categoryOptions.map((cat) => (
                    <SelectItem key={cat.value} value={cat.value}>
                      {cat.label}
                    </SelectItem>
                  ))}
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

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Credits</Label>
              <Input
                type="number"
                placeholder="e.g., 4"
                value={formData.credits}
                onChange={(e) => setFormData({ ...formData, credits: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label>Periods Per Week</Label>
              <Input
                type="number"
                placeholder="e.g., 5"
                value={formData.periodsPerWeek}
                onChange={(e) =>
                  setFormData({ ...formData, periodsPerWeek: e.target.value })
                }
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Grades</Label>
            <div className="flex gap-2">
              <Select value={gradeInput} onValueChange={setGradeInput}>
                <SelectTrigger className="flex-1">
                  <SelectValue placeholder="Select grade" />
                </SelectTrigger>
                <SelectContent>
                  {gradeOptions.map((grade) => (
                    <SelectItem key={grade} value={grade}>
                      Grade {grade}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button type="button" variant="outline" onClick={handleAddGrade}>
                Add
              </Button>
            </div>
            <div className="flex flex-wrap gap-1 mt-2">
              {formData.grades.map((grade) => (
                <Badge key={grade} variant="secondary" className="flex items-center gap-1">
                  Grade {grade}
                  <button
                    onClick={() => handleRemoveGrade(grade)}
                    className="ml-1 hover:text-red-600"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label>Teachers</Label>
            <div className="flex gap-2">
              <Input
                placeholder="Enter teacher name"
                value={teacherInput}
                onChange={(e) => setTeacherInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleAddTeacher();
                  }
                }}
              />
              <Button type="button" variant="outline" onClick={handleAddTeacher}>
                Add
              </Button>
            </div>
            <div className="flex flex-wrap gap-1 mt-2">
              {formData.teachers.map((teacher) => (
                <Badge key={teacher} variant="secondary" className="flex items-center gap-1">
                  {teacher}
                  <button
                    onClick={() => handleRemoveTeacher(teacher)}
                    className="ml-1 hover:text-red-600"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label>Description</Label>
            <Textarea
              placeholder="Enter subject description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={2}
            />
          </div>

          <div className="space-y-2">
            <Label>Textbooks</Label>
            <div className="flex gap-2">
              <Input
                placeholder="Enter textbook name"
                value={textbookInput}
                onChange={(e) => setTextbookInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleAddTextbook();
                  }
                }}
              />
              <Button type="button" variant="outline" onClick={handleAddTextbook}>
                Add
              </Button>
            </div>
            <div className="flex flex-wrap gap-1 mt-2">
              {formData.textbooks.map((textbook) => (
                <Badge key={textbook} variant="outline" className="flex items-center gap-1">
                  {textbook}
                  <button
                    onClick={() => handleRemoveTextbook(textbook)}
                    className="ml-1 hover:text-red-600"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label>Syllabus</Label>
            <Textarea
              placeholder="Enter syllabus details"
              value={formData.syllabus}
              onChange={(e) => setFormData({ ...formData, syllabus: e.target.value })}
              rows={2}
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700" onClick={handleSubmit}>
            Create Subject
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}