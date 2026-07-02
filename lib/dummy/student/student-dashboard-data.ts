export interface StudentUser {
  id: string;
  name: string;
  class: string;
  rollNo: string;
  avatar: string;
  email: string;
}

export interface Stat {
  id: string;
  label: string;
  value: string | number;
  icon: string;
  color: string;
  change?: string;
}

export interface ClassItem {
  id: string;
  time: string;
  subject: string;
  room: string;
  teacher: string;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: "academic" | "event" | "important" | "general";
  time: string;
  read: boolean;
}

export interface QuickAction {
  id: string;
  title: string;
  icon: string;
  link: string;
}

export const studentDashboardData = {
  user: {
    id: "student-1",
    name: "Rahul Sharma",
    class: "Grade 6-A",
    rollNo: "2024001",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=256&h=256",
    email: "rahul@edunexus.edu",
  } as StudentUser,
  
  stats: [
    {
      id: "stat-attendance",
      label: "Attendance",
      value: "85%",
      icon: "📊",
      color: "blue",
      change: "+5% this month",
    },
    {
      id: "stat-grade",
      label: "Overall Grade",
      value: "A",
      icon: "📈",
      color: "green",
      change: "Top 10% of class",
    },
    {
      id: "stat-rank",
      label: "Class Rank",
      value: "5/35",
      icon: "🏆",
      color: "purple",
      change: "Top 15% of class",
    },
    {
      id: "stat-assignments",
      label: "Assignments",
      value: "3 Pending",
      icon: "📝",
      color: "orange",
      change: "2 due this week",
    },
  ] as Stat[],

  todayClasses: [
    {
      id: "class-1",
      time: "9:00 AM",
      subject: "Mathematics",
      room: "Room 201",
      teacher: "Mrs. Sharma",
    },
    {
      id: "class-2",
      time: "10:00 AM",
      subject: "Science",
      room: "Room 202",
      teacher: "Mr. Verma",
    },
    {
      id: "class-3",
      time: "11:00 AM",
      subject: "English",
      room: "Room 203",
      teacher: "Ms. Patel",
    },
    {
      id: "class-4",
      time: "1:00 PM",
      subject: "Social Studies",
      room: "Room 204",
      teacher: "Mr. Singh",
    },
    {
      id: "class-5",
      time: "2:00 PM",
      subject: "Computer Science",
      room: "Room 205",
      teacher: "Mrs. Reddy",
    },
  ] as ClassItem[],

  notifications: [
    {
      id: "notif-1",
      title: "Homework Due",
      message: "Mathematics homework on Chapter 7 is due tomorrow.",
      type: "academic",
      time: "2 hours ago",
      read: false,
    },
    {
      id: "notif-2",
      title: "Sports Day Registration",
      message: "Registration for Annual Sports Day is now open!",
      type: "event",
      time: "1 day ago",
      read: true,
    },
    {
      id: "notif-3",
      title: "Library Update",
      message: "New books have been added to the library.",
      type: "general",
      time: "2 days ago",
      read: true,
    },
    {
      id: "notif-4",
      title: "PTM Scheduled",
      message: "Parent-Teacher Meeting scheduled for Nov 20, 2026.",
      type: "important",
      time: "3 days ago",
      read: true,
    },
  ] as Notification[],

  quickActions: [
    {
      id: "action-attendance",
      title: "Attendance",
      icon: "✅",
      link: "/student/attendance",
    },
    {
      id: "action-timetable",
      title: "Timetable",
      icon: "📅",
      link: "/student/timetable",
    },
    {
      id: "action-library",
      title: "Library",
      icon: "📚",
      link: "/student/library",
    },
    {
      id: "action-assignments",
      title: "Assignments",
      icon: "📝",
      link: "/student/assignments",
    },
  ] as QuickAction[],
};