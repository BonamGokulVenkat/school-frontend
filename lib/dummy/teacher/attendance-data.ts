export interface StudentAttendance {
  id: string;
  rollNo: string;
  name: string;
  status: "present" | "absent" | "late" | "unmarked";
  avatar: string;
}

export interface AttendanceSummary {
  total: number;
  present: number;
  absent: number;
  late: number;
  unmarked: number;
}

export const attendanceData = {
  classInfo: {
    id: "class-1",
    name: "Grade 6-A",
    subject: "Mathematics",
    date: "2026-10-18",
    teacher: "Mrs. Sunita Sharma",
    totalStudents: 25,
  },

  students: [
    {
      id: "stu-1",
      rollNo: "1",
      name: "Rahul Sharma",
      status: "present",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100",
    },
    {
      id: "stu-2",
      rollNo: "2",
      name: "Priya Patel",
      status: "present",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100",
    },
    {
      id: "stu-3",
      rollNo: "3",
      name: "Amit Kumar",
      status: "absent",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100",
    },
    {
      id: "stu-4",
      rollNo: "4",
      name: "Neha Singh",
      status: "late",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100",
    },
    {
      id: "stu-5",
      rollNo: "5",
      name: "Rohan Verma",
      status: "present",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100",
    },
    {
      id: "stu-6",
      rollNo: "6",
      name: "Sneha Reddy",
      status: "unmarked",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100",
    },
    {
      id: "stu-7",
      rollNo: "7",
      name: "Vikram Rao",
      status: "present",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100",
    },
    {
      id: "stu-8",
      rollNo: "8",
      name: "Ananya Sharma",
      status: "present",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100",
    },
    {
      id: "stu-9",
      rollNo: "9",
      name: "Arjun Nair",
      status: "absent",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100",
    },
    {
      id: "stu-10",
      rollNo: "10",
      name: "Kavya Menon",
      status: "late",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100",
    },
  ] as StudentAttendance[],

  history: [
    { date: "2026-10-17", present: 22, absent: 2, late: 1 },
    { date: "2026-10-16", present: 20, absent: 3, late: 2 },
    { date: "2026-10-15", present: 23, absent: 1, late: 1 },
    { date: "2026-10-14", present: 21, absent: 2, late: 2 },
    { date: "2026-10-13", present: 24, absent: 1, late: 0 },
  ],
};

// Helper function to get status color
export const getStatusColor = (status: string) => {
  const colorMap = {
    present: "bg-green-100 text-green-700 border-green-200",
    absent: "bg-red-100 text-red-700 border-red-200",
    late: "bg-yellow-100 text-yellow-700 border-yellow-200",
    unmarked: "bg-gray-100 text-gray-500 border-gray-200",
  };
  return colorMap[status as keyof typeof colorMap] || colorMap.unmarked;
};

// Helper function to get status badge
export const getStatusBadge = (status: string) => {
  const badgeMap = {
    present: "✅ Present",
    absent: "❌ Absent",
    late: "⏰ Late",
    unmarked: "⬜ Unmarked",
  };
  return badgeMap[status as keyof typeof badgeMap] || badgeMap.unmarked;
};

// Helper function to get status icon
export const getStatusIcon = (status: string) => {
  const iconMap = {
    present: "✅",
    absent: "❌",
    late: "⏰",
    unmarked: "⬜",
  };
  return iconMap[status as keyof typeof iconMap] || iconMap.unmarked;
};