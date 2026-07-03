export interface SubjectPerformance {
  id: string;
  name: string;
  midTerm: number;
  finalExam: number;
  total: number;
  grade: string;
  status: "excellent" | "good" | "average" | "needs-improvement";
  teacher: string;
  feedback: string;
  improvement: string;
}

export interface PerformanceData {
  childName: string;
  class: string;
  rollNo: string;
  overallGrade: string;
  overallPercentage: number;
  subjects: SubjectPerformance[];
  trends: {
    month: string;
    marks: number;
  }[];
}

export const performanceData: PerformanceData = {
  childName: "Rahul Sharma",
  class: "Grade 6-A",
  rollNo: "2024001",
  overallGrade: "A",
  overallPercentage: 85,
  subjects: [
    {
      id: "s1",
      name: "Mathematics",
      midTerm: 82,
      finalExam: 88,
      total: 170,
      grade: "A",
      status: "excellent",
      teacher: "Mrs. Sunita Sharma",
      feedback: "Excellent grasp of algebraic concepts. Shows great problem-solving skills.",
      improvement: "Continue practicing advanced word problems.",
    },
    {
      id: "s2",
      name: "Science",
      midTerm: 75,
      finalExam: 80,
      total: 155,
      grade: "B+",
      status: "good",
      teacher: "Mr. Rajesh Verma",
      feedback: "Good understanding of scientific concepts. Lab work shows improvement.",
      improvement: "Focus more on practical experiments and observations.",
    },
    {
      id: "s3",
      name: "English",
      midTerm: 80,
      finalExam: 85,
      total: 165,
      grade: "A",
      status: "excellent",
      teacher: "Mrs. Priya Rao",
      feedback: "Excellent writing skills and vocabulary. Shows creative thinking.",
      improvement: "Read more literature to enhance analytical skills.",
    },
    {
      id: "s4",
      name: "Social Studies",
      midTerm: 70,
      finalExam: 74,
      total: 144,
      grade: "B",
      status: "average",
      teacher: "Mr. Arun Nair",
      feedback: "Good understanding of historical events. Needs improvement in geography.",
      improvement: "Practice map reading and memorize key geographical terms.",
    },
    {
      id: "s5",
      name: "Hindi",
      midTerm: 86,
      finalExam: 90,
      total: 176,
      grade: "A",
      status: "excellent",
      teacher: "Mrs. Kavita Singh",
      feedback: "Excellent language skills. Shows keen interest in literature.",
      improvement: "Continue reading Hindi literature and poetry.",
    },
  ],
  trends: [
    { month: "July", marks: 78 },
    { month: "August", marks: 80 },
    { month: "September", marks: 82 },
    { month: "October", marks: 85 },
    { month: "November", marks: 88 },
    { month: "December", marks: 90 },
  ],
};