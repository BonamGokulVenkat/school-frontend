"use client";

import { useState } from "react";
import { Calendar, ChevronLeft, ChevronRight, QrCode } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface AttendanceHeaderProps {
  classInfo: {
    name: string;
    subject: string;
    date: string;
    teacher: string;
    totalStudents: number;
  };
  onQRScan: () => void;
  onDateChange: (date: string) => void;
}

export function AttendanceHeader({ classInfo, onQRScan, onDateChange }: AttendanceHeaderProps) {
  const [currentDate, setCurrentDate] = useState(classInfo.date);

  const handlePreviousDay = () => {
    const date = new Date(currentDate);
    date.setDate(date.getDate() - 1);
    const newDate = date.toISOString().split('T')[0];
    setCurrentDate(newDate);
    onDateChange(newDate);
  };

  const handleNextDay = () => {
    const date = new Date(currentDate);
    date.setDate(date.getDate() + 1);
    const newDate = date.toISOString().split('T')[0];
    setCurrentDate(newDate);
    onDateChange(newDate);
  };

  const handleToday = () => {
    const today = new Date().toISOString().split('T')[0];
    setCurrentDate(today);
    onDateChange(today);
  };

  return (
    <Card className="border-slate-200 shadow-sm">
      <CardContent className="p-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* Class Info */}
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-blue-50 p-2 text-blue-600">
              <Calendar className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                {classInfo.name} - {classInfo.subject}
              </h2>
              <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
                <span>{classInfo.teacher}</span>
                <span className="hidden sm:inline">•</span>
                <Badge variant="secondary" className="text-xs">
                  {classInfo.totalStudents} Students
                </Badge>
              </div>
            </div>
          </div>

          {/* Date Navigation */}
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={handlePreviousDay}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="h-8 text-xs"
              onClick={handleToday}
            >
              Today
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={handleNextDay}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
            <span className="min-w-[100px] text-center text-sm font-medium text-slate-700">
              {new Date(currentDate).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
              })}
            </span>
          </div>

          {/* QR Scan Button */}
          <Button
            className="bg-blue-600 hover:bg-blue-700"
            onClick={onQRScan}
          >
            <QrCode className="mr-2 h-4 w-4" />
            QR Scan
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}