import { SchoolHeader } from "@/components/school/SchoolHeader";
import { SchoolFooter } from "@/components/school/SchoolFooter";
import { PageHeading } from "@/components/school/PageHeading";
import { DirectoryGrid } from "./DirectoryGrid";

export default function FacultyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50/50">
      <SchoolHeader />

      <main className="flex-1 py-12">
        <div className="container mx-auto max-w-5xl px-4">
          <PageHeading
            title="Our Teachers & Staff Directory"
            description="Connect with our world-class educational team and institutional administrators."
          />
          <DirectoryGrid />
        </div>
      </main>

      <SchoolFooter />
    </div>
  );
}