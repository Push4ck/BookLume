const sanitize = (str) => str.replace(/[\\/:*?"<>|]/g, "");

export const filterBooks = (books, searchQuery, selectedCategory) => {
  return books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    const matchesCategory =
      selectedCategory === "All" || book.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
};

export const sortBooks = (books, sortBy) => {
  return [...books].sort((a, b) => {
    switch (sortBy) {
      case "title":
        return a.title.localeCompare(b.title);
      case "author":
        return a.author.localeCompare(b.author);
      case "rating":
        return b.rating - a.rating;
      case "downloads":
        return (
          parseFloat(b.downloads.replace("K", "")) -
          parseFloat(a.downloads.replace("K", ""))
        );
      case "year":
        return b.publishYear - a.publishYear;
      default:
        return 0;
    }
  });
};

export const handleRead = (book) => {
  const filename = `${sanitize(book.title)} - ${sanitize(book.author)}.pdf`;
  const pdfUrl = `/books/${filename}`;
  window.open(pdfUrl, "_blank", "noopener,noreferrer");
};

export const handleDownload = (book) => {
  const filename = `${sanitize(book.title)} - ${sanitize(book.author)}.pdf`;
  const link = document.createElement("a");
  link.href = `/books/${filename}`;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const getCategoryStats = (books) => {
  const stats = {};
  books.forEach((book) => {
    if (stats[book.category]) {
      stats[book.category].count += 1;
      stats[book.category].totalDownloads += parseFloat(
        book.downloads.replace("K", "")
      );
    } else {
      stats[book.category] = {
        count: 1,
        totalDownloads: parseFloat(book.downloads.replace("K", "")),
        books: [],
      };
    }
    stats[book.category].books.push(book);
  });

  // Sort books within each category by downloads
  Object.keys(stats).forEach((category) => {
    stats[category].books.sort(
      (a, b) =>
        parseFloat(b.downloads.replace("K", "")) -
        parseFloat(a.downloads.replace("K", ""))
    );
  });

  return stats;
};
