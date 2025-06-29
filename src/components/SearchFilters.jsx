import { Search, Grid, List } from "lucide-react";

const SearchFilters = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  sortBy,
  setSortBy,
  viewMode,
  setViewMode,
  categories,
  //   resultsCount,
  //   totalCount,
}) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        {/* Search Bar */}
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[var(--light-text-muted)] dark:text-[var(--dark-text-muted)]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search books, authors, or tags..."
            className="w-full pl-12 pr-4 py-3 bg-[var(--light-background)] dark:bg-[var(--dark-background)] border border-[var(--light-border)] dark:border-[var(--dark-border)] rounded-xl text-[var(--light-text)] dark:text-[var(--dark-text)] placeholder-[var(--light-text-muted)] dark:placeholder-[var(--dark-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-brand)] focus:border-transparent transition-all duration-200"
          />
        </div>

        {/* Category Filter */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-3 bg-[var(--light-background)] dark:bg-[var(--dark-background)] border border-[var(--light-border)] dark:border-[var(--dark-border)] rounded-xl text-[var(--light-text)] dark:text-[var(--dark-text)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-brand)] focus:border-transparent transition-all duration-200"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        {/* Sort */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-3 bg-[var(--light-background)] dark:bg-[var(--dark-background)] border border-[var(--light-border)] dark:border-[var(--dark-border)] rounded-xl text-[var(--light-text)] dark:text-[var(--dark-text)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-brand)] focus:border-transparent transition-all duration-200"
        >
          <option value="title">Sort by Title</option>
          <option value="author">Sort by Author</option>
          <option value="rating">Sort by Rating</option>
          <option value="downloads">Sort by Downloads</option>
          <option value="year">Sort by Year</option>
        </select>

        {/* View Mode Toggle */}
        <div className="flex bg-[var(--light-background)] dark:bg-[var(--dark-background)] border border-[var(--light-border)] dark:border-[var(--dark-border)] rounded-xl overflow-hidden xs:hidden lg:block">
          <button
            onClick={() => setViewMode("grid")}
            className={`p-3 transition-colors duration-200 ${
              viewMode === "grid"
                ? "bg-[var(--primary-brand)] text-white"
                : "text-[var(--light-text)] dark:text-[var(--dark-text)] hover:bg-[var(--light-surface)] dark:hover:bg-[var(--dark-surface)]"
            }`}
          >
            <Grid className="h-5 w-5" />
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`p-3 transition-colors duration-200 ${
              viewMode === "list"
                ? "bg-[var(--primary-brand)] text-white"
                : "text-[var(--light-text)] dark:text-[var(--dark-text)] hover:bg-[var(--light-surface)] dark:hover:bg-[var(--dark-surface)]"
            }`}
          >
            <List className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Results Count */}
      <div className="text-center text-[var(--light-text-secondary)] dark:text-[var(--dark-text-secondary)] mb-8">
        {/* Showing {resultsCount} of {totalCount} books */}
        {selectedCategory !== "All" && ` in ${selectedCategory}`}
        {searchQuery && ` matching "${searchQuery}"`}
      </div>
    </div>
  );
};

export default SearchFilters;
