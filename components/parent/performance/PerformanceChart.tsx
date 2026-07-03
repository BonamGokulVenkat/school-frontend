"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PerformanceChartProps {
  data: {
    month: string;
    marks: number;
  }[];
  overallGrade: string;
  overallPercentage: number;
}

export function PerformanceChart({ data, overallGrade, overallPercentage }: PerformanceChartProps) {
  const maxMarks = 100;
  const chartHeight = 200;

  return (
    <Card className="border-slate-200 shadow-sm">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-slate-900">
            Performance Trend
          </CardTitle>
          <div className="flex items-center gap-2">
            <Badge
              variant="outline"
              className={`${
                overallGrade.startsWith("A")
                  ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                  : overallGrade.startsWith("B")
                  ? "bg-blue-50 text-blue-700 border-blue-200"
                  : "bg-amber-50 text-amber-700 border-amber-200"
              } text-sm font-bold px-3 py-1`}
            >
              Overall: {overallGrade} ({overallPercentage}%)
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative h-[200px] w-full">
          {/* Grid Lines */}
          <div className="absolute inset-0 flex flex-col justify-between">
            {[100, 75, 50, 25, 0].map((value) => (
              <div key={value} className="flex items-center gap-2">
                <span className="text-[10px] text-slate-400 w-6">{value}%</span>
                <div className="flex-1 border-t border-slate-100" />
              </div>
            ))}
          </div>

          {/* Bars */}
          <div className="absolute inset-0 flex items-end justify-between px-8 pb-6">
            {data.map((item, index) => {
              const height = (item.marks / maxMarks) * chartHeight;
              const isLast = index === data.length - 1;

              return (
                <div key={item.month} className="flex flex-col items-center gap-1">
                  <div
                    className={`w-8 rounded-t transition-all duration-500 ${
                      item.marks >= 80
                        ? "bg-emerald-500"
                        : item.marks >= 70
                        ? "bg-blue-500"
                        : item.marks >= 60
                        ? "bg-amber-500"
                        : "bg-rose-500"
                    } hover:opacity-80 cursor-pointer`}
                    style={{
                      height: `${height}px`,
                      minHeight: "4px",
                    }}
                  >
                    <div className="relative group">
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 hidden group-hover:block bg-slate-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                        {item.marks}%
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-500">{item.month}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Legend */}
        <div className="mt-4 flex flex-wrap justify-center gap-4 border-t border-slate-100 pt-4">
          <div className="flex items-center gap-1">
            <div className="h-3 w-3 rounded bg-emerald-500" />
            <span className="text-xs text-slate-600">Excellent (80-100%)</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="h-3 w-3 rounded bg-blue-500" />
            <span className="text-xs text-slate-600">Good (70-79%)</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="h-3 w-3 rounded bg-amber-500" />
            <span className="text-xs text-slate-600">Average (60-69%)</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="h-3 w-3 rounded bg-rose-500" />
            <span className="text-xs text-slate-600">Needs Improvement (&lt;60%)</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}