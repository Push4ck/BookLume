import {
  BookOpen,
  ArrowRight,
  TrendingUp,
  Star,
  Users,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

const CategoryCard = ({ category, stats, onCategoryClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { count, totalDownloads, books } = stats;
  const popularBooks = books.slice(0, 3);

  const getCategoryIcon = (categoryName) => {
    const icons = {
      "Self-Help": "💡",
      Science: "🔬",
      Education: "🎓",
      Communication: "💬",
      Spirituality: "🧘",
      Philosophy: "🤔",
      Finance: "💰",
      Literature: "📚",
    };
    return icons[categoryName] || "📖";
  };

  const getCategoryGradient = (categoryName) => {
    const gradients = {
      "Self-Help": "from-blue-500 via-purple-500 to-indigo-600",
      Science: "from-green-500 via-teal-500 to-emerald-600",
      Education: "from-orange-500 via-red-500 to-pink-600",
      Communication: "from-pink-500 via-rose-500 to-red-600",
      Spirituality: "from-indigo-500 via-violet-500 to-purple-600",
      Philosophy: "from-yellow-500 via-amber-500 to-orange-600",
      Finance: "from-emerald-500 via-green-500 to-teal-600",
      Literature: "from-cyan-500 via-blue-500 to-indigo-600",
    };
    return gradients[categoryName] || "from-gray-500 via-slate-500 to-gray-600";
  };

  const getCategoryAccent = (categoryName) => {
    const accents = {
      "Self-Help": "text-blue-400",
      Science: "text-green-400",
      Education: "text-orange-400",
      Communication: "text-pink-400",
      Spirituality: "text-indigo-400",
      Philosophy: "text-yellow-400",
      Finance: "text-emerald-400",
      Literature: "text-cyan-400",
    };
    return accents[categoryName] || "text-gray-400";
  };

  return (
    <div
      onClick={() => onCategoryClick(category)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group cursor-pointer bg-white dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 hover:border-transparent transition-all duration-500 hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-black/30 hover:-translate-y-3 overflow-hidden relative"
    >
      {/* Animated Background Gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${getCategoryGradient(
          category
        )} opacity-0 group-hover:opacity-5 transition-all duration-500`}
      ></div>

      {/* Floating Sparkles Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Sparkles
          className={`absolute top-4 right-4 h-4 w-4 ${getCategoryAccent(
            category
          )} opacity-0 group-hover:opacity-70 transition-all duration-700 transform group-hover:rotate-12`}
        />
        <Sparkles
          className={`absolute bottom-6 left-6 h-3 w-3 ${getCategoryAccent(
            category
          )} opacity-0 group-hover:opacity-50 transition-all duration-1000 delay-200 transform group-hover:-rotate-12`}
        />
      </div>

      {/* Header Section */}
      <div className="p-8 relative">
        <div className="flex items-start justify-between mb-6">
          <div className="relative">
            <div
              className={`text-5xl transform transition-transform duration-300 ${
                isHovered ? "scale-110 rotate-6" : ""
              }`}
            >
              {getCategoryIcon(category)}
            </div>
            {/* Glow effect behind icon */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${getCategoryGradient(
                category
              )} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 transform scale-150`}
            ></div>
          </div>

          <div
            className={`p-3 rounded-full bg-gradient-to-br ${getCategoryGradient(
              category
            )} opacity-0 group-hover:opacity-100 transition-all duration-300 transform ${
              isHovered ? "translate-x-0 scale-100" : "translate-x-4 scale-75"
            }`}
          >
            <ArrowRight className="h-5 w-5 text-white" />
          </div>
        </div>

        <div className="space-y-4">
          <h3
            className={`text-3xl font-bold text-gray-900 dark:text-white group-hover:${getCategoryAccent(
              category
            )} transition-colors duration-300`}
          >
            {category}
          </h3>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <BookOpen className="h-4 w-4 text-gray-600 dark:text-gray-400" />
              </div>
              <span className="text-gray-600 dark:text-gray-400 font-semibold">
                {count} books
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <TrendingUp className="h-4 w-4 text-green-600 dark:text-green-400" />
              </div>
              <span className="text-green-600 dark:text-green-400 font-bold">
                {totalDownloads > 1000
                  ? `${(totalDownloads / 1000).toFixed(1)}K`
                  : totalDownloads}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Divider with gradient */}
      <div
        className={`h-px bg-gradient-to-r ${getCategoryGradient(
          category
        )} opacity-20`}
      ></div>

      {/* Popular Books Section */}
      <div className="p-8 pt-6">
        <div className="flex items-center space-x-2 mb-6">
          <Star className="h-4 w-4 text-yellow-500 fill-current" />
          <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">
            Trending Now
          </h4>
        </div>

        <div className="space-y-4">
          {popularBooks.map((book, index) => (
            <div
              key={book.id}
              className="group/book flex items-center space-x-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-200"
            >
              {/* Book Rank Badge */}
              <div
                className={`w-8 h-8 rounded-full bg-gradient-to-br ${getCategoryGradient(
                  category
                )} flex items-center justify-center text-white font-bold text-sm shadow-lg`}
              >
                {index + 1}
              </div>

              {/* Book Cover Thumbnail */}
              <div className="w-10 h-12 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm group-hover/book:shadow-md transition-shadow duration-200">
                <BookOpen className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </div>

              {/* Book Info */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 dark:text-white truncate group-hover/book:text-[var(--primary-brand)] transition-colors duration-200">
                  {book.title}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                  by {book.author}
                </p>
              </div>

              {/* Download Stats */}
              <div className="flex items-center space-x-1 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-full">
                <Users className="h-3 w-3 text-green-600 dark:text-green-400" />
                <span className="text-xs font-semibold text-green-600 dark:text-green-400">
                  {book.downloads > 1000
                    ? `${(book.downloads / 1000).toFixed(1)}K`
                    : book.downloads}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* More Books Indicator */}
        {count > 3 && (
          <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div
              className={`text-center p-3 rounded-xl bg-gradient-to-r ${getCategoryGradient(
                category
              )} bg-opacity-5 hover:bg-opacity-10 transition-all duration-200`}
            >
              <p
                className={`text-sm font-semibold ${getCategoryAccent(
                  category
                )}`}
              >
                Discover +{count - 3} more amazing books
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Glow Effect */}
      <div
        className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-px bg-gradient-to-r ${getCategoryGradient(
          category
        )} opacity-0 group-hover:opacity-60 transition-all duration-500`}
      ></div>
    </div>
  );
};

export default CategoryCard;
