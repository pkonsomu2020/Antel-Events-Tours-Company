import React, { useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import ImageWithLoader from "@/components/ImageWithLoader";
import FilterSort from "@/components/FilterSort";
import EmptyState from "@/components/EmptyState";
import { Hotel } from "lucide-react";
import { getPackagesByArea } from "@/lib/kenyaData";

function slugify(str: string) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

const KenyaAreaPackages: React.FC = () => {
  const { area } = useParams<{ area: string }>();
  const navigate = useNavigate();

  const rawPackages = getPackagesByArea(area || "");

  // Convert price strings to numbers for filtering/sorting
  const packages = rawPackages.map((pkg) => ({
    ...pkg,
    priceNumber: parseFloat(pkg.price.replace(/[^0-9.]/g, "")) || 0,
  }));

  const [sortBy, setSortBy] = useState("default");
  const maxPrice = Math.max(...packages.map((p) => p.priceNumber), 100000);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, maxPrice]);

  const filteredAndSorted = useMemo(() => {
    let result = packages.filter(
      (pkg) => pkg.priceNumber >= priceRange[0] && pkg.priceNumber <= priceRange[1]
    );
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

  const areaLabel = area ? area.replace(/-/g, " ") : "Area";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-8 bg-secondary text-secondary-foreground relative overflow-hidden">
        <img
          src="/SLIDES/Banner img.png"
          alt="Kenya Banner"
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ opacity: 0.5 }}
        />
        <div className="absolute inset-0 bg-secondary z-10" style={{ opacity: 0.5 }} />
        <div className="container mx-auto px-4 text-center relative z-20">
          <Breadcrumb
            items={[
              { label: "Destinations", href: "/destination" },
              { label: "Kenya", href: "/destination/kenya" },
              { label: areaLabel },
            ]}
            className="mb-4 text-white justify-center"
          />
          <button
            className="mb-4 px-6 py-2 bg-orange-500 text-white rounded shadow hover:bg-orange-600 transition-all font-semibold float-left"
            onClick={() => navigate("/destination/kenya")}
          >
            ← Back
          </button>
          <h1 className="text-4xl md:text-5xl font-bold mb-2 capitalize">
            {areaLabel} Properties
          </h1>
          <p className="text-lg opacity-90">
            {packages.length} propert{packages.length === 1 ? "y" : "ies"} available
          </p>
        </div>
      </section>

      {/* Listings */}
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

          {filteredAndSorted.length === 0 ? (
            <EmptyState
              icon={Hotel}
              title="No packages found"
              description="Try adjusting your filters or explore other areas."
              actionLabel="Back to Kenya"
              onAction={() => navigate("/destination/kenya")}
            />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAndSorted.map((pkg, idx) => (
                <div
                  key={pkg.name + idx}
                  className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden"
                >
                  <div className="relative">
                    <ImageWithLoader
                      src={pkg.image}
                      alt={pkg.name}
                      className="w-full h-48 object-cover"
                      skeletonClassName="w-full h-48"
                    />
                    <span className="absolute top-3 left-3 bg-orange-500 text-white px-3 py-1 rounded text-xs font-semibold flex items-center gap-1">
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Per Night
                    </span>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-bold leading-tight flex-1 pr-2">
                        {pkg.name}
                      </h3>
                      <span className="text-lg font-bold text-orange-500 whitespace-nowrap">
                        {pkg.price}
                      </span>
                    </div>
                    <button
                      className="w-full bg-orange-500 text-white font-semibold py-2.5 rounded shadow hover:bg-orange-600 transition-all"
                      onClick={() =>
                        navigate(`/destination/kenya/${slugify(pkg.name)}`)
                      }
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

export default KenyaAreaPackages;
