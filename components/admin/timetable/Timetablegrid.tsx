"use client";

import { useState } from "react";
import { MoreVertical, Edit, Archive, Trash2, Eye, Printer } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TimetableRecord } from "@/lib/dummy/admin/timetable-data";

interface TimetableGridProps {
  timetables: TimetableRecord[];
  onEdit?: (timetable: TimetableRecord) => void;
  onDelete?: (id: string) => void;
  onArchive?: (id: string) => void;
  onView?: (timetable: TimetableRecord) => void;
  onPrint?: (timetable: TimetableRecord) => void;
}

const statusColors = {
  published: "bg-emerald-100 text-emerald-700 border-emerald-200",
  draft: "bg-amber-100 text-amber-700 border-amber-200",
  archived: "bg-slate-100 text-slate-700 border-slate-200",
};

const statusLabels = {
  published: "Published",
  draft: "Draft",
  archived: "Archived",
};

export function TimetableGrid({
  timetables,
  onEdit,
  onDelete,
  onArchive,
  onView,
  onPrint,
}: TimetableGridProps) {
  const [expandedTimetable, setExpandedTimetable] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedTimetable(expandedTimetable === id ? null : id);
  };

  return (
    <div className="space-y-4">
      {timetables.map((timetable) => (
        <Card key={timetable.id} className="border-slate-200 shadow-sm overflow-hidden">
          <CardContent className="p-0">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/50 p-4">
              <div className="flex items-center gap-4">
                <div>
                  <h3 className="font-semibold text-slate-900">{timetable.className}</h3>
                  <p className="text-sm text-slate-500">{timetable.academicYear}</p>
                </div>
                <Badge
                  variant="outline"
                  className={`${statusColors[timetable.status]} border`}
                >
                  {statusLabels[timetable.status]}
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleExpand(timetable.id)}
                >
                  {expandedTimetable === timetable.id ? "Hide" : "View"} Schedule
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => onView?.(timetable)}>
                      <Eye className="mr-2 h-4 w-4" />
                      View Details
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => onEdit?.(timetable)}>
                      <Edit className="mr-2 h-4 w-4" />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => onPrint?.(timetable)}>
                      <Printer className="mr-2 h-4 w-4" />
                      Print
                    </DropdownMenuItem>
                    {timetable.status === "published" && (
                      <DropdownMenuItem onClick={() => onArchive?.(timetable.id)}>
                        <Archive className="mr-2 h-4 w-4" />
                        Archive
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuItem className="text-red-600" onClick={() => onDelete?.(timetable.id)}>
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {/* Expanded Schedule */}
            {expandedTimetable === timetable.id && (
              <div className="overflow-x-auto p-4">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[120px]">Time</TableHead>
                      {timetable.schedule.map((day) => (
                        <TableHead key={day.day} className="min-w-[120px]">
                          {day.day}
                        </TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {timetable.schedule[0]?.periods.map((_, periodIndex) => (
                      <TableRow key={periodIndex}>
                        <TableCell className="font-medium text-sm">
                          {timetable.schedule[0]?.periods[periodIndex]?.time || ""}
                        </TableCell>
                        {timetable.schedule.map((day) => (
                          <TableCell key={day.day} className="py-2">
                            {day.periods[periodIndex] && (
                              <div>
                                <p className="font-medium text-sm text-slate-900">
                                  {day.periods[periodIndex].subject}
                                </p>
                                <p className="text-xs text-slate-500">
                                  {day.periods[periodIndex].teacher}
                                </p>
                                <p className="text-[10px] text-slate-400">
                                  {day.periods[periodIndex].room}
                                </p>
                              </div>
                            )}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}