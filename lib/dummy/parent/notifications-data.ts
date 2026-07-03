export interface Notification {
  id: string;
  title: string;
  message: string;
  type: "academic" | "attendance" | "event" | "fee" | "general" | "alert";
  priority: "high" | "medium" | "low";
  read: boolean;
  date: string;
  time: string;
  category: string;
  actions?: {
    label: string;
    link: string;
  }[];
}

export const notificationsData = {
  stats: {
    total: 24,
    unread: 5,
    read: 19,
    highPriority: 3,
    categories: {
      academic: 8,
      attendance: 6,
      event: 4,
      fee: 3,
      general: 2,
      alert: 1,
    },
  },
  notifications: [
    {
      id: "n1",
      title: "Attendance Alert - Rahul Sharma",
      message: "Rahul was marked absent on October 15, 2026. Please provide a valid reason.",
      type: "attendance",
      priority: "high",
      read: false,
      date: "2026-10-15",
      time: "08:30 AM",
      category: "Absence",
      actions: [
        { label: "Provide Reason", link: "/parent/attendance" },
        { label: "Contact Teacher", link: "/parent/messages" },
      ],
    },
    {
      id: "n2",
      title: "Parent-Teacher Meeting Reminder",
      message: "The Parent-Teacher Meeting for Term 1 is scheduled on November 20, 2026 at 9:00 AM.",
      type: "event",
      priority: "high",
      read: false,
      date: "2026-10-14",
      time: "02:15 PM",
      category: "Event",
      actions: [
        { label: "Confirm Attendance", link: "/parent/events" },
        { label: "Schedule Time", link: "/parent/events" },
      ],
    },
    {
      id: "n3",
      title: "Report Card Ready for Download",
      message: "Term 1 report card for Rahul Sharma is now available for download.",
      type: "academic",
      priority: "medium",
      read: false,
      date: "2026-10-13",
      time: "11:45 AM",
      category: "Academic",
      actions: [
        { label: "Download Report", link: "/parent/performance" },
        { label: "View Details", link: "/parent/performance" },
      ],
    },
    {
      id: "n4",
      title: "Fee Payment Reminder",
      message: "School fees for the month of October are due by October 25, 2026.",
      type: "fee",
      priority: "high",
      read: false,
      date: "2026-10-12",
      time: "09:00 AM",
      category: "Fee",
      actions: [
        { label: "Pay Now", link: "/parent/fees" },
        { label: "View Details", link: "/parent/fees" },
      ],
    },
    {
      id: "n5",
      title: "Homework Submission Status",
      message: "Rahul's mathematics homework has been submitted and reviewed by the teacher.",
      type: "academic",
      priority: "low",
      read: true,
      date: "2026-10-11",
      time: "04:30 PM",
      category: "Academic",
    },
    {
      id: "n6",
      title: "Sports Day Registration Open",
      message: "Annual Sports Day registration is open until November 10, 2026.",
      type: "event",
      priority: "medium",
      read: true,
      date: "2026-10-10",
      time: "10:20 AM",
      category: "Event",
      actions: [
        { label: "Register Now", link: "/parent/events" },
      ],
    },
    {
      id: "n7",
      title: "Class Test Schedule",
      message: "Unit test schedule for Term 2 has been released. Check the schedule for your child's class.",
      type: "academic",
      priority: "medium",
      read: true,
      date: "2026-10-09",
      time: "01:15 PM",
      category: "Academic",
      actions: [
        { label: "View Schedule", link: "/parent/performance" },
      ],
    },
    {
      id: "n8",
      title: "School Trip Announcement",
      message: "The school has organized an educational trip to the Science Museum on November 5, 2026.",
      type: "event",
      priority: "low",
      read: true,
      date: "2026-10-08",
      time: "11:30 AM",
      category: "Event",
      actions: [
        { label: "View Details", link: "/parent/events" },
        { label: "Submit Permission", link: "/parent/events" },
      ],
    },
  ] as Notification[],
};

export const notificationTypes = [
  { value: "all", label: "All Types" },
  { value: "academic", label: "Academic" },
  { value: "attendance", label: "Attendance" },
  { value: "event", label: "Event" },
  { value: "fee", label: "Fee" },
  { value: "general", label: "General" },
  { value: "alert", label: "Alert" },
];

export const priorityOptions = [
  { value: "all", label: "All Priority" },
  { value: "high", label: "High" },
  { value: "medium", label: "Medium" },
  { value: "low", label: "Low" },
];