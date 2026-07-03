export interface Report {
  id: string;
  title: string;
  description: string;
  type: "academic" | "attendance" | "staff" | "financial" | "student" | "performance";
  category: "academic" | "attendance" | "staff" | "financial";
  format: "pdf" | "excel" | "csv";
  generatedAt: string;
  generatedBy: string;
  status: "ready" | "processing" | "failed";
  size: string;
  downloads: number;
  lastAccessed: string;
  parameters: {
    academicYear: string;
    grade?: string;
    class?: string;
    subject?: string;
    dateRange?: string;
  };
}

export const reportsData = {
  stats: {
    total: 45,
    ready: 38,
    processing: 4,
    failed: 3,
    downloads: 128,
    categories: {
      academic: 15,
      attendance: 12,
      staff: 10,
      financial: 8,
    },
  },
  reports: [
    {
      id: "r1",
      title: "Student Performance Report - 2026-27",
      description: "Comprehensive academic performance report for all students",
      type: "academic",
      category: "academic",
      format: "pdf",
      generatedAt: "2026-01-15T10:30:00Z",
      generatedBy: "Admin User",
      status: "ready",
      size: "2.4 MB",
      downloads: 45,
      lastAccessed: "2026-01-16T14:20:00Z",
      parameters: {
        academicYear: "2026-27",
      },
    },
    {
      id: "r2",
      title: "Attendance Summary - Term 1",
      description: "Monthly attendance report for all classes",
      type: "attendance",
      category: "attendance",
      format: "excel",
      generatedAt: "2026-01-10T09:15:00Z",
      generatedBy: "Admin User",
      status: "ready",
      size: "1.8 MB",
      downloads: 32,
      lastAccessed: "2026-01-12T11:00:00Z",
      parameters: {
        academicYear: "2026-27",
        dateRange: "Jul-Sep 2026",
      },
    },
    {
      id: "r3",
      title: "Staff Performance Review",
      description: "Performance evaluation report for all teaching staff",
      type: "staff",
      category: "staff",
      format: "pdf",
      generatedAt: "2026-01-08T16:45:00Z",
      generatedBy: "Admin User",
      status: "ready",
      size: "3.1 MB",
      downloads: 28,
      lastAccessed: "2026-01-09T09:30:00Z",
      parameters: {
        academicYear: "2026-27",
      },
    },
    {
      id: "r4",
      title: "Financial Summary 2026",
      description: "School financial overview including fees and expenses",
      type: "financial",
      category: "financial",
      format: "excel",
      generatedAt: "2026-01-05T11:20:00Z",
      generatedBy: "Admin User",
      status: "ready",
      size: "4.2 MB",
      downloads: 18,
      lastAccessed: "2026-01-06T10:00:00Z",
      parameters: {
        academicYear: "2026",
      },
    },
    {
      id: "r5",
      title: "Grade 6-A Performance Analytics",
      description: "Detailed performance report for Grade 6-A",
      type: "performance",
      category: "academic",
      format: "pdf",
      generatedAt: "2026-01-12T14:30:00Z",
      generatedBy: "Admin User",
      status: "processing",
      size: "-",
      downloads: 0,
      lastAccessed: "2026-01-12T14:30:00Z",
      parameters: {
        academicYear: "2026-27",
        class: "Grade 6-A",
      },
    },
    {
      id: "r6",
      title: "Weekly Attendance Report",
      description: "Attendance tracking for week 3 of January",
      type: "attendance",
      category: "attendance",
      format: "csv",
      generatedAt: "2026-01-14T08:00:00Z",
      generatedBy: "System",
      status: "failed",
      size: "-",
      downloads: 0,
      lastAccessed: "2026-01-14T08:00:00Z",
      parameters: {
        academicYear: "2026-27",
        dateRange: "Jan 10-14, 2026",
      },
    },
  ] as Report[],
};

export const reportTypes = [
  { value: "all", label: "All Reports" },
  { value: "academic", label: "Academic" },
  { value: "attendance", label: "Attendance" },
  { value: "staff", label: "Staff" },
  { value: "financial", label: "Financial" },
  { value: "performance", label: "Performance" },
];

export const reportFormats = [
  { value: "all", label: "All Formats" },
  { value: "pdf", label: "PDF" },
  { value: "excel", label: "Excel" },
  { value: "csv", label: "CSV" },
];

export const reportStatuses = [
  { value: "all", label: "All Status" },
  { value: "ready", label: "Ready" },
  { value: "processing", label: "Processing" },
  { value: "failed", label: "Failed" },
];