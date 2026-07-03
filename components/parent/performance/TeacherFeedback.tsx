import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Star, ThumbsUp } from "lucide-react";
import { SubjectPerformance } from "@/lib/dummy/parent/performance-data";

interface TeacherFeedbackProps {
  subjects: SubjectPerformance[];
}

export function TeacherFeedback({ subjects }: TeacherFeedbackProps) {
  const statusLabels: Record<string, string> = {
    excellent: "Excellent",
    good: "Good",
    average: "Average",
    poor: "Poor",
  };

  const statusColors: Record<string, string> = {
    excellent: "text-emerald-600",
    good: "text-green-600",
    average: "text-amber-600",
    poor: "text-red-600",
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <Card className="border-slate-200 shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg font-semibold">
          <MessageSquare className="h-5 w-5 text-purple-500" />
          Teacher Feedback
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {subjects.map((subject) => (
            <div
              key={subject.id}
              className="rounded-lg border border-slate-100 p-4 transition-colors hover:bg-slate-50"
            >
              <div className="flex items-start gap-3">
                <Avatar className="h-10 w-10 border-2 border-slate-100">
                  <AvatarImage src={`/teachers/${subject.teacher}.jpg`} />
                  <AvatarFallback className="bg-purple-100 text-purple-700 text-xs font-bold">
                    {getInitials(subject.teacher)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-slate-900">{subject.teacher}</p>
                      <p className="text-xs text-slate-500">{subject.name}</p>
                    </div>
                    <Badge
                      variant="outline"
                      className={`${statusColors[subject.status] ?? "text-slate-600"} text-xs`}
                    >
                      {statusLabels[subject.status] ?? "Unknown"}
                    </Badge>
                  </div>
                  <div className="mt-2 space-y-1">
                    <div className="flex items-start gap-2">
                      <Star className="h-3.5 w-3.5 text-amber-500 mt-0.5" />
                      <p className="text-sm text-slate-700">{subject.feedback}</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <ThumbsUp className="h-3.5 w-3.5 text-blue-500 mt-0.5" />
                      <p className="text-sm text-blue-600">{subject.improvement}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}