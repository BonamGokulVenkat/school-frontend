export interface TeacherClass {
  id: string;
  name: string;
  subject: string;
  section: string;
  students: number;
  room: string;
  schedule: {
    day: string;
    time: string;
  }[];
  attendance: {
    present: number;
    total: number;
    percentage: number;
  };
  avgGrade: string;
  status: "active" | "inactive" | "pending";
  teacher: string;
  subjects: string[];
}

export interface ClassStat {
  id: string;
  label: string;
  value: string | number;
  icon: string;
  color: string;
  change?: string;
}

export const classesData = {
  stats: [
    {
      id: "stat-total",
      label: "Total Classes",
      value: 5,
      icon: "📚",
      color: "blue",
      change: "2 subjects",
    },
    {
      id: "stat-students",
      label: "Total Students",
      value: 128,
      icon: "👨‍🎓",
      color: "green",
      change: "+8 this month",
    },
    {
      id: "stat-avg-attendance",
      label: "Avg Attendance",
      value: "85%",
      icon: "📊",
      color: "purple",
      change: "+3% this week",
    },
    {
      id: "stat-avg-grade",
      label: "Avg Grade",
      value: "B+",
      icon: "📈",
      color: "orange",
      change: "Improving",
    },
  ] as ClassStat[],

  classes: [
    {
      id: "class-1",
      name: "Grade 6-A",
      subject: "Mathematics",
      section: "A",
      students: 25,
      room: "Room 201",
      schedule: [
        { day: "Monday", time: "9:00 AM" },
        { day: "Tuesday", time: "10:00 AM" },
        { day: "Wednesday", time: "9:00 AM" },
        { day: "Thursday", time: "11:00 AM" },
        { day: "Friday", time: "9:00 AM" },
      ],
      attendance: {
        present: 210,
        total: 250,
        percentage: 84,
      },
      avgGrade: "B+",
      status: "active",
      teacher: "Mrs. Sunita Sharma",
      subjects: ["Mathematics", "Algebra"],
    },
    {
      id: "class-2",
      name: "Grade 6-B",
      subject: "Mathematics",
      section: "B",
      students: 28,
      room: "Room 202",
      schedule: [
        { day: "Monday", time: "10:00 AM" },
        { day: "Tuesday", time: "11:00 AM" },
        { day: "Wednesday", time: "10:00 AM" },
        { day: "Thursday", time: "9:00 AM" },
        { day: "Friday", time: "10:00 AM" },
      ],
      attendance: {
        present: 220,
        total: 280,
        percentage: 79,
      },
      avgGrade: "B",
      status: "active",
      teacher: "Mrs. Sunita Sharma",
      subjects: ["Mathematics", "Geometry"],
    },
    {
      id: "class-3",
      name: "Grade 7-A",
      subject: "Algebra",
      section: "A",
      students: 25,
      room: "Room 203",
      schedule: [
        { day: "Monday", time: "11:00 AM" },
        { day: "Wednesday", time: "11:00 AM" },
        { day: "Friday", time: "11:00 AM" },
      ],
      attendance: {
        present: 165,
        total: 200,
        percentage: 83,
      },
      avgGrade: "A-",
      status: "active",
      teacher: "Mrs. Sunita Sharma",
      subjects: ["Algebra", "Mathematics"],
    },
    {
      id: "class-4",
      name: "Grade 8-A",
      subject: "Geometry",
      section: "A",
      students: 27,
      room: "Room 204",
      schedule: [
        { day: "Tuesday", time: "1:00 PM" },
        { day: "Thursday", time: "1:00 PM" },
      ],
      attendance: {
        present: 130,
        total: 160,
        percentage: 81,
      },
      avgGrade: "B+",
      status: "active",
      teacher: "Mrs. Sunita Sharma",
      subjects: ["Geometry", "Mathematics"],
    },
    {
      id: "class-5",
      name: "Grade 9-A",
      subject: "Mathematics",
      section: "A",
      students: 23,
      room: "Room 205",
      schedule: [
        { day: "Monday", time: "2:00 PM" },
        { day: "Wednesday", time: "2:00 PM" },
        { day: "Friday", time: "2:00 PM" },
      ],
      attendance: {
        present: 180,
        total: 210,
        percentage: 86,
      },
      avgGrade: "A",
      status: "active",
      teacher: "Mrs. Sunita Sharma",
      subjects: ["Mathematics", "Advanced Math"],
    },
  ] as TeacherClass[],

  filters: {
    statuses: ["All", "Active", "Inactive", "Pending"],
    subjects: ["All", "Mathematics", "Algebra", "Geometry", "Advanced Math"],
    sections: ["All", "A", "B"],
  },
};

// Helper function to get status color
export const getStatusColor = (status: string) => {
  const colorMap = {
    active: "bg-green-100 text-green-700 border-green-200",
    inactive: "bg-gray-100 text-gray-700 border-gray-200",
    pending: "bg-yellow-100 text-yellow-700 border-yellow-200",
  };
  return colorMap[status as keyof typeof colorMap] || colorMap.pending;
};

// Helper function to get grade color
export const getGradeColor = (grade: string) => {
  const colorMap: Record<string, string> = {
    "A+": "text-green-600 bg-green-50 border-green-200",
    "A": "text-blue-600 bg-blue-50 border-blue-200",
    "A-": "text-teal-600 bg-teal-50 border-teal-200",
    "B+": "text-teal-600 bg-teal-50 border-teal-200",
    "B": "text-yellow-600 bg-yellow-50 border-yellow-200",
    "B-": "text-yellow-600 bg-yellow-50 border-yellow-200",
    "C+": "text-orange-600 bg-orange-50 border-orange-200",
    "C": "text-orange-600 bg-orange-50 border-orange-200",
    "D": "text-red-600 bg-red-50 border-red-200",
    "F": "text-red-700 bg-red-50 border-red-200",
  };
  return colorMap[grade] || colorMap["B"];
};