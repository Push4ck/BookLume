import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Bookmark,
  Settings,
  Home,
  BookOpen,
  Minus,
  Plus,
} from "lucide-react";

const BookReaderPage = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();

  // Reading states
  const [currentPage, setCurrentPage] = useState(1);
  const [fontSize, setFontSize] = useState(16);
  const [book, setBook] = useState(null);
  const [bookContent, setBookContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showSettings, setShowSettings] = useState(false);

  // Load book data and reading progress
  useEffect(() => {
    const loadBook = async () => {
      try {
        // In real app: fetch book data from API
        // const response = await fetch(`/api/books/${bookId}`);
        // const bookData = await response.json();

        // Mock book data for demo
        const mockBook = {
          id: bookId,
          title: "The Art of Self-Improvement",
          author: "Jane Smith",
          category: "Self-Help",
          totalPages: 150,
        };

        // Mock content generation (in real app, this would be PDF content)
        const mockContent = Array.from(
          { length: mockBook.totalPages },
          (_, i) =>
            `Chapter ${Math.floor(i / 10) + 1}\n\nPage ${i + 1} of "${
              mockBook.title
            }"\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\nSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.\n\nNemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.\n\nUt enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`
        );

        setBook(mockBook);
        setBookContent(mockContent);

        // Load saved reading progress (commented for artifact)
        // const savedProgress = localStorage.getItem(`book-progress-${bookId}`);
        // const savedFontSize = localStorage.getItem(`font-size-${bookId}`);

        // if (savedProgress) setCurrentPage(parseInt(savedProgress));
        // if (savedFontSize) setFontSize(parseInt(savedFontSize));

        setLoading(false);
      } catch (error) {
        console.error("Error loading book:", error);
        setLoading(false);
      }
    };

    if (bookId) {
      loadBook();
    }
  }, [bookId]);

  // Save reading progress whenever page changes
  useEffect(() => {
    if (book && currentPage > 0) {
      // localStorage.setItem(`book-progress-${bookId}`, currentPage.toString());
    }
  }, [currentPage, book, bookId]);

  // Save font size preference
  useEffect(() => {
    if (book) {
      // localStorage.setItem(`font-size-${bookId}`, fontSize.toString());
    }
  }, [fontSize, book, bookId]);

  const goToNextPage = () => {
    if (currentPage < book.totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (pageNum) => {
    const page = parseInt(pageNum);
    if (page >= 1 && page <= book.totalPages) {
      setCurrentPage(page);
    }
  };

  const addBookmark = () => {
    // In real app: save to localStorage or backend
    // const bookmarks = JSON.parse(localStorage.getItem(`bookmarks-${bookId}`) || '[]');
    // const newBookmark = { page: currentPage, timestamp: Date.now() };
    // bookmarks.push(newBookmark);
    // localStorage.setItem(`bookmarks-${bookId}`, JSON.stringify(bookmarks));
    alert(`Bookmark added for page ${currentPage}`);
  };

  const increaseFontSize = () => {
    if (fontSize < 24) setFontSize(fontSize + 2);
  };

  const decreaseFontSize = () => {
    if (fontSize > 12) setFontSize(fontSize - 2);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[var(--light-background)] dark:bg-[var(--dark-background)] flex items-center justify-center">
        <div className="text-center">
          <BookOpen className="h-12 w-12 text-[var(--primary-brand)] mx-auto mb-4 animate-pulse" />
          <p className="text-[var(--light-text)] dark:text-[var(--dark-text)]">
            Loading book...
          </p>
        </div>
      </div>
    );
  }

  if (!book) {
    return (
      <div className="min-h-screen bg-[var(--light-background)] dark:bg-[var(--dark-background)] flex items-center justify-center">
        <div className="text-center">
          <p className="text-[var(--light-text)] dark:text-[var(--dark-text)] mb-4">
            Book not found
          </p>
          <button
            onClick={() => navigate("/browse-books")}
            className="px-4 py-2 bg-[var(--primary-brand)] text-white rounded-lg hover:bg-[var(--primary-brand-dark)] transition-colors"
          >
            Back to Browse
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--light-background)] dark:bg-[var(--dark-background)]">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[var(--light-background)] dark:bg-[var(--dark-background)] border-b border-[var(--light-border)] dark:border-[var(--dark-border)] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left side */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate(-1)}
                className="p-2 hover:bg-[var(--light-surface)] dark:hover:bg-[var(--dark-surface)] rounded-lg transition-colors"
              >
                <ArrowLeft className="h-5 w-5 text-[var(--light-text)] dark:text-[var(--dark-text)]" />
              </button>

              <div>
                <h1 className="text-lg font-semibold text-[var(--light-text)] dark:text-[var(--dark-text)] truncate max-w-xs sm:max-w-md">
                  {book.title}
                </h1>
                <p className="text-sm text-[var(--light-text-secondary)] dark:text-[var(--dark-text-secondary)]">
                  by {book.author}
                </p>
              </div>
            </div>

            {/* Right side */}
            <div className="flex items-center space-x-2">
              <button
                onClick={addBookmark}
                className="p-2 hover:bg-[var(--light-surface)] dark:hover:bg-[var(--dark-surface)] rounded-lg transition-colors"
                title="Add Bookmark"
              >
                <Bookmark className="h-5 w-5 text-[var(--primary-brand)]" />
              </button>

              <button
                onClick={() => setShowSettings(!showSettings)}
                className="p-2 hover:bg-[var(--light-surface)] dark:hover:bg-[var(--dark-surface)] rounded-lg transition-colors"
                title="Settings"
              >
                <Settings className="h-5 w-5 text-[var(--light-text)] dark:text-[var(--dark-text)]" />
              </button>

              <button
                onClick={() => navigate("/")}
                className="p-2 hover:bg-[var(--light-surface)] dark:hover:bg-[var(--dark-surface)] rounded-lg transition-colors"
                title="Home"
              >
                <Home className="h-5 w-5 text-[var(--light-text)] dark:text-[var(--dark-text)]" />
              </button>
            </div>
          </div>
        </div>

        {/* Settings Panel */}
        {showSettings && (
          <div className="border-t border-[var(--light-border)] dark:border-[var(--dark-border)] bg-[var(--light-surface)] dark:bg-[var(--dark-surface)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-[var(--light-text)] dark:text-[var(--dark-text)]">
                    Font Size:
                  </span>
                  <button
                    onClick={decreaseFontSize}
                    className="p-1 hover:bg-[var(--light-border)] dark:hover:bg-[var(--dark-border)] rounded"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="text-sm font-medium min-w-[2rem] text-center">
                    {fontSize}px
                  </span>
                  <button
                    onClick={increaseFontSize}
                    className="p-1 hover:bg-[var(--light-border)] dark:hover:bg-[var(--dark-border)] rounded"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-[var(--light-border)] dark:border-[var(--dark-border)] min-h-[600px]">
          <div className="p-8 sm:p-12">
            <div
              className="prose prose-lg dark:prose-invert max-w-none leading-relaxed"
              style={{ fontSize: `${fontSize}px`, lineHeight: "1.7" }}
            >
              <div className="whitespace-pre-line text-[var(--light-text)] dark:text-[var(--dark-text)]">
                {bookContent[currentPage - 1]}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Navigation */}
      <footer className="sticky bottom-0 bg-[var(--light-background)] dark:bg-[var(--dark-background)] border-t border-[var(--light-border)] dark:border-[var(--dark-border)] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Previous Button */}
            <button
              onClick={goToPrevPage}
              disabled={currentPage === 1}
              className="flex items-center space-x-2 px-4 py-2 bg-[var(--primary-brand)] hover:bg-[var(--primary-brand-dark)] disabled:bg-gray-400 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Previous</span>
            </button>

            {/* Page Info & Jump */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-[var(--light-text-secondary)] dark:text-[var(--dark-text-secondary)]">
                Page
              </span>
              <input
                type="number"
                min="1"
                max={book.totalPages}
                value={currentPage}
                onChange={(e) => goToPage(e.target.value)}
                className="w-16 px-2 py-1 text-center bg-[var(--light-surface)] dark:bg-[var(--dark-surface)] border border-[var(--light-border)] dark:border-[var(--dark-border)] rounded text-[var(--light-text)] dark:text-[var(--dark-text)] text-sm"
              />
              <span className="text-sm text-[var(--light-text-secondary)] dark:text-[var(--dark-text-secondary)]">
                of {book.totalPages}
              </span>
            </div>

            {/* Next Button */}
            <button
              onClick={goToNextPage}
              disabled={currentPage === book.totalPages}
              className="flex items-center space-x-2 px-4 py-2 bg-[var(--primary-brand)] hover:bg-[var(--primary-brand-dark)] disabled:bg-gray-400 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
            >
              <span className="hidden sm:inline">Next</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="mt-4">
            <div className="w-full bg-[var(--light-border)] dark:bg-[var(--dark-border)] rounded-full h-2">
              <div
                className="bg-[var(--primary-brand)] h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentPage / book.totalPages) * 100}%` }}
              ></div>
            </div>
            <div className="flex justify-between mt-2 text-xs text-[var(--light-text-secondary)] dark:text-[var(--dark-text-secondary)]">
              <span>
                {Math.round((currentPage / book.totalPages) * 100)}% Complete
              </span>
              <span>Progress Saved Automatically</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BookReaderPage;
