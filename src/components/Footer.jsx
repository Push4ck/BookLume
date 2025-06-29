import {
  Book,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";

const Footer = () => {
  const footerLinks = {
    "Quick Links": [
      { name: "Home", href: "#home" },
      { name: "Browse Books", href: "#books" },
      { name: "Categories", href: "#categories" },
      { name: "About Us", href: "#about" },
      { name: "Contact", href: "#contact" },
    ],
    Categories: [
      { name: "Fiction", href: "#fiction" },
      { name: "Non-Fiction", href: "#non-fiction" },
      { name: "Science & Tech", href: "#science" },
      { name: "Biography", href: "#biography" },
      { name: "Self-Help", href: "#self-help" },
    ],
    Support: [
      { name: "Help Center", href: "#help" },
      { name: "Download Guide", href: "#download" },
      { name: "Reading Tips", href: "#reading" },
      { name: "Accessibility", href: "#accessibility" },
      { name: "Report Issue", href: "#report" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Copyright", href: "#copyright" },
      { name: "DMCA", href: "#dmca" },
      { name: "Disclaimer", href: "#disclaimer" },
    ],
  };

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: "#facebook",
      color: "hover:text-blue-600",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "#twitter",
      color: "hover:text-blue-400",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "#instagram",
      color: "hover:text-pink-600",
    },
    {
      name: "Youtube",
      icon: Youtube,
      href: "#youtube",
      color: "hover:text-red-600",
    },
  ];

  return (
    <footer className="bg-[var(--light-surface)] dark:bg-[var(--dark-surface)] border-t border-[var(--light-border)] dark:border-[var(--dark-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-[var(--primary-brand)] p-2 rounded-lg">
                  <Book className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-[var(--light-text)] dark:text-[var(--dark-text)]">
                  Book<span className="text-[var(--primary-brand)]">Lume</span>
                </span>
              </div>
              <p className="text-[var(--light-text-secondary)] dark:text-[var(--dark-text-secondary)] mb-6 max-w-md">
                Your gateway to unlimited knowledge. Discover, read, and
                download thousands of books across all genres. Light up your
                mind with BookLume.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-[var(--light-text-secondary)] dark:text-[var(--dark-text-secondary)]">
                  <Mail className="h-4 w-4 text-[var(--primary-brand)]" />
                  <span className="text-sm">contact@booklume.com</span>
                </div>
                <div className="flex items-center space-x-3 text-[var(--light-text-secondary)] dark:text-[var(--dark-text-secondary)]">
                  <Phone className="h-4 w-4 text-[var(--primary-brand)]" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-[var(--light-text-secondary)] dark:text-[var(--dark-text-secondary)]">
                  <MapPin className="h-4 w-4 text-[var(--primary-brand)]" />
                  <span className="text-sm">San Francisco, CA</span>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="text-[var(--light-text)] dark:text-[var(--dark-text)] font-semibold mb-4">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-[var(--light-text-secondary)] dark:text-[var(--dark-text-secondary)] hover:text-[var(--primary-brand)] dark:hover:text-[var(--primary-brand-light)] transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-[var(--light-border)] dark:border-[var(--dark-border)]">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold text-[var(--light-text)] dark:text-[var(--dark-text)] mb-2">
                Stay Updated
              </h3>
              <p className="text-[var(--light-text-secondary)] dark:text-[var(--dark-text-secondary)] text-sm">
                Get notified about new books and exclusive offers
              </p>
            </div>
            <div className="flex space-y-3 flex-col lg:flex-row lg:space-x-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-[var(--light-background)] dark:bg-[var(--dark-background)] border border-[var(--light-border)] dark:border-[var(--dark-border)] rounded-lg text-[var(--light-text)] dark:text-[var(--dark-text)] placeholder-[var(--light-text-muted)] dark:placeholder-[var(--dark-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-brand)] focus:border-transparent transition-all duration-200"
              />
              <button className="px-6 py-2 bg-[var(--primary-brand)] hover:bg-[var(--primary-brand-dark)] text-white rounded-lg transition-colors duration-200 font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-[var(--light-border)] dark:border-[var(--dark-border)]">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Copyright */}
            <div className="flex items-center space-x-1 text-[var(--light-text-secondary)] dark:text-[var(--dark-text-secondary)] text-sm mb-4 md:mb-0">
              <span>© 2024 BookLume. All Rights Reserved</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`text-[var(--light-text-muted)] dark:text-[var(--dark-text-muted)] ${social.color} transition-colors duration-200`}
                    aria-label={social.name}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
