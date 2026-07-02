import { AlertCircle, CheckCircle, Info } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "../ui/badge";

interface Alert {
  id: string;
  subject: string;
  message: string;
  percentage: number;
}

interface AttendanceAlertProps {
  warnings: Alert[];
  good: Alert[];
}

export function AttendanceAlert({ warnings, good }: AttendanceAlertProps) {
  return (
    <Card className="border-slate-200 shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">
          Attendance Alerts
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Warnings */}
        {warnings.length > 0 && (
          <div className="space-y-2">
            <p className="text-sm font-medium text-red-600 flex items-center gap-2">
              <AlertCircle className="h-4 w-4" />
              Need Attention
            </p>
            {warnings.map((alert) => (
              <div
                key={alert.id}
                className="rounded-lg border border-red-200 bg-red-50 p-3"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-red-800">
                      {alert.subject}
                    </p>
                    <p className="text-xs text-red-600">{alert.message}</p>
                  </div>
                  <Badge variant="destructive" className="text-xs">
                    {alert.percentage}%
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Good Performance */}
        {good.length > 0 && (
          <div className="space-y-2">
            <p className="text-sm font-medium text-green-600 flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              Excellent Performance
            </p>
            {good.map((alert) => (
              <div
                key={alert.id}
                className="rounded-lg border border-green-200 bg-green-50 p-3"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-green-800">
                      {alert.subject}
                    </p>
                    <p className="text-xs text-green-600">{alert.message}</p>
                  </div>
                  <Badge className="bg-green-600 text-xs text-white">
                    {alert.percentage}%
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Action Button */}
        <div className="flex gap-2 pt-2">
          <Button variant="outline" size="sm" className="text-xs">
            <Info className="mr-1 h-3 w-3" />
            View Details
          </Button>
          <Button variant="outline" size="sm" className="text-xs">
            Contact Teacher
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}