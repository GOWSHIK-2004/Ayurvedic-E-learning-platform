import { useState, useRef, useEffect } from "react";
import { Search, BookOpen } from "lucide-react";
import { getAlphabetArray, groupBooksByFirstLetter } from "@/lib/utils";
import { ayurvedicBooks } from "@/data/books";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type BookCategoryType = "All" | "Ancient Text" | "Modern" | "Reference";

export default function GenieLab() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("alphabetical");
  const [selectedCategory, setSelectedCategory] = useState<BookCategoryType>("All");
  const [activeIndex, setActiveIndex] = useState("A");
  const alphabet = getAlphabetArray();
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Filter and sort books
  const filteredBooks = ayurvedicBooks.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         book.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || book.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Sort books
  let sortedBooks = [...filteredBooks];
  if (sortBy === "popularity") {
    sortedBooks.sort((a, b) => b.popularity - a.popularity);
  } else if (sortBy === "recent") {
    sortedBooks.sort((a, b) => b.year - a.year);
  }

  // Group books by first letter
  const groupedBooks = groupBooksByFirstLetter(sortedBooks);

  // Scroll to letter section
  const scrollToLetter = (letter: string) => {
    setActiveIndex(letter);
    const element = sectionRefs.current[letter];
    if (element) {
      const yOffset = -120; // Adjust for navbar and sticky header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Handle intersection observer for scroll spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id.replace("letter-", "");
            setActiveIndex(id);
          }
        });
      },
      { rootMargin: "-120px 0px -80% 0px" }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      Object.values(sectionRefs.current).forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="ayurvedic-bg min-h-screen">
      {/* Hero Section */}
      <div className="hero-palm h-80 bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1538935732373-f7a495fea3f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')" }}>
        <div className="text-center px-4 z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-heading">
            GenieLab
          </h1>
          <p className="mt-2 max-w-2xl mx-auto text-xl text-white/90">
            Ancient knowledge at your fingertips - Explore our collection of Ayurvedic texts
          </p>
          <div className="mt-6">
            <div className="relative max-w-xl mx-auto">
              <Input
                type="text"
                placeholder="Search for Ayurvedic books..."
                className="w-full px-4 py-3 pr-10 rounded-lg border border-white/30 bg-white/10 backdrop-blur-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-primary/60"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute right-3 top-3 text-white h-5 w-5" />
            </div>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {["Herbal Medicine", "Ayurvedic Practices", "Doshas", "Ancient Texts"].map((tag) => (
                <span 
                  key={tag}
                  className="bg-white/20 text-white px-3 py-1 text-sm rounded-full cursor-pointer hover:bg-white/30"
                  onClick={() => setSearchTerm(tag)}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Alphabetical Index */}
      <div className="bg-white sticky top-16 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3 overflow-x-auto scrollbar-hide">
            <div className="flex space-x-4">
              {alphabet.map((letter) => (
                <button
                  key={letter}
                  onClick={() => scrollToLetter(letter)}
                  className={`font-medium px-2 py-1 ${
                    activeIndex === letter
                      ? "text-primary"
                      : "text-darkText hover:text-primary"
                  }`}
                >
                  {letter}
                </button>
              ))}
            </div>
            <div className="flex-shrink-0 ml-4">
              <Select 
                value={sortBy} 
                onValueChange={(value) => setSortBy(value)}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="alphabetical">Sort by: Alphabetical</SelectItem>
                    <SelectItem value="popularity">Sort by: Popularity</SelectItem>
                    <SelectItem value="recent">Sort by: Recently Added</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      {/* Book Collection */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Category Filters */}
        <div className="mb-8 flex flex-wrap gap-2">
          {["All", "Ancient Text", "Modern", "Reference"].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category as BookCategoryType)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-primary text-white"
                  : "bg-white text-darkText hover:bg-gray-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Letter Sections */}
        {alphabet.map((letter) => {
          const booksForLetter = groupedBooks[letter] || [];
          
          if (booksForLetter.length === 0 && searchTerm) {
            return null; // Don't show empty sections when searching
          }
          
          return (
            <div 
              key={letter} 
              id={`letter-${letter}`}
              ref={(el) => (sectionRefs.current[letter] = el)}
              className="letter-index pl-4 mb-12"
            >
              <h2 className="text-3xl font-heading font-bold mb-6 text-primary">{letter}</h2>
              {booksForLetter.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {booksForLetter.map((book) => (
                    <div key={book.id} className="palm-leaf-card bg-white rounded-lg shadow-md overflow-hidden border border-secondary/20 hover:border-secondary transition-all">
                      <div className="relative">
                        <img src={book.imageUrl} alt={`${book.title} book cover`} className="w-full h-48 object-cover" />
                        <div className={`absolute top-2 right-2 ${
                          book.category === "Ancient Text" ? "bg-primary/90" :
                          book.category === "Modern" ? "bg-secondary/90" : "bg-accent/90"
                        } text-white text-xs px-2 py-1 rounded-full`}>
                          {book.category}
                        </div>
                      </div>
                      <div className="p-4 relative z-10">
                        <h3 className="text-lg font-heading font-bold mb-1">{book.title}</h3>
                        <p className="text-sm text-darkText/80 mb-3">By {book.author} ({book.year})</p>
                        <p className="text-sm text-darkText/70 mb-4 line-clamp-2">{book.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-primary font-semibold">{book.language}</span>
                          <button className="text-secondary hover:text-secondary/80">
                            <BookOpen className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-lg p-8 text-center">
                  <p className="text-darkText/70">No books starting with letter {letter}</p>
                </div>
              )}
            </div>
          );
        })}

        {/* Load More Button - conditionally render */}
        {filteredBooks.length > 20 && (
          <div className="mt-12 text-center">
            <button className="bg-primary text-white font-medium px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors shadow-md">
              Load More Books
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
