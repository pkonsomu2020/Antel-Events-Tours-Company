import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { useParams, useNavigate } from "react-router-dom";

const destinations = [
  {
    name: "Thailand",
    image: "/ANTEL DESTINATIONS/THAILAND BG 1.jpg",
    places: 3,
    slug: "thailand",
  },
  {
    name: "South Africa",
    image: "/ANTEL DESTINATIONS/SOUTH AFRICA BG 1.jpg",
    places: 3,
    slug: "south-africa",
  },
  {
    name: "Seychelles",
    image: "/ANTEL DESTINATIONS/SEYCHELLES BG 1.jpg",
    places: 3,
    slug: "seychelles",
  },
  {
    name: "Rwanda",
    image: "/ANTEL DESTINATIONS/RWANDA BG 1.jpeg",
    places: 3,
    slug: "rwanda",
  },
  {
    name: "Mauritius",
    image: "/ANTEL DESTINATIONS/MAURITIUS BG 3.jpg",
    places: 3,
    slug: "mauritius",
  },
  {
    name: "Zanzibar",
    image: "/ANTEL DESTINATIONS/ZANZIBAR BG 2.jpg",
    places: 3,
    slug: "zanzibar",
  },
  {
    name: "Kenya",
    image: "/ANTEL DESTINATIONS/KENYA BG 1.jpg",
    places: 27,
    slug: "kenya",
  },
];

const Destination: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Destinations"
        description="Explore our carefully curated travel destinations across Africa and Asia. From tropical paradises to mountain adventures, discover your next unforgettable journey with ANTEL Events & Tours."
        keywords="travel destinations, Kenya tours, Zanzibar, Mauritius, Seychelles, Thailand, South Africa, Rwanda, vacation packages"
      />
      <Navbar />
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-secondary text-secondary-foreground relative overflow-hidden">
        <img src="/SLIDES/Banner img.png" alt="Destination Banner" className="absolute inset-0 w-full h-full object-cover z-0" style={{ opacity: 0.5 }} />
        <div className="absolute inset-0 bg-secondary z-10" style={{ opacity: 0.5 }} />
        <div className="container mx-auto px-4 text-center relative z-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Discover Amazing Destinations</h1>
          <p className="text-xl max-w-3xl mx-auto">
            From tropical paradises to mountain adventures, explore our carefully curated destinations 
            that offer unforgettable experiences and lifelong memories.
          </p>
        </div>
      </section>
      {/* Destinations Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destinations.map((dest) => (
              <div
                key={dest.name}
                className="relative rounded-xl overflow-hidden shadow group h-64 cursor-pointer"
                onClick={() => navigate(`/destination/${dest.slug}`)}
              >
                <img src={dest.image} alt={dest.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white text-2xl font-bold drop-shadow-lg">{dest.name}</div>
                <div className="absolute top-4 left-4">
                  <span className="hidden group-hover:inline-block bg-orange-500 text-white px-4 py-1 rounded font-semibold text-base shadow">{dest.places} Place{dest.places > 1 ? 's' : ''}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Destination;