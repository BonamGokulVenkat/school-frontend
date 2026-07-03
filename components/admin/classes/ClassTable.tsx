"use client";

import { useState } from "react";
import { MoreVertical, Archive, Trash2, Users, BookOpen, Calendar, User } from "lucide-react";
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
import { Progress } from "@/components/ui/progress";
import { ClassRecord } from "@/lib/dummy/admin/class-management-data";
import { EditClassDialog } from "./EditClassDialog";

interface ClassTableProps {
  classes: ClassRecord[];
  onEdit?: (classData: ClassRecord) => void;
  onDelete?: (id: string) => void;
  onArchive?: (id: string) => void;
}

const statusColors = {
  active: "bg-emerald-100 text-emerald-700 border-emerald-200",
  archived: "bg-slate-100 text-slate-700 border-slate-200",
  pending: "bg-amber-100 text-amber-700 border-amber-200",
};

const statusLabels = {
  active: "Active",
  archived: "Archived",
  pending: "Pending",
};

export function ClassTable({ classes, onEdit, onDelete, onArchive }: ClassTableProps) {
  const [editingClass, setEditingClass] = useState<ClassRecord | null>(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  const handleEdit = (classData: ClassRecord) => {
    setEditingClass(classData);
    setIsEditDialogOpen(true);
  };

  const handleSaveEdit = (data: any) => {
    if (editingClass && onEdit) {
      onEdit({ ...editingClass, ...data });
    }
    setIsEditDialogOpen(false);
    setEditingClass(null);
  };

  return (
    <>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[180px]">Class</TableHead>
              <TableHead>Room Teacher</TableHead>
              <TableHead>Students</TableHead>
              <TableHead>Subjects</TableHead>
              <TableHead>Room</TableHead>
              <TableHead>Academic Year</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {classes.map((classItem) => {
              const capacityPercentage = (classItem.studentCount / classItem.maxCapacity) * 100;
              const isNearCapacity = capacityPercentage >= 85;

              return (
                <TableRow key={classItem.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium text-slate-900">{classItem.name}</p>
                      <p className="text-xs text-slate-500">
                        Grade {classItem.grade} • Section {classItem.section}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <User className="h-3.5 w-3.5 text-slate-400" />
                      <span className="text-sm">{classItem.roomTeacher}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium text-slate-700">
                          {classItem.studentCount}/{classItem.maxCapacity}
                        </span>
                        {isNearCapacity && (
                          <Badge variant="destructive" className="text-[8px] px-1 py-0">
                            Full
                          </Badge>
                        )}
                      </div>
                      <Progress
                        value={capacityPercentage}
                        className={
                          capacityPercentage >= 85
                            ? "h-1.5 w-24 bg-rose-500"
                            : capacityPercentage >= 70
                            ? "h-1.5 w-24 bg-amber-500"
                            : "h-1.5 w-24 bg-emerald-500"
                        }
                      />
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {classItem.subjects.slice(0, 2).map((subject) => (
                        <Badge key={subject} variant="secondary" className="text-xs bg-slate-100">
                          {subject}
                        </Badge>
                      ))}
                      {classItem.subjects.length > 2 && (
                        <Badge variant="secondary" className="text-xs">
                          +{classItem.subjects.length - 2}
                        </Badge>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="font-mono text-xs">
                      {classItem.room}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1 text-sm text-slate-600">
                      <Calendar className="h-3.5 w-3.5 text-slate-400" />
                      {classItem.academicYear}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={`${statusColors[classItem.status]} border`}
                    >
                      {statusLabels[classItem.status]}
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
                        <DropdownMenuItem onClick={() => handleEdit(classItem)}>
                          <BookOpen className="mr-2 h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Users className="mr-2 h-4 w-4" />
                          View Students
                        </DropdownMenuItem>
                        {classItem.status === "active" && (
                          <DropdownMenuItem onClick={() => onArchive?.(classItem.id)}>
                            <Archive className="mr-2 h-4 w-4" />
                            Archive
                          </DropdownMenuItem>
                        )}
                        <DropdownMenuItem className="text-red-600" onClick={() => onDelete?.(classItem.id)}>
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>

      {/* Edit Dialog */}
      <EditClassDialog
        open={isEditDialogOpen}
        onOpenChange={setIsEditDialogOpen}
        classData={editingClass}
        onSave={handleSaveEdit}
      />
    </>
  );
}