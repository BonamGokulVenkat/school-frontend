export interface Assignment {
  id: string;
  title: string;
  description: string;
  subject: string;
  subjectColor: string;
  dueDate: string;
  dueTime: string;
  totalMarks: number;
  obtainedMarks?: number;
  status: "pending" | "submitted" | "graded" | "overdue";
  priority: "high" | "medium" | "low";
  teacher: string;
  attachments?: string[];
  feedback?: string;
  submittedAt?: string;
}

export interface AssignmentStats {
  total: number;
  pending: number;
  submitted: number;
  graded: number;
  overdue: number;
  completionRate: number;
}

export const assignmentsData = {
  stats: {
    total: 8,
    pending: 3,
    submitted: 3,
    graded: 2,
    overdue: 0,
    completionRate: 62.5,
  } as AssignmentStats,

  assignments: [
    {
      id: "ass-1",
      title: "Mathematics - Chapter 7: Algebra",
      description: "Solve all problems from Chapter 7 (Algebra). Focus on linear equations and quadratic equations. Show all steps clearly.",
      subject: "Mathematics",
      subjectColor: "blue",
      dueDate: "2026-10-20",
      dueTime: "11:59 PM",
      totalMarks: 30,
      status: "pending",
      priority: "high",
      teacher: "Mrs. Sharma",
      attachments: ["Chapter_7_Problems.pdf", "Formula_Sheet.pdf"],
    },
    {
      id: "ass-2",
      title: "Science Lab Report - Chemical Reactions",
      description: "Write a lab report on the chemical reactions experiment conducted in class. Include hypothesis, procedure, observations, and conclusion.",
      subject: "Science",
      subjectColor: "green",
      dueDate: "2026-10-18",
      dueTime: "11:59 PM",
      totalMarks: 25,
      status: "submitted",
      priority: "medium",
      teacher: "Mr. Verma",
      attachments: ["Lab_Report_Template.docx"],
      submittedAt: "2026-10-17T14:30:00",
    },
    {
      id: "ass-3",
      title: "English Essay - The Importance of Reading",
      description: "Write a 500-word essay on the importance of reading in today's digital age. Include personal experiences and examples.",
      subject: "English",
      subjectColor: "purple",
      dueDate: "2026-10-15",
      dueTime: "11:59 PM",
      totalMarks: 20,
      obtainedMarks: 18,
      status: "graded",
      priority: "medium",
      teacher: "Ms. Patel",
      feedback: "Excellent essay! Great use of examples and personal experiences. Slightly improve the conclusion.",
      submittedAt: "2026-10-14T10:15:00",
    },
    {
      id: "ass-4",
      title: "Social Studies - Ancient Civilizations Project",
      description: "Create a presentation on any one ancient civilization (Egypt, Greece, Rome, or Indus Valley). Include timeline, culture, and contributions.",
      subject: "Social Studies",
      subjectColor: "orange",
      dueDate: "2026-10-25",
      dueTime: "11:59 PM",
      totalMarks: 50,
      status: "pending",
      priority: "high",
      teacher: "Mr. Singh",
      attachments: ["Project_Guidelines.pdf", "Presentation_Template.pptx"],
    },
    {
      id: "ass-5",
      title: "Computer Science - HTML/CSS Assignment",
      description: "Create a personal portfolio webpage using HTML and CSS. Include at least 3 sections: About, Skills, and Contact.",
      subject: "Computer Science",
      subjectColor: "teal",
      dueDate: "2026-10-12",
      dueTime: "11:59 PM",
      totalMarks: 40,
      obtainedMarks: 38,
      status: "graded",
      priority: "low",
      teacher: "Mrs. Reddy",
      feedback: "Great work! The design is clean and responsive. Good use of CSS flexbox.",
      submittedAt: "2026-10-11T16:45:00",
    },
    {
      id: "ass-6",
      title: "Art - Perspective Drawing",
      description: "Create a perspective drawing of a city street. Use one-point perspective technique.",
      subject: "Art",
      subjectColor: "pink",
      dueDate: "2026-10-22",
      dueTime: "11:59 PM",
      totalMarks: 15,
      status: "pending",
      priority: "low",
      teacher: "Mrs. Kumar",
    },
    {
      id: "ass-7",
      title: "Mathematics - Geometry Problems",
      description: "Solve the geometry problems from Chapter 8. Focus on theorems and proofs.",
      subject: "Mathematics",
      subjectColor: "blue",
      dueDate: "2026-10-08",
      dueTime: "11:59 PM",
      totalMarks: 25,
      obtainedMarks: 22,
      status: "graded",
      priority: "medium",
      teacher: "Mrs. Sharma",
      feedback: "Good understanding of theorems. Practice more on proof writing.",
      submittedAt: "2026-10-07T09:20:00",
    },
    {
      id: "ass-8",
      title: "Science - Environmental Science Project",
      description: "Research and present on environmental issues affecting your local community. Include solutions and recommendations.",
      subject: "Science",
      subjectColor: "green",
      dueDate: "2026-10-30",
      dueTime: "11:59 PM",
      totalMarks: 35,
      status: "pending",
      priority: "high",
      teacher: "Mr. Verma",
      attachments: ["Research_Guidelines.pdf"],
    },
  ] as Assignment[],

  filters: {
    statuses: ["All", "Pending", "Submitted", "Graded", "Overdue"],
    subjects: ["All", "Mathematics", "Science", "English", "Social Studies", "Computer Science", "Art"],
    priorities: ["All", "High", "Medium", "Low"],
  },
};

// Helper function to get color classes
export const getSubjectColorClass = (color: string) => {
  const colorMap: Record<string, string> = {
    blue: "bg-blue-100 text-blue-700 border-blue-200",
    green: "bg-green-100 text-green-700 border-green-200",
    purple: "bg-purple-100 text-purple-700 border-purple-200",
    orange: "bg-orange-100 text-orange-700 border-orange-200",
    teal: "bg-teal-100 text-teal-700 border-teal-200",
    pink: "bg-pink-100 text-pink-700 border-pink-200",
    red: "bg-red-100 text-red-700 border-red-200",
    yellow: "bg-yellow-100 text-yellow-700 border-yellow-200",
  };
  return colorMap[color] || colorMap.blue;
};

// Helper function to get status badge
export const getStatusBadge = (status: string) => {
  const statusMap = {
    pending: "bg-yellow-100 text-yellow-700 border-yellow-200",
    submitted: "bg-blue-100 text-blue-700 border-blue-200",
    graded: "bg-green-100 text-green-700 border-green-200",
    overdue: "bg-red-100 text-red-700 border-red-200",
  };
  return statusMap[status as keyof typeof statusMap] || statusMap.pending;
};

// Helper function to get priority badge
export const getPriorityBadge = (priority: string) => {
  const priorityMap = {
    high: "bg-red-100 text-red-700 border-red-200",
    medium: "bg-yellow-100 text-yellow-700 border-yellow-200",
    low: "bg-green-100 text-green-700 border-green-200",
  };
  return priorityMap[priority as keyof typeof priorityMap] || priorityMap.medium;
};