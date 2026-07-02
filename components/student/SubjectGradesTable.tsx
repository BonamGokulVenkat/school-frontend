import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  SubjectGrade,
  getGradeColor,
  getStatusColor,
} from "@/lib/dummy/student/results-data";

interface SubjectGradesTableProps {
  subjects: SubjectGrade[];
}

export function SubjectGradesTable({ subjects }: SubjectGradesTableProps) {
  return (
    <Card className="border-slate-200 shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">Subject-wise Marks</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Subject</TableHead>
                <TableHead>Marks</TableHead>
                <TableHead>Percentage</TableHead>
                <TableHead>Grade</TableHead>
                <TableHead>Teacher</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {subjects.map((subject) => (
                <TableRow key={subject.id}>
                  <TableCell className="font-medium text-slate-900">
                    {subject.subject}
                  </TableCell>
                  <TableCell>
                    {subject.marks}/{subject.total}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Progress
                        value={subject.percentage}
                        className={`h-2 w-20 bg-slate-100 ${
                          subject.percentage >= 80
                            ? "[&>div]:bg-green-500"
                            : subject.percentage >= 70
                            ? "[&>div]:bg-yellow-500"
                            : "[&>div]:bg-red-500"
                        }`}
                      />
                      <span className="text-sm font-medium">
                        {subject.percentage}%
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={getGradeColor(subject.grade)}>
                      {subject.grade}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm text-slate-600">
                    {subject.teacher}
                  </TableCell>
                  <TableCell>
                    <span
                      className={`text-sm font-medium ${getStatusColor(
                        subject.status
                      )}`}
                    >
                      {subject.status === "good"
                        ? "✅ Good"
                        : subject.status === "warning"
                        ? "⚠️ Needs Improvement"
                        : "❌ Critical"}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}