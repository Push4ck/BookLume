import { useState, useEffect } from "react";
import { BookOpen } from "lucide-react";
import BookCard from "../components/BookCard";
import BookListItem from "../components/BookListItem";
import SearchFilters from "../components/SearchFilters";
import { books, categories } from "../data/booksData";
import {
  filterBooks,
  sortBooks,
  handleDownload,
  handleRead,
} from "../utils/filterBooks";

const BrowseBooksPage = ({ initialCategory = "All" }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("title");

  // Update selected category when initialCategory changes
  useEffect(() => {
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

  const filteredBooks = filterBooks(books, searchQuery, selectedCategory);
  const sortedBooks = sortBooks(filteredBooks, sortBy);

  return (
    <div className="min-h-screen bg-[var(--light-background)] dark:bg-[var(--dark-background)] pt-20">
      {/* Header */}
      <section className="py-12 bg-[var(--light-surface)] dark:bg-[var(--dark-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--light-text)] dark:text-[var(--dark-text)] mb-4">
              Browse Books
            </h1>
            <p className="text-xl text-[var(--light-text-secondary)] dark:text-[var(--dark-text-secondary)] max-w-3xl mx-auto">
              Discover your next favorite book from our extensive collection of{" "}
              {books.length} carefully curated titles.
            </p>
          </div>

          {/* Search and Filters */}
          <SearchFilters
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            sortBy={sortBy}
            setSortBy={setSortBy}
            viewMode={viewMode}
            setViewMode={setViewMode}
            categories={categories}
            // resultsCount={sortedBooks.length}
            // totalCount={books.length}
          />
        </div>
      </section>

      {/* Books Grid/List */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {sortedBooks.length === 0 ? (
            <div className="text-center py-12">
              <BookOpen className="h-16 w-16 text-[var(--light-text-muted)] dark:text-[var(--dark-text-muted)] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[var(--light-text)] dark:text-[var(--dark-text)] mb-2">
                No books found
              </h3>
              <p className="text-[var(--light-text-secondary)] dark:text-[var(--dark-text-secondary)]">
                Try adjusting your search criteria or browse all categories.
              </p>
            </div>
          ) : viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sortedBooks.map((book) => (
                <BookCard
                  key={book.id}
                  book={book}
                  onDownload={handleDownload}
                  onRead={handleRead}
                />
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {sortedBooks.map((book) => (
                <BookListItem
                  key={book.id}
                  book={book}
                  onDownload={handleDownload}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BrowseBooksPage;
