import { TrendingUp, Award, Calendar, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ParentStatsProps {
  children: {
    attendance: number;
    grade: string;
    rank: number;
    totalStudents: number;
    subjects: { name: string; marks: number; grade: string }[];
  }[];
}

export function ParentStats({ children }: ParentStatsProps) {
  // Calculate aggregate stats
  const averageAttendance = Math.round(
    children.reduce((acc, child) => acc + child.attendance, 0) / children.length
  );
  
  const bestGrade = children.reduce((best, child) => {
    const gradeOrder = ["A+", "A", "A-", "B+", "B", "B-", "C+", "C", "D"];
    const bestIndex = gradeOrder.indexOf(best);
    const currentIndex = gradeOrder.indexOf(child.grade);
    return currentIndex < bestIndex ? child.grade : best;
  }, children[0]?.grade || "A");

  const statItems = [
    {
      label: "Average Attendance",
      value: `${averageAttendance}%`,
      icon: Calendar,
      color: "bg-blue-50 text-blue-600",
    },
    {
      label: "Best Grade",
      value: bestGrade,
      icon: Award,
      color: "bg-emerald-50 text-emerald-600",
    },
    {
      label: "Class Rank",
      value: `#${Math.min(...children.map(c => c.rank))}`,
      icon: TrendingUp,
      color: "bg-purple-50 text-purple-600",
    },
    {
      label: "Subjects",
      value: children.reduce((acc, child) => acc + child.subjects.length, 0),
      icon: BookOpen,
      color: "bg-orange-50 text-orange-600",
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {statItems.map((item) => (
        <Card key={item.label} className="border-slate-200 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className={`rounded-full p-3 ${item.color}`}>
                <item.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500">{item.label}</p>
                <p className="text-2xl font-bold text-slate-900">{item.value}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}