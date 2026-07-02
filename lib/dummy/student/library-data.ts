export interface Book {
  id: string;
  title: string;
  author: string;
  isbn: string;
  category: string;
  categoryColor: string;
  coverUrl: string;
  description: string;
  available: boolean;
  copies: number;
  availableCopies: number;
  issuedTo?: {
    studentId: string;
    studentName: string;
    dueDate: string;
  }[];
  publicationYear: number;
  publisher: string;
  pages: number;
  rating: number;
  tags: string[];
}

export interface IssuedBook {
  id: string;
  bookId: string;
  bookTitle: string;
  bookAuthor: string;
  bookCover: string;
  issuedDate: string;
  dueDate: string;
  returnedDate?: string;
  status: "issued" | "overdue" | "returned";
  fine?: number;
}

export interface LibraryStats {
  totalBooks: number;
  availableBooks: number;
  issuedBooks: number;
  overdueBooks: number;
  favorites: number;
}

// Define books first
export const books: Book[] = [
  {
    id: "book-1",
    title: "Mathematics for Class 6",
    author: "R.S. Aggarwal",
    isbn: "978-81-7386-123-4",
    category: "Mathematics",
    categoryColor: "blue",
    coverUrl: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=200&h=250",
    description: "Comprehensive mathematics textbook for Class 6 students covering all topics in the CBSE curriculum.",
    available: true,
    copies: 50,
    availableCopies: 35,
    publicationYear: 2023,
    publisher: "S. Chand Publishing",
    pages: 356,
    rating: 4.5,
    tags: ["Mathematics", "CBSE", "Textbook"],
  },
  {
    id: "book-2",
    title: "Science - A Complete Guide",
    author: "Dr. Anil Kumar",
    isbn: "978-81-7455-234-5",
    category: "Science",
    categoryColor: "green",
    coverUrl: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=200&h=250",
    description: "Complete guide to science for middle school students with experiments and activities.",
    available: true,
    copies: 40,
    availableCopies: 28,
    publicationYear: 2022,
    publisher: "Pearson Education",
    pages: 412,
    rating: 4.3,
    tags: ["Science", "Experiments", "Activities"],
  },
  {
    id: "book-3",
    title: "English Literature - Class 6",
    author: "William Shakespeare",
    isbn: "978-81-8523-345-6",
    category: "English",
    categoryColor: "purple",
    coverUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=200&h=250",
    description: "Collection of English literature for Class 6 including stories, poems, and plays.",
    available: false,
    copies: 30,
    availableCopies: 0,
    publicationYear: 2021,
    publisher: "Oxford University Press",
    pages: 280,
    rating: 4.7,
    tags: ["Literature", "Poetry", "Stories"],
  },
  {
    id: "book-4",
    title: "Social Studies - India and World",
    author: "Dr. Rajesh Singh",
    isbn: "978-81-9876-456-7",
    category: "Social Studies",
    categoryColor: "orange",
    coverUrl: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=200&h=250",
    description: "Comprehensive social studies book covering Indian history, geography, and world affairs.",
    available: true,
    copies: 35,
    availableCopies: 22,
    publicationYear: 2023,
    publisher: "NCERT",
    pages: 398,
    rating: 4.2,
    tags: ["History", "Geography", "Civics"],
  },
  {
    id: "book-5",
    title: "Computer Science - Basics",
    author: "Mrs. Priya Reddy",
    isbn: "978-81-5555-567-8",
    category: "Computer Science",
    categoryColor: "teal",
    coverUrl: "https://images.unsplash.com/photo-15163213184203-f06f85e504b3?auto=format&fit=crop&q=80&w=200&h=250",
    description: "Introduction to computer science for middle school students covering programming basics.",
    available: true,
    copies: 25,
    availableCopies: 18,
    publicationYear: 2022,
    publisher: "Tech Publishers",
    pages: 320,
    rating: 4.6,
    tags: ["Programming", "Computers", "Technology"],
  },
  {
    id: "book-6",
    title: "Art and Craft - Beginner's Guide",
    author: "Mrs. Sunita Kumar",
    isbn: "978-81-8888-678-9",
    category: "Art",
    categoryColor: "pink",
    coverUrl: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=200&h=250",
    description: "Complete guide to art and craft for beginners with step-by-step instructions.",
    available: true,
    copies: 20,
    availableCopies: 15,
    publicationYear: 2023,
    publisher: "Art Publications",
    pages: 245,
    rating: 4.8,
    tags: ["Art", "Craft", "Drawing"],
  },
  {
    id: "book-7",
    title: "Environment Science",
    author: "Dr. Green",
    isbn: "978-81-9999-789-0",
    category: "Science",
    categoryColor: "green",
    coverUrl: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=200&h=250",
    description: "Learn about the environment, ecology, and sustainability.",
    available: true,
    copies: 30,
    availableCopies: 20,
    publicationYear: 2022,
    publisher: "Green Publishers",
    pages: 290,
    rating: 4.4,
    tags: ["Environment", "Ecology", "Sustainability"],
  },
  {
    id: "book-8",
    title: "Mathematics - Advanced Problems",
    author: "Dr. S. Ramanujan",
    isbn: "978-81-1111-890-1",
    category: "Mathematics",
    categoryColor: "blue",
    coverUrl: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=200&h=250",
    description: "Advanced mathematics problems for students preparing for competitions.",
    available: false,
    copies: 15,
    availableCopies: 0,
    publicationYear: 2021,
    publisher: "Math Publishers",
    pages: 420,
    rating: 4.9,
    tags: ["Mathematics", "Competition", "Advanced"],
  },
];

