export interface SubjectAttendance {
  id: string;
  subject: string;
  present: number;
  total: number;
  percentage: number;
  status: "good" | "warning" | "danger";
}

export interface CalendarDay {
  date: number;
  status: "present" | "absent" | "late" | "holiday" | "weekend";
  subject?: string;
}

export interface AttendanceSummary {
  overall: number;
  totalDays: number;
  presentDays: number;
  absentDays: number;
  lateDays: number;
  holidays: number;
}

export const attendanceData = {
  summary: {
    overall: 85,
    totalDays: 120,
    presentDays: 102,
    absentDays: 10,
    lateDays: 8,
    holidays: 15,
  } as AttendanceSummary,

  subjectWise: [
    {
      id: "subj-math",
      subject: "Mathematics",
      present: 28,
      total: 30,
      percentage: 93,
      status: "good",
    },
    {
      id: "subj-science",
      subject: "Science",
      present: 25,
      total: 30,
      percentage: 83,
      status: "warning",
    },
    {
      id: "subj-english",
      subject: "English",
      present: 27,
      total: 30,
      percentage: 90,
      status: "good",
    },
    {
      id: "subj-social",
      subject: "Social Studies",
      present: 22,
      total: 30,
      percentage: 73,
      status: "danger",
    },
    {
      id: "subj-computer",
      subject: "Computer Science",
      present: 29,
      total: 30,
      percentage: 97,
      status: "good",
    },
  ] as SubjectAttendance[],

  calendarData: {
    month: "October 2026",
    year: 2026,
    days: [
      // Week 1
      { date: 1, status: "present", subject: "Mathematics" },
      { date: 2, status: "present", subject: "Science" },
      { date: 3, status: "present", subject: "English" },
      { date: 4, status: "absent", subject: "Social Studies" },
      { date: 5, status: "present", subject: "Computer Science" },
      { date: 6, status: "weekend" },
      { date: 7, status: "weekend" },
      // Week 2
      { date: 8, status: "present", subject: "Mathematics" },
      { date: 9, status: "late", subject: "Science" },
      { date: 10, status: "present", subject: "English" },
      { date: 11, status: "present", subject: "Social Studies" },
      { date: 12, status: "present", subject: "Computer Science" },
      { date: 13, status: "weekend" },
      { date: 14, status: "weekend" },
      // Week 3
      { date: 15, status: "present", subject: "Mathematics" },
      { date: 16, status: "present", subject: "Science" },
      { date: 17, status: "absent", subject: "English" },
      { date: 18, status: "present", subject: "Social Studies" },
      { date: 19, status: "present", subject: "Computer Science" },
      { date: 20, status: "weekend" },
      { date: 21, status: "weekend" },
      // Week 4
      { date: 22, status: "present", subject: "Mathematics" },
      { date: 23, status: "present", subject: "Science" },
      { date: 24, status: "late", subject: "English" },
      { date: 25, status: "present", subject: "Social Studies" },
      { date: 26, status: "present", subject: "Computer Science" },
      { date: 27, status: "holiday" },
      { date: 28, status: "holiday" },
      // Week 5
      { date: 29, status: "present", subject: "Mathematics" },
      { date: 30, status: "present", subject: "Science" },
      { date: 31, status: "present", subject: "English" },
    ] as CalendarDay[],
  },

  alerts: {
    warning: [
      {
        id: "alert-1",
        subject: "Science",
        message: "Your attendance in Science is below 85%. Please attend more classes.",
        percentage: 83,
      },
      {
        id: "alert-2",
        subject: "Social Studies",
        message: "Your attendance in Social Studies is below 75%. Please attend more classes.",
        percentage: 73,
      },
    ],
    good: [
      {
        id: "alert-3",
        subject: "Mathematics",
        message: "Excellent attendance! Keep it up.",
        percentage: 93,
      },
      {
        id: "alert-4",
        subject: "Computer Science",
        message: "Perfect attendance! Great job.",
        percentage: 97,
      },
    ],
  },
};