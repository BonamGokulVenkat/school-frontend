export interface ContactDepartment {
  id: string;
  name: string;
  email: string;
  phone: string;
  description?: string;
}

export interface WorkingHours {
  weekdays: string;
  saturday: string;
  sunday: string;
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: "Facebook" | "Twitter" | "Instagram" | "Linkedin" | "Youtube";
}

export const contactData = {
  address: {
    street: "123, School Road",
    locality: "Education District",
    city: "Bangalore",
    state: "Karnataka",
    pincode: "560001",
    coordinates: {
      lat: 12.9716,
      lng: 77.5946,
    },
  },
  phone: "+91 98765 43210",
  email: "info@edunexus.edu",
  departments: [
    {
      id: "dept-admissions",
      name: "Admissions",
      email: "admissions@edunexus.edu",
      phone: "+91 98765 43211",
      description: "For admission inquiries, application status, and school tours",
    },
    {
      id: "dept-admin",
      name: "Administration",
      email: "admin@edunexus.edu",
      phone: "+91 98765 43212",
      description: "For general administrative inquiries and school policies",
    },
    {
      id: "dept-transport",
      name: "Transport",
      email: "transport@edunexus.edu",
      phone: "+91 98765 43213",
      description: "For bus routes, transport schedules, and transport fees",
    },
    {
      id: "dept-academic",
      name: "Academic",
      email: "academic@edunexus.edu",
      phone: "+91 98765 43214",
      description: "For curriculum questions, assessments, and academic support",
    },
  ] as ContactDepartment[],
  workingHours: {
    weekdays: "8:00 AM - 4:00 PM",
    saturday: "8:00 AM - 1:00 PM",
    sunday: "Closed",
  },
  socialLinks: [
    {
      id: "social-facebook",
      name: "Facebook",
      url: "https://facebook.com/edunexus",
      icon: "Facebook",
    },
    {
      id: "social-twitter",
      name: "Twitter",
      url: "https://twitter.com/edunexus",
      icon: "Twitter",
    },
    {
      id: "social-instagram",
      name: "Instagram",
      url: "https://instagram.com/edunexus",
      icon: "Instagram",
    },
    {
      id: "social-linkedin",
      name: "LinkedIn",
      url: "https://linkedin.com/company/edunexus",
      icon: "Linkedin",
    },
    {
      id: "social-youtube",
      name: "YouTube",
      url: "https://youtube.com/edunexus",
      icon: "Youtube",
    },
  ] as SocialLink[],
};