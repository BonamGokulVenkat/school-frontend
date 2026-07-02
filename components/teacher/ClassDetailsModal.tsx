"use client";

import { X, Users, MapPin, Calendar, Clock, User, BookOpen, TrendingUp } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { TeacherClass, getStatusColor, getGradeColor } from "@/lib/dummy/teacher/classes-data";

interface ClassDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  classData: TeacherClass | null;
  onManage: (id: string) => void;
}

export function ClassDetailsModal({ isOpen, onClose, classData, onManage }: ClassDetailsModalProps) {
  if (!classData) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            {classData.name}
            <Badge className={getStatusColor(classData.status)}>
              {classData.status}
            </Badge>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Basic Info */}
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-lg bg-slate-50 p-3">
              <p className="text-xs text-slate-500">Subject</p>
              <p className="font-medium text-slate-900">{classData.subject}</p>
            </div>
            <div className="rounded-lg bg-slate-50 p-3">
              <p className="text-xs text-slate-500">Section</p>
              <p className="font-medium text-slate-900">{classData.section}</p>
            </div>
            <div className="rounded-lg bg-slate-50 p-3">
              <p className="text-xs text-slate-500">Students</p>
              <p className="font-medium text-slate-900">{classData.students}</p>
            </div>
            <div className="rounded-lg bg-slate-50 p-3">
              <p className="text-xs text-slate-500">Room</p>
              <p className="font-medium text-slate-900">{classData.room}</p>
            </div>
          </div>

          <Separator />

          {/* Teacher */}
          <div className="flex items-center gap-2 text-sm">
            <User className="h-4 w-4 text-slate-400" />
            <span className="text-slate-600">Teacher:</span>
            <span className="font-medium text-slate-900">{classData.teacher}</span>
          </div>

          <Separator />

          {/* Schedule */}
          <div>
            <h4 className="mb-2 text-sm font-medium text-slate-700 flex items-center gap-2">
              <Calendar className="h-4 w-4 text-blue-600" />
              Schedule
            </h4>
            <div className="grid gap-1">
              {classData.schedule.map((slot, index) => (
                <div key={index} className="flex justify-between rounded-lg bg-slate-50 p-2 text-sm">
                  <span className="text-slate-600">{slot.day}</span>
                  <span className="font-medium text-slate-900">{slot.time}</span>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Attendance */}
          <div>
            <h4 className="mb-2 text-sm font-medium text-slate-700 flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-blue-600" />
              Attendance
            </h4>
            <div className="space-y-1">
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Overall</span>
                <span className="font-medium text-slate-900">
                  {classData.attendance.percentage}%
                </span>
              </div>
              <Progress
                value={classData.attendance.percentage}
                className={`h-2 ${
                  classData.attendance.percentage >= 85
                    ? "[&>*]:bg-green-500"
                    : classData.attendance.percentage >= 75
                    ? "[&>*]:bg-yellow-500"
                    : "[&>*]:bg-red-500"
                }`}
              />
              <div className="flex justify-between text-xs text-slate-500">
                <span>Present: {classData.attendance.present}</span>
                <span>Total: {classData.attendance.total}</span>
              </div>
            </div>
          </div>

          <Separator />

          {/* Subjects */}
          <div>
            <h4 className="mb-2 text-sm font-medium text-slate-700 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-blue-600" />
              Subjects
            </h4>
            <div className="flex flex-wrap gap-1">
              {classData.subjects.map((subject) => (
                <Badge key={subject} variant="secondary">
                  {subject}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex gap-2 pt-2">
            <Button
              className="flex-1 bg-blue-600 hover:bg-blue-700"
              onClick={() => {
                onManage(classData.id);
                onClose();
              }}
            >
              Manage Class
            </Button>
            <Button variant="outline" className="flex-1" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}