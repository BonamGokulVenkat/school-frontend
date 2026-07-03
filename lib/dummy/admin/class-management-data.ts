export interface ClassRecord {
  id: string;
  name: string;
  section: string;
  grade: string;
  roomTeacher: string;
  studentCount: number;
  maxCapacity: number;
  subjects: string[];
  academicYear: string;
  status: "active" | "archived" | "pending";
  room: string;
  timetable: {
    day: string;
    periods: {
      time: string;
      subject: string;
      teacher: string;
    }[];
  }[];
  createdAt: string;
  updatedAt: string;
}

export const classManagementData = {
  stats: {
    total: 25,
    active: 22,
    archived: 2,
    pending: 1,
    totalStudents: 500,
    avgClassSize: 20,
  },
  classes: [
    {
      id: "c1",
      name: "Grade 6-A",
      section: "A",
      grade: "6",
      roomTeacher: "Mrs. Sunita Sharma",
      studentCount: 28,
      maxCapacity: 35,
      subjects: ["Mathematics", "Science", "English", "Social Studies", "Hindi"],
      academicYear: "2026-27",
      status: "active",
      room: "Room 201",
      timetable: [
        {
          day: "Monday",
          periods: [
            { time: "9:00 AM", subject: "Mathematics", teacher: "Mrs. Sharma" },
            { time: "10:00 AM", subject: "Science", teacher: "Mr. Verma" },
            { time: "11:00 AM", subject: "English", teacher: "Ms. Patel" },
          ],
        },
        {
          day: "Tuesday",
          periods: [
            { time: "9:00 AM", subject: "Science", teacher: "Mr. Verma" },
            { time: "10:00 AM", subject: "Mathematics", teacher: "Mrs. Sharma" },
            { time: "11:00 AM", subject: "Hindi", teacher: "Mrs. Singh" },
          ],
        },
      ],
      createdAt: "2026-06-01",
      updatedAt: "2026-06-15",
    },
    {
      id: "c2",
      name: "Grade 6-B",
      section: "B",
      grade: "6",
      roomTeacher: "Mr. Rajesh Verma",
      studentCount: 30,
      maxCapacity: 35,
      subjects: ["Mathematics", "Science", "English", "Social Studies", "Hindi"],
      academicYear: "2026-27",
      status: "active",
      room: "Room 202",
      timetable: [
        {
          day: "Monday",
          periods: [
            { time: "9:00 AM", subject: "Science", teacher: "Mr. Verma" },
            { time: "10:00 AM", subject: "Mathematics", teacher: "Mrs. Sharma" },
            { time: "11:00 AM", subject: "English", teacher: "Ms. Patel" },
          ],
        },
      ],
      createdAt: "2026-06-01",
      updatedAt: "2026-06-15",
    },
    {
      id: "c3",
      name: "Grade 7-A",
      section: "A",
      grade: "7",
      roomTeacher: "Dr. Anjali Kumar",
      studentCount: 25,
      maxCapacity: 35,
      subjects: ["Mathematics", "Science", "English", "Social Studies", "Hindi"],
      academicYear: "2026-27",
      status: "active",
      room: "Room 203",
      timetable: [],
      createdAt: "2026-06-01",
      updatedAt: "2026-06-10",
    },
    {
      id: "c4",
      name: "Grade 7-B",
      section: "B",
      grade: "7",
      roomTeacher: "Ms. Meera Reddy",
      studentCount: 27,
      maxCapacity: 35,
      subjects: ["Mathematics", "Science", "English", "Social Studies", "Hindi"],
      academicYear: "2026-27",
      status: "active",
      room: "Room 204",
      timetable: [],
      createdAt: "2026-06-01",
      updatedAt: "2026-06-10",
    },
    {
      id: "c5",
      name: "Grade 8-A",
      section: "A",
      grade: "8",
      roomTeacher: "Mr. Suresh Patel",
      studentCount: 30,
      maxCapacity: 35,
      subjects: ["Mathematics", "Science", "English", "Social Studies", "Computer Science"],
      academicYear: "2026-27",
      status: "active",
      room: "Room 205",
      timetable: [],
      createdAt: "2026-06-01",
      updatedAt: "2026-06-12",
    },
    {
      id: "c6",
      name: "Grade 8-B",
      section: "B",
      grade: "8",
      roomTeacher: "Mr. Rajesh Verma",
      studentCount: 28,
      maxCapacity: 35,
      subjects: ["Mathematics", "Science", "English", "Social Studies", "Computer Science"],
      academicYear: "2026-27",
      status: "pending",
      room: "Room 206",
      timetable: [],
      createdAt: "2026-06-15",
      updatedAt: "2026-06-15",
    },
    {
      id: "c7",
      name: "Grade 9-A",
      section: "A",
      grade: "9",
      roomTeacher: "Ms. Meera Reddy",
      studentCount: 32,
      maxCapacity: 35,
      subjects: ["Mathematics", "Physics", "Chemistry", "English", "Biology"],
      academicYear: "2026-27",
      status: "active",
      room: "Room 301",
      timetable: [],
      createdAt: "2026-06-01",
      updatedAt: "2026-06-14",
    },
    {
      id: "c8",
      name: "Grade 9-B",
      section: "B",
      grade: "9",
      roomTeacher: "Mr. Suresh Patel",
      studentCount: 29,
      maxCapacity: 35,
      subjects: ["Mathematics", "Physics", "Chemistry", "English", "Biology"],
      academicYear: "2026-27",
      status: "active",
      room: "Room 302",
      timetable: [],
      createdAt: "2026-06-01",
      updatedAt: "2026-06-14",
    },
    {
      id: "c9",
      name: "Grade 10-A",
      section: "A",
      grade: "10",
      roomTeacher: "Dr. Anjali Kumar",
      studentCount: 32,
      maxCapacity: 35,
      subjects: ["Mathematics", "Physics", "Chemistry", "English", "Biology"],
      academicYear: "2026-27",
      status: "active",
      room: "Room 303",
      timetable: [],
      createdAt: "2026-06-01",
      updatedAt: "2026-06-13",
    },
    {
      id: "c10",
      name: "Grade 10-B",
      section: "B",
      grade: "10",
      roomTeacher: "Ms. Meera Reddy",
      studentCount: 30,
      maxCapacity: 35,
      subjects: ["Mathematics", "Physics", "Chemistry", "English", "Biology"],
      academicYear: "2026-27",
      status: "active",
      room: "Room 304",
      timetable: [],
      createdAt: "2026-06-01",
      updatedAt: "2026-06-13",
    },
    {
      id: "c11",
      name: "Grade 11-A",
      section: "A",
      grade: "11",
      roomTeacher: "Dr. Anjali Kumar",
      studentCount: 25,
      maxCapacity: 30,
      subjects: ["Mathematics", "Physics", "Chemistry", "Biology", "Computer Science"],
      academicYear: "2026-27",
      status: "archived",
      room: "Room 305",
      timetable: [],
      createdAt: "2025-06-01",
      updatedAt: "2026-03-15",
    },
  ] as ClassRecord[],
};

