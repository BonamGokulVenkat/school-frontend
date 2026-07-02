import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, AlertCircle } from "lucide-react";
import { IssuedBook } from "@/lib/dummy/student/library-data";

interface IssuedBooksProps {
  books: IssuedBook[];
}

export function IssuedBooks({ books }: IssuedBooksProps) {
  const getStatusBadge = (status: string) => {
    const statusMap = {
      issued: "bg-blue-100 text-blue-700 border-blue-200",
      overdue: "bg-red-100 text-red-700 border-red-200",
      returned: "bg-green-100 text-green-700 border-green-200",
    };
    return statusMap[status as keyof typeof statusMap] || statusMap.issued;
  };

  const getDaysRemaining = (dueDate: string) => {
    const due = new Date(dueDate);
    const now = new Date();
    const diff = due.getTime() - now.getTime();
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return days;
  };

  return (
    <Card className="border-slate-200 shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">Currently Issued Books</CardTitle>
      </CardHeader>
      <CardContent>
        {books.length === 0 ? (
          <p className="text-center text-sm text-slate-500 py-8">
            No books currently issued
          </p>
        ) : (
          <div className="space-y-4">
            {books.map((book) => {
              const daysRemaining = getDaysRemaining(book.dueDate);
              const isOverdue = daysRemaining < 0;

              return (
                <div
                  key={book.id}
                  className="flex items-start gap-4 rounded-lg border border-slate-100 p-3 transition-colors hover:bg-slate-50"
                >
                  <Avatar className="h-16 w-16 rounded">
                    <AvatarImage src={book.bookCover} alt={book.bookTitle} />
                    <AvatarFallback className="bg-blue-100 text-blue-600">
                      {book.bookTitle.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-semibold text-slate-900 truncate">
                          {book.bookTitle}
                        </p>
                        <p className="text-sm text-slate-500">{book.bookAuthor}</p>
                      </div>
                      <Badge className={getStatusBadge(book.status)}>
                        {book.status.charAt(0).toUpperCase() + book.status.slice(1)}
                      </Badge>
                    </div>

                    <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        Issued: {new Date(book.issuedDate).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        Due: {new Date(book.dueDate).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </span>
                      {isOverdue ? (
                        <span className="flex items-center gap-1 text-red-600 font-medium">
                          <AlertCircle className="h-3 w-3" />
                          Overdue by {Math.abs(daysRemaining)} days
                        </span>
                      ) : (
                        <span className="text-slate-400">
                          {daysRemaining} days left
                        </span>
                      )}
                    </div>

                    {book.fine && (
                      <div className="mt-1 text-xs text-red-600 font-medium">
                        Fine: ₹{book.fine}
                      </div>
                    )}
                  </div>

                  <Button variant="outline" size="sm" className="shrink-0">
                    Renew
                  </Button>
                </div>
              );
            })}
          </div>
        )}
      </CardContent>
    </Card>
  );
}