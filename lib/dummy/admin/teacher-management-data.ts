export interface TeacherRecord {
  id: string;
  name: string;
  email: string;
  phone: string;
  subjects: string[];
  classes: string[];
  qualification: string;
  experience: string;
  joinDate: string;
  status: "active" | "inactive" | "on-leave";
  image?: string;
  specialization: string[];
  address: string;
  emergencyContact: string;
}

export const teacherManagementData = {
  stats: {
    total: 30,
    active: 25,
    onLeave: 3,
    inactive: 2,
  },
  teachers: [
    {
      id: "t1",
      name: "Mrs. Sunita Sharma",
      email: "ssharma@edunexus.edu",
      phone: "+91 98765 43210",
      subjects: ["Mathematics", "Algebra"],
      classes: ["Grade 6-A", "Grade 7-A"],
      qualification: "M.Sc., B.Ed",
      experience: "15 years",
      joinDate: "2015-06-01",
      status: "active",
      specialization: ["Mathematics", "Curriculum Design"],
      address: "123, Teacher Colony, Bangalore",
      emergencyContact: "+91 98765 43000",
    },
    {
      id: "t2",
      name: "Mr. Rajesh Verma",
      email: "rverma@edunexus.edu",
      phone: "+91 98765 43211",
      subjects: ["Science", "Physics"],
      classes: ["Grade 8-A", "Grade 9-B"],
      qualification: "M.Sc., B.Ed",
      experience: "12 years",
      joinDate: "2016-08-15",
      status: "active",
      specialization: ["Physics", "Laboratory Management"],
      address: "456, Science Park, Bangalore",
      emergencyContact: "+91 98765 43001",
    },
    {
      id: "t3",
      name: "Dr. Anjali Kumar",
      email: "akumar@edunexus.edu",
      phone: "+91 98765 43212",
      subjects: ["Mathematics", "Statistics"],
      classes: ["Grade 10-A", "Grade 11-A"],
      qualification: "PhD Mathematics",
      experience: "18 years",
      joinDate: "2010-03-20",
      status: "active",
      specialization: ["Advanced Mathematics", "Research"],
      address: "789, Academic Heights, Bangalore",
      emergencyContact: "+91 98765 43002",
    },
    {
      id: "t4",
      name: "Mrs. Priya Rao",
      email: "prao@edunexus.edu",
      phone: "+91 98765 43213",
      subjects: ["English", "Literature"],
      classes: ["Grade 6-B", "Grade 7-B"],
      qualification: "M.A. English, B.Ed",
      experience: "10 years",
      joinDate: "2018-01-10",
      status: "on-leave",
      specialization: ["Literature", "Creative Writing"],
      address: "321, Literary Lane, Bangalore",
      emergencyContact: "+91 98765 43003",
    },
    {
      id: "t5",
      name: "Mr. Suresh Patel",
      email: "spatel@edunexus.edu",
      phone: "+91 98765 43214",
      subjects: ["Computer Science", "Programming"],
      classes: ["Grade 8-B", "Grade 9-A"],
      qualification: "M.Tech, B.Ed",
      experience: "8 years",
      joinDate: "2020-07-01",
      status: "active",
      specialization: ["Web Development", "AI"],
      address: "654, Tech Park, Bangalore",
      emergencyContact: "+91 98765 43004",
    },
    {
      id: "t6",
      name: "Ms. Meera Reddy",
      email: "mreddy@edunexus.edu",
      phone: "+91 98765 43215",
      subjects: ["Biology", "Environmental Science"],
      classes: ["Grade 9-A", "Grade 10-B"],
      qualification: "M.Sc., B.Ed",
      experience: "6 years",
      joinDate: "2021-06-01",
      status: "active",
      specialization: ["Biology", "Environmental Studies"],
      address: "987, Green Valley, Bangalore",
      emergencyContact: "+91 98765 43005",
    },
    {
      id: "t7",
      name: "Mr. Arun Nair",
      email: "anair@edunexus.edu",
      phone: "+91 98765 43216",
      subjects: ["History", "Civics"],
      classes: ["Grade 7-B", "Grade 8-B"],
      qualification: "M.A. History, B.Ed",
      experience: "9 years",
      joinDate: "2019-08-15",
      status: "inactive",
      specialization: ["History", "Social Studies"],
      address: "456, Heritage Colony, Bangalore",
      emergencyContact: "+91 98765 43006",
    },
  ] as TeacherRecord[],
};