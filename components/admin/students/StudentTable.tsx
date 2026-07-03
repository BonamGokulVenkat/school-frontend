"use client";

import { MoreVertical, Edit, UserCheck, UserX, GraduationCap, Calendar, Mail, Phone } from "lucide-react";
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
import { Progress } from "@/components/ui/progress";
import { StudentRecord } from "@/lib/dummy/admin/student-management-data";

interface StudentTableProps {
  students: StudentRecord[];
}

const statusColors = {
  active: "bg-emerald-100 text-emerald-700 border-emerald-200",
  inactive: "bg-slate-100 text-slate-700 border-slate-200",
  graduated: "bg-purple-100 text-purple-700 border-purple-200",
  transferred: "bg-amber-100 text-amber-700 border-amber-200",
};

const statusLabels = {
  active: "Active",
  inactive: "Inactive",
  graduated: "Graduated",
  transferred: "Transferred",
};

const gradeColors = {
  "A+": "bg-emerald-100 text-emerald-700",
  "A": "bg-emerald-50 text-emerald-600",
  "A-": "bg-blue-50 text-blue-600",
  "B+": "bg-amber-50 text-amber-600",
  "B": "bg-amber-50 text-amber-600",
  "B-": "bg-orange-50 text-orange-600",
  "C+": "bg-rose-50 text-rose-600",
  "C": "bg-rose-100 text-rose-700",
};

export function StudentTable({ students }: StudentTableProps) {
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
            <TableHead className="w-[220px]">Student</TableHead>
            <TableHead>Class</TableHead>
            <TableHead>Roll No</TableHead>
            <TableHead>Guardian</TableHead>
            <TableHead>Attendance</TableHead>
            <TableHead>Grade</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {students.map((student) => (
            <TableRow key={student.id}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10 border-2 border-slate-100">
                    <AvatarImage src={student.image} />
                    <AvatarFallback className="bg-blue-100 text-blue-700 text-xs font-bold">
                      {getInitials(student.name)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-slate-900">{student.name}</p>
                    <div className="flex items-center gap-1 text-xs text-slate-500">
                      <Mail className="h-3 w-3" />
                      <span className="truncate max-w-[120px]">{student.email}</span>
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <Badge variant="outline" className="border-blue-200 bg-blue-50 text-blue-700">
                  {student.class}
                </Badge>
              </TableCell>
              <TableCell className="font-mono text-sm text-slate-600">
                {student.rollNo}
              </TableCell>
              <TableCell>
                <div>
                  <p className="text-sm text-slate-900">{student.guardian}</p>
                  <div className="flex items-center gap-1 text-xs text-slate-500">
                    <Phone className="h-3 w-3" />
                    <span>{student.guardianContact}</span>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className="w-24">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-slate-700">{student.attendance}%</span>
                  </div>
                  <Progress
                    value={student.attendance}
                    className={`h-1.5 bg-slate-100 [&>div]:${
                      student.attendance >= 80
                        ? "bg-emerald-500"
                        : student.attendance >= 70
                        ? "bg-amber-500"
                        : "bg-rose-500"
                    }`}
                  />
                </div>
              </TableCell>
              <TableCell>
                <Badge
                  variant="secondary"
                  className={`${gradeColors[student.grade as keyof typeof gradeColors] || "bg-slate-100"} text-xs font-bold`}
                >
                  {student.grade}
                </Badge>
              </TableCell>
              <TableCell>
                <Badge
                  variant="outline"
                  className={`${statusColors[student.status]} border`}
                >
                  {statusLabels[student.status]}
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
                    <DropdownMenuItem>
                      <GraduationCap className="mr-2 h-4 w-4" />
                      View Report
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