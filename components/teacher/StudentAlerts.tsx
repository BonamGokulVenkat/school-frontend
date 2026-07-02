import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StudentAlert, getAlertColor, getAlertIcon } from "@/lib/dummy/teacher/teacher-dashboard-data";

interface StudentAlertsProps {
  alerts: StudentAlert[];
}

export function StudentAlerts({ alerts }: StudentAlertsProps) {
  return (
    <Card className="border-slate-200 shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <span>⚠️</span>
          <span>Student Alerts</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className={`rounded-lg border p-3 ${getAlertColor(alert.type)}`}
          >
            <div className="flex items-start gap-2">
              <span>{getAlertIcon(alert.type)}</span>
              <div className="flex-1">
                <p className="text-sm font-medium">{alert.message}</p>
                <div className="mt-1 flex flex-wrap items-center gap-2 text-xs">
                  {alert.studentName && (
                    <span className="opacity-75">Student: {alert.studentName}</span>
                  )}
                  {alert.class && (
                    <Badge variant="outline" className="border-current text-xs">
                      {alert.class}
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}