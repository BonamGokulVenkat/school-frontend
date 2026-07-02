"use client";

import { Search, Filter } from "lucide-react";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface AssignmentFiltersProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  statusFilter: string;
  onStatusChange: (value: string) => void;
  subjectFilter: string;
  onSubjectChange: (value: string) => void;
  priorityFilter: string;
  onPriorityChange: (value: string) => void;
  statuses: string[];
  subjects: string[];
  priorities: string[];
  activeFilters: number;
  onClearFilters: () => void;
}

export function AssignmentFilters({
  searchQuery,
  onSearchChange,
  statusFilter,
  onStatusChange,
  subjectFilter,
  onSubjectChange,
  priorityFilter,
  onPriorityChange,
  statuses,
  subjects,
  priorities,
  activeFilters,
  onClearFilters,
}: AssignmentFiltersProps) {
  return (
    <div className="space-y-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
        <Input
          placeholder="Search assignments..."
          className="border-slate-200 pl-9"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-slate-400" />
          <span className="text-sm font-medium text-slate-600">Filters:</span>
        </div>

        <Select value={statusFilter} onValueChange={onStatusChange}>
          <SelectTrigger className="h-8 w-[130px] border-slate-200 text-xs">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            {statuses.map((status) => (
              <SelectItem key={status} value={status.toLowerCase()}>
                {status}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={subjectFilter} onValueChange={onSubjectChange}>
          <SelectTrigger className="h-8 w-[130px] border-slate-200 text-xs">
            <SelectValue placeholder="Subject" />
          </SelectTrigger>
          <SelectContent>
            {subjects.map((subject) => (
              <SelectItem key={subject} value={subject.toLowerCase()}>
                {subject}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={priorityFilter} onValueChange={onPriorityChange}>
          <SelectTrigger className="h-8 w-[120px] border-slate-200 text-xs">
            <SelectValue placeholder="Priority" />
          </SelectTrigger>
          <SelectContent>
            {priorities.map((priority) => (
              <SelectItem key={priority} value={priority.toLowerCase()}>
                {priority}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {activeFilters > 0 && (
          <Button
            variant="ghost"
            size="sm"
            className="h-8 text-xs text-blue-600 hover:text-blue-700"
            onClick={onClearFilters}
          >
            Clear all
          </Button>
        )}
      </div>

      {/* Active Filters */}
      {activeFilters > 0 && (
        <div className="flex flex-wrap gap-2">
          {statusFilter !== "all" && (
            <Badge variant="secondary" className="text-xs">
              Status: {statusFilter}
              <button
                className="ml-1 hover:text-slate-900"
                onClick={() => onStatusChange("all")}
              >
                ×
              </button>
            </Badge>
          )}
          {subjectFilter !== "all" && (
            <Badge variant="secondary" className="text-xs">
              Subject: {subjectFilter}
              <button
                className="ml-1 hover:text-slate-900"
                onClick={() => onSubjectChange("all")}
              >
                ×
              </button>
            </Badge>
          )}
          {priorityFilter !== "all" && (
            <Badge variant="secondary" className="text-xs">
              Priority: {priorityFilter}
              <button
                className="ml-1 hover:text-slate-900"
                onClick={() => onPriorityChange("all")}
              >
                ×
              </button>
            </Badge>
          )}
        </div>
      )}
    </div>
  );
}