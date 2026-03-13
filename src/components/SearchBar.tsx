import React, { useState, useEffect, useRef } from "react";
import { Search, X, MapPin, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";

interface SearchResult {
  type: "hotel" | "event" | "destination";
  name: string;
  slug: string;
  destinationSlug?: string;
  price?: string;
  image?: string;
}

interface SearchBarProps {
  className?: string;
  placeholder?: string;
  autoFocus?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  className = "", 
  placeholder = "Search hotels, events, destinations...",
  autoFocus = false 
}) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const searchRef = useRef<HTMLDivElement>(null);

  // Mock search data - in production, this would come from an API
  const searchData: SearchResult[] = [
    // Destinations
    { type: "destination", name: "Thailand", slug: "thailand" },
    { type: "destination", name: "South Africa", slug: "south-africa" },
    { type: "destination", name: "Seychelles", slug: "seychelles" },
    { type: "destination", name: "Rwanda", slug: "rwanda" },
    { type: "destination", name: "Mauritius", slug: "mauritius" },
    { type: "destination", name: "Zanzibar", slug: "zanzibar" },
    { type: "destination", name: "Kenya", slug: "kenya" },
    
    // Hotels
    { type: "hotel", name: "Eden Beach Apartments, Shanzu", slug: "eden-beach-apartments-shanzu", destinationSlug: "kenya", price: "KSh 6,500" },
    { type: "hotel", name: "Reef Hotel Nyali", slug: "diani-reef-beach-hotel", destinationSlug: "kenya", price: "KSh 22,000" },
    { type: "hotel", name: "Isaac House Lukenya", slug: "isaac-house-lukenya", destinationSlug: "kenya", price: "KSh 48,000" },
    { type: "hotel", name: "Mt.Kenya Wildlife Estate", slug: "mt-kenya-wildlife-estate", destinationSlug: "kenya", price: "KSh 20,000" },
    { type: "hotel", name: "Pendo Villas Diani", slug: "pendo-villas-diani", destinationSlug: "kenya", price: "KSh 10,000" },
    { type: "hotel", name: "Lagoon Attitude Hotel, Mauritius", slug: "lagoon-attitude-hotel-mauritius", destinationSlug: "mauritius", price: "KSh 35,000" },
    { type: "hotel", name: "Jungle Paradise Beach Resort, Zanzibar", slug: "jungle-paradise-beach-resort-spa-zanzibar", destinationSlug: "zanzibar", price: "KSh 32,000" },
    
    // Events
    { type: "event", name: "Zanzibar Honeymoon Package", slug: "zanzibar-honeymoon-package", price: "KSh 160,000" },
    { type: "event", name: "Beach Wedding Package", slug: "beach-wedding-package", price: "KSh 6,000" },
    { type: "event", name: "Garden Wedding Package", slug: "garden-wedding-package", price: "KSh 500,000" },
    { type: "event", name: "Birthday Packages", slug: "birthday-packages", price: "KSh 25,000" },
    { type: "event", name: "Couple's Getaway Package", slug: "couple-s-getaway-package", price: "KSh 18,000" },
    { type: "event", name: "Girls Trip Package", slug: "girls-trip-package", price: "KSh 18,000" },
    { type: "event", name: "Anniversary Package", slug: "anniversary-package", price: "KSh 75,000" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    setIsLoading(true);
    const timer = setTimeout(() => {
      const filtered = searchData.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 8);
      
      setResults(filtered);
      setIsOpen(true);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  const handleResultClick = (result: SearchResult) => {
    setQuery("");
    setIsOpen(false);
    
    if (result.type === "destination") {
      navigate(`/destination/${result.slug}`);
    } else if (result.type === "hotel") {
      navigate(`/destination/${result.destinationSlug}/${result.slug}`);
    } else if (result.type === "event") {
      navigate(`/event-package/${result.slug}`);
    }
  };

  const clearSearch = () => {
    setQuery("");
    setResults([]);
    setIsOpen(false);
  };

  return (
    <div ref={searchRef} className={`relative ${className}`}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
        <Input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="pl-10 pr-10 h-12 text-base"
          autoFocus={autoFocus}
        />
        {query && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-border max-h-96 overflow-y-auto z-50">
          {isLoading ? (
            <div className="p-4 text-center text-muted-foreground">
              Searching...
            </div>
          ) : results.length > 0 ? (
            <div className="py-2">
              {results.map((result, index) => (
                <button
                  key={index}
                  onClick={() => handleResultClick(result)}
                  className="w-full px-4 py-3 hover:bg-muted transition-colors text-left flex items-center gap-3"
                >
                  <div className="flex-shrink-0">
                    {result.type === "destination" && (
                      <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-orange-600" />
                      </div>
                    )}
                    {result.type === "hotel" && (
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-blue-600" />
                      </div>
                    )}
                    {result.type === "event" && (
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-purple-600" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium truncate">{result.name}</div>
                    <div className="text-sm text-muted-foreground capitalize">
                      {result.type}
                      {result.price && ` • ${result.price}`}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center">
              <div className="text-muted-foreground mb-2">No results found</div>
              <div className="text-sm text-muted-foreground">
                Try searching for hotels, events, or destinations
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
