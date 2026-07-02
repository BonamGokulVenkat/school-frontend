"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDay } from "@/lib/dummy/student/attendance-data";

interface AttendanceCalendarProps {
  month: string;
  year: number;
  days: CalendarDay[];
}

const statusColors = {
  present: "bg-green-100 text-green-700 hover:bg-green-200",
  absent: "bg-red-100 text-red-700 hover:bg-red-200",
  late: "bg-yellow-100 text-yellow-700 hover:bg-yellow-200",
  holiday: "bg-blue-100 text-blue-700 hover:bg-blue-200",
  weekend: "bg-slate-100 text-slate-400",
};

const statusLabels = {
  present: "✅",
  absent: "❌",
  late: "⏰",
  holiday: "🎉",
  weekend: " ",
};

export function AttendanceCalendar({ month, year, days }: AttendanceCalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(month);
  const [currentYear, setCurrentYear] = useState(year);

  // Get the first day of the month
  const firstDayOfMonth = new Date(currentYear, getMonthIndex(currentMonth), 1).getDay();
  const daysInMonth = new Date(currentYear, getMonthIndex(currentMonth) + 1, 0).getDate();

  function getMonthIndex(monthName: string): number {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months.indexOf(monthName);
  }

  function goToPreviousMonth() {
    const currentIndex = getMonthIndex(currentMonth);
    if (currentIndex === 0) {
      setCurrentMonth("December");
      setCurrentYear(currentYear - 1);
    } else {
      const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      setCurrentMonth(months[currentIndex - 1]);
    }
  }

  function goToNextMonth() {
    const currentIndex = getMonthIndex(currentMonth);
    if (currentIndex === 11) {
      setCurrentMonth("January");
      setCurrentYear(currentYear + 1);
    } else {
      const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      setCurrentMonth(months[currentIndex + 1]);
    }
  }

  // Get days for the current month from our data
  const getDayStatus = (date: number): CalendarDay | undefined => {
    return days.find((d) => d.date === date);
  };

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <Card className="border-slate-200 shadow-sm">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">
            Attendance Calendar
          </CardTitle>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" className="h-8 w-8" onClick={goToPreviousMonth}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="text-sm font-medium min-w-[120px] text-center">
              {currentMonth} {currentYear}
            </span>
            <Button variant="outline" size="icon" className="h-8 w-8" onClick={goToNextMonth}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-7 gap-1">
          {/* Day Headers */}
          {daysOfWeek.map((day) => (
            <div
              key={day}
              className="py-2 text-center text-xs font-medium text-slate-500"
            >
              {day}
            </div>
          ))}

          {/* Empty cells for days before first day of month */}
          {Array.from({ length: firstDayOfMonth }).map((_, index) => (
            <div key={`empty-${index}`} className="p-2" />
          ))}

          {/* Calendar Days */}
          {Array.from({ length: daysInMonth }).map((_, index) => {
            const date = index + 1;
            const dayData = getDayStatus(date);
            const status = dayData?.status || "present";

            return (
              <div
                key={date}
                className={`rounded-lg p-2 text-center transition-colors ${
                  statusColors[status]
                }`}
              >
                <div className="text-sm font-medium">{date}</div>
                <div className="text-xs">{statusLabels[status]}</div>
                {dayData?.subject && (
                  <div className="mt-0.5 truncate text-[8px] opacity-75">
                    {dayData.subject}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="mt-4 flex flex-wrap gap-4 border-t border-slate-100 pt-4">
          <div className="flex items-center gap-1.5">
            <div className="h-3 w-3 rounded bg-green-100" />
            <span className="text-xs text-slate-600">Present</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-3 w-3 rounded bg-red-100" />
            <span className="text-xs text-slate-600">Absent</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-3 w-3 rounded bg-yellow-100" />
            <span className="text-xs text-slate-600">Late</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-3 w-3 rounded bg-blue-100" />
            <span className="text-xs text-slate-600">Holiday</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-3 w-3 rounded bg-slate-100" />
            <span className="text-xs text-slate-600">Weekend</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}