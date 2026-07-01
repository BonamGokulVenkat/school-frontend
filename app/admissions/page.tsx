import { SchoolHeader } from "@/components/school/SchoolHeader";
import { SchoolFooter } from "@/components/school/SchoolFooter";
import { PageHeading } from "@/components/school/PageHeading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AdmissionsInfo } from "./AdmissionsInfo";
import { AdmissionsForm } from "./AdmissionsForm";

export default function AdmissionsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50/50">
      <SchoolHeader />

      <main className="flex-1 py-12">
        <div className="container mx-auto max-w-5xl px-4">
          <PageHeading
            title="Admissions 2026-27"
            description="Join the EduNexus family and give your child the gift of quality education. Applications are now open for the academic year 2026-27."
          />

          <Tabs defaultValue="info" className="space-y-6">
            <div className="flex items-center justify-between">
              <TabsList>
                <TabsTrigger value="info" className="flex items-center gap-2">
                  <span>📋</span> Admission Information
                </TabsTrigger>
                <TabsTrigger value="apply" className="flex items-center gap-2">
                  <span>📝</span> Apply Now
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="info">
              <AdmissionsInfo />
              <div className="mt-8 text-center">
                <p className="text-sm text-slate-600">
                  Ready to apply? Proceed to the application form.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="apply">
              <AdmissionsForm />
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <SchoolFooter />
    </div>
  );
}