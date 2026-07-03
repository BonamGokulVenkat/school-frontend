"use client";

import { MoreVertical, Edit, UserCheck, UserX, Calendar } from "lucide-react";
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { TeacherRecord } from "@/lib/dummy/admin/teacher-management-data";

interface TeacherTableProps {
  teachers: TeacherRecord[];
}

const statusColors = {
  active: "bg-emerald-100 text-emerald-700 border-emerald-200",
  inactive: "bg-slate-100 text-slate-700 border-slate-200",
  "on-leave": "bg-amber-100 text-amber-700 border-amber-200",
};

const statusLabels = {
  active: "Active",
  inactive: "Inactive",
  "on-leave": "On Leave",
};

export function TeacherTable({ teachers }: TeacherTableProps) {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[250px]">Teacher</TableHead>
            <TableHead>Subjects</TableHead>
            <TableHead>Classes</TableHead>
            <TableHead>Experience</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {teachers.map((teacher) => (
            <TableRow key={teacher.id}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10 border-2 border-slate-100">
                    <AvatarImage src={teacher.image} />
                    <AvatarFallback className="bg-blue-100 text-blue-700 text-xs font-bold">
                      {getInitials(teacher.name)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-slate-900">{teacher.name}</p>
                    <p className="text-xs text-slate-500">{teacher.email}</p>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  {teacher.subjects.slice(0, 2).map((subject, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs bg-slate-100">
                      {subject}
                    </Badge>
                  ))}
                  {teacher.subjects.length > 2 && (
                    <Badge variant="secondary" className="text-xs">
                      +{teacher.subjects.length - 2}
                    </Badge>
                  )}
                </div>
              </TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  {teacher.classes.map((cls, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {cls}
                    </Badge>
                  ))}
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Calendar className="h-3.5 w-3.5 text-slate-400" />
                  {teacher.experience}
                </div>
              </TableCell>
              <TableCell>
                <Badge
                  variant="outline"
                  className={`${statusColors[teacher.status]} border`}
                >
                  {statusLabels[teacher.status]}
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
                    <DropdownMenuItem>
                      <Edit className="mr-2 h-4 w-4" />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <UserCheck className="mr-2 h-4 w-4" />
                      Change Status
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600">
                      <UserX className="mr-2 h-4 w-4" />
                      Remove
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}