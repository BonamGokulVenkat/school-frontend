"use client";

import { useState } from "react";
import { Calendar, Clock, Users, BookOpen } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";

interface GenerateTimetableDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onGenerate?: (data: unknown) => void;
}

export function GenerateTimetableDialog({
  open,
  onOpenChange,
  onGenerate,
}: GenerateTimetableDialogProps) {
  const [formData, setFormData] = useState({
    classId: "",
    academicYear: "2026-27",
    includeLunch: true,
    includeBreaks: true,
    constraints: [] as string[],
  });

  const handleSubmit = () => {
    if (onGenerate) {
      onGenerate(formData);
    }
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Calendar className="mr-2 h-4 w-4" />
          Generate Timetable
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Generate New Timetable</DialogTitle>
          <DialogDescription>
            Create an automated timetable with conflict checking and optimization.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <Label>Select Class</Label>
            <Select
              value={formData.classId}
              onValueChange={(value) => setFormData({ ...formData, classId: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select class" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="c1">Grade 6-A</SelectItem>
                <SelectItem value="c2">Grade 6-B</SelectItem>
                <SelectItem value="c3">Grade 7-A</SelectItem>
                <SelectItem value="c4">Grade 7-B</SelectItem>
                <SelectItem value="c5">Grade 8-A</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Academic Year</Label>
            <Select
              value={formData.academicYear}
              onValueChange={(value) => setFormData({ ...formData, academicYear: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select academic year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2026-27">2026-27</SelectItem>
                <SelectItem value="2025-26">2025-26</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Options</Label>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="includeLunch"
                checked={formData.includeLunch}
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, includeLunch: checked as boolean })
                }
              />
              <Label htmlFor="includeLunch" className="text-sm font-normal">
                Include Lunch Break
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="includeBreaks"
                checked={formData.includeBreaks}
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, includeBreaks: checked as boolean })
                }
              />
              <Label htmlFor="includeBreaks" className="text-sm font-normal">
                Include Short Breaks
              </Label>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Constraints</Label>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="cursor-pointer hover:bg-slate-100">
                No Teacher Conflicts
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-slate-100">
                No Room Conflicts
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-slate-100">
                Balance Workload
              </Badge>
            </div>
            <p className="text-xs text-slate-500">
              Click constraints to toggle them on/off
            </p>
          </div>

          <div className="rounded-lg bg-amber-50 p-3 border border-amber-200">
            <div className="flex items-start gap-2">
              <Clock className="h-4 w-4 text-amber-600 mt-0.5" />
              <div className="text-sm">
                <p className="font-medium text-amber-800">Generation Info</p>
                <p className="text-xs text-amber-700">
                  This will generate a 5-day timetable with 6 periods per day.
                  Conflicts will be automatically resolved.
                </p>
              </div>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700" onClick={handleSubmit}>
            Generate Timetable
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}