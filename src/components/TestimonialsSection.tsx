import React from "react";

const offers = [
  {
    name: "Reef Hotel Nyali",
    price: "KSH22000",
    image: "/ANTEL HOTELS/KENYAN DESTINATIONS/Reef hotel Nyali/REEF HOTEL 1.jpg",
  },
  {
    name: "Isaac house Lukenya",
    price: "KSH48000",
    image: "/ANTEL HOTELS/KENYAN DESTINATIONS/ISAAC HOUSE LUKENYA/ISAAC 1.jpg",
  },
  {
    name: "Mt.Kenya Wildlife Estate",
    price: "KSH20000",
    image: "/ANTEL HOTELS/KENYAN DESTINATIONS/Mt.Kenya wildlife estate/MTKENYA 1.jpg",
  },
  {
    name: "Pendo Villas Diani",
    price: "KSH10000",
    image: "/ANTEL HOTELS/KENYAN DESTINATIONS/Pendo villas Diani/PENDO 1.jpg",
  },
  {
    name: "Maiyan Villas Nanyuki",
    price: "KSH32000",
    image: "/ANTEL HOTELS/KENYAN DESTINATIONS/Maiyan villas Nanyuki/MAIYAN 1.jpg",
  },
  {
    name: "Olakaira Mara Homes",
    price: "KSH25000",
    image: "/ANTEL HOTELS/KENYAN DESTINATIONS/OLAKAIRA MARA HOMES/OLAKAIRA 1.jpg",
  },
];

const TestimonialsSection = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-8">
        <div className="text-orange-500 font-script text-xl mb-1">Best Plan</div>
        <h2 className="text-4xl font-bold text-gray-800 mb-2">Choose Holiday Offer</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {offers.slice(0, 3).map((offer) => (
          <div key={offer.name} className="relative rounded-lg overflow-hidden shadow group h-72">
            <img src={offer.image} alt={offer.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <span className="absolute top-4 left-4 bg-orange-500 text-white px-4 py-1 rounded font-semibold text-sm">{offer.price}</span>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-10 left-4 text-white text-lg font-bold drop-shadow-lg">{offer.name}</div>
            <div className="absolute bottom-4 left-4 text-white text-sm flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="3" /></svg>
              Per Night
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {offers.slice(3, 6).map((offer) => (
          <div key={offer.name} className="relative rounded-lg overflow-hidden shadow group h-72">
            <img src={offer.image} alt={offer.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <span className="absolute top-4 left-4 bg-orange-500 text-white px-4 py-1 rounded font-semibold text-sm">{offer.price}</span>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-10 left-4 text-white text-lg font-bold drop-shadow-lg">{offer.name}</div>
            <div className="absolute bottom-4 left-4 text-white text-sm flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="3" /></svg>
              Per Night
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button
          className="bg-orange-500 text-white font-semibold px-8 py-3 rounded-md shadow hover:bg-orange-600 transition-all text-lg"
          onClick={() => window.location.href = "/destination/kenya"}
        >View All Offer</button>
      </div>
    </div>
  </section>
);

export default TestimonialsSection;