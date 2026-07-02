import { ResultsOverview } from "@/components/student/ResultsOverview";
import { SubjectGradesTable } from "@/components/student/SubjectGradesTable";
import { GradeDistributionChart } from "@/components/student/GradeDistributionChart";
import { PerformanceTrend } from "@/components/student/PerformanceTrend";
import { resultsData } from "@/lib/dummy/student/results-data";

export default function ResultsPage() {
  const { summary, subjects, performanceTrends } = resultsData;

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Academic Results</h1>
        <p className="text-sm text-slate-500">
          View your grades, performance trends, and subject-wise marks
        </p>
      </div>

      {/* Overview Stats */}
      <ResultsOverview summary={summary} />

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left Column - 2 columns */}
        <div className="space-y-6 lg:col-span-2">
          <SubjectGradesTable subjects={subjects} />
        </div>

        {/* Right Column - 1 column */}
        <div className="space-y-6 lg:col-span-1">
          <GradeDistributionChart subjects={subjects} />
        </div>
      </div>

      {/* Performance Trends */}
      <PerformanceTrend trends={performanceTrends} />
    </div>
  );
}