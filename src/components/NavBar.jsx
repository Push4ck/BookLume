import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  Book,
  Search,
  User,
  ShoppingCart,
  Sun,
  Moon,
} from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: "Home", to: "/" },
    { name: "Browse Books", to: "browse-books" },
    { name: "Categories", to: "categories" },
    { name: "About", to: "about" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[var(--light-background)]/95 dark:bg-[var(--dark-background)]/95 backdrop-blur-md shadow-lg border-b border-[var(--light-border)] dark:border-[var(--dark-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-[var(--primary-brand)] p-2 rounded-lg">
              <Book className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-[var(--light-text)] dark:text-[var(--dark-text)]">
              Book<span className="text-[var(--primary-brand)]">Lume</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className="text-[var(--light-text-secondary)] dark:text-[var(--dark-text-secondary)] hover:text-[var(--primary-brand)] dark:hover:text-[var(--primary-brand-light)] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right side icons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Search */}
            <button className="p-2 rounded-lg text-[var(--light-text-secondary)] dark:text-[var(--dark-text-secondary)] hover:text-[var(--primary-brand)] dark:hover:text-[var(--primary-brand-light)] hover:bg-[var(--light-surface)] dark:hover:bg-[var(--dark-surface)] transition-all duration-200 cursor-pointer">
              <Search className="h-5 w-5" />
            </button>

            {/* Cart */}
            <button className="p-2 rounded-lg text-[var(--light-text-secondary)] dark:text-[var(--dark-text-secondary)] hover:text-[var(--primary-brand)] dark:hover:text-[var(--primary-brand-light)] hover:bg-[var(--light-surface)] dark:hover:bg-[var(--dark-surface)] transition-all duration-200 relative cursor-pointer">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-[var(--secondary-accent)] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </button>

            {/* User */}
            <button className="p-2 rounded-lg text-[var(--light-text-secondary)] dark:text-[var(--dark-text-secondary)] hover:text-[var(--primary-brand)] dark:hover:text-[var(--primary-brand-light)] hover:bg-[var(--light-surface)] dark:hover:bg-[var(--dark-surface)] transition-all duration-200 cursor-pointer">
              <User className="h-5 w-5" />
            </button>

            {/* Dark mode toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg text-[var(--light-text-secondary)] dark:text-[var(--dark-text-secondary)] hover:text-[var(--primary-brand)] dark:hover:text-[var(--primary-brand-light)] hover:bg-[var(--light-surface)] dark:hover:bg-[var(--dark-surface)] transition-all duration-200 cursor-pointer"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg text-[var(--light-text-secondary)] dark:text-[var(--dark-text-secondary)] hover:text-[var(--primary-brand)] dark:hover:text-[var(--primary-brand-light)] transition-colors duration-200"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg text-[var(--light-text-secondary)] dark:text-[var(--dark-text-secondary)] hover:text-[var(--primary-brand)] dark:hover:text-[var(--primary-brand-light)] transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[var(--light-surface)] dark:bg-[var(--dark-surface)] rounded-lg mt-2 mb-3 border border-[var(--light-border)] dark:border-[var(--dark-border)]">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className="text-[var(--light-text-secondary)] dark:text-[var(--dark-text-secondary)] hover:text-[var(--primary-brand)] dark:hover:text-[var(--primary-brand-light)] block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-t border-[var(--light-border)] dark:border-[var(--dark-border)] pt-3 mt-3">
                <div className="flex items-center justify-around">
                  <button className="p-2 rounded-lg text-[var(--light-text-secondary)] dark:text-[var(--dark-text-secondary)] hover:text-[var(--primary-brand)] dark:hover:text-[var(--primary-brand-light)] transition-colors duration-200">
                    <Search className="h-5 w-5" />
                  </button>
                  <button className="p-2 rounded-lg text-[var(--light-text-secondary)] dark:text-[var(--dark-text-secondary)] hover:text-[var(--primary-brand)] dark:hover:text-[var(--primary-brand-light)] transition-colors duration-200 relative">
                    <ShoppingCart className="h-5 w-5" />
                    <span className="absolute -top-1 -right-1 bg-[var(--secondary-accent)] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      0
                    </span>
                  </button>
                  <button className="p-2 rounded-lg text-[var(--light-text-secondary)] dark:text-[var(--dark-text-secondary)] hover:text-[var(--primary-brand)] dark:hover:text-[var(--primary-brand-light)] transition-colors duration-200">
                    <User className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
