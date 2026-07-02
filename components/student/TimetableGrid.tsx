import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TimetableSlot, getColorClass } from "@/lib/dummy/student/timetable-data";

interface TimetableGridProps {
  timetable: Record<string, TimetableSlot[]>;
  daysOfWeek: string[];
  timeSlots: string[];
}

export function TimetableGrid({
  timetable,
  daysOfWeek,
  timeSlots,
}: TimetableGridProps) {
  // Check if a slot exists for a given day and time
  const getSlot = (day: string, time: string): TimetableSlot | undefined => {
    const daySlots = timetable[day] || [];
    return daySlots.find((slot) => slot.time === time);
  };

  // Check if a time slot is lunch break
  const isLunchBreak = (subject: string) => {
    return subject === "Lunch Break";
  };

  return (
    <Card className="border-slate-200 shadow-sm overflow-hidden">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">Weekly Schedule</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-slate-50">
                <th className="border border-slate-200 px-3 py-2 text-left font-medium text-slate-600">
                  Time / Day
                </th>
                {daysOfWeek.map((day) => (
                  <th
                    key={day}
                    className="border border-slate-200 px-3 py-2 text-center font-medium text-slate-600"
                  >
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {timeSlots.map((time) => (
                <tr key={time}>
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-600 whitespace-nowrap">
                    {time}
                  </td>
                  {daysOfWeek.map((day) => {
                    const slot = getSlot(day, time);
                    const isLunch = slot ? isLunchBreak(slot.subject) : false;

                    return (
                      <td
                        key={`${day}-${time}`}
                        className={`border border-slate-200 p-1 ${
                          isLunch ? "bg-slate-50" : ""
                        }`}
                      >
                        {slot ? (
                          <div
                            className={`rounded-lg p-2 ${
                              isLunch
                                ? "bg-gray-100"
                                : getColorClass(slot.color || "blue")
                            }`}
                          >
                            <div className="text-center">
                              <p className="text-xs font-semibold">
                                {slot.subject}
                              </p>
                              {!isLunch && (
                                <>
                                  <p className="mt-0.5 text-[10px] opacity-75">
                                    {slot.teacher}
                                  </p>
                                  <Badge
                                    variant="outline"
                                    className="mt-1 text-[8px] border-current opacity-75"
                                  >
                                    {slot.room}
                                  </Badge>
                                </>
                              )}
                            </div>
                          </div>
                        ) : (
                          <div className="p-2 text-center text-xs text-slate-300">
                            —
                          </div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}