export interface FacultyMember {
  id: string;
  name: string;
  designation: string;
  section: "primary" | "secondary" | "admin";
  expertise: string[];
  email: string;
  phone: string;
  image: string;
  qualification: string;
  experience: string;
  classAssigned: string;
}

export interface FacultyCategory {
  id: "all" | "primary" | "secondary" | "admin";
  label: string;
}

export const facultyData = {
  categories: [
    { id: "all", label: "All Staff" },
    { id: "primary", label: "Primary Section" },
    { id: "secondary", label: "Secondary Section" },
    { id: "admin", label: "Administration" },
  ] as FacultyCategory[],
  faculty: [
    {
      id: "fac-1",
      name: "Mrs. Sunita Sharma",
      designation: "Class Teacher - Grade 1",
      section: "primary",
      expertise: ["Early Childhood Education", "English", "Art"],
      email: "ssharma@edunexus.edu",
      phone: "+91 98765 43210",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=256&h=256",
      qualification: "B.Ed, M.A. English",
      experience: "15 years",
      classAssigned: "Grade 1-A",
    },
    {
      id: "fac-2",
      name: "Mr. Rajesh Verma",
      designation: "Class Teacher - Grade 2",
      section: "primary",
      expertise: ["Mathematics", "Science", "Computers"],
      email: "rverma@edunexus.edu",
      phone: "+91 98765 43211",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=256&h=256",
      qualification: "B.Ed, B.Sc. Mathematics",
      experience: "12 years",
      classAssigned: "Grade 2-B",
    },
    {
      id: "fac-3",
      name: "Dr. Anjali Kumar",
      designation: "Senior Teacher - Mathematics",
      section: "secondary",
      expertise: ["Advanced Algebra", "Geometry", "Calculus"],
      email: "akumar@edunexus.edu",
      phone: "+91 98765 43212",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=256&h=256",
      qualification: "M.Sc., PhD Mathematics",
      experience: "18 years",
      classAssigned: "Grades 9 & 10",
    },
    {
      id: "fac-4",
      name: "Mrs. Priya Rao",
      designation: "Administrative Officer",
      section: "admin",
      expertise: ["Operations Management", "Parent Relations", "Event Strategy"],
      email: "prao@edunexus.edu",
      phone: "+91 98765 43213",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=256&h=256",
      qualification: "MBA in Institutional Management, M.Sc.",
      experience: "10 years",
      classAssigned: "N/A",
    },
  ] as FacultyMember[],
};