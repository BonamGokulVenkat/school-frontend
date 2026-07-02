import { useState } from "react";
import { Star, BookOpen, Users, Calendar, ChevronRight } from "lucide-react";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Book,
  getCategoryColor,
  getAvailabilityStatus,
} from "@/lib/dummy/student/library-data";

interface BookCardProps {
  book: Book;
  onViewDetails: (id: string) => void;
  onBorrow: (id: string) => void;
}

export function BookCard({ book, onViewDetails, onBorrow }: BookCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="border-slate-200 shadow-sm transition-all hover:shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader className="p-4 pb-2">
        <div className="flex items-start gap-3">
          <Avatar className="h-20 w-16 rounded-md">
            <AvatarImage src={book.coverUrl} alt={book.title} />
            <AvatarFallback className="bg-blue-100 text-blue-600 text-xs">
              {book.title.split(" ").map((n) => n[0]).join("").slice(0, 2)}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-semibold text-slate-900 truncate">
                {book.title}
              </h3>
              <Badge className={getAvailabilityStatus(book.available)}>
                {book.available ? "Available" : "Unavailable"}
              </Badge>
            </div>
            <p className="text-sm text-slate-500">{book.author}</p>
            <div className="mt-1 flex flex-wrap items-center gap-2">
              <Badge className={getCategoryColor(book.categoryColor)}>
                {book.category}
              </Badge>
              <div className="flex items-center gap-1 text-xs text-yellow-500">
                <Star className="h-3 w-3 fill-current" />
                <span>{book.rating}</span>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-4 pt-2">
        <p className="line-clamp-2 text-sm text-slate-600">
          {book.description}
        </p>
        <div className="mt-2 flex flex-wrap gap-3 text-xs text-slate-500">
          <span className="flex items-center gap-1">
            <BookOpen className="h-3 w-3" />
            {book.pages} pages
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {book.publicationYear}
          </span>
          <span className="flex items-center gap-1">
            <Users className="h-3 w-3" />
            {book.availableCopies} of {book.copies} copies
          </span>
        </div>
        {book.tags && book.tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {book.tags.slice(0, 3).map((tag, index) => (
              <Badge key={index} variant="secondary" className="text-[10px]">
                {tag}
              </Badge>
            ))}
            {book.tags.length > 3 && (
              <Badge variant="secondary" className="text-[10px]">
                +{book.tags.length - 3}
              </Badge>
            )}
          </div>
        )}
      </CardContent>

      <CardFooter className="flex gap-2 p-4 pt-0">
        <Button
          variant="outline"
          size="sm"
          className="flex-1"
          onClick={() => onViewDetails(book.id)}
        >
          Details <ChevronRight className="ml-1 h-3 w-3" />
        </Button>
        {book.available ? (
          <Button
            size="sm"
            className="flex-1 bg-blue-600 hover:bg-blue-700"
            onClick={() => onBorrow(book.id)}
          >
            Borrow
          </Button>
        ) : (
          <Button
            variant="secondary"
            size="sm"
            className="flex-1"
            disabled
          >
            Unavailable
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}