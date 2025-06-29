import { useState, useEffect } from "react";
import { featuredBooks } from "../data/featureBooks";
import { features } from "../data/features";
import { stats } from "../data/stats";
import {
  Search,
  Download,
  BookOpen,
  Star,
  TrendingUp,
  ArrowRight,
  Play,
} from "lucide-react";
import { Link } from "react-router-dom";

const Homepage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredBooks.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // Handle search logic here
  };

  return (
    <div className="min-h-screen bg-[var(--light-background)] dark:bg-[var(--dark-background)]">
      {/* Hero Section */}
      <section className="relative pt-20 pb-12 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 fade-in-up">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-[var(--primary-brand)]/10 text-[var(--primary-brand)] rounded-full text-sm font-medium">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  #1 Digital Library Platform
                </div>

                <h1 className="text-4xl md:text-6xl font-bold text-[var(--light-text)] dark:text-[var(--dark-text)] leading-tight">
                  Illuminate Your Mind with
                  <span className="text-[var(--primary-brand)] block">
                    BookLume
                  </span>
                </h1>

                <p className="text-xl text-[var(--light-text-secondary)] dark:text-[var(--dark-text-secondary)] max-w-2xl">
                  Discover, read, and download thousands of books across all
                  genres. Your gateway to unlimited knowledge and endless
                  stories.
                </p>
              </div>

              {/* Search Bar */}
              <form onSubmit={handleSearch} className="relative max-w-md">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[var(--light-text-muted)] dark:text-[var(--dark-text-muted)]" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for books, authors, genres..."
                    className="w-full pl-12 pr-4 py-4 bg-[var(--light-surface)] dark:bg-[var(--dark-surface)] border border-[var(--light-border)] dark:border-[var(--dark-border)] rounded-xl text-[var(--light-text)] dark:text-[var(--dark-text)] placeholder-[var(--light-text-muted)] dark:placeholder-[var(--dark-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-brand)] focus:border-transparent transition-all duration-200"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-[var(--primary-brand)] hover:bg-[var(--primary-brand-dark)] text-white rounded-lg transition-colors duration-200 font-medium cursor-pointer"
                  >
                    Search
                  </button>
                </div>
              </form>

              {/* CTA Buttons */}
              <div className="flex flex-col lg:flex-row gap-4">
                <Link
                  className="group flex items-center justify-center px-8 py-4 bg-[var(--primary-brand)] hover:bg-[var(--primary-brand-dark)] text-white rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 cursor-pointer"
                  to="/browse-books"
                >
                  <BookOpen className="h-5 w-5 mr-2" />
                  Start Reading
                  <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>

                <button className="group flex items-center justify-center px-8 py-4 bg-transparent border-2 border-[var(--primary-brand)] text-[var(--primary-brand)] hover:bg-[var(--primary-brand)] hover:text-white rounded-xl font-semibold transition-all duration-200 cursor-pointer">
                  <Play className="h-5 w-5 mr-2" />
                  Watch Demo
                </button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={index} className="text-center">
                      <IconComponent
                        className={`h-6 w-6 mx-auto mb-2 ${stat.color}`}
                      />
                      <div className="text-2xl font-bold text-[var(--light-text)] dark:text-[var(--dark-text)]">
                        {stat.value}
                      </div>
                      <div className="text-sm text-[var(--light-text-secondary)] dark:text-[var(--dark-text-secondary)]">
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Content - Featured Books Carousel */}
            <div className="relative slide-in-left">
              <div className="relative bg-gradient-to-br from-[var(--primary-brand)]/10 to-[var(--secondary-accent)]/10 rounded-2xl p-8 backdrop-blur-sm">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-[var(--light-text)] dark:text-[var(--dark-text)] mb-2">
                    Featured Books
                  </h3>
                  <p className="text-[var(--light-text-secondary)] dark:text-[var(--dark-text-secondary)]">
                    Trending this week
                  </p>
                </div>

                <div className="relative h-96 overflow-hidden rounded-xl">
                  {featuredBooks.map((book, index) => (
                    <div
                      key={book.id}
                      className={`absolute inset-0 transition-all duration-500 transform ${
                        index === currentSlide
                          ? "translate-x-0 opacity-100"
                          : index < currentSlide
                          ? "-translate-x-full opacity-0"
                          : "translate-x-full opacity-0"
                      }`}
                    >
                      <div className="bg-[var(--light-background)] dark:bg-[var(--dark-background)] rounded-xl p-6 h-full flex flex-col items-center justify-center shadow-lg">
                        <div className="w-32 h-44 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                          <img src={book.cover} alt="" className="w-full" />
                        </div>
                        <h4 className="text-xl font-bold text-[var(--light-text)] dark:text-[var(--dark-text)] text-center mb-2">
                          {book.title}
                        </h4>
                        <p className="text-[var(--light-text-secondary)] dark:text-[var(--dark-text-secondary)] mb-2">
                          by {book.author}
                        </p>
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-[var(--warning)] fill-current" />
                            <span className="text-sm text-[var(--light-text)] dark:text-[var(--dark-text)]">
                              {book.rating}
                            </span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Download className="h-4 w-4 text-[var(--success)]" />
                            <span className="text-sm text-[var(--light-text)] dark:text-[var(--dark-text)]">
                              {book.downloads}
                            </span>
                          </div>
                        </div>
                        <span className="px-3 py-1 bg-[var(--primary-brand)]/10 text-[var(--primary-brand)] rounded-full text-sm">
                          {book.category}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Carousel Indicators */}
                <div className="flex justify-center space-x-2 mt-4">
                  {featuredBooks.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                        index === currentSlide
                          ? "bg-[var(--primary-brand)]"
                          : "bg-[var(--light-border)] dark:bg-[var(--dark-border)]"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-[var(--light-surface)] dark:bg-[var(--dark-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--light-text)] dark:text-[var(--dark-text)] mb-4">
              Why Choose BookLume?
            </h2>
            <p className="text-xl text-[var(--light-text-secondary)] dark:text-[var(--dark-text-secondary)] max-w-3xl mx-auto">
              Experience the future of digital reading with our comprehensive
              platform designed for book lovers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="group p-6 bg-[var(--light-background)] dark:bg-[var(--dark-background)] rounded-xl border border-[var(--light-border)] dark:border-[var(--dark-border)] hover:border-[var(--primary-brand)] dark:hover:border-[var(--primary-brand)] transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-[var(--primary-brand)]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--primary-brand)] transition-colors duration-200">
                    <IconComponent className="h-6 w-6 text-[var(--primary-brand)] group-hover:text-white transition-colors duration-200" />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--light-text)] dark:text-[var(--dark-text)] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[var(--light-text-secondary)] dark:text-[var(--dark-text-secondary)]">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[var(--primary-brand)] to-[var(--primary-brand-dark)] rounded-2xl p-8 md:p-12 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Start Your Reading Journey?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Join thousands of readers who have already discovered their next
                favorite book on BookLume.
              </p>
              <div className="flex flex-col lg:flex-row gap-4 justify-center">
                <Link
                  className="px-8 py-4 bg-white text-[var(--primary-brand)] rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200"
                  to="/browse-books"
                >
                  Browse Books Now
                </Link>
                <Link
                  className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-[var(--primary-brand)] transition-all duration-200"
                  to="/about"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
