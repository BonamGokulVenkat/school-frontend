import { useState } from "react";
import { Users, MapPin, Calendar, Clock, TrendingUp, ChevronRight } from "lucide-react";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { TeacherClass, getStatusColor, getGradeColor } from "@/lib/dummy/teacher/classes-data";

interface ClassCardProps {
  classData: TeacherClass;
  onViewDetails: (id: string) => void;
  onManage: (id: string) => void;
}

export function ClassCard({ classData, onViewDetails, onManage }: ClassCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getScheduleDisplay = () => {
    const days = classData.schedule.map((s) => s.day.slice(0, 3)).join(", ");
    const times = classData.schedule.map((s) => s.time).join(", ");
    return `${days} • ${times}`;
  };

  return (
    <Card className="border-slate-200 shadow-sm transition-all hover:shadow-md">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <CardTitle className="text-lg font-semibold text-slate-900">
                {classData.name}
              </CardTitle>
              <Badge className={getStatusColor(classData.status)}>
                {classData.status.charAt(0).toUpperCase() + classData.status.slice(1)}
              </Badge>
            </div>
            <p className="text-sm text-slate-500">{classData.subject}</p>
          </div>
          <Badge className={getGradeColor(classData.avgGrade)}>
            Avg: {classData.avgGrade}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="pb-3">
        <div className="space-y-3">
          {/* Quick Info Grid */}
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="flex items-center gap-1.5 text-slate-600">
              <Users className="h-4 w-4 text-slate-400" />
              <span>{classData.students} Students</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-600">
              <MapPin className="h-4 w-4 text-slate-400" />
              <span>{classData.room}</span>
            </div>
          </div>

          {/* Schedule */}
          <div className="flex items-start gap-1.5 text-xs text-slate-500">
            <Calendar className="h-3.5 w-3.5 text-slate-400 mt-0.5" />
            <span>{getScheduleDisplay()}</span>
          </div>

          {/* Attendance */}
          <div>
            <div className="flex justify-between text-xs text-slate-500">
              <span>Attendance</span>
              <span>{classData.attendance.percentage}%</span>
            </div>
            <Progress
              value={classData.attendance.percentage}
              className={`mt-1 h-1.5 ${
                classData.attendance.percentage >= 85
                  ? "bg-green-500"
                  : classData.attendance.percentage >= 75
                  ? "bg-yellow-500"
                  : "bg-red-500"
              }`}
            />
          </div>

          {/* Subjects */}
          {classData.subjects && (
            <div className="flex flex-wrap gap-1">
              {classData.subjects.map((subject) => (
                <Badge key={subject} variant="secondary" className="text-[10px]">
                  {subject}
                </Badge>
              ))}
            </div>
          )}

          {/* Expandable Details */}
          {isExpanded && (
            <div className="border-t border-slate-100 pt-3">
              <h4 className="text-xs font-semibold text-slate-700">Full Schedule</h4>
              <div className="mt-1 space-y-0.5">
                {classData.schedule.map((slot, index) => (
                  <div key={index} className="flex justify-between text-xs text-slate-600">
                    <span>{slot.day}</span>
                    <span>{slot.time}</span>
                  </div>
                ))}
              </div>
              <div className="mt-2 text-xs text-slate-500">
                Teacher: {classData.teacher}
              </div>
              <div className="mt-0.5 text-xs text-slate-500">
                Section: {classData.section}
              </div>
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className="flex gap-2 pt-0">
        <Button
          variant="ghost"
          size="sm"
          className="text-xs"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Show Less" : "Show More"}
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="flex-1 text-xs"
          onClick={() => onViewDetails(classData.id)}
        >
          Details <ChevronRight className="ml-1 h-3 w-3" />
        </Button>
        <Button
          size="sm"
          className="flex-1 bg-blue-600 text-xs hover:bg-blue-700"
          onClick={() => onManage(classData.id)}
        >
          <TrendingUp className="mr-1 h-3 w-3" />
          Manage
        </Button>
      </CardFooter>
    </Card>
  );
}