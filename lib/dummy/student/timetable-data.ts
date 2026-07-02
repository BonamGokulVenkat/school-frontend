export interface TimetableSlot {
  id: string;
  time: string;
  subject: string;
  teacher: string;
  room: string;
  color?: string;
}

export interface TimetableDay {
  day: string;
  slots: TimetableSlot[];
}

export interface CurrentClass {
  subject: string;
  time: string;
  room: string;
  teacher: string;
  nextClass?: string;
}

export const timetableData = {
  days: [
    { day: "Monday", slots: [] },
    { day: "Tuesday", slots: [] },
    { day: "Wednesday", slots: [] },
    { day: "Thursday", slots: [] },
    { day: "Friday", slots: [] },
  ] as TimetableDay[],

  timetable: {
    Monday: [
      {
        id: "mon-1",
        time: "9:00 AM",
        subject: "Mathematics",
        teacher: "Mrs. Sharma",
        room: "Room 201",
        color: "blue",
      },
      {
        id: "mon-2",
        time: "10:00 AM",
        subject: "Science",
        teacher: "Mr. Verma",
        room: "Room 202",
        color: "green",
      },
      {
        id: "mon-3",
        time: "11:00 AM",
        subject: "English",
        teacher: "Ms. Patel",
        room: "Room 203",
        color: "purple",
      },
      {
        id: "mon-4",
        time: "12:00 PM",
        subject: "Lunch Break",
        teacher: "-",
        room: "-",
        color: "gray",
      },
      {
        id: "mon-5",
        time: "1:00 PM",
        subject: "Social Studies",
        teacher: "Mr. Singh",
        room: "Room 204",
        color: "orange",
      },
      {
        id: "mon-6",
        time: "2:00 PM",
        subject: "Computer Science",
        teacher: "Mrs. Reddy",
        room: "Room 205",
        color: "teal",
      },
    ],
    Tuesday: [
      {
        id: "tue-1",
        time: "9:00 AM",
        subject: "Science",
        teacher: "Mr. Verma",
        room: "Room 202",
        color: "green",
      },
      {
        id: "tue-2",
        time: "10:00 AM",
        subject: "Mathematics",
        teacher: "Mrs. Sharma",
        room: "Room 201",
        color: "blue",
      },
      {
        id: "tue-3",
        time: "11:00 AM",
        subject: "English",
        teacher: "Ms. Patel",
        room: "Room 203",
        color: "purple",
      },
      {
        id: "tue-4",
        time: "12:00 PM",
        subject: "Lunch Break",
        teacher: "-",
        room: "-",
        color: "gray",
      },
      {
        id: "tue-5",
        time: "1:00 PM",
        subject: "Art",
        teacher: "Mrs. Kumar",
        room: "Room 206",
        color: "pink",
      },
      {
        id: "tue-6",
        time: "2:00 PM",
        subject: "Physical Education",
        teacher: "Mr. Nair",
        room: "Ground",
        color: "lime",
      },
    ],
    Wednesday: [
      {
        id: "wed-1",
        time: "9:00 AM",
        subject: "Mathematics",
        teacher: "Mrs. Sharma",
        room: "Room 201",
        color: "blue",
      },
      {
        id: "wed-2",
        time: "10:00 AM",
        subject: "English",
        teacher: "Ms. Patel",
        room: "Room 203",
        color: "purple",
      },
      {
        id: "wed-3",
        time: "11:00 AM",
        subject: "Science",
        teacher: "Mr. Verma",
        room: "Room 202",
        color: "green",
      },
      {
        id: "wed-4",
        time: "12:00 PM",
        subject: "Lunch Break",
        teacher: "-",
        room: "-",
        color: "gray",
      },
      {
        id: "wed-5",
        time: "1:00 PM",
        subject: "Social Studies",
        teacher: "Mr. Singh",
        room: "Room 204",
        color: "orange",
      },
      {
        id: "wed-6",
        time: "2:00 PM",
        subject: "Computer Science",
        teacher: "Mrs. Reddy",
        room: "Room 205",
        color: "teal",
      },
    ],
    Thursday: [
      {
        id: "thu-1",
        time: "9:00 AM",
        subject: "English",
        teacher: "Ms. Patel",
        room: "Room 203",
        color: "purple",
      },
      {
        id: "thu-2",
        time: "10:00 AM",
        subject: "Science",
        teacher: "Mr. Verma",
        room: "Room 202",
        color: "green",
      },
      {
        id: "thu-3",
        time: "11:00 AM",
        subject: "Mathematics",
        teacher: "Mrs. Sharma",
        room: "Room 201",
        color: "blue",
      },
      {
        id: "thu-4",
        time: "12:00 PM",
        subject: "Lunch Break",
        teacher: "-",
        room: "-",
        color: "gray",
      },
      {
        id: "thu-5",
        time: "1:00 PM",
        subject: "Music",
        teacher: "Mrs. Iyer",
        room: "Room 207",
        color: "amber",
      },
      {
        id: "thu-6",
        time: "2:00 PM",
        subject: "Social Studies",
        teacher: "Mr. Singh",
        room: "Room 204",
        color: "orange",
      },
    ],
    Friday: [
      {
        id: "fri-1",
        time: "9:00 AM",
        subject: "Mathematics",
        teacher: "Mrs. Sharma",
        room: "Room 201",
        color: "blue",
      },
      {
        id: "fri-2",
        time: "10:00 AM",
        subject: "Science",
        teacher: "Mr. Verma",
        room: "Room 202",
        color: "green",
      },
      {
        id: "fri-3",
        time: "11:00 AM",
        subject: "English",
        teacher: "Ms. Patel",
        room: "Room 203",
        color: "purple",
      },
      {
        id: "fri-4",
        time: "12:00 PM",
        subject: "Lunch Break",
        teacher: "-",
        room: "-",
        color: "gray",
      },
      {
        id: "fri-5",
        time: "1:00 PM",
        subject: "Computer Science",
        teacher: "Mrs. Reddy",
        room: "Room 205",
        color: "teal",
      },
      {
        id: "fri-6",
        time: "2:00 PM",
        subject: "Art",
        teacher: "Mrs. Kumar",
        room: "Room 206",
        color: "pink",
      },
    ],
  },

  currentClass: {
    subject: "Mathematics",
    time: "9:00 AM",
    room: "Room 201",
    teacher: "Mrs. Sharma",
    nextClass: "Science at 10:00 AM",
  } as CurrentClass,

  timeSlots: [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
  ],

  daysOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
};

// Helper function to get color classes
export const getColorClass = (color: string) => {
  const colorMap: Record<string, string> = {
    blue: "bg-blue-100 text-blue-700 border-blue-200",
    green: "bg-green-100 text-green-700 border-green-200",
    purple: "bg-purple-100 text-purple-700 border-purple-200",
    orange: "bg-orange-100 text-orange-700 border-orange-200",
    teal: "bg-teal-100 text-teal-700 border-teal-200",
    pink: "bg-pink-100 text-pink-700 border-pink-200",
    lime: "bg-lime-100 text-lime-700 border-lime-200",
    amber: "bg-amber-100 text-amber-700 border-amber-200",
    gray: "bg-gray-100 text-gray-700 border-gray-200",
    red: "bg-red-100 text-red-700 border-red-200",
    indigo: "bg-indigo-100 text-indigo-700 border-indigo-200",
  };
  return colorMap[color] || colorMap.blue;
};