// Define issued books
export const issuedBooks: IssuedBook[] = [
  {
    id: "issue-1",
    bookId: "book-3",
    bookTitle: "English Literature - Class 6",
    bookAuthor: "William Shakespeare",
    bookCover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=200&h=250",
    issuedDate: "2026-10-01",
    dueDate: "2026-10-15",
    status: "issued",
  },
  {
    id: "issue-2",
    bookId: "book-8",
    bookTitle: "Mathematics - Advanced Problems",
    bookAuthor: "Dr. S. Ramanujan",
    bookCover: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=200&h=250",
    issuedDate: "2026-09-20",
    dueDate: "2026-10-04",
    status: "overdue",
    fine: 50,
  },
  {
    id: "issue-3",
    bookId: "book-5",
    bookTitle: "Computer Science - Basics",
    bookAuthor: "Mrs. Priya Reddy",
    bookCover: "https://images.unsplash.com/photo-15163213184203-f06f85e504b3?auto=format&fit=crop&q=80&w=200&h=250",
    issuedDate: "2026-09-25",
    dueDate: "2026-10-09",
    status: "issued",
  },
];

// Define recommendations using the books array
export const recommendations = [
  {
    id: "rec-1",
    book: books[0],
    reason: "Popular in your grade",
  },
  {
    id: "rec-2",
    book: books[6],
    reason: "New Arrival",
  },
  {
    id: "rec-3",
    book: books[4],
    reason: "Based on your interests",
  },
];

// Define categories
export const categories = [
  { id: "all", label: "All Categories" },
  { id: "mathematics", label: "Mathematics" },
  { id: "science", label: "Science" },
  { id: "english", label: "English" },
  { id: "social-studies", label: "Social Studies" },
  { id: "computer-science", label: "Computer Science" },
  { id: "art", label: "Art" },
];

// Define filters
export const filters = {
  availability: ["All", "Available", "Unavailable"],
  sortBy: ["Relevance", "Title", "Author", "Year"],
};

// Define library data (now using the pre-defined arrays)
export const libraryData = {
  stats: {
    totalBooks: 5000,
    availableBooks: 3200,
    issuedBooks: 1800,
    overdueBooks: 23,
    favorites: 15,
  } as LibraryStats,
  books: books,
  issuedBooks: issuedBooks,
  recommendations: recommendations,
  categories: categories,
  filters: filters,
};

// Helper function to get category color
export const getCategoryColor = (color: string) => {
  const colorMap: Record<string, string> = {
    blue: "bg-blue-100 text-blue-700 border-blue-200",
    green: "bg-green-100 text-green-700 border-green-200",
    purple: "bg-purple-100 text-purple-700 border-purple-200",
    orange: "bg-orange-100 text-orange-700 border-orange-200",
    teal: "bg-teal-100 text-teal-700 border-teal-200",
    pink: "bg-pink-100 text-pink-700 border-pink-200",
    red: "bg-red-100 text-red-700 border-red-200",
    yellow: "bg-yellow-100 text-yellow-700 border-yellow-200",
  };
  return colorMap[color] || colorMap.blue;
};

// Helper function to get availability status
export const getAvailabilityStatus = (available: boolean) => {
  return available 
    ? "bg-green-100 text-green-700 border-green-200"
    : "bg-red-100 text-red-700 border-red-200";
};