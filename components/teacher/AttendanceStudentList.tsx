"use client";

import { useState } from "react";
import { Search } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { StudentAttendance, getStatusColor, getStatusBadge } from "@/lib/dummy/teacher/attendance-data";

interface AttendanceStudentListProps {
  students: StudentAttendance[];
  onStatusChange: (studentId: string, status: "present" | "absent" | "late") => void;
  onBulkAction: (status: "present" | "absent" | "late") => void;
}

export function AttendanceStudentList({
  students,
  onStatusChange,
  onBulkAction,
}: AttendanceStudentListProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStudents, setSelectedStudents] = useState<string[]>([]);

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.rollNo.includes(searchQuery)
  );

  const toggleStudentSelection = (studentId: string) => {
    setSelectedStudents((prev) =>
      prev.includes(studentId)
        ? prev.filter((id) => id !== studentId)
        : [...prev, studentId]
    );
  };

  const toggleAllStudents = () => {
    if (selectedStudents.length === filteredStudents.length) {
      setSelectedStudents([]);
    } else {
      setSelectedStudents(filteredStudents.map((s) => s.id));
    }
  };

  const handleBulkAction = (status: "present" | "absent" | "late") => {
    selectedStudents.forEach((id) => onStatusChange(id, status));
    setSelectedStudents([]);
  };

  const getStatusButtonClass = (studentStatus: string, status: string) => {
    if (studentStatus === status) {
      return "bg-blue-600 text-white hover:bg-blue-700";
    }
    return "bg-slate-100 text-slate-600 hover:bg-slate-200";
  };

  return (
    <Card className="border-slate-200 shadow-sm">
      <CardHeader className="pb-3">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <CardTitle className="text-lg">Student List</CardTitle>
          
          {/* Bulk Actions */}
          {selectedStudents.length > 0 && (
            <div className="flex items-center gap-2">
              <span className="text-sm text-slate-500">
                {selectedStudents.length} selected
              </span>
              <Button
                size="sm"
                className="bg-green-600 hover:bg-green-700"
                onClick={() => handleBulkAction("present")}
              >
                ✅ Present
              </Button>
              <Button
                size="sm"
                variant="destructive"
                onClick={() => handleBulkAction("absent")}
              >
                ❌ Absent
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-yellow-200 bg-yellow-50 text-yellow-700 hover:bg-yellow-100"
                onClick={() => handleBulkAction("late")}
              >
                ⏰ Late
              </Button>
            </div>
          )}
        </div>

        {/* Search */}
        <div className="relative mt-2">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
          <Input
            placeholder="Search by name or roll number..."
            className="border-slate-200 pl-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </CardHeader>

      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="px-3 py-2 text-left">
                  <input
                    type="checkbox"
                    checked={
                      filteredStudents.length > 0 &&
                      selectedStudents.length === filteredStudents.length
                    }
                    onChange={toggleAllStudents}
                    className="rounded border-slate-300"
                  />
                </th>
                <th className="px-3 py-2 text-left font-medium text-slate-600">
                  Roll No
                </th>
                <th className="px-3 py-2 text-left font-medium text-slate-600">
                  Student Name
                </th>
                <th className="px-3 py-2 text-center font-medium text-slate-600">
                  Status
                </th>
                <th className="px-3 py-2 text-center font-medium text-slate-600">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student) => (
                <tr
                  key={student.id}
                  className="border-b border-slate-100 transition-colors hover:bg-slate-50"
                >
                  <td className="px-3 py-3">
                    <input
                      type="checkbox"
                      checked={selectedStudents.includes(student.id)}
                      onChange={() => toggleStudentSelection(student.id)}
                      className="rounded border-slate-300"
                    />
                  </td>
                  <td className="px-3 py-3 font-medium text-slate-700">
                    {student.rollNo}
                  </td>
                  <td className="px-3 py-3">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={student.avatar} alt={student.name} />
                        <AvatarFallback className="bg-blue-100 text-blue-600 text-xs">
                          {student.name.split(" ").map((n) => n[0]).join("")}
                        </AvatarFallback>
                      </Avatar>
                      <span className="font-medium text-slate-900">
                        {student.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-3 py-3 text-center">
                    <Badge className={getStatusColor(student.status)}>
                      {getStatusBadge(student.status)}
                    </Badge>
                  </td>
                  <td className="px-3 py-3">
                    <div className="flex justify-center gap-1">
                      <Button
                        size="sm"
                        variant="outline"
                        className={`h-7 w-7 p-0 text-xs ${getStatusButtonClass(
                          student.status,
                          "present"
                        )}`}
                        onClick={() => onStatusChange(student.id, "present")}
                      >
                        P
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className={`h-7 w-7 p-0 text-xs ${getStatusButtonClass(
                          student.status,
                          "absent"
                        )}`}
                        onClick={() => onStatusChange(student.id, "absent")}
                      >
                        A
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className={`h-7 w-7 p-0 text-xs ${getStatusButtonClass(
                          student.status,
                          "late"
                        )}`}
                        onClick={() => onStatusChange(student.id, "late")}
                      >
                        L
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredStudents.length === 0 && (
          <div className="py-8 text-center text-sm text-slate-500">
            No students found matching your search
          </div>
        )}
      </CardContent>
    </Card>
  );
}