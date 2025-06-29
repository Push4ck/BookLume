import {
  BookOpen,
  Heart,
  Share2,
  Star,
  Download,
  Eye,
  Clock,
  Users,
} from "lucide-react";
import { useState } from "react";

const BookCard = ({ book, onDownload, onRead }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleShare = async () => {
    const shareData = {
      title: book.title,
      text: `Check out "${book.title}" by ${book.author}`,
      url: window.location.href,
    };

    if (navigator.share && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        if (error.name !== "AbortError") {
          handleCopyLink();
        }
      }
    } else {
      handleCopyLink();
    }
  };

  const handleCopyLink = async () => {
    const shareText = `Check out "${book.title}" by ${book.author} - ${window.location.href}`;
    try {
      await navigator.clipboard.writeText(shareText);
      // Show toast: "Link copied to clipboard!"
    } catch (error) {
      console.log("Copy failed:", error);
    }
  };

  return (
    <div
      className="group relative bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-[var(--primary-brand)] dark:hover:border-[var(--primary-brand)] transition-all duration-300 hover:shadow-2xl hover:shadow-[var(--primary-brand)]/10 hover:-translate-y-2 overflow-hidden backdrop-blur-sm"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Book Cover Section */}
      <div className="relative overflow-hidden">
        <div className="aspect-[3/4] bg-gradient-to-br from-[var(--primary-brand)]/10 via-[var(--secondary-accent)]/15 to-[var(--primary-brand)]/5 flex items-center justify-center relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary-brand-rgb),0.1)_0%,transparent_70%)]"></div>
          </div>

          {/* Book Icon */}
          <div className="relative z-10 transform transition-transform duration-300 group-hover:scale-110">
            <BookOpen className="h-20 w-20 text-[var(--primary-brand)]/60" />
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-[var(--primary-brand)] rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">PDF</span>
            </div>
          </div>

          {/* Floating Action Buttons */}
          <div
            className={`absolute top-3 right-3 flex flex-col space-y-2 transition-all duration-300 ${
              isHovered
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-4"
            }`}
          >
            <button
              onClick={handleLike}
              className={`p-2.5 rounded-full backdrop-blur-md transition-all duration-200 cursor-pointer ${
                isLiked
                  ? "bg-red-500 text-white shadow-lg shadow-red-500/25"
                  : "bg-white/90 dark:bg-gray-800/90 text-gray-600 dark:text-gray-400 hover:bg-white dark:hover:bg-gray-800"
              }`}
            >
              <Heart className={`h-4 w-4 ${isLiked ? "fill-current" : ""}`} />
            </button>
            <button
              onClick={handleShare}
              className="p-2.5 bg-white/90 dark:bg-gray-800/90 rounded-full hover:bg-white dark:hover:bg-gray-800 transition-all duration-200 text-gray-600 dark:text-gray-400 backdrop-blur-md cursor-pointer"
            >
              <Share2 className="h-4 w-4" />
            </button>
          </div>

          {/* Reading Progress Indicator (if available) */}
          {book.readingProgress && (
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700">
              <div
                className="h-full bg-[var(--primary-brand)] transition-all duration-300"
                style={{ width: `${book.readingProgress}%` }}
              ></div>
            </div>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 space-y-4">
        {/* Category Badge */}
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-[var(--primary-brand)]/10 to-[var(--secondary-accent)]/10 text-[var(--primary-brand)] rounded-full text-xs font-semibold border border-[var(--primary-brand)]/20">
            {book.category}
          </span>
          {book.isNew && (
            <span className="inline-flex items-center px-2 py-1 bg-gradient-to-r from-green-400 to-green-500 text-white rounded-full text-xs font-bold">
              NEW
            </span>
          )}
        </div>

        {/* Title and Author */}
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white line-clamp-2 leading-tight group-hover:text-[var(--primary-brand)] transition-colors duration-200">
            {book.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 font-medium">
            by {book.author}
          </p>
        </div>

        {/* Stats Row */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-1">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(book.rating)
                      ? "text-yellow-400 fill-current"
                      : "text-gray-300 dark:text-gray-600"
                  }`}
                />
              ))}
            </div>
            <span className="text-gray-700 dark:text-gray-300 font-semibold ml-1">
              {book.rating}
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-400">
              <Users className="h-4 w-4" />
              <span className="font-medium">{book.downloads}</span>
            </div>
            <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-400">
              <Clock className="h-4 w-4" />
              <span className="font-medium">{book.pages || 100}p</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed">
          {book.description}
        </p>

        {/* Action Button */}
        <div className="pt-2 space-y-2">
          <button
            onClick={() => onDownload(book)}
            className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[var(--primary-brand)] to-[var(--primary-brand)]/90 hover:from-[var(--primary-brand)]/90 hover:to-[var(--primary-brand)] text-white rounded-xl font-semibold transition-all duration-200 shadow-lg shadow-[var(--primary-brand)]/25 hover:shadow-xl hover:shadow-[var(--primary-brand)]/30 transform hover:scale-105 cursor-pointer"
          >
            <Download className="h-5 w-5 mr-2" />
            Download Now
          </button>

          <button
            onClick={() => onRead(book)}
            className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[var(--primary-brand)] to-[var(--primary-brand)]/90 hover:from-[var(--primary-brand)]/90 hover:to-[var(--primary-brand)] text-white rounded-xl font-semibold transition-all duration-200 shadow-lg shadow-[var(--primary-brand)]/25 hover:shadow-xl hover:shadow-[var(--primary-brand)]/30 transform hover:scale-105 cursor-pointer"
          >
            <Eye className="h-5 w-5 mr-2" />
            Read Now
          </button>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[var(--primary-brand)]/5 to-[var(--secondary-accent)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
};

export default BookCard;
