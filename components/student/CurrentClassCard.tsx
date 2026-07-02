import { Clock, MapPin, User, ChevronRight } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CurrentClass } from "@/lib/dummy/student/timetable-data";

interface CurrentClassCardProps {
  currentClass: CurrentClass;
}

export function CurrentClassCard({ currentClass }: CurrentClassCardProps) {
  return (
    <Card className="border-l-4 border-l-blue-600 border-slate-200 shadow-sm">
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Badge className="bg-blue-600 text-white">Current Class</Badge>
              <span className="text-sm font-medium text-slate-500">
                {currentClass.time}
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              {currentClass.subject}
            </h3>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4 text-slate-400" />
                {currentClass.teacher}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-slate-400" />
                {currentClass.room}
              </span>
            </div>
            {currentClass.nextClass && (
              <p className="text-xs text-slate-500">
                Next: {currentClass.nextClass}
              </p>
            )}
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ChevronRight className="h-4 w-4 text-slate-400" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}