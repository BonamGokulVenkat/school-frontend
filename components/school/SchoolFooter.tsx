import Link from "next/link";
import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";

export function SchoolFooter() {
  return (
    <footer className="border-t bg-white py-12">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xl font-bold text-blue-600">
              <GraduationCap className="h-6 w-6" />
              <span>EduNexus</span>
            </div>
            <p className="text-sm text-slate-600">
              Nurturing young minds for a bright future through quality education and holistic development.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-semibold text-slate-900">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-slate-600 transition-colors hover:text-blue-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="text-slate-600 transition-colors hover:text-blue-600">
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/faculty" className="text-slate-600 transition-colors hover:text-blue-600">
                  Faculty
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-slate-600 transition-colors hover:text-blue-600">
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="font-semibold text-slate-900">Contact</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-slate-400" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-slate-400" />
                <span>info@edunexus.edu</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-slate-400 mt-0.5" />
                <span>123, School Road, Education District, Bangalore - 560001</span>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div className="space-y-3">
            <h4 className="font-semibold text-slate-900">Working Hours</h4>
            <ul className="space-y-1 text-sm text-slate-600">
              <li>Mon - Fri: 8:00 AM - 4:00 PM</li>
              <li>Saturday: 8:00 AM - 1:00 PM</li>
              <li className="text-slate-400">Sunday: Closed</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-200 pt-8 text-center text-sm text-slate-500">
          <p>© 2026 EduNexus School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}