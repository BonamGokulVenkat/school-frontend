import { Search, Filter, Download } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface ReportFiltersProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  typeFilter: string;
  onTypeChange: (value: string) => void;
  formatFilter: string;
  onFormatChange: (value: string) => void;
  statusFilter: string;
  onStatusChange: (value: string) => void;
  onGenerateReport: () => void;
}

export function ReportFilters({
  searchQuery,
  onSearchChange,
  typeFilter,
  onTypeChange,
  formatFilter,
  onFormatChange,
  statusFilter,
  onStatusChange,
  onGenerateReport,
}: ReportFiltersProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="relative max-w-sm flex-1">
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
        <Input
          placeholder="Search reports..."
          className="border-slate-200 pl-9"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap gap-2">
        <Select value={typeFilter} onValueChange={onTypeChange}>
          <SelectTrigger className="w-[130px] border-slate-200">
            <SelectValue placeholder="Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="academic">Academic</SelectItem>
            <SelectItem value="attendance">Attendance</SelectItem>
            <SelectItem value="staff">Staff</SelectItem>
            <SelectItem value="financial">Financial</SelectItem>
          </SelectContent>
        </Select>
        <Select value={formatFilter} onValueChange={onFormatChange}>
          <SelectTrigger className="w-[130px] border-slate-200">
            <SelectValue placeholder="Format" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Formats</SelectItem>
            <SelectItem value="pdf">PDF</SelectItem>
            <SelectItem value="excel">Excel</SelectItem>
            <SelectItem value="csv">CSV</SelectItem>
          </SelectContent>
        </Select>
        <Select value={statusFilter} onValueChange={onStatusChange}>
          <SelectTrigger className="w-[130px] border-slate-200">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="ready">Ready</SelectItem>
            <SelectItem value="processing">Processing</SelectItem>
            <SelectItem value="failed">Failed</SelectItem>
          </SelectContent>
        </Select>
        <Button className="bg-blue-600 hover:bg-blue-700" onClick={onGenerateReport}>
          <Filter className="mr-2 h-4 w-4" />
          Generate New
        </Button>
      </div>
    </div>
  );
}