import { Book, BookOpen, Bookmark, Layers, Archive, DraftingCompass } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface SubjectStatsProps {
  stats: {
    total: number;
    active: number;
    archived: number;
    draft: number;
    core: number;
    elective: number;
    vocational: number;
    coCurricular: number;
  };
}

export function SubjectStats({ stats }: SubjectStatsProps) {
  const statItems = [
    {
      label: "Total Subjects",
      value: stats.total,
      icon: Book,
      color: "bg-blue-50 text-blue-600",
    },
    {
      label: "Active",
      value: stats.active,
      icon: BookOpen,
      color: "bg-emerald-50 text-emerald-600",
    },
    {
      label: "Core",
      value: stats.core,
      icon: Bookmark,
      color: "bg-purple-50 text-purple-600",
    },
    {
      label: "Elective",
      value: stats.elective,
      icon: Layers,
      color: "bg-orange-50 text-orange-600",
    },
    {
      label: "Archived",
      value: stats.archived,
      icon: Archive,
      color: "bg-slate-50 text-slate-600",
    },
    {
      label: "Draft",
      value: stats.draft,
      icon: DraftingCompass,
      color: "bg-amber-50 text-amber-600",
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
      {statItems.map((item) => (
        <Card key={item.label} className="border-slate-200 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className={`rounded-full p-2.5 ${item.color}`}>
                <item.icon className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs font-medium text-slate-500">{item.label}</p>
                <p className="text-xl font-bold text-slate-900">{item.value}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}