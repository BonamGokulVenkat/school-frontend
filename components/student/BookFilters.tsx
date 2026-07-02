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

interface BookFiltersProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  categoryFilter: string;
  onCategoryChange: (value: string) => void;
  availabilityFilter: string;
  onAvailabilityChange: (value: string) => void;
  sortBy: string;
  onSortChange: (value: string) => void;
  categories: { id: string; label: string }[];
  availabilityOptions: string[];
  sortOptions: string[];
  activeFilters: number;
  onClearFilters: () => void;
}

export function BookFilters({
  searchQuery,
  onSearchChange,
  categoryFilter,
  onCategoryChange,
  availabilityFilter,
  onAvailabilityChange,
  sortBy,
  onSortChange,
  categories,
  availabilityOptions,
  sortOptions,
  activeFilters,
  onClearFilters,
}: BookFiltersProps) {
  return (
    <div className="space-y-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
        <Input
          placeholder="Search books by title, author, or ISBN..."
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

        <Select value={categoryFilter} onValueChange={onCategoryChange}>
          <SelectTrigger className="h-8 w-[140px] border-slate-200 text-xs">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category.id} value={category.id}>
                {category.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={availabilityFilter} onValueChange={onAvailabilityChange}>
          <SelectTrigger className="h-8 w-[130px] border-slate-200 text-xs">
            <SelectValue placeholder="Availability" />
          </SelectTrigger>
          <SelectContent>
            {availabilityOptions.map((option) => (
              <SelectItem key={option} value={option.toLowerCase()}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={sortBy} onValueChange={onSortChange}>
          <SelectTrigger className="h-8 w-[120px] border-slate-200 text-xs">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            {sortOptions.map((option) => (
              <SelectItem key={option} value={option.toLowerCase()}>
                {option}
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
          {categoryFilter !== "all" && (
            <Badge variant="secondary" className="text-xs">
              Category: {categories.find(c => c.id === categoryFilter)?.label}
              <button
                className="ml-1 hover:text-slate-900"
                onClick={() => onCategoryChange("all")}
              >
                ×
              </button>
            </Badge>
          )}
          {availabilityFilter !== "all" && (
            <Badge variant="secondary" className="text-xs">
              Availability: {availabilityFilter}
              <button
                className="ml-1 hover:text-slate-900"
                onClick={() => onAvailabilityChange("all")}
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