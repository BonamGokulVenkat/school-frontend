import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface PerformanceFiltersProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  statusFilter: string;
  onStatusChange: (value: string) => void;
  children: string[];
  selectedChild: string;
  onChildChange: (value: string) => void;
}

export function PerformanceFilters({
  searchQuery,
  onSearchChange,
  statusFilter,
  onStatusChange,
  children,
  selectedChild,
  onChildChange,
}: PerformanceFiltersProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="relative max-w-sm flex-1">
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
        <Input
          placeholder="Search subjects..."
          className="border-slate-200 pl-9"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap gap-2">
        <Select value={selectedChild} onValueChange={onChildChange}>
          <SelectTrigger className="w-[150px] border-slate-200">
            <SelectValue placeholder="Select Child" />
          </SelectTrigger>
          <SelectContent>
            {children.map((child) => (
              <SelectItem key={child} value={child}>
                {child}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={statusFilter} onValueChange={onStatusChange}>
          <SelectTrigger className="w-[150px] border-slate-200">
            <SelectValue placeholder="Filter by Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="excellent">Excellent</SelectItem>
            <SelectItem value="good">Good</SelectItem>
            <SelectItem value="average">Average</SelectItem>
            <SelectItem value="needs-improvement">Needs Improvement</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" className="border-slate-200">
          <Filter className="mr-2 h-4 w-4" />
          Export Report
        </Button>
      </div>
    </div>
  );
}