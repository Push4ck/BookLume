import { BookOpen, Heart, Eye, Star, Download } from "lucide-react";

const BookListItem = ({ book, onDownload }) => (
  <div className="group bg-[var(--light-background)] dark:bg-[var(--dark-background)] rounded-xl border border-[var(--light-border)] dark:border-[var(--dark-border)] hover:border-[var(--primary-brand)] dark:hover:border-[var(--primary-brand)] transition-all duration-200 hover:shadow-lg p-4">
    <div className="flex items-center space-x-4">
      <div className="w-16 h-20 bg-gradient-to-br from-[var(--primary-brand)]/20 to-[var(--secondary-accent)]/20 rounded-lg flex items-center justify-center flex-shrink-0">
        <BookOpen className="h-8 w-8 text-[var(--primary-brand)]/50" />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-1">
              <h3 className="text-lg font-semibold text-[var(--light-text)] dark:text-[var(--dark-text)] truncate">
                {book.title}
              </h3>
              <span className="px-2 py-1 bg-[var(--primary-brand)]/10 text-[var(--primary-brand)] rounded-full text-xs font-medium">
                {book.category}
              </span>
            </div>

            <p className="text-[var(--light-text-secondary)] dark:text-[var(--dark-text-secondary)] mb-2">
              by {book.author} • {book.publishYear}
            </p>

            <p className="text-sm text-[var(--light-text-secondary)] dark:text-[var(--dark-text-secondary)] mb-3 line-clamp-2">
              {book.description}
            </p>

            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 text-[var(--warning)] fill-current" />
                <span className="text-[var(--light-text)] dark:text-[var(--dark-text)]">
                  {book.rating}
                </span>
              </div>
              <div className="flex items-center space-x-1">
                <Download className="h-4 w-4 text-[var(--success)]" />
                <span className="text-[var(--light-text)] dark:text-[var(--dark-text)]">
                  {book.downloads}
                </span>
              </div>
              <div className="flex items-center space-x-1">
                <BookOpen className="h-4 w-4 text-[var(--info)]" />
                <span className="text-[var(--light-text)] dark:text-[var(--dark-text)]">
                  {book.pages} pages
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2 ml-4">
            <button className="p-2 hover:bg-[var(--light-surface)] dark:hover:bg-[var(--dark-surface)] rounded-lg transition-colors duration-200">
              <Heart className="h-4 w-4 text-gray-600 dark:text-gray-400" />
            </button>
            <button className="p-2 hover:bg-[var(--light-surface)] dark:hover:bg-[var(--dark-surface)] rounded-lg transition-colors duration-200">
              <Eye className="h-4 w-4 text-gray-600 dark:text-gray-400" />
            </button>
            <button
              onClick={() => onDownload(book)}
              className="flex items-center px-4 py-2 bg-[var(--primary-brand)] hover:bg-[var(--primary-brand-dark)] text-white rounded-lg transition-colors duration-200 font-medium"
            >
              <Download className="h-4 w-4 mr-2" />
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default BookListItem;
