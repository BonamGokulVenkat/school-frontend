export interface AtRiskStudent {
  id: string;
  name: string;
  rollNo: string;
  className: string;
  subject: string;
  attendancePct: number;
  averageMarksPct: number;
  riskLevel: "High" | "Medium" | "Low";
  remedialAssigned: boolean;
}

export interface DistributionTier {
  grade: string;
  count: number;
  percentage: number;
}

export const teacherAnalyticsData = {
  summary: {
    classAverage: "76.4%",
    highestSubject: "Computer Science (84.2%)",
    lowestSubject: "Mathematics (63.1%)",
    attendanceAverage: "86.5%",
    totalTracked: 115,
  },
  distribution: [
    { grade: "A+", count: 14, percentage: 12 },
    { grade: "A", count: 28, percentage: 24 },
    { grade: "B+", count: 32, percentage: 28 },
    { grade: "B", count: 21, percentage: 18 },
    { grade: "C", count: 12, percentage: 10 },
    { grade: "D/F", count: 8, percentage: 8 },
  ] satisfies DistributionTier[],
  atRisk: [
    {
      id: "stu-109",
      name: "Amit Kumar",
      rollNo: "06A14",
      className: "Grade 6-A",
      subject: "Mathematics",
      attendancePct: 62,
      averageMarksPct: 45,
      riskLevel: "High",
      remedialAssigned: true,
    },
    {
      id: "stu-224",
      name: "Neha Sharma",
      rollNo: "06A22",
      className: "Grade 6-A",
      subject: "Science",
      attendancePct: 71,
      averageMarksPct: 52,
      riskLevel: "Medium",
      remedialAssigned: false,
    },
    {
      id: "stu-402",
      name: "Vikram Malhotra",
      rollNo: "07B09",
      className: "Grade 7-B",
      subject: "Mathematics",
      attendancePct: 74,
      averageMarksPct: 58,
      riskLevel: "Medium",
      remedialAssigned: true,
    },
    {
      id: "stu-551",
      name: "Siddharth Sen",
      rollNo: "08A11",
      className: "Grade 8-A",
      subject: "Social Studies",
      attendancePct: 80,
      averageMarksPct: 49,
      riskLevel: "Low",
      remedialAssigned: false,
    },
  ] satisfies AtRiskStudent[],
};