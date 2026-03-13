import React, { useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import ImageWithLoader from "@/components/ImageWithLoader";
import FilterSort from "@/components/FilterSort";
import EmptyState from "@/components/EmptyState";
import { Hotel } from "lucide-react";

const placeholderPackage = (i: number) => ({
  name: `Sample Hotel Package ${i + 1}`,
  image: "/placeholder.jpg",
  price: "KSH.00000",
});

function slugify(str: string) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

const allPackages = {
  thailand: [
    {
      name: "Chanalai garden resort Thailand",
      image: "/ANTEL HOTELS/INTERNATIONAL DESTINATIONS/THAILAND/Chanalai Garden/Chanalai 1.jpg",
      price: "KSH.13000",
    },
    {
      name: "Phuket Marriott resort and spa",
      image: "/ANTEL HOTELS/INTERNATIONAL DESTINATIONS/THAILAND/Phuket Marriott resort and spa/PHUKET 1.jpg",
      price: "KSH.32000",
    },
    {
      name: "Amari Phuket in Thailand",
      image: "/ANTEL HOTELS/INTERNATIONAL DESTINATIONS/THAILAND/Amari Phuket/AMARI 1.jpg",
      price: "KSH.26000",
    },
  ],
  "south-africa": [
    {
      name: "Lagoon Beach Hotel and Spa, Cape Town",
      image: "/ANTEL HOTELS/INTERNATIONAL DESTINATIONS/SOUTH AFRICA DESTINATIONS/Lagoon beach hotel and spa/LAGOON 1.jpg",
      price: "KSH.15000",
    },
    {
      name: "Premier Hotel,Cape Town",
      image: "/ANTEL HOTELS/INTERNATIONAL DESTINATIONS/SOUTH AFRICA DESTINATIONS/Premier hotel/Premier 1.jpg",
      price: "KSH.16000",
    },
    {
      name: "Atlantic Palms, Cape Town",
      image: "/ANTEL HOTELS/INTERNATIONAL DESTINATIONS/SOUTH AFRICA DESTINATIONS/Atlantic palms/ATLANTIC 1.jpg",
      price: "KSH.20000",
    },
  ],
  seychelles: [
    {
      name: "Pineapple Beach Villas, Seychelles",
      image: "/ANTEL HOTELS/INTERNATIONAL DESTINATIONS/SEYCHELLES DESTINATIONS/Pineapple Beach villas/PINEAPPLE VILLA 1.jpg",
      price: "KSH.45000",
    },
    {
      name: "Palm Beach Hotel, Seychelles",
      image: "/ANTEL HOTELS/INTERNATIONAL DESTINATIONS/SEYCHELLES DESTINATIONS/Palm beach hotel Seychelles/PALM BEACH 1.jpg",
      price: "KSH.32000",
    },
    {
      name: "Oasis Hotel Restaurant and spa, Seychelles",
      image: "/ANTEL HOTELS/INTERNATIONAL DESTINATIONS/SEYCHELLES DESTINATIONS/Oasis hotel restaurant/OASIS 1.jpg",
      price: "KSH.30000",
    },
  ],
  rwanda: [
    {
      name: "The Retreat, Rwanda",
      image: "/ANTEL HOTELS/INTERNATIONAL DESTINATIONS/RWANDA DESTINATIONS/THE RETREAT, RWANDA/THE RETREAT 1.jpg",
      price: "KSH.58000",
    },
    {
      name: "4 Bedroom Villa, Rwanda",
      image: "/ANTEL HOTELS/INTERNATIONAL DESTINATIONS/RWANDA DESTINATIONS/4 BR VILLA, RWANDA/RWANDA VILLA 1.jpg",
      price: "KSH.26000",
    },
    {
      name: "The Manor Hotel, Rwanda",
      image: "/ANTEL HOTELS/INTERNATIONAL DESTINATIONS/RWANDA DESTINATIONS/MANOR HOTEL, RWANDA/MANOR HOTEL 1.jpg",
      price: "KSH.24000",
    },
  ],
  mauritius: [
    {
      name: "Lagoon Attitude Hotel, Mauritius",
      image: "/ANTEL HOTELS/INTERNATIONAL DESTINATIONS/MAURITIUS DESTINATIONS/LAGOON ATTITUDE HOTEL, MAURITIUS/LAGOON ATT 1.jpg",
      price: "KSH.35000",
    },
    {
      name: "Solana Beach, Mauritius",
      image: "/ANTEL HOTELS/INTERNATIONAL DESTINATIONS/MAURITIUS DESTINATIONS/SOLANA BEACH, MAURITIUS/SOLANA BEACH 1.jpg",
      price: "KSH.28000",
    },
    {
      name: "Villa Anakao, Mauritius",
      image: "/ANTEL HOTELS/INTERNATIONAL DESTINATIONS/MAURITIUS DESTINATIONS/VILLA ANAKAO, MAURITIUS/VILLA ANAKAO 1.jpg",
      price: "KSH.26000",
    },
  ],
  zanzibar: [
    {
      name: "Jungle Paradise Beach Resort & Spa, Zanzibar",
      image: "/ANTEL HOTELS/INTERNATIONAL DESTINATIONS/ZANZIBAR DESTINATIONS/JUNGLE PARADISE, ZANZIBAR/JUNGLE PARADISE 1.jpg",
      price: "KSH.32000",
    },
    {
      name: "Zanzibar Beach Resort",
      image: "/ANTEL HOTELS/INTERNATIONAL DESTINATIONS/ZANZIBAR DESTINATIONS/ZANZIBAR BEACH RESORT/ZANZIBAR BEACH 1.jpg",
      price: "KSH.20000",
    },
    {
      name: "Warere Beach Resort, Zanzibar",
      image: "/ANTEL HOTELS/INTERNATIONAL DESTINATIONS/ZANZIBAR DESTINATIONS/WARERE BEACH RESORT, ZANZIBAR/WARERE BEACH 1.jpg",
      price: "KSH.32000",
    },
  ],
  kenya: [
    // Eden Beach Apartments in Shanzu
    {
      name: "Eden Beach Apartments, Shanzu",
      image: "/ANTEL HOTELS/KENYAN DESTINATIONS/Eden beach apartments/EDEN 1.jpg",
      price: "KSH.6500",
      extraServices: [
        { label: "1 Bedroom", price: "KSH.9000" },
        { label: "2 Bedroom", price: "KSH.14000" },
        { label: "3 Bedroom", price: "KSH.17000" },
      ],
    },
    {
      name: "Isaac house Lukenya",
      image: "/ANTEL HOTELS/KENYAN DESTINATIONS/ISAAC HOUSE LUKENYA/ISAAC 1.jpg",
      price: "KSH.48000",
    },
    {
      name: "The Karen Residences",
      image: "/ANTEL HOTELS/KENYAN DESTINATIONS/KAREN RESIDENCE/KAREN 1.jpg",
      price: "KSH.90000",
    },
    {
      name: "Boffar Residence",
      image: "/ANTEL HOTELS/KENYAN DESTINATIONS/BOFFAR RESIDENCE, NAIVASHA/BOFFAR 1.jpg",
      price: "KSH.20000",
    },
    {
      name: "Lifestyle villa",
      image: "/ANTEL HOTELS/KENYAN DESTINATIONS/NANYUKI VILLAS/NANYUKI 1.jpg",
      price: "KSH.25000",
    },
    {
      name: "Pride Inn Mara Camp",
      image: "/ANTEL HOTELS/KENYAN DESTINATIONS/MAASAI MARA TENTS/MAASAI 1.jpg",
      price: "KSH.65000",
    },
    {
      name: "Sultanas Villa",
      image: "/ANTEL HOTELS/KENYAN DESTINATIONS/VILLA SULTANAS/SULTANAS 1.jpg",
      price: "KSH.70000",
    },
    {
      name: "Mandhari Villa",
      image: "/ANTEL HOTELS/KENYAN DESTINATIONS/VILLA MANDHARI/MANDHARI 1.jpg",
      price: "KSH.25000",
    },
    {
      name: "Bingo house, Watamu",
      image: "/ANTEL HOTELS/KENYAN DESTINATIONS/BINGO HOUSE, WATAMU/BINGO 1.jpg",
      price: "KSH.72000",
    },
    {
      name: "Turtle bay villa, Watamu",
      image: "/ANTEL HOTELS/KENYAN DESTINATIONS/TURTLE BAY VILLA/TURTLE 1.jpg",
      price: "KSH.70000",
    },
    {
      name: "Diamond dream of Africa, Malindi",
      image: "/ANTEL HOTELS/KENYAN DESTINATIONS/Diamond dream of Africa/DIAMOND 1.jpg",
      price: "KSH.38000",
    },
    {
      name: "Medina Palms Beach Villas, Watamu",
      image: "/ANTEL HOTELS/KENYAN DESTINATIONS/Medina palms beach villas/MEDINA 1.jpg",
      price: "KSH.35000",
    },
    {
      name: "Jumeirah Beachfront Apartments, Nyali",
      image: "/ANTEL HOTELS/KENYAN DESTINATIONS/Jumeirah beachfront apartments/JUMEIRAH 1.jpg",
      price: "KSH.30000",
    },
    {
      name: "Almasi Beach apartments, Nyali",
      image: "/ANTEL HOTELS/KENYAN DESTINATIONS/Almasi beach apartments/ALMASI 1.jpg",
      price: "KSH.25000",
    },
    {
      name: "Diani Reef Beach Hotel",
      image: "/ANTEL HOTELS/KENYAN DESTINATIONS/Reef hotel Nyali/REEF HOTEL 1.jpg",
      price: "KSH.22000",
    },
    {
      name: "Villa Mudzini, Bamburi",
      image: "/ANTEL HOTELS/KENYAN DESTINATIONS/4BR VILLA, BAMBURI/BAMBURI VILLA 1.jpg",
      price: "KSH.20000",
    },
    {
      name: "Swahili Beach Apartments",
      image: "/ANTEL HOTELS/KENYAN DESTINATIONS/Swahili beach apartments/swahilibeach 1.jpg",
      price: "KSH.25000",
    },
    {
      name: "Serenity villa, Shanzu",
      image: "/ANTEL HOTELS/KENYAN DESTINATIONS/SERENITY VILLA/SERENITY1.jpg",
      price: "KSH.6000",
    },
    {
      name: "Studio Cottages, Mtwapa",
      image: "/ANTEL HOTELS/KENYAN DESTINATIONS/STUDIO COTTAGES/STUDIO1.jpg",
      price: "KSH.4500",
    },
    {
      name: "Kwetu villas, Diani",
      image: "/ANTEL HOTELS/KENYAN DESTINATIONS/KWETU VILLAS/KWETU1.jpg",
      price: "KSH.55000",
    },
    {
      name: "Zhuri villas, Diani",
      image: "/ANTEL HOTELS/KENYAN DESTINATIONS/ZHURI VILLAS/ZHURI1.jpg",
      price: "KSH.40000",
    },
    // Olakaira Mara Homes in Masai Mara
    {
      name: "Olakaira Mara Homes, Masai Mara",
      image: "/ANTEL HOTELS/KENYAN DESTINATIONS/OLAKAIRA MARA HOMES/OLAKAIRA 1.jpg",
      price: "KSH.25000",
    },
    // Maiyan Villas Nanyuki
    {
      name: "Maiyan Villas Nanyuki",
      image: "/ANTEL HOTELS/KENYAN DESTINATIONS/Maiyan villas Nanyuki/MAIYAN 1.jpg",
      price: "KSH.32000",
    },
    // Pendo Villas Diani
    {
      name: "Pendo Villas Diani",
      image: "/ANTEL HOTELS/KENYAN DESTINATIONS/Pendo villas Diani/PENDO 1.jpg",
      price: "KSH.10000",
      extraServices: [
        { label: "1 Bedroom", price: "KSH.10000" },
        { label: "2 Bedroom", price: "KSH.14000" },
      ],
    },
    // Mt.Kenya Wildlife Estate
    {
      name: "Mt.Kenya Wildlife Estate",
      image: "/ANTEL HOTELS/KENYAN DESTINATIONS/Mt.Kenya wildlife estate/MTKENYA 1.jpg",
      price: "KSH.20000",
      extraServices: [
        { label: "2 Bedroom", price: "KSH.20000" },
        { label: "3 Bedroom", price: "KSH.30000" },
        { label: "4 Bedroom", price: "KSH.35000" },
        { label: "5 Bedroom", price: "KSH.40000" },
      ],
    },
    // Southern Palm Beach Resort Diani
    {
      name: "Southern Palm Beach Resort Diani",
      image: "/ANTEL HOTELS/KENYAN DESTINATIONS/Southern palm beach resort/SOUTHERN 1.jpg",
      price: "KSH.28000",
    },
  ],
};

const DestinationPackages: React.FC = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const rawPackages = allPackages[slug as keyof typeof allPackages] || [];
  
  // Convert price strings to numbers
  const packages = rawPackages.map(pkg => ({
    ...pkg,
    priceNumber: parseFloat(pkg.price.replace(/[^0-9.]/g, '')) || 0
  }));
  
  // Filter and sort state
  const [sortBy, setSortBy] = useState("default");
  const maxPrice = Math.max(...packages.map(p => p.priceNumber), 100000);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, maxPrice]);

  // Apply filters and sorting
  const filteredAndSortedPackages = useMemo(() => {
    let result = packages.filter(pkg => {
      const price = pkg.priceNumber;
      return price >= priceRange[0] && price <= priceRange[1];
    });

    // Sort
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.priceNumber - b.priceNumber);
        break;
      case "price-high":
        result.sort((a, b) => b.priceNumber - a.priceNumber);
        break;
      case "name-asc":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break;
    }

    return result;
  }, [packages, sortBy, priceRange]);

  const handleReset = () => {
    setSortBy("default");
    setPriceRange([0, maxPrice]);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-8 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Breadcrumb
            items={[
              { label: "Destinations", href: "/destination" },
              { label: slug?.replace(/-/g, " ") || "Destination" }
            ]}
            className="mb-4 text-white justify-center"
          />
          <button
            className="mb-6 px-6 py-2 bg-orange-500 text-white rounded shadow hover:bg-orange-600 transition-all font-semibold float-left"
            onClick={() => navigate('/destination')}
          >
            &larr; Back
          </button>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 capitalize">{slug?.replace(/-/g, ' ')} Tour Packages</h1>
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto px-4">
          {packages.length > 0 && (
            <div className="mb-8">
              <FilterSort
                sortBy={sortBy}
                onSortChange={setSortBy}
                priceRange={priceRange}
                onPriceRangeChange={setPriceRange}
                maxPrice={maxPrice}
                onReset={handleReset}
              />
            </div>
          )}
          
          {filteredAndSortedPackages.length === 0 ? (
            <EmptyState
              icon={Hotel}
              title="No packages found"
              description="Try adjusting your filters or explore other destinations."
              actionLabel="View All Destinations"
              onAction={() => navigate("/destination")}
            />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAndSortedPackages.map((pkg, idx) => (
              <div key={pkg.name + idx} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden">
                <div className="relative">
                  <ImageWithLoader
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-48 object-cover"
                    skeletonClassName="w-full h-48"
                  />
                  <span className="absolute top-3 left-3 bg-orange-500 text-white px-3 py-1 rounded text-xs font-semibold flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    Per Night
                  </span>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-bold leading-tight flex-1 pr-2">{pkg.name}</h3>
                    <span className="text-lg font-bold text-orange-500 whitespace-nowrap">{pkg.price}</span>
                  </div>
                  <button
                    className="w-full bg-orange-500 text-white font-semibold py-2.5 rounded shadow hover:bg-orange-600 transition-all"
                    onClick={() => navigate(`/destination/${slug}/${slugify(pkg.name)}`)}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default DestinationPackages; 