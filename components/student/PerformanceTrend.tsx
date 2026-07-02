"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PerformanceTrend as PerformanceTrendType } from "@/lib/dummy/student/results-data";

interface PerformanceTrendProps {
  trends: PerformanceTrendType[];
}

export function PerformanceTrend({ trends }: PerformanceTrendProps) {
  const getMaxMarks = (data: { term: string; marks: number }[]) => {
    return Math.max(...data.map((d) => d.marks), 100);
  };

  return (
    <Card className="border-slate-200 shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">Performance Trends</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue={trends[0]?.id || ""} className="w-full">
          <TabsList className="mb-4 flex flex-wrap gap-1">
            {trends.map((trend) => (
              <TabsTrigger
                key={trend.id}
                value={trend.id}
                className="text-xs data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700"
              >
                {trend.subject}
              </TabsTrigger>
            ))}
          </TabsList>

          {trends.map((trend) => {
            const maxMarks = getMaxMarks(trend.data);
            return (
              <TabsContent key={trend.id} value={trend.id}>
                <div className="space-y-4">
                  {/* Trend Bars */}
                  <div className="flex h-32 items-end gap-4">
                    {trend.data.map((item, index) => (
                      <div
                        key={index}
                        className="flex flex-1 flex-col items-center gap-2"
                      >
                        <div className="relative w-full">
                          <div
                            className={`w-full rounded-t transition-all duration-500 ${
                              item.marks >= 80
                                ? "bg-green-500"
                                : item.marks >= 70
                                ? "bg-yellow-500"
                                : "bg-red-500"
                            }`}
                            style={{
                              height: `${(item.marks / maxMarks) * 100}%`,
                              minHeight: "16px",
                            }}
                          >
                            <div className="flex h-full items-center justify-center text-xs font-bold text-white">
                              {item.marks}%
                            </div>
                          </div>
                        </div>
                        <span className="text-xs font-medium text-slate-600">
                          {item.term}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Trend Info */}
                  <div className="rounded-lg bg-slate-50 p-3">
                    <div className="grid grid-cols-3 gap-4 text-center text-xs">
                      <div>
                        <p className="text-slate-500">Starting</p>
                        <p className="font-semibold text-slate-900">
                          {trend.data[0]?.marks || 0}%
                        </p>
                      </div>
                      <div>
                        <p className="text-slate-500">Current</p>
                        <p className="font-semibold text-slate-900">
                          {trend.data[trend.data.length - 1]?.marks || 0}%
                        </p>
                      </div>
                      <div>
                        <p className="text-slate-500">Improvement</p>
                        <p
                          className={`font-semibold ${
                            (trend.data[trend.data.length - 1]?.marks || 0) -
                              (trend.data[0]?.marks || 0) >=
                            0
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {((trend.data[trend.data.length - 1]?.marks || 0) -
                            (trend.data[0]?.marks || 0)) > 0
                            ? "+"
                            : ""}
                          {(trend.data[trend.data.length - 1]?.marks || 0) -
                            (trend.data[0]?.marks || 0)}
                          %
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </CardContent>
    </Card>
  );
}