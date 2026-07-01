export interface Milestone {
  year: string;
  event: string;
  icon: "Rocket" | "Building" | "Laptop" | "Globe" | "TrendingUp";
}

export interface LeadershipMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  email: string;
  phone: string;
}

export interface Accreditation {
  id: string;
  name: string;
  institution: string;
  year: string;
}

export const aboutData = {
  mission: {
    title: "Our Mission",
    description:
      "To provide quality education that nurtures young minds, builds character, and prepares students for life-long learning and responsible global citizenship.",
  },
  vision: {
    title: "Our Vision",
    description:
      "To be a premier center of academic excellence, known for fostering innovation, analytical creativity, and the holistic emotional and physical development of every child.",
  },
  history: [
    {
      year: "2000",
      event: "School founded with an initial cohort of 50 students.",
      icon: "Rocket",
    },
    {
      year: "2010",
      event: "State-of-the-art secondary campus building inaugurated.",
      icon: "Building",
    },
    {
      year: "2015",
      event: "Complete smart classroom and digital technology integration.",
      icon: "Laptop",
    },
    {
      year: "2020",
      event: "Recognized internationally for STEM and global academic partnerships.",
      icon: "Globe",
    },
    {
      year: "2026",
      event: "Launched the EduNexus integrated digital ecosystem transformation.",
      icon: "TrendingUp",
    },
  ] as Milestone[],
  leadership: [
    {
      id: "lead-suresh",
      name: "Dr. Suresh Kumar",
      role: "Principal",
      bio: "25+ years in educational administration. Holds a PhD in Educational Leadership from Delhi University.",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=256&h=256",
      email: "principal@edunexus.edu",
      phone: "+91 98765 43210",
    },
    {
      id: "lead-anita",
      name: "Mrs. Anita Sharma",
      role: "Vice Principal",
      bio: "20+ years of active pedagogical experience with a specialized Master's degree in Curriculum Design.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=256&h=256",
      email: "viceprincipal@edunexus.edu",
      phone: "+91 98765 43211",
    },
    {
      id: "lead-rajesh",
      name: "Mr. Rajesh Singh",
      role: "Head Teacher - Senior Section",
      bio: "15+ years engineering foundations in advanced Mathematics and analytical physics frameworks.",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=256&h=256",
      email: "headteacher@edunexus.edu",
      phone: "+91 98765 43212",
    },
  ] as LeadershipMember[],
  accreditations: [
    {
      id: "acc-cbse",
      name: "CBSE Affiliated",
      institution: "Central Board of Secondary Education",
      year: "2010",
    },
    {
      id: "acc-iso",
      name: "ISO 9001:2015 Certified",
      institution: "Quality Management Systems",
      year: "2018",
    },
    {
      id: "acc-green",
      name: "Green School Award",
      institution: "Environmental Council",
      year: "2025",
    },
  ] as Accreditation[],
};