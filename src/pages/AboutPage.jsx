import {
  Book,
  Target,
  Eye,
  Heart,
  Lightbulb,
  Globe,
  CheckCircle,
  Quote,
  User,
  Star,
} from "lucide-react";

const AboutPage = () => {
  const values = [
    {
      icon: Book,
      title: "Knowledge Access",
      description:
        "We believe knowledge should be accessible to everyone, everywhere, at any time.",
    },
    {
      icon: Heart,
      title: "Community First",
      description:
        "Our readers are at the heart of everything we do. We build for the community.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We continuously innovate to provide the best digital reading experience.",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description:
        "Connecting readers worldwide through the power of books and stories.",
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      bio: "Former librarian with 15+ years in digital publishing",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b977?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      bio: "Software architect passionate about user experience",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Content",
      bio: "Curator of our vast digital library collection",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "David Kim",
      role: "Lead Developer",
      bio: "Building the future of digital reading platforms",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    },
  ];

  const milestones = [
    {
      year: "2020",
      title: "BookLume Founded",
      description: "Started with a vision to democratize access to knowledge",
    },
    {
      year: "2021",
      title: "10K Books Milestone",
      description: "Reached our first major collection milestone",
    },
    {
      year: "2022",
      title: "100K Users",
      description: "Welcomed our 100,000th reader to the platform",
    },
    {
      year: "2023",
      title: "Mobile App Launch",
      description: "Expanded to mobile platforms for better accessibility",
    },
    {
      year: "2024",
      title: "1M Downloads",
      description: "Celebrated 1 million book downloads across our platform",
    },
  ];

  const testimonials = [
    {
      name: "Dr. Amanda Wilson",
      role: "University Professor",
      content:
        "BookLume has revolutionized how I access research materials. The platform's extensive collection and seamless reading experience make it indispensable for my academic work.",
      rating: 5,
    },
    {
      name: "James Patterson",
      role: "Avid Reader",
      content:
        "I've discovered so many amazing books through BookLume. The recommendation system is spot-on, and being able to download books for offline reading is fantastic.",
      rating: 5,
    },
    {
      name: "Maria Garcia",
      role: "Student",
      content:
        "As a student on a budget, BookLume has been a lifesaver. Access to textbooks and reference materials has made my studies so much easier and affordable.",
      rating: 5,
    },
  ];

  const features = [
    "Over 10,000 books across all genres",
    "Read online or download for offline access",
    "Advanced search and filtering system",
    "Personalized book recommendations",
    "Mobile-responsive design",
    "Regular content updates",
    "Community reviews and ratings",
    "Bookmark and note-taking features",
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600/10 to-purple-600/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-blue-600/10 text-blue-600 rounded-full text-sm font-medium mb-6">
            <Book className="h-4 w-4 mr-2" />
            About BookLume
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Illuminating Minds Through
            <span className="text-blue-600 block">Digital Literature</span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            BookLume is more than just a digital library. We're a community of
            readers, learners, and dreamers united by our love for books and the
            transformative power of knowledge.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                10,000+
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Books Available
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                50,000+
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Active Readers
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">1M+</div>
              <div className="text-gray-600 dark:text-gray-300">Downloads</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Our Mission
                </h2>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                To democratize access to knowledge by providing a comprehensive
                digital library that breaks down barriers to learning and
                reading. We believe that everyone deserves access to quality
                books and educational resources, regardless of their
                geographical location or economic circumstances.
              </p>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                <Quote className="h-6 w-6 text-blue-600 mb-3" />
                <p className="text-gray-900 dark:text-white italic">
                  "A book is a dream you hold in your hands. At BookLume, we
                  make those dreams accessible to everyone."
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  - Sarah Johnson, Founder
                </p>
              </div>
            </div>

            <div>
              <div className="flex items-center mb-6">
                <Eye className="h-8 w-8 text-purple-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Our Vision
                </h2>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                To become the world's leading digital reading platform,
                fostering a global community of learners and readers. We
                envision a future where knowledge knows no boundaries, and every
                person can explore, learn, and grow through the power of books.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.slice(0, 4).map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-gray-900 dark:text-white">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              These principles guide everything we do and shape the BookLume
              experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-600 transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 xs:px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Journey
            </h2>
            <p className="text-base xs:text-sm sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From a simple idea to a thriving platform serving thousands of
              readers worldwide.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200 dark:bg-gray-700"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`
              flex flex-col lg:flex-row items-center 
              ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}
            `}
                >
                  {/* Card Content */}
                  <div
                    className={`
                w-full lg:w-1/2 px-4 
                ${
                  index % 2 === 0
                    ? "lg:pr-8 lg:text-right"
                    : "lg:pl-8 lg:text-left"
                }
              `}
                  >
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow">
                      <div className="text-xl sm:text-2xl font-bold text-blue-600 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="relative z-10 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 my-4 lg:my-0"></div>

                  {/* Spacer for opposite side on large screens */}
                  <div className="hidden lg:block w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The passionate individuals behind BookLume, working to make
              knowledge accessible to all.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="text-center bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-200"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <User className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Our Readers Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Hear from our community of readers who have found their next
              favorite book on BookLume.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-200"
              >
                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mr-4">
                    <User className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Reading Journey?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Join thousands of readers who have discovered their next favorite
            book on BookLume. Start exploring our vast collection today.
          </p>
          <div className="flex flex-col lg:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Browse Books
            </button>
            <button className="bg-transparent text-white border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200">
              Sign Up Free
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
