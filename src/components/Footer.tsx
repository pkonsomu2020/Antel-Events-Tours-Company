import { Link } from "react-router-dom";
import { 
  Facebook, 
  Instagram, 
  Phone, 
  Mail, 
  MapPin 
} from "lucide-react";

const TikTokIcon = (props) => (
  <svg viewBox="0 0 48 48" width={20} height={20} fill="currentColor" stroke="currentColor" {...props}>
    <path d="M18.5 15c0-2.485 2.015-4.5 4.5-4.5s4.5 2.015 4.5 4.5v7.5h3a1 1 0 110 2h-3v7.5a1 1 0 11-2 0v-7.5h-3a1 1 0 110-2h3V15z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img src="/ANTEL-EVENTS-LOGO.jpg" alt="Antel Events Logo" className="h-12 w-auto mb-4" />
            <p className="mb-4">
              Creating extraordinary events and unforgettable tours since 2010. 
              Your satisfaction is our top priority.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/people/ANTEL-Events-Tours/100063708379128/" target="_blank" rel="noopener noreferrer" 
                className="text-secondary-foreground hover:text-primary transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://www.instagram.com/antel_events_tours/?igsh=MTY0cTQ1dGEwM3B6dg%3D%3D#" target="_blank" rel="noopener noreferrer"
                className="text-secondary-foreground hover:text-primary transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://www.tiktok.com/@antel_events_tours?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer"
                className="text-secondary-foreground hover:text-primary transition-colors flex items-center">
                <img src="/icons8-tiktok-100.png" alt="TikTok" width={24} height={24} style={{ display: 'inline-block', verticalAlign: 'middle', objectFit: 'contain' }} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/booking" className="hover:text-primary transition-colors">Book Now</Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/corporate-events" className="hover:text-primary transition-colors">
                  Corporate Events
                </Link>
              </li>
              <li>
                <Link to="/services/wedding-planning" className="hover:text-primary transition-colors">
                  Wedding Planning
                </Link>
              </li>
              <li>
                <Link to="/services/luxury-tours" className="hover:text-primary transition-colors">
                  Luxury Tours
                </Link>
              </li>
              <li>
                <Link to="/services/transportation" className="hover:text-primary transition-colors">
                  Transportation Services
                </Link>
              </li>
              <li>
                <Link to="/services/custom-packages" className="hover:text-primary transition-colors">
                  Custom Packages
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-primary shrink-0" />
                <span>00200 Nairobi, Kenya</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-primary" />
                <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                  +254-725 814767
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-primary" />
                <a href="mailto:info@antelevents.com" className="hover:text-primary transition-colors">
                  info@antelevents.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-secondary-foreground/20 mt-12 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Antel Events and Tours. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;