import { useState } from "react";
import {
  Search,
  Filter,
  BarChart3,
  BookOpen,
  TrendingUp,
  Users,
} from "lucide-react";
import CategoryCard from "../components/CategoryCard";
import { books, categories } from "../data/booksData";
import { getCategoryStats } from "../utils/filterBooks";

const CategoriesPage = ({ onCategorySelect }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("books");

  // Get category statistics
  const categoryStats = getCategoryStats(books);

  // Filter out "All" category for display
  const displayCategories = categories.filter((cat) => cat !== "All");

  // Filter categories based on search
  const filteredCategories = displayCategories.filter((category) =>
    category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort categories
  const sortedCategories = [...filteredCategories].sort((a, b) => {
    const statsA = categoryStats[a];
    const statsB = categoryStats[b];

    switch (sortBy) {
      case "books":
        return statsB.count - statsA.count;
      case "downloads":
        return statsB.totalDownloads - statsA.totalDownloads;
      case "name":
        return a.localeCompare(b);
      default:
        return 0;
    }
  });

  const handleCategoryClick = (category) => {
    if (onCategorySelect) {
      onCategorySelect(category);
    }
  };

  // Calculate total stats
  const totalBooks = books.length;
  const totalDownloads = books.reduce(
    (sum, book) => sum + parseFloat(book.downloads.replace("K", "")),
    0
  );
  const totalCategories = displayCategories.length;

  return (
    <div className="min-h-screen bg-[var(--light-background)] dark:bg-[var(--dark-background)] pt-20">
      {/* Header */}
      <section className="py-12 bg-[var(--light-surface)] dark:bg-[var(--dark-surface)]">
        <div className="max-w-7xl mx-auto px-4 xs:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--light-text)] dark:text-[var(--dark-text)] mb-4">
              Book Categories
            </h1>
            <p className="text-xl text-[var(--light-text-secondary)] dark:text-[var(--dark-text-secondary)] max-w-3xl mx-auto">
              Explore our diverse collection organized by categories. Find
              exactly what you're looking for.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-[var(--light-background)] dark:bg-[var(--dark-background)] rounded-xl p-6 border border-[var(--light-border)] dark:border-[var(--dark-border)]">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-[var(--primary-brand)]/10 rounded-lg">
                  <BookOpen className="h-6 w-6 text-[var(--primary-brand)]" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-[var(--light-text)] dark:text-[var(--dark-text)]">
                    {totalBooks}
                  </p>
                  <p className="text-sm text-[var(--light-text-secondary)] dark:text-[var(--dark-text-secondary)]">
                    Total Books
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[var(--light-background)] dark:bg-[var(--dark-background)] rounded-xl p-6 border border-[var(--light-border)] dark:border-[var(--dark-border)]">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-[var(--success)]/10 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-[var(--success)]" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-[var(--light-text)] dark:text-[var(--dark-text)]">
                    {totalDownloads.toFixed(1)}K
                  </p>
                  <p className="text-sm text-[var(--light-text-secondary)] dark:text-[var(--dark-text-secondary)]">
                    Total Downloads
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[var(--light-background)] dark:bg-[var(--dark-background)] rounded-xl p-6 border border-[var(--light-border)] dark:border-[var(--dark-border)]">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-[var(--warning)]/10 rounded-lg">
                  <BarChart3 className="h-6 w-6 text-[var(--warning)]" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-[var(--light-text)] dark:text-[var(--dark-text)]">
                    {totalCategories}
                  </p>
                  <p className="text-sm text-[var(--light-text-secondary)] dark:text-[var(--dark-text-secondary)]">
                    Categories
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search Bar */}
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[var(--light-text-muted)] dark:text-[var(--dark-text-muted)]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search categories..."
                  className="w-full pl-12 pr-4 py-3 bg-[var(--light-background)] dark:bg-[var(--dark-background)] border border-[var(--light-border)] dark:border-[var(--dark-border)] rounded-xl text-[var(--light-text)] dark:text-[var(--dark-text)] placeholder-[var(--light-text-muted)] dark:placeholder-[var(--dark-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-brand)] focus:border-transparent transition-all duration-200"
                />
              </div>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-[var(--light-background)] dark:bg-[var(--dark-background)] border border-[var(--light-border)] dark:border-[var(--dark-border)] rounded-xl text-[var(--light-text)] dark:text-[var(--dark-text)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-brand)] focus:border-transparent transition-all duration-200"
              >
                <option value="books">Sort by Book Count</option>
                <option value="downloads">Sort by Downloads</option>
                <option value="name">Sort by Name</option>
              </select>
            </div>

            {/* Results Count */}
            {/* <div className="text-center text-[var(--light-text-secondary)] dark:text-[var(--dark-text-secondary)] mt-6">
              Showing {sortedCategories.length} of {totalCategories} categories
              {searchQuery && ` matching "${searchQuery}"`}
            </div> */}
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 xs:px-6 lg:px-8">
          {sortedCategories.length === 0 ? (
            <div className="text-center py-12">
              <BarChart3 className="h-16 w-16 text-[var(--light-text-muted)] dark:text-[var(--dark-text-muted)] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[var(--light-text)] dark:text-[var(--dark-text)] mb-2">
                No categories found
              </h3>
              <p className="text-[var(--light-text-secondary)] dark:text-[var(--dark-text-secondary)]">
                Try adjusting your search criteria.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedCategories.map((category) => (
                <CategoryCard
                  key={category}
                  category={category}
                  stats={categoryStats[category]}
                  onCategoryClick={handleCategoryClick}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CategoriesPage;
