import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Compass, Gift, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "Sightseeing Tours & Travel",
    description: "Explore captivating destinations with expertly curated itineraries.",
    icon: <Compass className="h-8 w-8 text-primary" />,
    image: "/SERVICES SECTION/service3.jpg",
  },
  {
    title: "Exclusive Rewards & Elegant Living",
    description: "Enjoy complimentary gifts like calendars, notebooks, and more, while experiencing luxurious accommodations.",
    icon: <Gift className="h-8 w-8 text-primary" />,
    image: "/SERVICES SECTION/antel-merchandise.png",
  },
  {
    title: "Extraordinary Group & Events Packages",
    description: "Unforgettable group adventures and personalized event packages, including birthdays and anniversaries.",
    icon: <Calendar className="h-8 w-8 text-primary" />,
    image: "/SERVICES SECTION/GARDEN WEDDING 1.jpg",
  },
];

const packages = [
  {
    name: "Eden Beach Apartments, Shanzu",
    location: "Kenya",
    price: "KSh6,500",
    image: "/ANTEL HOTELS/KENYAN DESTINATIONS/Eden beach apartments/EDEN 1.jpg",
  },
  {
    name: "Olakaira Mara Homes, Masai Mara",
    location: "Kenya",
    price: "KSh25,000",
    image: "/ANTEL HOTELS/KENYAN DESTINATIONS/OLAKAIRA MARA HOMES/OLAKAIRA 1.jpg",
  },
  {
    name: "Maiyan Villas Nanyuki",
    location: "Kenya",
    price: "KSh32,000",
    image: "/ANTEL HOTELS/KENYAN DESTINATIONS/Maiyan villas Nanyuki/MAIYAN 1.jpg",
  },
  {
    name: "Pendo Villas Diani",
    location: "Kenya",
    price: "KSh10,000",
    image: "/ANTEL HOTELS/KENYAN DESTINATIONS/Pendo villas Diani/PENDO 1.jpg",
  },
  {
    name: "Mt.Kenya Wildlife Estate",
    location: "Kenya",
    price: "KSh20,000",
    image: "/ANTEL HOTELS/KENYAN DESTINATIONS/Mt.Kenya wildlife estate/MTKENYA 1.jpg",
  },
  {
    name: "Southern Palm Beach Resort Diani",
    location: "Kenya",
    price: "KSh28,000",
    image: "/ANTEL HOTELS/KENYAN DESTINATIONS/Southern palm beach resort/SOUTHERN 1.jpg",
  },
];

const PackageSection = () => {
  const navigate = useNavigate();
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <div className="text-orange-500 font-script text-xl mb-1">Perfect for You</div>
            <h2 className="text-4xl font-bold text-gray-800 mb-2">Popular Tour Package</h2>
          </div>
          <button
            className="bg-orange-500 text-white font-semibold px-8 py-3 rounded-md shadow hover:bg-orange-600 transition-all text-lg mt-4 md:mt-0"
            onClick={() => navigate("/destination")}
          >View All Tour</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.slice(0, 3).map((pkg, idx) => (
            <div key={pkg.name} className="bg-white rounded-xl shadow p-0 overflow-hidden">
              <div className="relative">
                <img src={pkg.image} alt={pkg.name} className="w-full h-56 object-cover" />
                <span className="absolute top-4 left-4 bg-orange-500 text-white px-4 py-1 rounded font-semibold flex items-center gap-2 text-sm">
                  <svg className="w-4 h-4 inline-block mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  Per Night
                </span>
              </div>
              <div className="p-6 flex flex-col gap-2">
                <div className="text-2xl font-semibold text-gray-800">{pkg.name}</div>
                <div className="flex items-center text-gray-500 text-base gap-1">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  {pkg.location}
                </div>
                <div className="flex items-center justify-between mt-4">
                  <button
                    className="border border-orange-500 text-orange-500 px-4 py-2 rounded font-semibold hover:bg-orange-50 transition-all"
                    onClick={() => navigate(`/destination/kenya/${pkg.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`)}
                  >BOOK NOW &rarr;</button>
                  <div className="text-base text-gray-600">Starting From <span className="text-orange-500 font-bold">{pkg.price}</span></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {packages.slice(3, 6).map((pkg, idx) => (
            <div key={pkg.name} className="bg-white rounded-xl shadow p-0 overflow-hidden">
              <div className="relative">
                <img src={pkg.image} alt={pkg.name} className="w-full h-56 object-cover" />
                <span className="absolute top-4 left-4 bg-orange-500 text-white px-4 py-1 rounded font-semibold flex items-center gap-2 text-sm">
                  <svg className="w-4 h-4 inline-block mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  Per Night
                </span>
              </div>
              <div className="p-6 flex flex-col gap-2">
                <div className="text-2xl font-semibold text-gray-800">{pkg.name}</div>
                <div className="flex items-center text-gray-500 text-base gap-1">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  {pkg.location}
                </div>
                <div className="flex items-center justify-between mt-4">
                  <button
                    className="border border-orange-500 text-orange-500 px-4 py-2 rounded font-semibold hover:bg-orange-50 transition-all"
                    onClick={() => navigate(`/destination/kenya/${pkg.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`)}
                  >BOOK NOW &rarr;</button>
                  <div className="text-base text-gray-600">Starting From <span className="text-orange-500 font-bold">{pkg.price}</span></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const destinations = [
  {
    name: "Thailand",
    image: "/ANTEL DESTINATIONS/THAILAND BG 1.jpg",
  },
  {
    name: "South Africa",
    image: "/ANTEL DESTINATIONS/SOUTH AFRICA BG 1.jpg",
  },
  {
    name: "Seychelles",
    image: "/ANTEL DESTINATIONS/SEYCHELLES BG 1.jpg",
  },
  {
    name: "Rwanda",
    image: "/ANTEL DESTINATIONS/RWANDA BG 1.jpeg",
  },
  {
    name: "Mauritius",
    image: "/ANTEL DESTINATIONS/MAURITIUS BG 3.jpg",
  },
  {
    name: "Zanzibar",
    image: "/ANTEL DESTINATIONS/ZANZIBAR BG 2.jpg",
  },
];

const DestinationsSection = () => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <div className="text-center mb-8">
        <div className="text-orange-500 font-script text-xl mb-1">Get Ready To</div>
        <h2 className="text-4xl font-bold text-gray-800 mb-2">Explore Top Destination</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {destinations.slice(0, 3).map((dest) => (
          <div key={dest.name} className="relative rounded-xl overflow-hidden shadow group h-64">
            <img src={dest.image} alt={dest.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white text-xl font-bold drop-shadow-lg">{dest.name}</div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {destinations.slice(3, 6).map((dest) => (
          <div key={dest.name} className="relative rounded-xl overflow-hidden shadow group h-64">
            <img src={dest.image} alt={dest.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white text-xl font-bold drop-shadow-lg">{dest.name}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ServicesSection = () => (
  <>
    {/* Services Section */}
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Premium Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive range of event planning and tour services, customized to meet your specific needs and exceed your expectations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden group border-border hover:border-primary transition-colors duration-300 animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardHeader className="flex flex-row items-center gap-4 pt-6">
                {service.icon}
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
    {/* Packages Section */}
    <PackageSection />
    {/* Destinations Section */}
    <DestinationsSection />
  </>
);

export default ServicesSection;