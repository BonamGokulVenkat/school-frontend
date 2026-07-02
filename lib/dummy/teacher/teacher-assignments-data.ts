export type AssignmentStatus = "draft" | "published" | "closed";
export type AssignmentPriority = "high" | "medium" | "low";
export type SubmissionStatus = "submitted" | "graded" | "late" | "missing";

export interface TeacherAssignment {
  id: string;
  title: string;
  description: string;
  subject: string;
  className: string;
  section: string;
  dueDate: string;
  dueTime: string;
  totalMarks: number;
  status: AssignmentStatus;
  priority: AssignmentPriority;
  createdDate: string;
  submissions: {
    total: number;
    submitted: number;
    graded: number;
  };
  attachments?: string[];
}

export interface Submission {
  id: string;
  assignmentId: string;
  studentName: string;
  studentId: string;
  rollNo: string;
  submittedDate?: string;
  status: SubmissionStatus;
  marks?: number;
  totalMarks: number;
  feedback?: string;
  attachment?: string;
}

export interface TeacherAssignmentStats {
  total: number;
  published: number;
  draft: number;
  closed: number;
  submissions: number;
  graded: number;
}

export const teacherAssignmentsData = {
  stats: {
    total: 12,
    published: 8,
    draft: 2,
    closed: 2,
    submissions: 45,
    graded: 30,
  } satisfies TeacherAssignmentStats,

  filters: {
    statuses: ["draft", "published", "closed"],
    priorities: ["high", "medium", "low"],
    subjects: ["Mathematics", "Science", "English", "Social Studies", "Computer Science"],
    classes: ["Grade 6-A", "Grade 7-B", "Grade 8-A", "Grade 9-C"],
  },

  assignments: [
    {
      id: "ass-1",
      title: "Mathematics - Chapter 7: Algebra",
      description:
        "Solve all problems from Chapter 7. Focus on linear equations, quadratic equations, and word problems.",
      subject: "Mathematics",
      className: "Grade 6-A",
      section: "A",
      dueDate: "2026-10-25",
      dueTime: "11:59 PM",
      totalMarks: 30,
      status: "published",
      priority: "high",
      createdDate: "2026-10-18",
      submissions: {
        total: 25,
        submitted: 18,
        graded: 12,
      },
      attachments: ["Chapter_7_Problems.pdf", "Practice_Worksheet.pdf"],
    },
    {
      id: "ass-2",
      title: "Science Lab Report - Chemical Reactions",
      description:
        "Write a complete lab report including aim, materials, procedure, observations, result, and conclusion.",
      subject: "Science",
      className: "Grade 8-A",
      section: "A",
      dueDate: "2026-10-28",
      dueTime: "10:00 PM",
      totalMarks: 50,
      status: "published",
      priority: "medium",
      createdDate: "2026-10-19",
      submissions: {
        total: 32,
        submitted: 20,
        graded: 8,
      },
      attachments: ["Lab_Report_Format.pdf"],
    },
    {
      id: "ass-3",
      title: "English Essay - My Dream School",
      description:
        "Write a 600-word essay with proper introduction, body, conclusion, grammar, and paragraph structure.",
      subject: "English",
      className: "Grade 7-B",
      section: "B",
      dueDate: "2026-10-30",
      dueTime: "09:00 PM",
      totalMarks: 25,
      status: "draft",
      priority: "low",
      createdDate: "2026-10-20",
      submissions: {
        total: 28,
        submitted: 0,
        graded: 0,
      },
    },
    {
      id: "ass-4",
      title: "Computer Science - HTML Basics",
      description:
        "Create a simple HTML webpage using headings, paragraphs, images, links, lists, and tables.",
      subject: "Computer Science",
      className: "Grade 9-C",
      section: "C",
      dueDate: "2026-10-22",
      dueTime: "11:59 PM",
      totalMarks: 40,
      status: "closed",
      priority: "high",
      createdDate: "2026-10-12",
      submissions: {
        total: 30,
        submitted: 26,
        graded: 22,
      },
      attachments: ["HTML_Assignment_Guide.pdf"],
    },
  ] satisfies TeacherAssignment[],

  submissions: [
    {
      id: "sub-1",
      assignmentId: "ass-1",
      studentName: "Aarav Sharma",
      studentId: "stu-001",
      rollNo: "06A01",
      submittedDate: "2026-10-21",
      status: "graded",
      marks: 27,
      totalMarks: 30,
      feedback: "Excellent work. Steps are clear and answers are accurate.",
      attachment: "aarav_algebra.pdf",
    },
    {
      id: "sub-2",
      assignmentId: "ass-1",
      studentName: "Diya Reddy",
      studentId: "stu-002",
      rollNo: "06A02",
      submittedDate: "2026-10-22",
      status: "submitted",
      totalMarks: 30,
      attachment: "diya_algebra.pdf",
    },
    {
      id: "sub-3",
      assignmentId: "ass-1",
      studentName: "Karthik Rao",
      studentId: "stu-003",
      rollNo: "06A03",
      submittedDate: "2026-10-26",
      status: "late",
      totalMarks: 30,
      attachment: "karthik_algebra.pdf",
    },
    {
      id: "sub-4",
      assignmentId: "ass-1",
      studentName: "Meera Nair",
      studentId: "stu-004",
      rollNo: "06A04",
      status: "missing",
      totalMarks: 30,
    },
    {
      id: "sub-5",
      assignmentId: "ass-2",
      studentName: "Rahul Verma",
      studentId: "stu-005",
      rollNo: "08A05",
      submittedDate: "2026-10-24",
      status: "submitted",
      totalMarks: 50,
      attachment: "rahul_lab_report.pdf",
    },
  ] satisfies Submission[],
};

export function getAssignmentStatusColor(status: AssignmentStatus) {
  switch (status) {
    case "published":
      return "bg-emerald-100 text-emerald-700 border-emerald-200";
    case "draft":
      return "bg-slate-100 text-slate-700 border-slate-200";
    case "closed":
      return "bg-rose-100 text-rose-700 border-rose-200";
    default:
      return "bg-slate-100 text-slate-700 border-slate-200";
  }
}

export function getAssignmentPriorityColor(priority: AssignmentPriority) {
  switch (priority) {
    case "high":
      return "bg-rose-100 text-rose-700 border-rose-200";
    case "medium":
      return "bg-amber-100 text-amber-700 border-amber-200";
    case "low":
      return "bg-blue-100 text-blue-700 border-blue-200";
    default:
      return "bg-slate-100 text-slate-700 border-slate-200";
  }
}

export function getSubmissionStatusColor(status: SubmissionStatus) {
  switch (status) {
    case "graded":
      return "bg-emerald-100 text-emerald-700 border-emerald-200";
    case "submitted":
      return "bg-blue-100 text-blue-700 border-blue-200";
    case "late":
      return "bg-amber-100 text-amber-700 border-amber-200";
    case "missing":
      return "bg-rose-100 text-rose-700 border-rose-200";
    default:
      return "bg-slate-100 text-slate-700 border-slate-200";
  }
}