export const gradeOptions = [
  { value: "1", label: "Grade 1" },
  { value: "2", label: "Grade 2" },
  { value: "3", label: "Grade 3" },
  { value: "4", label: "Grade 4" },
  { value: "5", label: "Grade 5" },
  { value: "6", label: "Grade 6" },
  { value: "7", label: "Grade 7" },
  { value: "8", label: "Grade 8" },
  { value: "9", label: "Grade 9" },
  { value: "10", label: "Grade 10" },
  { value: "11", label: "Grade 11" },
  { value: "12", label: "Grade 12" },
];

export const sectionOptions = [
  { value: "A", label: "A" },
  { value: "B", label: "B" },
  { value: "C", label: "C" },
  { value: "D", label: "D" },
];

export const teacherOptions = [
  { value: "Mrs. Sunita Sharma", label: "Mrs. Sunita Sharma" },
  { value: "Mr. Rajesh Verma", label: "Mr. Rajesh Verma" },
  { value: "Dr. Anjali Kumar", label: "Dr. Anjali Kumar" },
  { value: "Mr. Suresh Patel", label: "Mr. Suresh Patel" },
  { value: "Ms. Meera Reddy", label: "Ms. Meera Reddy" },
  { value: "Mr. Arun Nair", label: "Mr. Arun Nair" },
  { value: "Mrs. Kavita Singh", label: "Mrs. Kavita Singh" },
];

export const statusOptions = [
  { value: "active", label: "Active" },
  { value: "pending", label: "Pending" },
  { value: "archived", label: "Archived" },
];