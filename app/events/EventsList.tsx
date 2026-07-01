"use client";

import { useState, useMemo } from "react";
import { Search, Filter, Grid, List, Calendar as CalendarIcon } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { EventCard } from "@/components/school/EventCard";
import { EmptyState } from "@/components/school/EmptyState";
import { eventsData, Event } from "@/lib/dummy/school/events-data";

interface EventsListProps {
  initialEvents: Event[];
}

export function EventsList({ initialEvents }: EventsListProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const filteredEvents = useMemo(() => {
    return initialEvents.filter((event) => {
      // Search filter
      const matchesSearch =
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.location.toLowerCase().includes(searchQuery.toLowerCase());

      // Category filter
      const matchesCategory =
        categoryFilter === "all" || event.type === categoryFilter;

      // Status filter
      const matchesStatus =
        statusFilter === "all" || event.status === statusFilter;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [initialEvents, searchQuery, categoryFilter, statusFilter]);

  const uniqueStatuses = useMemo(() => {
    const statuses = new Set(initialEvents.map((e) => e.status));
    return ["all", ...Array.from(statuses)];
  }, [initialEvents]);

  return (
    <div>
      {/* Filter Bar */}
      <div className="mb-8 space-y-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
            <Input
              placeholder="Search events..."
              className="border-slate-200 pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-[140px] border-slate-200">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {eventsData.categories
                  .filter((c) => c.id !== "all")
                  .map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.label}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>

            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[140px] border-slate-200">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                {uniqueStatuses
                  .filter((s) => s !== "all")
                  .map((status) => (
                    <SelectItem key={status} value={status}>
                      {status.charAt(0).toUpperCase() + status.slice(1)}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>

            <div className="flex gap-1">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="icon"
                className="h-9 w-9"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="icon"
                className="h-9 w-9"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm text-slate-500">
          <span>
            Showing {filteredEvents.length} of {initialEvents.length} events
          </span>
          {searchQuery && (
            <Button
              variant="ghost"
              size="sm"
              className="h-auto px-2 text-xs"
              onClick={() => setSearchQuery("")}
            >
              Clear search
            </Button>
          )}
        </div>
      </div>

      {/* Events Grid/List */}
      {filteredEvents.length === 0 ? (
        <EmptyState
          icon={<Search className="h-6 w-6" />}
          title="No events found"
          description="Try adjusting your search or filters to find what you're looking for."
          actionText="Clear all filters"
          onAction={() => {
            setSearchQuery("");
            setCategoryFilter("all");
            setStatusFilter("all");
          }}
        />
      ) : (
        <div
          className={
            viewMode === "grid"
              ? "grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
              : "space-y-4"
          }
        >
          {filteredEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              variant={viewMode === "list" ? "compact" : "default"}
            />
          ))}
        </div>
      )}
    </div>
  );
}