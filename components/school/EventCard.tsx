import Link from "next/link";
import { Calendar, MapPin, Users, Clock, ChevronRight } from "lucide-react";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Event } from "@/lib/dummy/school/events-data";

interface EventCardProps {
  event: Event;
  variant?: "default" | "compact";
}

const statusColors = {
  open: "bg-green-100 text-green-700 border-green-200",
  upcoming: "bg-blue-100 text-blue-700 border-blue-200",
  closed: "bg-red-100 text-red-700 border-red-200",
  completed: "bg-gray-100 text-gray-700 border-gray-200",
};

const typeColors = {
  academic: "bg-blue-100 text-blue-700 border-blue-200",
  sports: "bg-green-100 text-green-700 border-green-200",
  cultural: "bg-purple-100 text-purple-700 border-purple-200",
  important: "bg-red-100 text-red-700 border-red-200",
};

export function EventCard({ event, variant = "default" }: EventCardProps) {
  const isCompact = variant === "compact";
  const registrationProgress = event.capacity > 0 
    ? Math.round((event.registered / event.capacity) * 100) 
    : 0;

  return (
    <Card className={`border-slate-200 shadow-sm transition-shadow hover:shadow-md ${isCompact ? "p-3" : ""}`}>
      <CardHeader className={isCompact ? "p-3 pb-2" : "p-5 pb-3"}>
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <Badge 
              variant="outline" 
              className={`${typeColors[event.type]} border-current`}
            >
              {event.category}
            </Badge>
            <Badge 
              variant="outline" 
              className={`${statusColors[event.status]} border-current`}
            >
              {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
            </Badge>
          </div>
          {!isCompact && (
            <div className="flex items-center gap-1 text-xs font-medium text-slate-500">
              <Calendar className="h-3 w-3" />
              <span>{new Date(event.date).toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric', 
                year: 'numeric' 
              })}</span>
            </div>
          )}
        </div>
        
        <CardTitle className={`${isCompact ? "text-base" : "text-lg"} font-bold text-slate-900 mt-2`}>
          {event.title}
        </CardTitle>
        
        {!isCompact && (
          <p className="mt-1 text-sm text-slate-600">{event.description}</p>
        )}
      </CardHeader>

      <CardContent className={isCompact ? "p-3 pt-0" : "p-5 pt-0"}>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-slate-600">
            <Calendar className="h-4 w-4 text-slate-400" />
            <span>{event.date}</span>
            <span className="text-slate-300">•</span>
            <Clock className="h-4 w-4 text-slate-400" />
            <span>{event.time}</span>
          </div>
          
          <div className="flex items-center gap-2 text-slate-600">
            <MapPin className="h-4 w-4 text-slate-400" />
            <span>{event.location}</span>
          </div>
          
          {event.organizer && (
            <div className="flex items-center gap-2 text-slate-600">
              <Users className="h-4 w-4 text-slate-400" />
              <span>Organized by: {event.organizer}</span>
            </div>
          )}
          
          {event.capacity > 0 && (
            <div className="mt-2">
              <div className="flex justify-between text-xs text-slate-500">
                <span>Registration: {event.registered} / {event.capacity}</span>
                <span>{registrationProgress}%</span>
              </div>
              <Progress value={registrationProgress} className="h-1.5" />
            </div>
          )}
          
          {event.events && event.events.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1">
              {event.events.slice(0, 3).map((item, idx) => (
                <Badge key={idx} variant="secondary" className="text-[10px] bg-slate-100">
                  {item}
                </Badge>
              ))}
              {event.events.length > 3 && (
                <Badge variant="secondary" className="text-[10px] bg-slate-100">
                  +{event.events.length - 3} more
                </Badge>
              )}
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className={isCompact ? "p-3 pt-2" : "p-5 pt-3"}>
        <div className="flex w-full gap-2">
          {event.registrationLink && event.status !== "completed" && (
            <Button 
              size={isCompact ? "sm" : "default"} 
              className="flex-1 bg-blue-600 hover:bg-blue-700"
              asChild
            >
              <Link href={event.registrationLink}>
                {event.status === "open" ? "Register Now" : "View Details"}
              </Link>
            </Button>
          )}
          <Button 
            variant="outline" 
            size={isCompact ? "sm" : "default"}
            className="flex-1"
            asChild
          >
            <Link href={`/events/${event.id}`}>
              Learn More <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}