import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { teacherProfileData } from "@/lib/dummy/teacher/teacher-profile-data";

interface AssignedClassesCardProps {
  assignments: typeof teacherProfileData.assignments;
}

export function AssignedClassesCard({ assignments }: AssignedClassesCardProps) {
  return (
    <Card className="border-slate-200 bg-white overflow-hidden">
      <CardHeader>
        <CardTitle className="text-base font-semibold text-slate-950">Active Classroom Allocations</CardTitle>
      </CardHeader>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-slate-50">
              <TableHead>Class Allocation</TableHead>
              <TableHead>Subject Assignment</TableHead>
              <TableHead className="text-right">Load Share (Hours/Week)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {assignments.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium text-slate-950">{item.class}</TableCell>
                <TableCell className="text-slate-600">{item.subject}</TableCell>
                <TableCell className="text-right font-semibold text-slate-700">{item.hoursPerWeek} hrs</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
}