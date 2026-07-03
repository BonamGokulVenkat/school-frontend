import { Search, Filter, CheckSquare } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { notificationTypes, priorityOptions } from "@/lib/dummy/parent/notifications-data";

interface NotificationFiltersProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  typeFilter: string;
  onTypeChange: (value: string) => void;
  priorityFilter: string;
  onPriorityChange: (value: string) => void;
  readFilter: string;
  onReadChange: (value: string) => void;
  onMarkAllRead: () => void;
}

export function NotificationFilters({
  searchQuery,
  onSearchChange,
  typeFilter,
  onTypeChange,
  priorityFilter,
  onPriorityChange,
  readFilter,
  onReadChange,
  onMarkAllRead,
}: NotificationFiltersProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="relative max-w-sm flex-1">
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
        <Input
          placeholder="Search notifications..."
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
            {notificationTypes.map((type) => (
              <SelectItem key={type.value} value={type.value}>
                {type.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={priorityFilter} onValueChange={onPriorityChange}>
          <SelectTrigger className="w-[130px] border-slate-200">
            <SelectValue placeholder="Priority" />
          </SelectTrigger>
          <SelectContent>
            {priorityOptions.map((priority) => (
              <SelectItem key={priority.value} value={priority.value}>
                {priority.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={readFilter} onValueChange={onReadChange}>
          <SelectTrigger className="w-[130px] border-slate-200">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="unread">Unread</SelectItem>
            <SelectItem value="read">Read</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" className="border-slate-200" onClick={onMarkAllRead}>
          <CheckSquare className="mr-2 h-4 w-4" />
          Mark All Read
        </Button>
      </div>
    </div>
  );
}