export interface Child {
  id: string;
  name: string;
  class: string;
  rollNo: string;
  avatar?: string;
  attendance: number;
  grade: string;
  rank: number;
  totalStudents: number;
  subjects: {
    name: string;
    marks: number;
    grade: string;
  }[];
  achievements: string[];
}

export interface RecentUpdate {
  id: string;
  title: string;
  message: string;
  type: "academic" | "attendance" | "event" | "general";
  time: string;
  icon: string;
}

export const parentDashboardData = {
  user: {
    id: "p1",
    name: "Mr. Rajesh Sharma",
    email: "rajesh.sharma@email.com",
    phone: "+91 98765 43210",
    children: ["Rahul Sharma", "Priya Sharma"],
  },
  children: [
    {
      id: "c1",
      name: "Rahul Sharma",
      class: "Grade 6-A",
      rollNo: "2024001",
      attendance: 85,
      grade: "A",
      rank: 5,
      totalStudents: 35,
      subjects: [
        { name: "Mathematics", marks: 85, grade: "A" },
        { name: "Science", marks: 78, grade: "B+" },
        { name: "English", marks: 82, grade: "A" },
        { name: "Social Studies", marks: 72, grade: "B" },
        { name: "Hindi", marks: 88, grade: "A" },
      ],
      achievements: ["Academic Excellence Award", "Mathematics Olympiad Participant"],
    },
    {
      id: "c2",
      name: "Priya Sharma",
      class: "Grade 3-A",
      rollNo: "2024002",
      attendance: 92,
      grade: "A+",
      rank: 2,
      totalStudents: 30,
      subjects: [
        { name: "Mathematics", marks: 92, grade: "A+" },
        { name: "Science", marks: 88, grade: "A" },
        { name: "English", marks: 90, grade: "A" },
        { name: "Social Studies", marks: 85, grade: "A" },
      ],
      achievements: ["Class Topper", "Art Competition Winner"],
    },
  ] as Child[],
  recentUpdates: [
    {
      id: "u1",
      title: "All Present This Week",
      message: "Rahul has attended all classes this week with perfect attendance.",
      type: "attendance",
      time: "2 hours ago",
      icon: "Calendar",
    },
    {
      id: "u2",
      title: "Homework Submitted",
      message: "Rahul's mathematics homework has been submitted successfully.",
      type: "academic",
      time: "5 hours ago",
      icon: "BookOpen",
    },
    {
      id: "u3",
      title: "PTM Scheduled",
      message: "Parent-Teacher Meeting scheduled for November 20, 2026.",
      type: "event",
      time: "1 day ago",
      icon: "Calendar",
    },
    {
      id: "u4",
      title: "Report Card Available",
      message: "Term 1 report card is now available for download.",
      type: "academic",
      time: "2 days ago",
      icon: "FileText",
    },
  ] as RecentUpdate[],
  quickActions: [
    { title: "Contact Teacher", icon: "MessageSquare", link: "/parent/messages" },
    { title: "View Reports", icon: "FileText", link: "/parent/performance" },
    { title: "Notifications", icon: "Bell", link: "/parent/notifications" },
    { title: "Attendance", icon: "Calendar", link: "/parent/attendance" },
  ],
};