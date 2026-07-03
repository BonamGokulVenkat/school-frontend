import { User, BookOpen, Award, TrendingUp, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Child } from "@/lib/dummy/parent/parent-dashboard-data";

interface ChildOverviewProps {
  children: Child[];
}

export function ChildOverview({ children }: ChildOverviewProps) {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="space-y-4">
      {children.map((child) => (
        <Card key={child.id} className="border-slate-200 shadow-sm overflow-hidden">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12 border-2 border-slate-100">
                  <AvatarImage src={child.avatar} />
                  <AvatarFallback className="bg-purple-100 text-purple-700 font-bold">
                    {getInitials(child.name)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg font-bold text-slate-900">
                    {child.name}
                  </CardTitle>
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <User className="h-3.5 w-3.5" />
                    <span>{child.class}</span>
                    <span>•</span>
                    <span>Roll: {child.rollNo}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge
                  variant="outline"
                  className={`${
                    child.grade.startsWith("A")
                      ? "bg-emerald-100 text-emerald-700 border-emerald-200"
                      : child.grade.startsWith("B")
                      ? "bg-blue-100 text-blue-700 border-blue-200"
                      : "bg-amber-100 text-amber-700 border-amber-200"
                  } text-sm font-bold px-3 py-1`}
                >
                  Grade {child.grade}
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-xs font-medium text-slate-500">Attendance</p>
                <p className="text-xl font-bold text-slate-900">{child.attendance}%</p>
                <div className="h-1.5 mt-1 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      child.attendance >= 80
                        ? "bg-emerald-500"
                        : child.attendance >= 70
                        ? "bg-amber-500"
                        : "bg-rose-500"
                    }`}
                    style={{ width: `${child.attendance}%` }}
                  />
                </div>
              </div>
              <div className="text-center">
                <p className="text-xs font-medium text-slate-500">Class Rank</p>
                <p className="text-xl font-bold text-slate-900">
                  #{child.rank}/{child.totalStudents}
                </p>
                <div className="mt-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-purple-500 rounded-full"
                    style={{
                      width: `${((child.totalStudents - child.rank) / child.totalStudents) * 100}%`,
                    }}
                  />
                </div>
              </div>
              <div className="text-center">
                <p className="text-xs font-medium text-slate-500">Subjects</p>
                <p className="text-xl font-bold text-slate-900">{child.subjects.length}</p>
                <div className="mt-1 flex justify-center gap-1">
                  <Badge variant="secondary" className="text-[8px] px-1 bg-slate-100">
                    {child.subjects.filter(s => s.grade.startsWith("A")).length} A&apos;s
                  </Badge>
                </div>
              </div>
            </div>

            {/* Subject Grades */}
            <div className="border-t border-slate-100 pt-3">
              <div className="grid grid-cols-5 gap-2">
                {child.subjects.map((subject) => (
                  <div key={subject.name} className="text-center">
                    <p className="text-[10px] font-medium text-slate-500 truncate">
                      {subject.name}
                    </p>
                    <Badge
                      variant="outline"
                      className={`${
                        subject.grade.startsWith("A")
                          ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                          : subject.grade.startsWith("B")
                          ? "bg-blue-50 text-blue-700 border-blue-200"
                          : "bg-amber-50 text-amber-700 border-amber-200"
                      } text-xs font-bold mt-1`}
                    >
                      {subject.grade}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            {child.achievements.length > 0 && (
              <div className="border-t border-slate-100 pt-3">
                <div className="flex flex-wrap gap-1">
                  {child.achievements.map((achievement) => (
                    <Badge key={achievement} variant="secondary" className="bg-purple-50 text-purple-700 text-xs">
                      <Award className="mr-1 h-3 w-3" />
                      {achievement}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}