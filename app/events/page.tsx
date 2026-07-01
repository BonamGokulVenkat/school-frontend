import { SchoolHeader } from "@/components/school/SchoolHeader";
import { SchoolFooter } from "@/components/school/SchoolFooter";
import { PageHeading } from "@/components/school/PageHeading";
import { SectionTitle } from "@/components/school/SectionTitle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EventsList } from "./EventsList";
import { EventsCalendar } from "./EventsCalendar";
import { eventsData } from "@/lib/dummy/school/events-data";

export default function EventsPage() {
  // Sort events by date (upcoming first)
  const sortedEvents = [...eventsData.events].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  // Get upcoming events (status is 'open' or 'upcoming')
  const upcomingEvents = sortedEvents.filter(
    (event) => event.status === "open" || event.status === "upcoming"
  );

  // Get past events (status is 'completed' or 'closed')
  const pastEvents = sortedEvents.filter(
    (event) => event.status === "completed" || event.status === "closed"
  );

  return (
    <div className="flex min-h-screen flex-col bg-slate-50/50">
      <SchoolHeader />

      <main className="flex-1 py-12">
        <div className="container mx-auto max-w-5xl px-4">
          <PageHeading
            title="School Events & Calendar"
            description="Stay updated with all the exciting events, activities, and important dates at EduNexus School."
          />

          {/* Upcoming Events Highlight */}
          {upcomingEvents.length > 0 && (
            <section className="mb-12">
              <SectionTitle
                icon="📌"
                title="Upcoming Events"
                subtitle="Don't miss out on these upcoming events!"
              />
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {upcomingEvents.slice(0, 3).map((event) => (
                  <div key={event.id} className="flex items-start gap-3 rounded-lg border border-blue-100 bg-blue-50/30 p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <span className="text-sm font-bold">
                        {new Date(event.date).getDate()}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900">{event.title}</h4>
                      <p className="text-xs text-slate-500">{event.date} • {event.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Main Events Section with Tabs */}
          <section>
            <Tabs defaultValue="list" className="space-y-6">
              <div className="flex items-center justify-between">
                <TabsList>
                  <TabsTrigger value="list" className="flex items-center gap-2">
                    <span>📋</span> List View
                  </TabsTrigger>
                  <TabsTrigger value="calendar" className="flex items-center gap-2">
                    <span>📅</span> Calendar View
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="list">
                <EventsList initialEvents={sortedEvents} />
              </TabsContent>

              <TabsContent value="calendar">
                <EventsCalendar events={sortedEvents} />
              </TabsContent>
            </Tabs>
          </section>
        </div>
      </main>

      <SchoolFooter />
    </div>
  );
}