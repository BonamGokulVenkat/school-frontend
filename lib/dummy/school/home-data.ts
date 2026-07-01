export interface HomeStat {
  id: string;
  label: string;
  value: string;
  icon: "Users" | "User" | "TrendingUp" | "Award";
  color: string;
}

export interface HomeFeature {
  id: string;
  title: string;
  description: string;
  icon: "BookOpen" | "Users" | "Shield" | "Laptop";
  color: string;
}

export interface Announcement {
  id: string;
  title: string;
  description: string;
  date: string;
  type: string;
  variant: "default" | "destructive" | "secondary";
}

export interface HomeEvent {
  id: string;
  title: string;
  date: string;
  location: string;
  type: string;
}

export const homeData = {
  hero: {
    title: "Welcome to EduNexus School",
    subtitle: "Nurturing Young Minds for a Bright Future",
    ctaPrimary: "Admissions Open",
    ctaSecondary: "Learn More",
    stats: [
      {
        id: "stat-students",
        label: "Students",
        value: "500+",
        icon: "Users",
        color: "text-blue-600",
      },
      {
        id: "stat-teachers",
        label: "Teachers",
        value: "30+",
        icon: "User",
        color: "text-green-600",
      },
      {
        id: "stat-pass",
        label: "Pass Rate",
        value: "98%",
        icon: "TrendingUp",
        color: "text-purple-600",
      },
      {
        id: "stat-awards",
        label: "Awards",
        value: "15+",
        icon: "Award",
        color: "text-orange-600",
      },
    ] as HomeStat[],
  },
  features: [
    {
      id: "feat-quality",
      title: "Quality Education",
      description: "Comprehensive curriculum with focus on holistic development",
      icon: "BookOpen",
      color: "text-blue-600",
    },
    {
      id: "feat-teachers",
      title: "Experienced Teachers",
      description: "Qualified and passionate educators dedicated to student success",
      icon: "Users",
      color: "text-green-600",
    },
    {
      id: "feat-safe",
      title: "Safe Environment",
      description: "Secure campus with modern facilities and safety measures",
      icon: "Shield",
      color: "text-purple-600",
    },
    {
      id: "feat-smart",
      title: "Smart Learning",
      description: "Technology-enabled classrooms with digital learning tools",
      icon: "Laptop",
      color: "text-orange-600",
    },
  ] as HomeFeature[],
  announcements: [
    {
      id: "ann-annual",
      title: "Annual Day Celebration",
      description: "Join us for the Annual Day celebration on Dec 15, 2026",
      date: "Dec 15, 2026",
      type: "event",
      variant: "default",
    },
    {
      id: "ann-ptm",
      title: "Parent-Teacher Meeting",
      description: "PTM scheduled for Nov 20, 2026. Please check your child's progress.",
      date: "Nov 20, 2026",
      type: "important",
      variant: "destructive",
    },
    {
      id: "ann-winter",
      title: "Winter Break",
      description: "School will remain closed from Dec 22 to Jan 5, 2027",
      date: "Dec 22, 2026",
      type: "holiday",
      variant: "secondary",
    },
  ] as Announcement[],
  events: [
    {
      id: "evt-sports",
      title: "Annual Sports Day",
      date: "Nov 15, 2026",
      location: "School Ground",
      type: "Sports",
    },
    {
      id: "evt-science",
      title: "Science Exhibition",
      date: "Nov 25, 2026",
      location: "School Auditorium",
      type: "Academic",
    },
    {
      id: "evt-art",
      title: "Art Exhibition",
      date: "Dec 5, 2026",
      location: "School Hall",
      type: "Cultural",
    },
  ] as HomeEvent[],
};