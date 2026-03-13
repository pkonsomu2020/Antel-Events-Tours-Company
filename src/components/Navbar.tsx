import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search as SearchIcon } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import SearchBar from "@/components/SearchBar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-secondary shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="flex items-center">
          <img src="/ANTEL-EVENTS-LOGO.jpg" alt="Antel Events Logo" className="h-12 w-auto mr-3" />
        </Link>

        {isMobile ? (
          <>
            <div className="flex items-center gap-2">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setSearchOpen(true)}
                aria-label="Search"
                className="text-primary-foreground"
              >
                <SearchIcon size={24} />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={toggleMobileMenu}
                aria-label="Toggle menu"
                className="text-primary-foreground"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>

            {mobileMenuOpen && (
              <div className="fixed inset-0 z-40">
                <div className="fixed top-0 left-0 h-full w-72 bg-secondary shadow-lg flex flex-col">
                  <div className="flex flex-col items-start p-6 border-b border-border">
                    <img src="/ANTEL-EVENTS-LOGO.jpg" alt="Antel Events Logo" className="h-12 w-auto mb-6" />
                  </div>
                  <nav className="flex-1 flex flex-col gap-0">
                    <Link to="/" onClick={toggleMobileMenu} className="border-b border-border px-8 py-4 text-left font-semibold text-lg text-secondary-foreground hover:bg-secondary/80">HOME</Link>
                    <Link to="/about" onClick={toggleMobileMenu} className="border-b border-border px-8 py-4 text-left font-semibold text-lg text-secondary-foreground hover:bg-secondary/80">ABOUT US</Link>
                    <Link to="/gallery" onClick={toggleMobileMenu} className="border-b border-border px-8 py-4 text-left font-semibold text-lg text-secondary-foreground hover:bg-secondary/80">GALLERY</Link>
                    <Link to="/destination" onClick={toggleMobileMenu} className="border-b border-border px-8 py-4 text-left font-semibold text-lg text-secondary-foreground hover:bg-secondary/80">DESTINATION</Link>
                    <Link to="/event-package" onClick={toggleMobileMenu} className="border-b border-border px-8 py-4 text-left font-semibold text-lg text-secondary-foreground hover:bg-secondary/80">EVENT PACKAGE</Link>
                    <Link to="/contact" onClick={toggleMobileMenu} className="border-b border-border px-8 py-4 text-left font-semibold text-lg text-secondary-foreground hover:bg-secondary/80">CONTACT US</Link>
                  </nav>
                </div>
                <div className="fixed inset-0 bg-black bg-opacity-30 z-30" onClick={toggleMobileMenu}></div>
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center gap-6">
            <nav className="flex items-center gap-6">
              <Link to="/">
                <Button variant="nav" className={location.pathname === "/" ? "bg-orange-500 text-white" : ""}>Home</Button>
              </Link>
              <Link to="/about">
                <Button variant="nav" className={location.pathname === "/about" ? "bg-orange-500 text-white" : ""}>About Us</Button>
              </Link>
              <Link to="/gallery">
                <Button variant="nav" className={location.pathname === "/gallery" ? "bg-orange-500 text-white" : ""}>Gallery</Button>
              </Link>
              <Link to="/destination">
                <Button variant="nav" className={location.pathname.startsWith("/destination") ? "bg-orange-500 text-white" : ""}>Destination</Button>
              </Link>
              <Link to="/event-package">
                <Button variant="nav" className={location.pathname.startsWith("/event-package") ? "bg-orange-500 text-white" : ""}>Event Package</Button>
              </Link>
              <Link to="/contact">
                <Button variant="nav" className={location.pathname === "/contact" ? "bg-orange-500 text-white" : ""}>Contact Us</Button>
              </Link>
            </nav>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              className="text-primary-foreground"
            >
              <SearchIcon size={20} />
            </Button>
          </div>
        )}
      </div>
      
      {/* Search Dialog */}
      <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>Search</DialogTitle>
          </DialogHeader>
          <SearchBar autoFocus />
        </DialogContent>
      </Dialog>
    </header>
  );
};

export default Navbar;