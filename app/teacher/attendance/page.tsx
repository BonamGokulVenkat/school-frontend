"use client";

import { useState } from "react";

import { AttendanceHeader } from "@/components/teacher/AttendanceHeader";
import { AttendanceStudentList } from "@/components/teacher/AttendanceStudentList";
import { AttendanceSummary } from "@/components/teacher/AttendanceSummary";
import { QRScanner } from "@/components/teacher/QRScanner";
import { attendanceData, StudentAttendance } from "@/lib/dummy/teacher/attendance-data";

export default function AttendancePage() {
  const [students, setStudents] = useState<StudentAttendance[]>(attendanceData.students);
  const [isQRScannerOpen, setIsQRScannerOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(attendanceData.classInfo.date);

  const handleStatusChange = (
    studentId: string,
    status: "present" | "absent" | "late"
  ) => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === studentId ? { ...student, status } : student
      )
    );
  };

  const handleBulkAction = (status: "present" | "absent" | "late") => {
    setStudents((prev) =>
      prev.map((student) =>
        student.status === "unmarked" ? { ...student, status } : student
      )
    );
  };

  const handleQRScan = (data: string) => {
    // Mark the scanned student as present
    setStudents((prev) =>
      prev.map((student) =>
        student.id === data ? { ...student, status: "present" } : student
      )
    );
    setIsQRScannerOpen(false);
  };

  const handleDateChange = (date: string) => {
    setCurrentDate(date);
    // In a real app, you would fetch attendance data for this date
    console.log("Date changed to:", date);
  };

  // Calculate summary
  const summary = {
    total: students.length,
    present: students.filter((s) => s.status === "present").length,
    absent: students.filter((s) => s.status === "absent").length,
    late: students.filter((s) => s.status === "late").length,
    unmarked: students.filter((s) => s.status === "unmarked").length,
  };

  const handleSubmitAttendance = () => {
    // In a real app, you would submit the attendance data
    console.log("Submitting attendance:", { date: currentDate, students });
    alert("Attendance submitted successfully!");
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Mark Attendance</h1>
          <p className="text-sm text-slate-500">
            Mark attendance for your class and track student presence
          </p>
        </div>
        <button
          onClick={handleSubmitAttendance}
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          Submit Attendance
        </button>
      </div>

      {/* Header */}
      <AttendanceHeader
        classInfo={attendanceData.classInfo}
        onQRScan={() => setIsQRScannerOpen(true)}
        onDateChange={handleDateChange}
      />

      {/* Summary */}
      <AttendanceSummary summary={summary} />

      {/* Student List */}
      <AttendanceStudentList
        students={students}
        onStatusChange={handleStatusChange}
        onBulkAction={handleBulkAction}
      />

      {/* QR Scanner Modal */}
      <QRScanner
        isOpen={isQRScannerOpen}
        onClose={() => setIsQRScannerOpen(false)}
        onScan={handleQRScan}
      />
    </div>
  );
}