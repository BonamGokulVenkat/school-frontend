export interface Role {
  id: "student" | "teacher" | "admin" | "parent";
  label: string;
  icon: string;
}

export const authData = {
  roles: [
    { id: "student", label: "Student", icon: "👨‍🎓" },
    { id: "teacher", label: "Teacher", icon: "👨‍🏫" },
    { id: "admin", label: "Admin", icon: "👤" },
    { id: "parent", label: "Parent", icon: "👨‍👩‍👦" },
  ] as Role[],
  
  features: [
    "Access your personalized dashboard",
    "View attendance and grades",
    "Submit assignments online",
    "Communicate with teachers",
    "Track academic progress",
  ],
};