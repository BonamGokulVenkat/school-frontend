"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AtRiskStudent } from "@/lib/dummy/teacher/teacher-analytics-data";

interface AtRiskStudentsTableProps {
  students: AtRiskStudent[];
  onToggleRemedial: (id: string) => void;
}

export function AtRiskStudentsTable({ students, onToggleRemedial }: AtRiskStudentsTableProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden">
      <div className="border-b border-slate-200 p-4">
        <h3 className="text-base font-semibold text-slate-950">Target Early-Intervention Alert Log</h3>
        <p className="text-xs text-slate-500">Flags students dropping below combined safety benchmarks for grades and session attendance.</p>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-slate-50">
              <TableHead>Student</TableHead>
              <TableHead>Class Context</TableHead>
              <TableHead>Target Subject</TableHead>
              <TableHead>Attendance</TableHead>
              <TableHead>Grade Mean</TableHead>
              <TableHead>Risk Severity</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {students.map((student) => (
              <TableRow key={student.id}>
                <TableCell>
                  <div>
                    <p className="font-medium text-slate-950">{student.name}</p>
                    <p className="text-xs text-slate-400">{student.rollNo}</p>
                  </div>
                </TableCell>
                <TableCell className="text-sm text-slate-600">{student.className}</TableCell>
                <TableCell className="text-sm text-slate-600">{student.subject}</TableCell>
                <TableCell className={`text-sm font-semibold ${student.attendancePct < 75 ? "text-rose-600" : "text-amber-600"}`}>
                  {student.attendancePct}%
                </TableCell>
                <TableCell className="text-sm font-semibold text-slate-950">{student.averageMarksPct}%</TableCell>
                <TableCell>
                  <Badge
                    className={
                      student.riskLevel === "High"
                        ? "bg-rose-100 text-rose-700 border-rose-200 shadow-none"
                        : student.riskLevel === "Medium"
                        ? "bg-amber-100 text-amber-700 border-amber-200 shadow-none"
                        : "bg-blue-100 text-blue-700 border-blue-200 shadow-none"
                    }
                  >
                    {student.riskLevel}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button
                    size="sm"
                    variant={student.remedialAssigned ? "secondary" : "default"}
                    onClick={() => onToggleRemedial(student.id)}
                  >
                    {student.remedialAssigned ? "Enrolled" : "Assign Plan"}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}