export interface Event {
  id: string;
  title: string;
  description: string;
  type: "academic" | "sports" | "cultural" | "important";
  category: string;
  date: string;
  time: string;
  location: string;
  organizer: string;
  capacity: number;
  registered: number;
  status: "open" | "upcoming" | "closed" | "completed";
  image?: string;
  registrationLink?: string;
  events?: string[];
}

export interface EventCategory {
  id: "all" | "academic" | "sports" | "cultural" | "important";
  label: string;
  color: string;
}

export const eventsData = {
  categories: [
    { id: "all", label: "All Events", color: "slate" },
    { id: "academic", label: "Academic", color: "blue" },
    { id: "sports", label: "Sports", color: "green" },
    { id: "cultural", label: "Cultural", color: "purple" },
    { id: "important", label: "Important", color: "red" },
  ] as EventCategory[],
  
  events: [
    {
      id: "evt-1",
      title: "Annual Sports Day",
      description: "Inter-house sports competition with various athletic events including track, field, and team sports.",
      type: "sports",
      category: "Sports",
      date: "2026-11-15",
      time: "8:00 AM - 4:00 PM",
      location: "School Ground",
      organizer: "Sports Department",
      capacity: 500,
      registered: 350,
      status: "open",
      image: "/events/sportsday.jpg",
      registrationLink: "#",
      events: ["100m Race", "Relay", "High Jump", "Shot Put", "Football", "Basketball"],
    },
    {
      id: "evt-2",
      title: "Science Exhibition",
      description: "Showcase of student science projects, experiments, and innovative research work.",
      type: "academic",
      category: "Academic",
      date: "2026-11-25",
      time: "9:00 AM - 3:00 PM",
      location: "School Auditorium",
      organizer: "Science Department",
      capacity: 200,
      registered: 150,
      status: "open",
      image: "/events/scienceexhibition.jpg",
      registrationLink: "#",
    },
    {
      id: "evt-3",
      title: "Art Exhibition",
      description: "Display of student artwork, creative projects, and artistic expressions.",
      type: "cultural",
      category: "Cultural",
      date: "2026-12-05",
      time: "10:00 AM - 4:00 PM",
      location: "School Hall",
      organizer: "Art Department",
      capacity: 300,
      registered: 200,
      status: "upcoming",
      image: "/events/artexhibition.jpg",
      registrationLink: "#",
    },
    {
      id: "evt-4",
      title: "Parent-Teacher Meeting",
      description: "Annual parent-teacher meeting to discuss student progress and academic performance.",
      type: "important",
      category: "Important",
      date: "2026-11-20",
      time: "9:00 AM - 5:00 PM",
      location: "School Campus",
      organizer: "Administration",
      capacity: 600,
      registered: 450,
      status: "open",
      image: "/events/ptm.jpg",
      registrationLink: "#",
    },
    {
      id: "evt-5",
      title: "Annual Day Celebration",
      description: "Celebration of the school's annual day with cultural performances and award ceremonies.",
      type: "cultural",
      category: "Cultural",
      date: "2026-12-15",
      time: "6:00 PM - 9:00 PM",
      location: "School Auditorium",
      organizer: "Cultural Committee",
      capacity: 800,
      registered: 600,
      status: "upcoming",
      image: "/events/annualday.jpg",
      registrationLink: "#",
    },
    {
      id: "evt-6",
      title: "Winter Break",
      description: "School will remain closed for winter holidays.",
      type: "important",
      category: "Important",
      date: "2026-12-22",
      time: "All Day",
      location: "School Closed",
      organizer: "Administration",
      capacity: 0,
      registered: 0,
      status: "upcoming",
      image: "/events/winterbreak.jpg",
      registrationLink: undefined,
    },
  ] as Event[],
  
  calendarData: {
    month: "November 2026",
    days: [
      { date: 1, events: [] },
      { date: 2, events: [] },
      // ... full month data would be generated dynamically
    ],
  },
};