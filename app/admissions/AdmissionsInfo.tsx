"use client";

import { useState } from "react";
import { Calendar, Users, BookOpen, Award, AlertCircle } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { InfoCard } from "@/components/school/InfoCard";
import { ProcessSteps } from "@/components/school/ProcessSteps";
import { DocumentChecklist } from "@/components/school/DocumentChecklist";
import { admissionsData } from "@/lib/dummy/school/admissions-data";

export function AdmissionsInfo() {
  const [selectedGrade, setSelectedGrade] = useState<string>("grade-1");

  const getStatusColor = (status: string) => {
    const colors = {
      upcoming: "slate",
      ongoing: "green",
      completed: "blue",
    };
    return colors[status as keyof typeof colors] || "slate";
  };

  const selectedGradeData = admissionsData.gradeInfo.find(
    (g) => g.id === selectedGrade
  );

  return (
    <div className="space-y-12">
      {/* Quick Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <InfoCard
          icon={<Calendar className="h-4 w-4" />}
          title="Registration Starts"
          value="Dec 15, 2026"
          subtitle="Online applications open"
          badge="Upcoming"
          badgeColor="blue"
        />
        <InfoCard
          icon={<Users className="h-4 w-4" />}
          title="Total Seats"
          value="185"
          subtitle="Across all grades"
          badge="Limited"
          badgeColor="orange"
        />
        <InfoCard
          icon={<BookOpen className="h-4 w-4" />}
          title="Grades Offered"
          value="Nursery - 12"
          subtitle="Complete K-12 education"
          badge="CBSE"
          badgeColor="green"
        />
        <InfoCard
          icon={<Award className="h-4 w-4" />}
          title="Success Rate"
          value="98%"
          subtitle="Admission conversion rate"
          badge="High"
          badgeColor="purple"
        />
      </div>

      {/* Important Dates */}
      <section>
        <h2 className="mb-4 text-2xl font-bold text-slate-900">📋 Important Dates</h2>
        <Card className="border-slate-200 shadow-sm">
          <CardContent className="p-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
              {admissionsData.dates.map((date) => (
                <div
                  key={date.id}
                  className="rounded-lg border border-slate-100 bg-slate-50 p-4 text-center"
                >
                  <div className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    {date.event}
                  </div>
                  <div className="my-2 text-lg font-bold text-slate-900">
                    {date.date}
                  </div>
                  <Badge
                    variant="outline"
                    className={`${
                      date.status === "ongoing"
                        ? "border-green-200 bg-green-50 text-green-700"
                        : date.status === "completed"
                        ? "border-blue-200 bg-blue-50 text-blue-700"
                        : "border-slate-200 bg-slate-50 text-slate-600"
                    }`}
                  >
                    {date.status.charAt(0).toUpperCase() + date.status.slice(1)}
                  </Badge>
                  {date.description && (
                    <p className="mt-2 text-xs text-slate-500">{date.description}</p>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Grade-wise Information */}
      <section>
        <h2 className="mb-4 text-2xl font-bold text-slate-900">📚 Grade-wise Information</h2>
        <Card className="border-slate-200 shadow-sm">
          <CardContent className="p-6">
            <div className="mb-4 flex flex-wrap gap-2">
              {admissionsData.gradeInfo.map((grade) => (
                <Button
                  key={grade.id}
                  variant={selectedGrade === grade.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedGrade(grade.id)}
                  className={
                    selectedGrade === grade.id
                      ? "bg-blue-600 hover:bg-blue-700"
                      : "border-slate-200"
                  }
                >
                  {grade.grade}
                </Button>
              ))}
            </div>

            {selectedGradeData && (
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <div>
                    <div className="text-xs font-medium text-slate-500">Grade</div>
                    <div className="text-lg font-bold text-slate-900">
                      {selectedGradeData.grade}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-slate-500">Seats Available</div>
                    <div className="text-lg font-bold text-slate-900">
                      {selectedGradeData.seats}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-slate-500">Age Group</div>
                    <div className="text-lg font-bold text-slate-900">
                      {selectedGradeData.age}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-slate-500">Subjects</div>
                    <div className="text-lg font-bold text-slate-900">
                      {selectedGradeData.subjects}
                    </div>
                  </div>
                </div>
                {selectedGradeData.description && (
                  <p className="mt-2 text-sm text-slate-600">
                    {selectedGradeData.description}
                  </p>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </section>

      {/* Admission Process */}
      <section>
        <h2 className="mb-4 text-2xl font-bold text-slate-900">📄 Admission Process</h2>
        <Card className="border-slate-200 shadow-sm">
          <CardContent className="p-6">
            <ProcessSteps steps={admissionsData.processSteps} currentStep={1} />
          </CardContent>
        </Card>
      </section>

      {/* Documents Required */}
      <section>
        <h2 className="mb-4 text-2xl font-bold text-slate-900">📎 Documents Required</h2>
        <Card className="border-slate-200 shadow-sm">
          <CardContent className="p-6">
            <div className="mb-4 flex items-center gap-2 rounded-lg bg-amber-50 p-3 text-sm text-amber-700">
              <AlertCircle className="h-4 w-4 shrink-0" />
              <span>
                Please ensure all required documents are ready before starting the application.
                Incomplete applications may not be processed.
              </span>
            </div>
            <DocumentChecklist documents={admissionsData.documents} />
          </CardContent>
        </Card>
      </section>

      {/* Fee Structure */}
      <section>
        <h2 className="mb-4 text-2xl font-bold text-slate-900">💰 Fee Structure</h2>
        <Card className="border-slate-200 shadow-sm">
          <CardContent className="p-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Fee Type</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Frequency</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Admission Fee</TableCell>
                  <TableCell>{admissionsData.feeStructure.admissionFee}</TableCell>
                  <TableCell>One-time</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Tuition Fee</TableCell>
                  <TableCell>{admissionsData.feeStructure.tuitionFee}</TableCell>
                  <TableCell>Monthly</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Transport Fee</TableCell>
                  <TableCell>{admissionsData.feeStructure.transportFee}</TableCell>
                  <TableCell>Monthly</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Other Charges</TableCell>
                  <TableCell>{admissionsData.feeStructure.otherCharges}</TableCell>
                  <TableCell>Annual</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}