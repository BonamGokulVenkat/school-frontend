import { SchoolHeader } from "@/components/school/SchoolHeader";
import { AttendanceStats } from "@/components/student/AttendanceStats";
import { AttendanceCalendar } from "@/components/student/AttendanceCalendar";
import { SubjectWiseAttendance } from "@/components/student/SubjectWiseAttendance";
import { AttendanceAlert } from "@/components/student/AttendanceAlert";
import { attendanceData } from "@/lib/dummy/student/attendance-data";

export default function AttendancePage() {
  const { summary, subjectWise, calendarData, alerts } = attendanceData;

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Attendance Report</h1>
        <p className="text-sm text-slate-500">
          Track your attendance across all subjects
        </p>
      </div>

      {/* Stats */}
      <AttendanceStats summary={summary} />

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left Column - 2 columns */}
        <div className="space-y-6 lg:col-span-2">
          <AttendanceCalendar
            month={calendarData.month}
            year={calendarData.year}
            days={calendarData.days}
          />
          <SubjectWiseAttendance subjects={subjectWise} />
        </div>

        {/* Right Column - 1 column */}
        <div className="lg:col-span-1">
          <AttendanceAlert
            warnings={alerts.warning}
            good={alerts.good}
          />
        </div>
      </div>
    </div>
  );
}