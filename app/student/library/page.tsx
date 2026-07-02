"use client";

import { useState, useMemo } from "react";

import { LibraryStats } from "@/components/student/LibraryStats";
import { IssuedBooks } from "@/components/student/IssuedBooks";
import { BookFilters } from "@/components/student/BookFilters";
import { BookCard } from "@/components/student/BookCard";
import { BookDetailsModal } from "@/components/student/BookDetailsModal";
import { libraryData } from "@/lib/dummy/student/library-data";

export default function LibraryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [availabilityFilter, setAvailabilityFilter] = useState("all");
  const [sortBy, setSortBy] = useState("relevance");
  const [selectedBook, setSelectedBook] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { stats, books, issuedBooks, categories, filters } = libraryData;

  // Count active filters
  const activeFilters = [
    categoryFilter !== "all",
    availabilityFilter !== "all",
  ].filter(Boolean).length;

  // Filter and sort books
  const filteredBooks = useMemo(() => {
    const filtered = books.filter((book) => {
      const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.isbn.includes(searchQuery);

      const matchesCategory = categoryFilter === "all" || 
        book.category.toLowerCase().replace(/\s+/g, '-') === categoryFilter;

      const matchesAvailability = availabilityFilter === "all" || 
        (availabilityFilter === "available" && book.available) ||
        (availabilityFilter === "unavailable" && !book.available);

      return matchesSearch && matchesCategory && matchesAvailability;
    });

    // Sort
    switch (sortBy) {
      case "title":
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "author":
        filtered.sort((a, b) => a.author.localeCompare(b.author));
        break;
      case "year":
        filtered.sort((a, b) => b.publicationYear - a.publicationYear);
        break;
      default:
        // Relevance - keep original order
        break;
    }

    return filtered;
  }, [books, searchQuery, categoryFilter, availabilityFilter, sortBy]);

  const handleViewDetails = (id: string) => {
    setSelectedBook(id);
    setIsModalOpen(true);
  };

  const handleBorrow = (id: string) => {
    console.log("Borrowing book:", id);
    // In a real app, this would call an API
  };

  const clearFilters = () => {
    setCategoryFilter("all");
    setAvailabilityFilter("all");
    setSearchQuery("");
    setSortBy("relevance");
  };

  const selectedBookData = books.find((b) => b.id === selectedBook);

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">School Library</h1>
        <p className="text-sm text-slate-500">
          Browse, search, and borrow books from the school library
        </p>
      </div>

      {/* Stats */}
      <LibraryStats stats={stats} />

      {/* Issued Books */}
      <IssuedBooks books={issuedBooks} />

      {/* Filters */}
      <BookFilters
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        categoryFilter={categoryFilter}
        onCategoryChange={setCategoryFilter}
        availabilityFilter={availabilityFilter}
        onAvailabilityChange={setAvailabilityFilter}
        sortBy={sortBy}
        onSortChange={setSortBy}
        categories={categories}
        availabilityOptions={filters.availability}
        sortOptions={filters.sortBy}
        activeFilters={activeFilters}
        onClearFilters={clearFilters}
      />

      {/* Books Grid */}
      {filteredBooks.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-300 bg-white py-16 text-center">
          <p className="text-lg font-medium text-slate-500">No books found</p>
          <p className="text-sm text-slate-400">Try adjusting your search or filters</p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredBooks.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              onViewDetails={handleViewDetails}
              onBorrow={handleBorrow}
            />
          ))}
        </div>
      )}

      {/* Book Details Modal */}
      <BookDetailsModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedBook(null);
        }}
        book={selectedBookData || null}
        onBorrow={handleBorrow}
      />
    </div>
  );
}