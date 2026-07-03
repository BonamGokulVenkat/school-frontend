import {
  // Dashboard & Layout
  LayoutDashboard,
  Home,
  Info,
  Phone,
  UserPlus,
  
  // Users & Roles
  Users,
  User,
  UserCog,
  
  // Education
  BookOpen,
  Book,
  GraduationCap,
  Library,
  
  // Calendar & Time
  Calendar,
  Clock,
  
  // Files & Documents
  FileText,
  File,
  FileSpreadsheet,
  Files,
  
  // Analytics & Grades
  BarChart,
  TrendingUp,
  Award,
  CheckSquare,
  
  // Communication
  Bell,
  MessageSquare,
  Mail,
  
  // Settings & Actions
  Settings,
  LogOut,
  Edit,
  Trash2,
  Plus,
  Search,
  Filter,
  MoreVertical,
  X,
  ChevronRight,
  ChevronDown,
  ChevronLeft,
  ChevronUp,
  
  // Status
  AlertCircle,
  AlertTriangle,
  CheckCircle,
  
  // Finance
  DollarSign,
  CreditCard,
  
  // Other
  Shield,
  Eye,
  EyeOff,
  Download,
  Upload,
  Printer,
  Share2,
  Link,
  MapPin,
  PhoneCall,
} from "lucide-react";

export const iconMap: Record<string, React.ElementType> = {
  // Dashboard & Layout
  LayoutDashboard,
  Home,
  Info,
  Phone,
  UserPlus,
  
  // Users & Roles
  Users,
  User,
  UserCog,
  
  // Education
  BookOpen,
  Book,
  GraduationCap,
  Library,
  
  // Calendar & Time
  Calendar,
  Clock,
  
  // Files & Documents
  FileText,
  File,
  FileSpreadsheet,
  Files,
  
  // Analytics & Grades
  BarChart,
  TrendingUp,
  Award,
  CheckSquare,
  
  // Communication
  Bell,
  MessageSquare,
  Mail,
  
  // Settings & Actions
  Settings,
  LogOut,
  Edit,
  Trash2,
  Plus,
  Search,
  Filter,
  MoreVertical,
  X,
  ChevronRight,
  ChevronDown,
  ChevronLeft,
  ChevronUp,
  
  // Status
  AlertCircle,
  AlertTriangle,
  CheckCircle,
  
  // Finance
  DollarSign,
  CreditCard,
  
  // Other
  Shield,
  Eye,
  EyeOff,
  Download,
  Upload,
  Printer,
  Share2,
  Link,
  MapPin,
  PhoneCall,
};

// Helper function to get icon component by name
export function getIconByName(name: string): React.ElementType {
  return iconMap[name] || LayoutDashboard;
}