"use client";

import { MoreVertical, Archive, Trash2, BookOpen, Users, Clock } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SubjectRecord } from "@/lib/dummy/admin/subject-management-data";
import { EditSubjectDialog } from "./EditSubjectDialog";
import { useState } from "react";

interface SubjectTableProps {
  subjects: SubjectRecord[];
  onEdit?: (subject: SubjectRecord) => void;
  onDelete?: (id: string) => void;
  onArchive?: (id: string) => void;
}

const statusColors = {
  active: "bg-emerald-100 text-emerald-700 border-emerald-200",
  archived: "bg-slate-100 text-slate-700 border-slate-200",
  draft: "bg-amber-100 text-amber-700 border-amber-200",
};

const statusLabels = {
  active: "Active",
  archived: "Archived",
  draft: "Draft",
};

const categoryColors = {
  core: "bg-blue-100 text-blue-700",
  elective: "bg-purple-100 text-purple-700",
  vocational: "bg-orange-100 text-orange-700",
  "co-curricular": "bg-pink-100 text-pink-700",
};

const categoryLabels = {
  core: "Core",
  elective: "Elective",
  vocational: "Vocational",
  "co-curricular": "Co-Curricular",
};

export function SubjectTable({ subjects, onEdit, onDelete, onArchive }: SubjectTableProps) {
  const [editingSubject, setEditingSubject] = useState<SubjectRecord | null>(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  const handleEdit = (subject: SubjectRecord) => {
    setEditingSubject(subject);
    setIsEditDialogOpen(true);
  };

  const handleSaveEdit = (data: any) => {
    if (editingSubject && onEdit) {
      onEdit({ ...editingSubject, ...data });
    }
    setIsEditDialogOpen(false);
    setEditingSubject(null);
  };

  return (
    <>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Subject</TableHead>
              <TableHead>Code</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Grades</TableHead>
              <TableHead>Teachers</TableHead>
              <TableHead>Periods/Week</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {subjects.map((subject) => (
              <TableRow key={subject.id}>
                <TableCell>
                  <div>
                    <p className="font-medium text-slate-900">{subject.name}</p>
                    <p className="text-xs text-slate-500 truncate max-w-[150px]">
                      {subject.description}
                    </p>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className="font-mono text-xs">
                    {subject.code}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge
                    variant="secondary"
                    className={`${categoryColors[subject.category]} text-xs`}
                  >
                    {categoryLabels[subject.category]}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {subject.grades.slice(0, 2).map((grade) => (
                      <Badge key={grade} variant="outline" className="text-xs">
                        Grade {grade}
                      </Badge>
                    ))}
                    {subject.grades.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{subject.grades.length - 2}
                      </Badge>
                    )}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {subject.teachers.slice(0, 2).map((teacher) => (
                      <Badge key={teacher} variant="secondary" className="text-xs bg-slate-100">
                        {teacher.split(" ").slice(0, 2).join(" ")}
                      </Badge>
                    ))}
                    {subject.teachers.length > 2 && (
                      <Badge variant="secondary" className="text-xs">
                        +{subject.teachers.length - 2}
                      </Badge>
                    )}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1 text-sm text-slate-600">
                    <Clock className="h-3.5 w-3.5 text-slate-400" />
                    {subject.periodsPerWeek}
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={`${statusColors[subject.status]} border`}
                  >
                    {statusLabels[subject.status]}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => handleEdit(subject)}>
                        <BookOpen className="mr-2 h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      {subject.status === "active" && (
                        <DropdownMenuItem onClick={() => onArchive?.(subject.id)}>
                          <Archive className="mr-2 h-4 w-4" />
                          Archive
                        </DropdownMenuItem>
                      )}
                      <DropdownMenuItem className="text-red-600" onClick={() => onDelete?.(subject.id)}>
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Edit Dialog */}
      <EditSubjectDialog
        open={isEditDialogOpen}
        onOpenChange={setIsEditDialogOpen}
        subject={editingSubject}
        onSave={handleSaveEdit}
      />
    </>
  );
}