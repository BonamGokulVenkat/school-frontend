import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Building,
} from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import Link from "next/link";

import { SchoolHeader } from "@/components/school/SchoolHeader";
import { SchoolFooter } from "@/components/school/SchoolFooter";
import { PageHeading } from "@/components/school/PageHeading";
import { ContactInfo } from "@/components/school/ContactInfo";
import { ContactForm } from "@/components/school/ContactForm";
import { MapEmbed } from "@/components/school/MapEmbed";
import { contactData } from "@/lib/dummy/school/contact-data";

const SocialIconMap: Record<string, React.ElementType> = {
  Facebook: FaFacebook,
  Twitter: FaTwitter,
  Instagram: FaInstagram,
  Linkedin: FaLinkedin,
  Youtube: FaYoutube,
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50/50">
      <SchoolHeader />

      <main className="flex-1 py-12">
        <div className="container mx-auto max-w-5xl px-4">
          <PageHeading
            title="Contact Us"
            description="We'd love to hear from you. Reach out to us through any of the channels below."
          />

          <div className="grid gap-8 lg:grid-cols-12">
            {/* Left Column - Contact Info */}
            <div className="space-y-6 lg:col-span-5">
              <ContactInfo />

              {/* Social Links */}
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <h3 className="mb-3 text-sm font-semibold text-slate-900">
                  Connect With Us
                </h3>
                <div className="flex flex-wrap gap-2">
                  {contactData.socialLinks.map((social) => {
                    const IconComponent = SocialIconMap[social.icon];
                    return (
                      <Link
                        key={social.id}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-600 transition-colors hover:bg-blue-50 hover:text-blue-600"
                        aria-label={`Follow us on ${social.name}`}
                      >
                        <IconComponent className="h-4 w-4" />
                        <span className="hidden sm:inline">{social.name}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>

          {/* Map Section */}
          <section className="mt-12">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              📍 Campus Location
            </h2>
            <MapEmbed
              lat={contactData.address.coordinates.lat}
              lng={contactData.address.coordinates.lng}
              className="rounded-xl border-slate-200 shadow-sm"
            />
            <p className="mt-2 text-sm text-slate-500">
              {contactData.address.street}, {contactData.address.locality},{" "}
              {contactData.address.city}, {contactData.address.state}{" "}
              {contactData.address.pincode}
            </p>
          </section>
        </div>
      </main>

      <SchoolFooter />
    </div>
  );
}