"use client";

import { Search, X } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface GradeFiltersProps {
  searchQuery: string;
  classFilter: string;
  subjectFilter: string;
  examTypeFilter: string;
  filters: {
    classes: string[];
    subjects: string[];
    examTypes: string[];
  };
  onSearchChange: (value: string) => void;
  onClassChange: (value: string) => void;
  onSubjectChange: (value: string) => void;
  onExamTypeChange: (value: string) => void;
  onResetFilters: () => void;
}

export function GradeFilters({
  searchQuery,
  classFilter,
  subjectFilter,
  examTypeFilter,
  filters,
  onSearchChange,
  onClassChange,
  onSubjectChange,
  onExamTypeChange,
  onResetFilters,
}: GradeFiltersProps) {
  const hasActiveFilters =
    searchQuery ||
    classFilter !== "all" ||
    subjectFilter !== "all" ||
    examTypeFilter !== "all";

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <div className="relative w-full xl:max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <Input
            value={searchQuery}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search by student name or roll no..."
            className="pl-9"
          />
        </div>

        <div className="grid gap-3 sm:grid-cols-3 xl:flex">
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

          <Select value={examTypeFilter} onValueChange={onExamTypeChange}>
            <SelectTrigger className="w-full xl:w-[170px]">
              <SelectValue placeholder="Exam Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Exams</SelectItem>
              {filters.examTypes.map((examType) => (
                <SelectItem key={examType} value={examType}>
                  {examType}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {hasActiveFilters && (
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {searchQuery && (
            <Badge variant="secondary" className="gap-1">
              Search: {searchQuery}
              <button onClick={() => onSearchChange("")}>
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}

          {classFilter !== "all" && (
            <Badge variant="secondary" className="gap-1">
              Class: {classFilter}
              <button onClick={() => onClassChange("all")}>
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}

          {subjectFilter !== "all" && (
            <Badge variant="secondary" className="gap-1">
              Subject: {subjectFilter}
              <button onClick={() => onSubjectChange("all")}>
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}

          {examTypeFilter !== "all" && (
            <Badge variant="secondary" className="gap-1">
              Exam: {examTypeFilter}
              <button onClick={() => onExamTypeChange("all")}>
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}

          <button
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