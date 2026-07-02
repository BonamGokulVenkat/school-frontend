"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Calendar, Clock } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface TimetableHeaderProps {
  currentWeek: string;
  onPreviousWeek: () => void;
  onNextWeek: () => void;
  onToday: () => void;
}

export function TimetableHeader({
  currentWeek,
  onPreviousWeek,
  onNextWeek,
  onToday,
}: TimetableHeaderProps) {
  return (
    <Card className="border-slate-200 shadow-sm">
      <CardContent className="p-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-blue-50 p-2 text-blue-600">
              <Calendar className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                Timetable - Grade 6-A
              </h2>
              <p className="text-sm text-slate-500">{currentWeek}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={onPreviousWeek}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="h-8 text-xs"
              onClick={onToday}
            >
              Today
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={onNextWeek}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}