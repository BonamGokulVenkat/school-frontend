"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Book, getCategoryColor, getAvailabilityStatus } from "@/lib/dummy/student/library-data";
import { Star, BookOpen, Calendar, Users, Info, Hash } from "lucide-react";

interface BookDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  book: Book | null;
  onBorrow: (id: string) => void;
}

export function BookDetailsModal({ isOpen, onClose, book, onBorrow }: BookDetailsModalProps) {
  if (!book) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-slate-900">
            Book Details
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Book Header */}
          <div className="flex gap-4">
            <Avatar className="h-32 w-24 rounded-md">
              <AvatarImage src={book.coverUrl} alt={book.title} />
              <AvatarFallback className="bg-blue-100 text-blue-600 text-xl">
                {book.title.split(" ").map((n) => n[0]).join("").slice(0, 2)}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-slate-900">{book.title}</h2>
              <p className="text-sm text-slate-500">by {book.author}</p>
              <div className="mt-2 flex flex-wrap items-center gap-2">
                <Badge className={getCategoryColor(book.categoryColor)}>
                  {book.category}
                </Badge>
                <Badge className={getAvailabilityStatus(book.available)}>
                  {book.available ? "Available" : "Unavailable"}
                </Badge>
                <div className="flex items-center gap-1 text-sm text-yellow-500">
                  <Star className="h-4 w-4 fill-current" />
                  <span>{book.rating}</span>
                </div>
              </div>
            </div>
          </div>

          <Separator />

          {/* Book Details Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <p className="text-xs font-medium text-slate-500">ISBN</p>
              <p className="text-sm text-slate-900">{book.isbn}</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs font-medium text-slate-500">Publisher</p>
              <p className="text-sm text-slate-900">{book.publisher}</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs font-medium text-slate-500">Publication Year</p>
              <p className="text-sm text-slate-900">{book.publicationYear}</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs font-medium text-slate-500">Pages</p>
              <p className="text-sm text-slate-900">{book.pages}</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs font-medium text-slate-500">Total Copies</p>
              <p className="text-sm text-slate-900">{book.copies}</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs font-medium text-slate-500">Available Copies</p>
              <p className="text-sm text-slate-900">{book.availableCopies}</p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-slate-700">Description</h4>
            <p className="mt-1 text-sm text-slate-600">{book.description}</p>
          </div>

          {book.tags && book.tags.length > 0 && (
            <div>
              <h4 className="text-sm font-medium text-slate-700">Tags</h4>
              <div className="mt-1 flex flex-wrap gap-1">
                {book.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {book.issuedTo && book.issuedTo.length > 0 && (
            <div className="rounded-lg bg-slate-50 p-3">
              <h4 className="text-sm font-medium text-slate-700">Currently Issued To</h4>
              <div className="mt-1 space-y-1">
                {book.issuedTo.map((issue, index) => (
                  <div key={index} className="text-sm text-slate-600">
                    {issue.studentName} (Due: {new Date(issue.dueDate).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })})
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-2 pt-2">
            {book.available ? (
              <Button
                className="flex-1 bg-blue-600 hover:bg-blue-700"
                onClick={() => {
                  onBorrow(book.id);
                  onClose();
                }}
              >
                Borrow This Book
              </Button>
            ) : (
              <Button className="flex-1" variant="secondary" disabled>
                Currently Unavailable
              </Button>
            )}
            <Button variant="outline" className="flex-1" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}