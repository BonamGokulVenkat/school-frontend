export interface AdmissionDate {
  id: string;
  event: string;
  date: string;
  status: "upcoming" | "ongoing" | "completed";
  description?: string;
}

export interface GradeInfo {
  id: string;
  grade: string;
  seats: number;
  age: string;
  subjects: number;
  description?: string;
}

export interface ProcessStep {
  id: string;
  step: number;
  title: string;
  description: string;
  icon?: "FileText" | "ClipboardCheck" | "Users" | "CheckCircle";
}

export interface Document {
  id: string;
  name: string;
  required: boolean;
  description?: string;
}

export const admissionsData = {
  dates: [
    {
      id: "date-1",
      event: "Registration Start",
      date: "Dec 15, 2026",
      status: "upcoming",
      description: "Online registration portal opens for all grades",
    },
    {
      id: "date-2",
      event: "Registration End",
      date: "Mar 30, 2026",
      status: "upcoming",
      description: "Last date to submit online applications",
    },
    {
      id: "date-3",
      event: "Entrance Test",
      date: "Apr 15, 2026",
      status: "upcoming",
      description: "Assessment for all applicants",
    },
    {
      id: "date-4",
      event: "Result Declaration",
      date: "May 20, 2026",
      status: "upcoming",
      description: "Results announced on school website",
    },
    {
      id: "date-5",
      event: "Admission Confirmation",
      date: "Jun 1-15, 2026",
      status: "upcoming",
      description: "Fee payment and document submission",
    },
  ] as AdmissionDate[],

  gradeInfo: [
    {
      id: "grade-nursery",
      grade: "Nursery",
      seats: 30,
      age: "3-4 years",
      subjects: 2,
      description: "Foundation years with focus on basic learning skills",
    },
    {
      id: "grade-kg",
      grade: "KG",
      seats: 35,
      age: "4-5 years",
      subjects: 3,
      description: "Early childhood education with interactive learning",
    },
    {
      id: "grade-1",
      grade: "Grade 1",
      seats: 35,
      age: "5-6 years",
      subjects: 5,
      description: "Primary education with core subjects",
    },
    {
      id: "grade-6",
      grade: "Grade 6",
      seats: 30,
      age: "10-11 years",
      subjects: 7,
      description: "Middle school with expanded curriculum",
    },
    {
      id: "grade-9",
      grade: "Grade 9",
      seats: 30,
      age: "13-14 years",
      subjects: 8,
      description: "High school preparation with advanced subjects",
    },
    {
      id: "grade-11",
      grade: "Grade 11",
      seats: 25,
      age: "15-16 years",
      subjects: 6,
      description: "Senior secondary with subject specialization",
    },
  ] as GradeInfo[],

  processSteps: [
    {
      id: "step-1",
      step: 1,
      title: "Registration",
      description: "Fill online registration form with basic details",
      icon: "FileText",
    },
    {
      id: "step-2",
      step: 2,
      title: "Assessment",
      description: "Entrance test and/or interview based on grade level",
      icon: "ClipboardCheck",
    },
    {
      id: "step-3",
      step: 3,
      title: "Documentation",
      description: "Submit required documents for verification",
      icon: "Users",
    },
    {
      id: "step-4",
      step: 4,
      title: "Admission Confirmation",
      description: "Confirm admission and complete fee payment",
      icon: "CheckCircle",
    },
  ] as ProcessStep[],

  documents: [
    {
      id: "doc-1",
      name: "Birth Certificate",
      required: true,
      description: "Original and photocopy for verification",
    },
    {
      id: "doc-2",
      name: "Transfer Certificate",
      required: true,
      description: "From previous school (for grades 2+)",
    },
    {
      id: "doc-3",
      name: "Aadhar Card",
      required: true,
      description: "Student's Aadhar number",
    },
    {
      id: "doc-4",
      name: "Previous Report Card",
      required: true,
      description: "Academic records from previous year",
    },
    {
      id: "doc-5",
      name: "Passport Size Photos",
      required: true,
      description: "4 recent passport size photographs",
    },
    {
      id: "doc-6",
      name: "Medical Certificate",
      required: false,
      description: "Health records and immunization details",
    },
  ] as Document[],

  feeStructure: {
    admissionFee: "₹25,000",
    tuitionFee: "₹5,000 - ₹8,000 per month",
    transportFee: "₹2,000 - ₹4,000 per month",
    otherCharges: "₹10,000 per annum",
  },
};