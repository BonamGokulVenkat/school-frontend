export interface SubjectGrade {
  id: string;
  subject: string;
  marks: number;
  total: number;
  percentage: number;
  grade: string;
  status: "good" | "warning" | "danger";
  teacher: string;
}

export interface TermResult {
  id: string;
  term: string;
  percentage: number;
  grade: string;
  rank?: number;
  totalStudents?: number;
}

export interface PerformanceTrend {
  id: string;
  subject: string;
  data: { term: string; marks: number }[];
}

export interface ResultsSummary {
  overallGrade: string;
  rank: number;
  totalStudents: number;
  percentage: number;
  subjectsPassed: number;
  totalSubjects: number;
}

export const resultsData = {
  summary: {
    overallGrade: "A",
    rank: 5,
    totalStudents: 35,
    percentage: 87,
    subjectsPassed: 5,
    totalSubjects: 5,
  } as ResultsSummary,

  subjects: [
    {
      id: "subj-math",
      subject: "Mathematics",
      marks: 85,
      total: 100,
      percentage: 85,
      grade: "A",
      status: "good",
      teacher: "Mrs. Sharma",
    },
    {
      id: "subj-science",
      subject: "Science",
      marks: 78,
      total: 100,
      percentage: 78,
      grade: "B+",
      status: "warning",
      teacher: "Mr. Verma",
    },
    {
      id: "subj-english",
      subject: "English",
      marks: 82,
      total: 100,
      percentage: 82,
      grade: "A",
      status: "good",
      teacher: "Ms. Patel",
    },
    {
      id: "subj-social",
      subject: "Social Studies",
      marks: 72,
      total: 100,
      percentage: 72,
      grade: "B",
      status: "warning",
      teacher: "Mr. Singh",
    },
    {
      id: "subj-computer",
      subject: "Computer Science",
      marks: 95,
      total: 100,
      percentage: 95,
      grade: "A+",
      status: "good",
      teacher: "Mrs. Reddy",
    },
  ] as SubjectGrade[],

  terms: [
    {
      id: "term-1",
      term: "Term 1",
      percentage: 82,
      grade: "B+",
      rank: 8,
      totalStudents: 35,
    },
    {
      id: "term-2",
      term: "Term 2",
      percentage: 85,
      grade: "A",
      rank: 6,
      totalStudents: 35,
    },
    {
      id: "term-3",
      term: "Term 3",
      percentage: 87,
      grade: "A",
      rank: 5,
      totalStudents: 35,
    },
  ] as TermResult[],

  performanceTrends: [
    {
      id: "trend-math",
      subject: "Mathematics",
      data: [
        { term: "Term 1", marks: 78 },
        { term: "Term 2", marks: 82 },
        { term: "Term 3", marks: 85 },
      ],
    },
    {
      id: "trend-science",
      subject: "Science",
      data: [
        { term: "Term 1", marks: 72 },
        { term: "Term 2", marks: 75 },
        { term: "Term 3", marks: 78 },
      ],
    },
    {
      id: "trend-english",
      subject: "English",
      data: [
        { term: "Term 1", marks: 76 },
        { term: "Term 2", marks: 80 },
        { term: "Term 3", marks: 82 },
      ],
    },
    {
      id: "trend-social",
      subject: "Social Studies",
      data: [
        { term: "Term 1", marks: 68 },
        { term: "Term 2", marks: 70 },
        { term: "Term 3", marks: 72 },
      ],
    },
    {
      id: "trend-computer",
      subject: "Computer Science",
      data: [
        { term: "Term 1", marks: 88 },
        { term: "Term 2", marks: 92 },
        { term: "Term 3", marks: 95 },
      ],
    },
  ] as PerformanceTrend[],

  gradeScale: [
    { grade: "A+", range: "90-100", description: "Excellent" },
    { grade: "A", range: "80-89", description: "Very Good" },
    { grade: "B+", range: "75-79", description: "Good" },
    { grade: "B", range: "70-74", description: "Above Average" },
    { grade: "C+", range: "65-69", description: "Average" },
    { grade: "C", range: "60-64", description: "Below Average" },
    { grade: "D", range: "50-59", description: "Needs Improvement" },
    { grade: "F", range: "0-49", description: "Fail" },
  ],
};

// Helper function to get grade color
export const getGradeColor = (grade: string) => {
  const colorMap: Record<string, string> = {
    "A+": "text-green-600 bg-green-50 border-green-200",
    "A": "text-blue-600 bg-blue-50 border-blue-200",
    "B+": "text-teal-600 bg-teal-50 border-teal-200",
    "B": "text-yellow-600 bg-yellow-50 border-yellow-200",
    "C+": "text-orange-600 bg-orange-50 border-orange-200",
    "C": "text-orange-700 bg-orange-50 border-orange-200",
    "D": "text-red-600 bg-red-50 border-red-200",
    "F": "text-red-700 bg-red-50 border-red-200",
  };
  return colorMap[grade] || colorMap["A"];
};

// Helper function to get status color
export const getStatusColor = (status: string) => {
  const colorMap = {
    good: "text-green-600",
    warning: "text-yellow-600",
    danger: "text-red-600",
  };
  return colorMap[status as keyof typeof colorMap] || colorMap.good;
};