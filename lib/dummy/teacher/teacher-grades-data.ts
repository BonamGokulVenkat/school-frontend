export type GradeStatus = "excellent" | "good" | "average" | "at-risk";

export interface StudentGrade {
  id: string;
  rollNo: string;
  studentName: string;
  className: string;
  section: string;
  subject: string;
  examType: string;
  marksObtained: number;
  totalMarks: number;
  grade: string;
  status: GradeStatus;
  lastUpdated: string;
}

export interface GradeStats {
  totalStudents: number;
  averageMarks: number;
  highestMarks: number;
  lowestMarks: number;
  passPercentage: number;
  atRiskStudents: number;
}

export const teacherGradesData = {
  stats: {
    totalStudents: 25,
    averageMarks: 78,
    highestMarks: 96,
    lowestMarks: 42,
    passPercentage: 88,
    atRiskStudents: 3,
  } satisfies GradeStats,

  filters: {
    classes: ["Grade 6-A", "Grade 7-B", "Grade 8-A", "Grade 9-C"],
    subjects: ["Mathematics", "Science", "English", "Social Studies", "Computer Science"],
    examTypes: ["Unit Test 1", "Unit Test 2", "Mid Term", "Final Exam", "Assignment"],
  },

  grades: [
    {
      id: "grade-1",
      rollNo: "06A01",
      studentName: "Rahul Sharma",
      className: "Grade 6-A",
      section: "A",
      subject: "Mathematics",
      examType: "Mid Term",
      marksObtained: 85,
      totalMarks: 100,
      grade: "A",
      status: "excellent",
      lastUpdated: "2026-10-20",
    },
    {
      id: "grade-2",
      rollNo: "06A02",
      studentName: "Priya Patel",
      className: "Grade 6-A",
      section: "A",
      subject: "Mathematics",
      examType: "Mid Term",
      marksObtained: 78,
      totalMarks: 100,
      grade: "B+",
      status: "good",
      lastUpdated: "2026-10-20",
    },
    {
      id: "grade-3",
      rollNo: "06A03",
      studentName: "Aarav Reddy",
      className: "Grade 6-A",
      section: "A",
      subject: "Mathematics",
      examType: "Mid Term",
      marksObtained: 92,
      totalMarks: 100,
      grade: "A+",
      status: "excellent",
      lastUpdated: "2026-10-21",
    },
    {
      id: "grade-4",
      rollNo: "06A04",
      studentName: "Meera Nair",
      className: "Grade 6-A",
      section: "A",
      subject: "Mathematics",
      examType: "Mid Term",
      marksObtained: 64,
      totalMarks: 100,
      grade: "B",
      status: "average",
      lastUpdated: "2026-10-21",
    },
    {
      id: "grade-5",
      rollNo: "06A05",
      studentName: "Karthik Rao",
      className: "Grade 6-A",
      section: "A",
      subject: "Mathematics",
      examType: "Mid Term",
      marksObtained: 42,
      totalMarks: 100,
      grade: "D",
      status: "at-risk",
      lastUpdated: "2026-10-22",
    },
    {
      id: "grade-6",
      rollNo: "07B01",
      studentName: "Diya Verma",
      className: "Grade 7-B",
      section: "B",
      subject: "Science",
      examType: "Unit Test 2",
      marksObtained: 88,
      totalMarks: 100,
      grade: "A",
      status: "excellent",
      lastUpdated: "2026-10-22",
    },
    {
      id: "grade-7",
      rollNo: "08A01",
      studentName: "Arjun Mehta",
      className: "Grade 8-A",
      section: "A",
      subject: "Computer Science",
      examType: "Assignment",
      marksObtained: 36,
      totalMarks: 50,
      grade: "B+",
      status: "good",
      lastUpdated: "2026-10-23",
    },
  ] satisfies StudentGrade[],
};

export function calculateGrade(marksObtained: number, totalMarks: number) {
  const percentage = (marksObtained / totalMarks) * 100;

  if (percentage >= 90) return "A+";
  if (percentage >= 80) return "A";
  if (percentage >= 70) return "B+";
  if (percentage >= 60) return "B";
  if (percentage >= 50) return "C";
  if (percentage >= 40) return "D";
  return "F";
}

export function calculateGradeStatus(
  marksObtained: number,
  totalMarks: number,
): GradeStatus {
  const percentage = (marksObtained / totalMarks) * 100;

  if (percentage >= 85) return "excellent";
  if (percentage >= 70) return "good";
  if (percentage >= 50) return "average";
  return "at-risk";
}

export function getGradeStatusColor(status: GradeStatus) {
  switch (status) {
    case "excellent":
      return "bg-emerald-100 text-emerald-700 border-emerald-200";
    case "good":
      return "bg-blue-100 text-blue-700 border-blue-200";
    case "average":
      return "bg-amber-100 text-amber-700 border-amber-200";
    case "at-risk":
      return "bg-rose-100 text-rose-700 border-rose-200";
    default:
      return "bg-slate-100 text-slate-700 border-slate-200";
  }
}