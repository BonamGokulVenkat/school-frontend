import { Mail, Phone, MapPin, Clock, Building, ExternalLink } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { contactData } from "@/lib/dummy/school/contact-data";

export function ContactInfo() {
  return (
    <div className="space-y-6">
      {/* Address Card */}
      <Card className="border-slate-200 shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <MapPin className="h-5 w-5 text-blue-600" />
            <span>School Address</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <address className="not-italic space-y-1 text-sm text-slate-600">
            <p>{contactData.address.street}</p>
            <p>{contactData.address.locality}</p>
            <p>
              {contactData.address.city}, {contactData.address.state}
            </p>
            <p>{contactData.address.pincode}</p>
          </address>
          <div className="mt-4 flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-slate-400" />
              <span className="text-slate-600">{contactData.phone}</span>
            </div>
            <Separator orientation="vertical" className="h-5" />
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-slate-400" />
              <span className="text-slate-600">{contactData.email}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Department Cards */}
      <div>
        <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-slate-900">
          <Building className="h-5 w-5 text-blue-600" />
          <span>Department Contacts</span>
        </h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {contactData.departments.map((dept) => (
            <Card key={dept.id} className="border-slate-200 shadow-sm">
              <CardContent className="p-4">
                <h4 className="font-semibold text-slate-900">{dept.name}</h4>
                <p className="mt-1 text-xs text-slate-500">{dept.description}</p>
                <div className="mt-3 space-y-1 text-sm">
                  <div className="flex items-center gap-2">
                    <Mail className="h-3.5 w-3.5 text-slate-400" />
                    <span className="text-blue-600">{dept.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-3.5 w-3.5 text-slate-400" />
                    <span className="text-slate-600">{dept.phone}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Working Hours */}
      <Card className="border-slate-200 shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Clock className="h-5 w-5 text-blue-600" />
            <span>Working Hours</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between border-b border-slate-100 pb-2">
              <span className="text-slate-600">Monday - Friday</span>
              <span className="font-medium text-slate-900">
                {contactData.workingHours.weekdays}
              </span>
            </div>
            <div className="flex justify-between border-b border-slate-100 pb-2">
              <span className="text-slate-600">Saturday</span>
              <span className="font-medium text-slate-900">
                {contactData.workingHours.saturday}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Sunday</span>
              <Badge variant="outline" className="text-slate-400">
                {contactData.workingHours.sunday}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}