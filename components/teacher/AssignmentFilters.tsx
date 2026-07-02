"use client";

import { Search, SlidersHorizontal, X } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface AssignmentFiltersProps {
  searchQuery: string;
  statusFilter: string;
  subjectFilter: string;
  priorityFilter: string;
  classFilter: string;
  filters: {
    statuses: string[];
    priorities: string[];
    subjects: string[];
    classes: string[];
  };
  onSearchChange: (value: string) => void;
  onStatusChange: (value: string) => void;
  onSubjectChange: (value: string) => void;
  onPriorityChange: (value: string) => void;
  onClassChange: (value: string) => void;
  onResetFilters: () => void;
}

export function AssignmentFilters({
  searchQuery,
  statusFilter,
  subjectFilter,
  priorityFilter,
  classFilter,
  filters,
  onSearchChange,
  onStatusChange,
  onSubjectChange,
  onPriorityChange,
  onClassChange,
  onResetFilters,
}: AssignmentFiltersProps) {
  const hasActiveFilters =
    searchQuery ||
    statusFilter !== "all" ||
    subjectFilter !== "all" ||
    priorityFilter !== "all" ||
    classFilter !== "all";

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <div className="relative w-full xl:max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <Input
            value={searchQuery}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search assignments..."
            className="pl-9"
          />
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:flex">
          <Select value={statusFilter} onValueChange={onStatusChange}>
            <SelectTrigger className="w-full xl:w-[150px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              {filters.statuses.map((status) => (
                <SelectItem key={status} value={status}>
                  {capitalize(status)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={subjectFilter} onValueChange={onSubjectChange}>
            <SelectTrigger className="w-full xl:w-[190px]">
              <SelectValue placeholder="Subject" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Subjects</SelectItem>
              {filters.subjects.map((subject) => (
                <SelectItem key={subject} value={subject}>
                  {subject}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={priorityFilter} onValueChange={onPriorityChange}>
            <SelectTrigger className="w-full xl:w-[150px]">
              <SelectValue placeholder="Priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Priority</SelectItem>
              {filters.priorities.map((priority) => (
                <SelectItem key={priority} value={priority}>
                  {capitalize(priority)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={classFilter} onValueChange={onClassChange}>
            <SelectTrigger className="w-full xl:w-[160px]">
              <SelectValue placeholder="Class" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Classes</SelectItem>
              {filters.classes.map((className) => (
                <SelectItem key={className} value={className}>
                  {className}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {hasActiveFilters && (
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1 text-sm text-slate-500">
            <SlidersHorizontal className="h-4 w-4" />
            Active filters:
          </div>

          {searchQuery && (
            <Badge variant="secondary" className="gap-1">
              Search: {searchQuery}
              <button type="button" onClick={() => onSearchChange("")}>
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}

          {statusFilter !== "all" && (
            <Badge variant="secondary" className="gap-1">
              Status: {capitalize(statusFilter)}
              <button type="button" onClick={() => onStatusChange("all")}>
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}

          {subjectFilter !== "all" && (
            <Badge variant="secondary" className="gap-1">
              Subject: {subjectFilter}
              <button type="button" onClick={() => onSubjectChange("all")}>
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}

          {priorityFilter !== "all" && (
            <Badge variant="secondary" className="gap-1">
              Priority: {capitalize(priorityFilter)}
              <button type="button" onClick={() => onPriorityChange("all")}>
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}

          {classFilter !== "all" && (
            <Badge variant="secondary" className="gap-1">
              Class: {classFilter}
              <button type="button" onClick={() => onClassChange("all")}>
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}

          <button
            type="button"
            onClick={onResetFilters}
            className="text-sm font-medium text-slate-600 hover:text-slate-950"
          >
            Clear all
          </button>
        </div>
      )}
    </div>
  );
}

function capitalize(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}