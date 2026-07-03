export interface AdminStats {
  students: number;
  teachers: number;
  classes: number;
  passRate: number;
  attendance: number;
  staff: number;
}

export interface PendingTask {
  id: string;
  title: string;
  count: number;
  type: "enrollment" | "leave" | "report" | "fee" | "exam";
  due?: string;
  priority: "high" | "medium" | "low";
}

export interface RecentActivity {
  id: string;
  type: "registration" | "update" | "submission" | "attendance" | "grade";
  user: string;
  action: string;
  time: string;
  icon?: string;
}

export const adminDashboardData = {
  stats: {
    students: 500,
    teachers: 30,
    classes: 25,
    passRate: 98,
    attendance: 85,
    staff: 45,
  },
  pendingTasks: [
    {
      id: "p1",
      title: "Student enrollment approvals",
      count: 5,
      type: "enrollment",
      priority: "high",
    },
    {
      id: "p2",
      title: "Teacher leave requests",
      count: 3,
      type: "leave",
      priority: "medium",
    },
    {
      id: "p3",
      title: "Annual report submission",
      count: 1,
      type: "report",
      due: "2 weeks",
      priority: "high",
    },
    {
      id: "p4",
      title: "Fee pending collections",
      count: 12,
      type: "fee",
      priority: "medium",
    },
    {
      id: "p5",
      title: "Exam schedule finalization",
      count: 1,
      type: "exam",
      due: "1 week",
      priority: "low",
    },
  ] as PendingTask[],
  recentActivity: [
    {
      id: "a1",
      type: "registration",
      user: "New Student - Priya Kumar",
      action: "Enrolled in Grade 6-A",
      time: "2 minutes ago",
    },
    {
      id: "a2",
      type: "update",
      user: "Mrs. Sunita Sharma",
      action: "Updated Grade 6-A attendance",
      time: "10 minutes ago",
    },
    {
      id: "a3",
      type: "submission",
      user: "Mr. Rajesh Verma",
      action: "Submitted monthly report",
      time: "1 hour ago",
    },
    {
      id: "a4",
      type: "attendance",
      user: "System",
      action: "Attendance marked for today",
      time: "2 hours ago",
    },
    {
      id: "a5",
      type: "grade",
      user: "Dr. Anjali Kumar",
      action: "Added grades for Grade 10-A",
      time: "3 hours ago",
    },
  ] as RecentActivity[],
};