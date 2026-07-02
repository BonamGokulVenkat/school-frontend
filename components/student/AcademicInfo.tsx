import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Award, TrendingUp } from "lucide-react";
import { StudentProfile, getAchievementColor, getAchievementIcon } from "@/lib/dummy/student/profile-data";

interface AcademicInfoProps {
  profile: StudentProfile;
}

export function AcademicInfo({ profile }: AcademicInfoProps) {
  return (
    <Card className="border-slate-200 shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <BookOpen className="h-5 w-5 text-blue-600" />
          Academic Information
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Attendance */}
        <div className="mb-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-700">Attendance</p>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-slate-900">
                  {profile.attendance.percentage}%
                </span>
                <span className="text-sm text-slate-500">
                  ({profile.attendance.present}/{profile.attendance.total} days)
                </span>
              </div>
            </div>
            <Badge className={profile.attendance.percentage >= 85 ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}>
              {profile.attendance.percentage >= 85 ? "Excellent" : "Good"}
            </Badge>
          </div>
          <Progress
            value={profile.attendance.percentage}
            className={`mt-2 h-2 ${
              profile.attendance.percentage >= 85
                ? "bg-green-500"
                : profile.attendance.percentage >= 75
                ? "bg-yellow-500"
                : "bg-red-500"
            }`}
          />
        </div>

        {/* Subjects */}
        <div className="border-t border-slate-100 pt-4">
          <h4 className="mb-3 text-sm font-semibold text-slate-900 flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-blue-600" />
            Subjects & Grades
          </h4>
          <div className="grid gap-2 sm:grid-cols-2">
            {profile.subjects.map((subject) => (
              <div
                key={subject.id}
                className="flex items-center justify-between rounded-lg border border-slate-100 p-3"
              >
                <div>
                  <p className="text-sm font-medium text-slate-900">{subject.name}</p>
                  <p className="text-xs text-slate-500">{subject.teacher}</p>
                </div>
                <Badge
                  className={
                    subject.grade === "A+" || subject.grade === "A"
                      ? "bg-green-100 text-green-700"
                      : subject.grade === "B+" || subject.grade === "B"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-yellow-100 text-yellow-700"
                  }
                >
                  {subject.grade}
                </Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="border-t border-slate-100 pt-4">
          <h4 className="mb-3 text-sm font-semibold text-slate-900 flex items-center gap-2">
            <Award className="h-4 w-4 text-blue-600" />
            Achievements
          </h4>
          {profile.achievements.length === 0 ? (
            <p className="text-sm text-slate-500">No achievements recorded</p>
          ) : (
            <div className="space-y-2">
              {profile.achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className="flex items-start gap-3 rounded-lg border border-slate-100 p-3"
                >
                  <div className="text-2xl">
                    {getAchievementIcon(achievement.type)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-medium text-slate-900">
                        {achievement.title}
                      </p>
                      <Badge className={getAchievementColor(achievement.type)}>
                        {achievement.type}
                      </Badge>
                    </div>
                    <p className="text-xs text-slate-500">{achievement.description}</p>
                    <p className="mt-1 text-xs text-slate-400">
                      {new Date(achievement.date).toLocaleDateString('en-US', {
                        month: 'long',
                        year: 'numeric'
                      })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}