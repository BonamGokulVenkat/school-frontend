import { Card, CardContent } from "@/components/ui/card";
import { LibraryStats as StatsType } from "@/lib/dummy/student/library-data";

interface LibraryStatsProps {
  stats: StatsType;
}

export function LibraryStats({ stats }: LibraryStatsProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      <Card className="border-slate-200 shadow-sm">
        <CardContent className="p-6">
          <p className="text-sm font-medium text-slate-500">Total Books</p>
          <p className="mt-2 text-2xl font-bold text-slate-900">{stats.totalBooks}</p>
        </CardContent>
      </Card>

      <Card className="border-slate-200 shadow-sm">
        <CardContent className="p-6">
          <p className="text-sm font-medium text-slate-500">Available</p>
          <p className="mt-2 text-2xl font-bold text-green-600">{stats.availableBooks}</p>
        </CardContent>
      </Card>

      <Card className="border-slate-200 shadow-sm">
        <CardContent className="p-6">
          <p className="text-sm font-medium text-slate-500">Issued</p>
          <p className="mt-2 text-2xl font-bold text-blue-600">{stats.issuedBooks}</p>
        </CardContent>
      </Card>

      <Card className="border-slate-200 shadow-sm">
        <CardContent className="p-6">
          <p className="text-sm font-medium text-slate-500">Overdue</p>
          <p className="mt-2 text-2xl font-bold text-red-600">{stats.overdueBooks}</p>
        </CardContent>
      </Card>

      <Card className="border-slate-200 shadow-sm">
        <CardContent className="p-6">
          <p className="text-sm font-medium text-slate-500">Favorites</p>
          <p className="mt-2 text-2xl font-bold text-purple-600">{stats.favorites}</p>
        </CardContent>
      </Card>
    </div>
  );
}