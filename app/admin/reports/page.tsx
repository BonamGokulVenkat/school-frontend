"use client";

import { useState, useMemo } from "react";
import { ReportStats } from "@/components/admin/reports/ReportStats";
import { ReportFilters } from "@/components/admin/reports/ReportFilters";
import { ReportCard } from "@/components/admin/reports/ReportCard";
import { GenerateReportDialog } from "@/components/admin/reports/GenerateReportDialog";
import { reportsData, Report } from "@/lib/dummy/admin/reports-data";
import { FileText } from "lucide-react";

export default function AdminReportsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [formatFilter, setFormatFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [isGenerateDialogOpen, setIsGenerateDialogOpen] = useState(false);
  const [reports, setReports] = useState(reportsData.reports);

  const filteredReports = useMemo(() => {
    return reports.filter((report) => {
      const matchesSearch =
        report.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        report.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesType =
        typeFilter === "all" || report.type === typeFilter;

      const matchesFormat =
        formatFilter === "all" || report.format === formatFilter;

      const matchesStatus =
        statusFilter === "all" || report.status === statusFilter;

      return matchesSearch && matchesType && matchesFormat && matchesStatus;
    });
  }, [reports, searchQuery, typeFilter, formatFilter, statusFilter]);

  const handleGenerateReport = (data: any) => {
    const newReport: Report = {
      id: `r${reports.length + 1}`,
      title: data.title || `${data.type} Report - ${data.academicYear}`,
      description: `${data.type.charAt(0).toUpperCase() + data.type.slice(1)} report generated for ${data.academicYear}`,
      type: data.type,
      category: data.type,
      format: data.format,
      generatedAt: new Date().toISOString(),
      generatedBy: "Admin User",
      status: "processing",
      size: "-",
      downloads: 0,
      lastAccessed: new Date().toISOString(),
      parameters: {
        academicYear: data.academicYear,
        grade: data.grade || undefined,
        class: data.class || undefined,
        dateRange: data.dateRange || undefined,
      },
    };
    setReports([newReport, ...reports]);
  };

  const handleDownload = (report: Report) => {
    // Simulate download
    console.log("Downloading report:", report.title);
    // Update downloads count
    setReports(
      reports.map((r) =>
        r.id === report.id ? { ...r, downloads: r.downloads + 1 } : r
      )
    );
  };

  const handleDelete = (id: string) => {
    setReports(reports.filter((r) => r.id !== id));
  };

  const handleView = (report: Report) => {
    console.log("Viewing report:", report);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
            Reports & Analytics
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Generate, manage, and analyze school reports and analytics
          </p>
        </div>
        <GenerateReportDialog
          open={isGenerateDialogOpen}
          onOpenChange={setIsGenerateDialogOpen}
          onGenerate={handleGenerateReport}
        />
      </div>

      {/* Stats */}
      <ReportStats stats={reportsData.stats} />

      {/* Filters */}
      <ReportFilters
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        typeFilter={typeFilter}
        onTypeChange={setTypeFilter}
        formatFilter={formatFilter}
        onFormatChange={setFormatFilter}
        statusFilter={statusFilter}
        onStatusChange={setStatusFilter}
        onGenerateReport={() => setIsGenerateDialogOpen(true)}
      />

      {/* Grid */}
      {filteredReports.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-300 bg-white py-12 text-center">
          <FileText className="mx-auto h-12 w-12 text-slate-400" />
          <p className="mt-3 font-medium text-slate-500">No reports found</p>
          <p className="text-sm text-slate-400">
            Try adjusting your filters or generate a new report
          </p>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredReports.map((report) => (
            <ReportCard
              key={report.id}
              report={report}
              onDownload={handleDownload}
              onDelete={handleDelete}
              onView={handleView}
            />
          ))}
        </div>
      )}
    </div>
  );
}