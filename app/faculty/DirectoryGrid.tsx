"use client";

import { useState } from "react";
import { Search, Mail, Phone, Briefcase, BookOpen, UserCheck } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { facultyData } from "@/lib/dummy/school/faculty-data";

export function DirectoryGrid() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredFaculty = facultyData.faculty.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.designation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.expertise.some((exp) =>
        exp.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesCategory =
      activeCategory === "all" || member.section === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      {/* Search & Filters */}
      <div className="mb-10 flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <div className="relative max-w-md flex-1">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
          <Input
            placeholder="Search by name, role, or subject area..."
            className="border-slate-200 pl-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {facultyData.categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category.id)}
              className={`text-xs ${
                activeCategory === category.id
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "border-slate-200"
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Empty State */}
      {filteredFaculty.length === 0 && (
        <div className="rounded-xl border border-dashed border-slate-300 bg-white py-16 text-center">
          <p className="font-medium text-slate-500">
            No team or faculty members match your criteria.
          </p>
          <Button
            variant="link"
            onClick={() => {
              setSearchQuery("");
              setActiveCategory("all");
            }}
            className="mt-1 text-xs text-blue-600"
          >
            Clear Filters
          </Button>
        </div>
      )}

      {/* Faculty Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredFaculty.map((member) => (
          <Card
            key={member.id}
            className="flex flex-col justify-between border-slate-200 shadow-sm transition-shadow hover:shadow-md"
          >
            <CardHeader className="pb-4 text-center">
              <Avatar className="mx-auto mb-3 h-20 w-20 border-2 border-slate-100">
                <AvatarImage src={member.image} alt={member.name} className="object-cover" />
                <AvatarFallback className="bg-slate-100 font-bold text-slate-700">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>

              <CardTitle className="text-base font-bold text-slate-900">{member.name}</CardTitle>
              <p className="mt-0.5 text-xs text-slate-500">{member.designation}</p>

              <div className="mt-2 flex flex-wrap justify-center gap-1">
                {member.expertise.slice(0, 2).map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-slate-100 px-2 text-[10px] font-medium text-slate-600"
                  >
                    {skill}
                  </Badge>
                ))}
                {member.expertise.length > 2 && (
                  <Badge
                    variant="secondary"
                    className="bg-slate-100 px-1.5 text-[10px] font-medium text-slate-600"
                  >
                    +{member.expertise.length - 2}
                  </Badge>
                )}
              </div>
            </CardHeader>

            <CardContent className="px-5 pt-0 text-center">
              <Separator className="mb-3 bg-slate-100" />
              <div className="flex flex-col items-center gap-1.5 text-xs text-slate-600">
                <div className="flex items-center gap-1.5">
                  <Mail className="h-3.5 w-3.5 text-slate-400" />
                  <span className="max-w-[200px] truncate">{member.email}</span>
                </div>
              </div>
            </CardContent>

            <CardFooter className="rounded-b-lg border-t border-slate-50 bg-slate-50/50 p-3">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-slate-200 text-xs font-semibold hover:bg-blue-50 hover:text-blue-600"
                  >
                    View Profile Details
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader className="items-center text-center">
                    <Avatar className="mb-2 h-24 w-24 border-2 border-slate-100">
                      <AvatarImage src={member.image} alt={member.name} className="object-cover" />
                      <AvatarFallback className="bg-slate-100 font-bold text-slate-700">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <DialogTitle className="text-xl font-bold text-slate-900">
                      {member.name}
                    </DialogTitle>
                    <DialogDescription className="mt-1 rounded border border-blue-100 bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-600">
                      {member.designation}
                    </DialogDescription>
                  </DialogHeader>

                  <Separator className="my-2" />

                  <div className="space-y-4 text-sm text-slate-700">
                    <div className="flex items-start gap-2.5">
                      <UserCheck className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                      <div>
                        <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                          Qualifications
                        </span>
                        <span className="font-medium text-slate-800">
                          {member.qualification}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <Briefcase className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                      <div>
                        <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                          Teaching Experience
                        </span>
                        <span className="font-medium text-slate-800">
                          {member.experience}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                      <div>
                        <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                          Scope of Expertise
                        </span>
                        <div className="mt-1 flex flex-wrap gap-1">
                          {member.expertise.map((item, idx) => (
                            <Badge
                              key={idx}
                              variant="outline"
                              className="border-slate-200 text-xs text-slate-700"
                            >
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <Separator className="my-2" />

                    <div className="grid grid-cols-2 gap-2 rounded-lg border border-slate-100 bg-slate-50 p-3 pt-2 text-xs">
                      <div className="flex items-center gap-1.5 text-slate-600">
                        <Mail className="h-3.5 w-3.5 shrink-0 text-slate-400" />
                        <span className="truncate">{member.email}</span>
                      </div>
                      <div className="flex items-center justify-end gap-1.5 text-slate-600">
                        <Phone className="h-3.5 w-3.5 shrink-0 text-slate-400" />
                        <span>{member.phone}</span>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}