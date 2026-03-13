import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Check, 
  Users, 
  Clock, 
  Camera, 
  Music,
  Utensils,
  Car,
  Flower,
  Crown,
  Sparkles
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import eventsImage from "@/assets/events-image.jpg";
import heroImage from "@/assets/hero-image.jpg";
import teamImage from "@/assets/team-image.jpg";

function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

const EventPackage = () => {
  const navigate = useNavigate();
  const eventPackages = [
    {
      name: "Zanzibar Honeymoon Package",
      duration: "4 Days 3 Nights",
      price: "KSH.160000",
      image: "/ANTEL EVENTS/ZANZIBAR HONEYMOON PACKAGE/ZANZIBAR 1.jpg",
    },
    {
      name: "Beach Wedding Package",
      price: "KSH.6000",
      image: "/ANTEL EVENTS/BEACH WEDDING PACKAGE/BEACH PCK 1.jpg",
    },
    {
      name: "Garden Wedding Package",
      price: "KSH.500000",
      image: "/ANTEL EVENTS/GARDEN WEDDING PACKAGE/GARDEN WEDDING 1.jpg",
    },
    {
      name: "Diani Camping Packages",
      price: "KSH.15000",
      image: "/ANTEL EVENTS/DIANI CAMPING PACKAGES/DIANI 1.jpg",
    },
    {
      name: "Birthday packages",
      duration: "2 Nights 3 Days",
      price: "KSH.25000",
      image: "/ANTEL EVENTS/BIRTHDAY PACKAGES/BIRTHDAY PC 1.jpg",
    },
    {
      name: "Couple's Getaway Package",
      duration: "3 Nights 4 Days",
      price: "KSH.18000",
      image: "/ANTEL EVENTS/COUPLE'S GETAWAY PACKAGE/COUPLE'S 1.jpg",
    },
    {
      name: "Girls Trip Package",
      duration: "3 Nights 4 Days",
      price: "KSH.18000",
      image: "/ANTEL EVENTS/GIRLS TRIP PACKAGE/SULTANAS 1.jpg",
    },
    {
      name: "Anniversary Package",
      duration: "2 Nights 3 Days",
      price: "KSH.75000",
      image: "/ANTEL EVENTS/ANNIVERSARY PACKAGE/ANNIVERSARY 1.jpg",
    },
    {
      name: "End of Year Party Package",
      duration: "3 Nights 4 Days",
      price: "KSH.50000",
      image: "/ANTEL EVENTS/END OF YEAR PARTY PACKAGE/END YEAR PARTY 1.jpg",
    },
    {
      name: "Family Trip Package",
      duration: "3 Nights 4 Days",
      price: "KSH.15000",
      image: "/ANTEL EVENTS/FAMILY TRIP PACKAGE/FAMILY PC 1.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-secondary text-secondary-foreground relative overflow-hidden">
        <img src="/SLIDES/Banner img.png" alt="Event Package Banner" className="absolute inset-0 w-full h-full object-cover z-0" style={{ opacity: 0.5 }} />
        <div className="absolute inset-0 bg-secondary z-10" style={{ opacity: 0.5 }} />
        <div className="container mx-auto px-4 text-center relative z-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Event Packages</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Choose from our carefully crafted event packages designed to make your special day perfect. 
            From intimate gatherings to grand celebrations, we have the perfect package for you.
          </p>
        </div>
      </section>

      {/* Event Packages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-2">Event Packages</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Choose from our curated event packages for every special occasion.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventPackages.map((pkg, idx) => (
              <div key={pkg.name + idx} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden flex flex-col">
                <div className="relative">
                  <img src={pkg.image} alt={pkg.name} className="w-full h-48 object-cover" />
                  <span className="absolute top-3 left-3 bg-orange-500 text-white px-3 py-1 rounded text-xs font-semibold flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    {pkg.duration ? pkg.duration : 'Per Event'}
                  </span>
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-lg font-bold leading-tight">{pkg.name}</h3>
                      <span className="text-lg font-bold text-orange-500 whitespace-nowrap ml-2">{pkg.price}</span>
                    </div>
                  </div>
                  <button
                    className="w-full mt-3 bg-orange-500 text-white font-semibold py-2.5 rounded shadow hover:bg-orange-600 transition-all"
                    onClick={() => navigate(`/event-package/${slugify(pkg.name)}`)}
                  >Book Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-6 w-6" />
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Plan Your Event?</h2>
            <Sparkles className="h-6 w-6" />
          </div>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let us help you create an unforgettable event. Contact us today for a personalized quote and consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button variant="hero" size="lg">Book Consultation</Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-secondary">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EventPackage;