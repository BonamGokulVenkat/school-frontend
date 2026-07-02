export interface StudentProfile {
  id: string;
  name: string;
  class: string;
  rollNo: string;
  avatar: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  age: number;
  gender: "Male" | "Female" | "Other";
  bloodGroup: string;
  address: {
    street: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
  };
  guardian: {
    name: string;
    relationship: string;
    phone: string;
    email: string;
    occupation: string;
  };
  joinedDate: string;
  achievements: {
    id: string;
    title: string;
    description: string;
    date: string;
    type: "academic" | "sports" | "cultural" | "other";
  }[];
  subjects: {
    id: string;
    name: string;
    teacher: string;
    grade: string;
  }[];
  attendance: {
    present: number;
    total: number;
    percentage: number;
  };
}

export const profileData: StudentProfile = {
  id: "student-1",
  name: "Rahul Sharma",
  class: "Grade 6-A",
  rollNo: "2024001",
  avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=256&h=256",
  email: "rahul.sharma@edunexus.edu",
  phone: "+91 98765 43210",
  dateOfBirth: "2013-01-15",
  age: 13,
  gender: "Male",
  bloodGroup: "O+",
  address: {
    street: "123, Green Valley Apartments",
    city: "Bangalore",
    state: "Karnataka",
    pincode: "560001",
    country: "India",
  },
  guardian: {
    name: "Mr. Rajesh Sharma",
    relationship: "Father",
    phone: "+91 98765 43210",
    email: "rajesh.sharma@email.com",
    occupation: "Software Engineer",
  },
  joinedDate: "2024-06-01",
  achievements: [
    {
      id: "ach-1",
      title: "Mathematics Olympiad - Gold Medal",
      description: "Secured first place in the State Level Mathematics Olympiad",
      date: "2026-01-15",
      type: "academic",
    },
    {
      id: "ach-2",
      title: "Annual Sports Day - 100m Race",
      description: "Won first place in the 100m sprint competition",
      date: "2025-11-20",
      type: "sports",
    },
    {
      id: "ach-3",
      title: "Science Exhibition - Best Project",
      description: "Awarded for the innovative solar-powered model",
      date: "2025-09-10",
      type: "academic",
    },
    {
      id: "ach-4",
      title: "School Debate Competition",
      description: "Secured second place in the inter-school debate",
      date: "2025-08-05",
      type: "cultural",
    },
  ],
  subjects: [
    { id: "sub-1", name: "Mathematics", teacher: "Mrs. Sharma", grade: "A" },
    { id: "sub-2", name: "Science", teacher: "Mr. Verma", grade: "B+" },
    { id: "sub-3", name: "English", teacher: "Ms. Patel", grade: "A" },
    { id: "sub-4", name: "Social Studies", teacher: "Mr. Singh", grade: "B" },
    { id: "sub-5", name: "Computer Science", teacher: "Mrs. Reddy", grade: "A+" },
  ],
  attendance: {
    present: 102,
    total: 120,
    percentage: 85,
  },
};

// Helper function to get achievement type color
export const getAchievementColor = (type: string) => {
  const colorMap: Record<string, string> = {
    academic: "bg-blue-100 text-blue-700 border-blue-200",
    sports: "bg-green-100 text-green-700 border-green-200",
    cultural: "bg-purple-100 text-purple-700 border-purple-200",
    other: "bg-gray-100 text-gray-700 border-gray-200",
  };
  return colorMap[type] || colorMap.other;
};

// Helper function to get achievement icon
export const getAchievementIcon = (type: string) => {
  const iconMap: Record<string, string> = {
    academic: "🏆",
    sports: "🏅",
    cultural: "🎭",
    other: "⭐",
  };
  return iconMap[type] || iconMap.other;
};