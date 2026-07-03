export interface TimeSlot {
  time: string;
  subject: string;
  teacher: string;
  room: string;
}

export interface DaySchedule {
  day: string;
  periods: TimeSlot[];
}

export interface TimetableRecord {
  id: string;
  classId: string;
  className: string;
  academicYear: string;
  schedule: DaySchedule[];
  createdAt: string;
  updatedAt: string;
  status: "draft" | "published" | "archived";
}

export const timetableData = {
  stats: {
    totalTimetables: 25,
    published: 20,
    draft: 3,
    archived: 2,
    totalPeriods: 150,
    conflicts: 2,
  },
  timetables: [
    {
      id: "tt1",
      classId: "c1",
      className: "Grade 6-A",
      academicYear: "2026-27",
      status: "published",
      schedule: [
        {
          day: "Monday",
          periods: [
            { time: "9:00 AM - 9:45 AM", subject: "Mathematics", teacher: "Mrs. Sharma", room: "Room 201" },
            { time: "9:45 AM - 10:30 AM", subject: "Science", teacher: "Mr. Verma", room: "Room 202" },
            { time: "10:30 AM - 11:15 AM", subject: "English", teacher: "Ms. Patel", room: "Room 203" },
            { time: "11:15 AM - 12:00 PM", subject: "Social Studies", teacher: "Mr. Nair", room: "Room 204" },
            { time: "12:00 PM - 1:00 PM", subject: "Lunch Break", teacher: "-", room: "-" },
            { time: "1:00 PM - 1:45 PM", subject: "Hindi", teacher: "Mrs. Singh", room: "Room 205" },
          ],
        },
        {
          day: "Tuesday",
          periods: [
            { time: "9:00 AM - 9:45 AM", subject: "Science", teacher: "Mr. Verma", room: "Room 202" },
            { time: "9:45 AM - 10:30 AM", subject: "Mathematics", teacher: "Mrs. Sharma", room: "Room 201" },
            { time: "10:30 AM - 11:15 AM", subject: "Hindi", teacher: "Mrs. Singh", room: "Room 205" },
            { time: "11:15 AM - 12:00 PM", subject: "English", teacher: "Ms. Patel", room: "Room 203" },
            { time: "12:00 PM - 1:00 PM", subject: "Lunch Break", teacher: "-", room: "-" },
            { time: "1:00 PM - 1:45 PM", subject: "Physical Education", teacher: "Mr. Kumar", room: "Ground" },
          ],
        },
        {
          day: "Wednesday",
          periods: [
            { time: "9:00 AM - 9:45 AM", subject: "Mathematics", teacher: "Mrs. Sharma", room: "Room 201" },
            { time: "9:45 AM - 10:30 AM", subject: "English", teacher: "Ms. Patel", room: "Room 203" },
            { time: "10:30 AM - 11:15 AM", subject: "Science", teacher: "Mr. Verma", room: "Room 202" },
            { time: "11:15 AM - 12:00 PM", subject: "Art", teacher: "Mrs. Menon", room: "Art Room" },
            { time: "12:00 PM - 1:00 PM", subject: "Lunch Break", teacher: "-", room: "-" },
            { time: "1:00 PM - 1:45 PM", subject: "Social Studies", teacher: "Mr. Nair", room: "Room 204" },
          ],
        },
        {
          day: "Thursday",
          periods: [
            { time: "9:00 AM - 9:45 AM", subject: "English", teacher: "Ms. Patel", room: "Room 203" },
            { time: "9:45 AM - 10:30 AM", subject: "Science", teacher: "Mr. Verma", room: "Room 202" },
            { time: "10:30 AM - 11:15 AM", subject: "Mathematics", teacher: "Mrs. Sharma", room: "Room 201" },
            { time: "11:15 AM - 12:00 PM", subject: "Hindi", teacher: "Mrs. Singh", room: "Room 205" },
            { time: "12:00 PM - 1:00 PM", subject: "Lunch Break", teacher: "-", room: "-" },
            { time: "1:00 PM - 1:45 PM", subject: "Music", teacher: "Mr. Thomas", room: "Music Room" },
          ],
        },
        {
          day: "Friday",
          periods: [
            { time: "9:00 AM - 9:45 AM", subject: "Mathematics", teacher: "Mrs. Sharma", room: "Room 201" },
            { time: "9:45 AM - 10:30 AM", subject: "Social Studies", teacher: "Mr. Nair", room: "Room 204" },
            { time: "10:30 AM - 11:15 AM", subject: "Science", teacher: "Mr. Verma", room: "Room 202" },
            { time: "11:15 AM - 12:00 PM", subject: "English", teacher: "Ms. Patel", room: "Room 203" },
            { time: "12:00 PM - 1:00 PM", subject: "Lunch Break", teacher: "-", room: "-" },
            { time: "1:00 PM - 1:45 PM", subject: "Computer Science", teacher: "Mr. Patel", room: "Lab 1" },
          ],
        },
      ],
      createdAt: "2026-06-01",
      updatedAt: "2026-06-10",
    },
    {
      id: "tt2",
      classId: "c2",
      className: "Grade 6-B",
      academicYear: "2026-27",
      status: "published",
      schedule: [
        {
          day: "Monday",
          periods: [
            { time: "9:00 AM - 9:45 AM", subject: "Science", teacher: "Mr. Verma", room: "Room 202" },
            { time: "9:45 AM - 10:30 AM", subject: "Mathematics", teacher: "Mrs. Sharma", room: "Room 201" },
            { time: "10:30 AM - 11:15 AM", subject: "English", teacher: "Ms. Patel", room: "Room 203" },
            { time: "11:15 AM - 12:00 PM", subject: "Hindi", teacher: "Mrs. Singh", room: "Room 205" },
            { time: "12:00 PM - 1:00 PM", subject: "Lunch Break", teacher: "-", room: "-" },
            { time: "1:00 PM - 1:45 PM", subject: "Social Studies", teacher: "Mr. Nair", room: "Room 204" },
          ],
        },
        {
          day: "Tuesday",
          periods: [
            { time: "9:00 AM - 9:45 AM", subject: "Mathematics", teacher: "Mrs. Sharma", room: "Room 201" },
            { time: "9:45 AM - 10:30 AM", subject: "Science", teacher: "Mr. Verma", room: "Room 202" },
            { time: "10:30 AM - 11:15 AM", subject: "Social Studies", teacher: "Mr. Nair", room: "Room 204" },
            { time: "11:15 AM - 12:00 PM", subject: "English", teacher: "Ms. Patel", room: "Room 203" },
            { time: "12:00 PM - 1:00 PM", subject: "Lunch Break", teacher: "-", room: "-" },
            { time: "1:00 PM - 1:45 PM", subject: "Art", teacher: "Mrs. Menon", room: "Art Room" },
          ],
        },
        {
          day: "Wednesday",
          periods: [
            { time: "9:00 AM - 9:45 AM", subject: "English", teacher: "Ms. Patel", room: "Room 203" },
            { time: "9:45 AM - 10:30 AM", subject: "Mathematics", teacher: "Mrs. Sharma", room: "Room 201" },
            { time: "10:30 AM - 11:15 AM", subject: "Science", teacher: "Mr. Verma", room: "Room 202" },
            { time: "11:15 AM - 12:00 PM", subject: "Physical Education", teacher: "Mr. Kumar", room: "Ground" },
            { time: "12:00 PM - 1:00 PM", subject: "Lunch Break", teacher: "-", room: "-" },
            { time: "1:00 PM - 1:45 PM", subject: "Hindi", teacher: "Mrs. Singh", room: "Room 205" },
          ],
        },
        {
          day: "Thursday",
          periods: [
            { time: "9:00 AM - 9:45 AM", subject: "Science", teacher: "Mr. Verma", room: "Room 202" },
            { time: "9:45 AM - 10:30 AM", subject: "English", teacher: "Ms. Patel", room: "Room 203" },
            { time: "10:30 AM - 11:15 AM", subject: "Mathematics", teacher: "Mrs. Sharma", room: "Room 201" },
            { time: "11:15 AM - 12:00 PM", subject: "Social Studies", teacher: "Mr. Nair", room: "Room 204" },
            { time: "12:00 PM - 1:00 PM", subject: "Lunch Break", teacher: "-", room: "-" },
            { time: "1:00 PM - 1:45 PM", subject: "Music", teacher: "Mr. Thomas", room: "Music Room" },
          ],
        },
        {
          day: "Friday",
          periods: [
            { time: "9:00 AM - 9:45 AM", subject: "Mathematics", teacher: "Mrs. Sharma", room: "Room 201" },
            { time: "9:45 AM - 10:30 AM", subject: "Hindi", teacher: "Mrs. Singh", room: "Room 205" },
            { time: "10:30 AM - 11:15 AM", subject: "English", teacher: "Ms. Patel", room: "Room 203" },
            { time: "11:15 AM - 12:00 PM", subject: "Science", teacher: "Mr. Verma", room: "Room 202" },
            { time: "12:00 PM - 1:00 PM", subject: "Lunch Break", teacher: "-", room: "-" },
            { time: "1:00 PM - 1:45 PM", subject: "Computer Science", teacher: "Mr. Patel", room: "Lab 1" },
          ],
        },
      ],
      createdAt: "2026-06-01",
      updatedAt: "2026-06-10",
    },
    {
      id: "tt3",
      classId: "c3",
      className: "Grade 7-A",
      academicYear: "2026-27",
      status: "draft",
      schedule: [
        {
          day: "Monday",
          periods: [
            { time: "9:00 AM - 9:45 AM", subject: "Mathematics", teacher: "Dr. Kumar", room: "Room 203" },
            { time: "9:45 AM - 10:30 AM", subject: "Science", teacher: "Ms. Reddy", room: "Room 204" },
            { time: "10:30 AM - 11:15 AM", subject: "English", teacher: "Mrs. Rao", room: "Room 205" },
            { time: "11:15 AM - 12:00 PM", subject: "Social Studies", teacher: "Mr. Nair", room: "Room 206" },
            { time: "12:00 PM - 1:00 PM", subject: "Lunch Break", teacher: "-", room: "-" },
            { time: "1:00 PM - 1:45 PM", subject: "Hindi", teacher: "Mrs. Singh", room: "Room 207" },
          ],
        },
      ],
      createdAt: "2026-06-15",
      updatedAt: "2026-06-15",
    },
  ] as TimetableRecord[],
};

export const timeSlots = [
  "9:00 AM - 9:45 AM",
  "9:45 AM - 10:30 AM",
  "10:30 AM - 11:15 AM",
  "11:15 AM - 12:00 PM",
  "12:00 PM - 1:00 PM",
  "1:00 PM - 1:45 PM",
  "1:45 PM - 2:30 PM",
];

export const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];