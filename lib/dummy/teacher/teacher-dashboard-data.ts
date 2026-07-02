export interface TeacherUser {
  id: string;
  name: string;
  email: string;
  avatar: string;
  department: string;
  subjects: string[];
}

export interface TeacherStat {
  id: string;
  label: string;
  value: string | number;
  icon: string;
  color: string;
  change?: string;
}

export interface TeacherClass {
  id: string;
  time: string;
  subject: string;
  class: string;
  room: string;
  students: number;
}

export interface StudentAlert {
  id: string;
  type: "warning" | "info" | "success";
  message: string;
  studentName?: string;
  class?: string;
}

export interface PendingTask {
  id: string;
  title: string;
  description: string;
  priority: "high" | "medium" | "low";
  dueDate: string;
  type: "grading" | "attendance" | "assignment" | "meeting";
}

export interface QuickAction {
  id: string;
  title: string;
  icon: string;
  link: string;
}

export const teacherDashboardData = {
  user: {
    id: "teacher-1",
    name: "Mrs. Sunita Sharma",
    email: "ssharma@edunexus.edu",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=256&h=256",
    department: "Mathematics",
    subjects: ["Mathematics", "Algebra", "Geometry"],
  } as TeacherUser,

  stats: [
    {
      id: "stat-students",
      label: "Total Students",
      value: 78,
      icon: "👨‍🎓",
      color: "blue",
      change: "+3 this month",
    },
    {
      id: "stat-classes",
      label: "Classes",
      value: 5,
      icon: "📚",
      color: "green",
      change: "2 subjects",
    },
    {
      id: "stat-attendance",
      label: "Avg Attendance",
      value: "85%",
      icon: "📊",
      color: "purple",
      change: "+5% this week",
    },
    {
      id: "stat-graded",
      label: "Graded Assignments",
      value: "35%",
      icon: "📝",
      color: "orange",
      change: "12 pending",
    },
  ] as TeacherStat[],

  todayClasses: [
    {
      id: "class-1",
      time: "9:00 AM",
      subject: "Mathematics",
      class: "Grade 6-A",
      room: "Room 201",
      students: 25,
    },
    {
      id: "class-2",
      time: "10:00 AM",
      subject: "Mathematics",
      class: "Grade 6-B",
      room: "Room 202",
      students: 28,
    },
    {
      id: "class-3",
      time: "11:00 AM",
      subject: "Algebra",
      class: "Grade 7-A",
      room: "Room 203",
      students: 25,
    },
    {
      id: "class-4",
      time: "1:00 PM",
      subject: "Geometry",
      class: "Grade 8-A",
      room: "Room 204",
      students: 27,
    },
    {
      id: "class-5",
      time: "2:00 PM",
      subject: "Mathematics",
      class: "Grade 9-A",
      room: "Room 205",
      students: 23,
    },
  ] as TeacherClass[],

  alerts: [
    {
      id: "alert-1",
      type: "warning",
      message: "3 students below 60% in Mathematics",
      studentName: "Multiple",
      class: "Grade 6-A",
    },
    {
      id: "alert-2",
      type: "info",
      message: "2 students absent this week",
      studentName: "Amit Kumar, Neha Sharma",
      class: "Grade 7-A",
    },
    {
      id: "alert-3",
      type: "success",
      message: "Class average improved by 8%",
      studentName: "Grade 8-A",
      class: "Overall",
    },
    {
      id: "alert-4",
      type: "warning",
      message: "Low attendance in Algebra class",
      studentName: "Multiple",
      class: "Grade 7-A",
    },
  ] as StudentAlert[],

  pendingTasks: [
    {
      id: "task-1",
      title: "Grade Mathematics Assignments",
      description: "Grade Chapter 7 assignments for Grade 6-A",
      priority: "high",
      dueDate: "2026-10-20",
      type: "grading",
    },
    {
      id: "task-2",
      title: "Mark Attendance",
      description: "Mark attendance for Grade 6-B",
      priority: "high",
      dueDate: "2026-10-18",
      type: "attendance",
    },
    {
      id: "task-3",
      title: "Create Homework",
      description: "Create Algebra homework for Grade 7-A",
      priority: "medium",
      dueDate: "2026-10-22",
      type: "assignment",
    },
    {
      id: "task-4",
      title: "Parent-Teacher Meeting",
      description: "Prepare reports for upcoming PTM",
      priority: "medium",
      dueDate: "2026-10-25",
      type: "meeting",
    },
    {
      id: "task-5",
      title: "Review Student Progress",
      description: "Review progress reports for Grade 8-A",
      priority: "low",
      dueDate: "2026-10-30",
      type: "grading",
    },
  ] as PendingTask[],

  quickActions: [
    {
      id: "action-attendance",
      title: "Mark Attendance",
      icon: "✅",
      link: "/teacher/attendance",
    },
    {
      id: "action-grades",
      title: "Add Grades",
      icon: "📊",
      link: "/teacher/grades",
    },
    {
      id: "action-homework",
      title: "Create Homework",
      icon: "📝",
      link: "/teacher/assignments",
    },
    {
      id: "action-class",
      title: "Manage Classes",
      icon: "📚",
      link: "/teacher/classes",
    },
    {
      id: "action-analytics",
      title: "Analytics",
      icon: "📈",
      link: "/teacher/analytics",
    },
  ] as QuickAction[],
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

// Helper function to get task type icon
export const getTaskTypeIcon = (type: string) => {
  const iconMap: Record<string, string> = {
    grading: "📝",
    attendance: "✅",
    assignment: "📋",
    meeting: "👥",
  };
  return iconMap[type] || "📌";
};

// Helper function to get alert color
export const getAlertColor = (type: string) => {
  const colorMap = {
    warning: "border-red-200 bg-red-50 text-red-700",
    info: "border-blue-200 bg-blue-50 text-blue-700",
    success: "border-green-200 bg-green-50 text-green-700",
  };
  return colorMap[type as keyof typeof colorMap] || colorMap.info;
};

// Helper function to get alert icon
export const getAlertIcon = (type: string) => {
  const iconMap = {
    warning: "⚠️",
    info: "ℹ️",
    success: "✅",
  };
  return iconMap[type as keyof typeof iconMap] || "📌";
};