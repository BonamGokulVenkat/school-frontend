"use client";

import { useState, useMemo } from "react";

import { TimetableHeader } from "@/components/student/TimetableHeader";
import { CurrentClassCard } from "@/components/student/CurrentClassCard";
import { TimetableGrid } from "@/components/student/TimetableGrid";
import { timetableData } from "@/lib/dummy/student/timetable-data";

export default function TimetablePage() {
  const [currentWeekOffset, setCurrentWeekOffset] = useState(0);

  // Get current week date range
  const getWeekRange = (offset: number) => {
    const now = new Date();
    const dayOfWeek = now.getDay();
    const diff = now.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1);
    const monday = new Date(now);
    monday.setDate(diff + offset * 7);
    const sunday = new Date(monday);
    sunday.setDate(monday.getDate() + 6);

    const options: Intl.DateTimeFormatOptions = { month: "short", day: "numeric" };
    return `${monday.toLocaleDateString("en-US", options)} - ${sunday.toLocaleDateString(
      "en-US",
      options
    )}, ${sunday.getFullYear()}`;
  };

  const currentWeek = useMemo(
    () => getWeekRange(currentWeekOffset),
    [currentWeekOffset]
  );

  const handlePreviousWeek = () => {
    setCurrentWeekOffset(currentWeekOffset - 1);
  };

  const handleNextWeek = () => {
    setCurrentWeekOffset(currentWeekOffset + 1);
  };

  const handleToday = () => {
    setCurrentWeekOffset(0);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Class Schedule</h1>
        <p className="text-sm text-slate-500">
          Your weekly timetable and current class information
        </p>
      </div>

      {/* Current Class */}
      <CurrentClassCard currentClass={timetableData.currentClass} />

      {/* Timetable Header with Navigation */}
      <TimetableHeader
        currentWeek={currentWeek}
        onPreviousWeek={handlePreviousWeek}
        onNextWeek={handleNextWeek}
        onToday={handleToday}
      />

      {/* Timetable Grid */}
      <TimetableGrid
        timetable={timetableData.timetable}
        daysOfWeek={timetableData.daysOfWeek}
        timeSlots={timetableData.timeSlots}
      />
    </div>
  );
}