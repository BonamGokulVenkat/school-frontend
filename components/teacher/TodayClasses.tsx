import { Clock, MapPin, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TeacherClass } from "@/lib/dummy/teacher/teacher-dashboard-data";

interface TodayClassesProps {
  classes: TeacherClass[];
}

export function TodayClasses({ classes }: TodayClassesProps) {
  return (
    <Card className="border-slate-200 shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Clock className="h-5 w-5 text-blue-600" />
          <span> Today&apos;s Classes</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {classes.map((cls, index) => (
          <div
            key={cls.id}
            className={`flex items-center justify-between rounded-lg p-3 transition-colors hover:bg-slate-50 ${
              index < classes.length - 1 ? "border-b border-slate-100" : ""
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="text-center">
                <p className="text-sm font-semibold text-slate-900">
                  {cls.time.split(" ")[0]}
                </p>
                <p className="text-[10px] text-slate-400">
                  {cls.time.split(" ")[1]}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-900">
                  {cls.subject}
                </p>
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    {cls.class}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {cls.room}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    {cls.students} students
                  </span>
                </div>
              </div>
            </div>
            <Badge
              variant="secondary"
              className={index === 0 ? "bg-blue-100 text-blue-700" : "bg-slate-100 text-slate-600"}
            >
              {index === 0 ? "Now" : "Upcoming"}
            </Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}