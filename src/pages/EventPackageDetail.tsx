import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import ImageLightbox from "@/components/ImageLightbox";
import ImageWithLoader from "@/components/ImageWithLoader";
import { Calendar, Gift, Users, CheckCircle, Info, MapPin, Sparkles, Heart, Sun, PartyPopper } from "lucide-react";
import { getMapUrl } from "@/lib/hotelCoordinates";

// Helper to slugify event names
function slugify(str: string) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

// Event data (details, images, inclusions, etc.)
const eventDetails: Record<string, {
  name: string;
  duration?: string;
  price: string;
  images: string[];
  description?: string;
  inclusions?: string[];
  extraInfo?: React.ReactNode;
}> = {
  [slugify("Zanzibar Honeymoon Package")]: {
    name: "Zanzibar Honeymoon Package",
    duration: "4 Days 3 Nights",
    price: "KSH.160000",
    images: [
      "/ANTEL EVENTS/ZANZIBAR HONEYMOON PACKAGE/ZANZIBAR 1.jpg",
      "/ANTEL EVENTS/ZANZIBAR HONEYMOON PACKAGE/ZANZIBAR 2.jpg",
      "/ANTEL EVENTS/ZANZIBAR HONEYMOON PACKAGE/ZANZIBAR 3.jpg",
      "/ANTEL EVENTS/ZANZIBAR HONEYMOON PACKAGE/ZANZIBAR 4.jpg",
      "/ANTEL EVENTS/ZANZIBAR HONEYMOON PACKAGE/ZANZIBAR 5.jpg",
      // Add more images if available
    ],
    description: `🌴 DAY I ARRIVAL AND IDEAL TOUR* 🌴\nYet your first lovely day to the stunning beach island and leading beach destination. Our charming driver will pick you from Airport to your hotel: Mchanga Zanzibar. There you will have time for check in and begin your lovely day to the heart of Zanzibar. Places will visit.\n🌴Prison island\n🌴Nakupenda Sandbank \nThese ideal tours are the remarkable opportunity for you to experience in Zanzibar. \n\n 🏝ACTIVITIES 🏝\n♡ Visit Prison island \n♡ Visit giant turtles \n♡ Visit Nakupenda sandbank\n♡ Swimming \n♡ Snorkeling if interested \n🌴 DAY II SAFARI BLUE🌴\nThis is a full day tour, explore the Indian ocean coast in traditional dhow. Safari Blue will give you a great opportunity to swim in the blue lagoon and hidden island Kwale. The pick up will begin from your hotel then direct to Fumba fisherman village . \n🏝 ACTIVITIES 🏝\n♡Visit the Sandbank\n♡Coral reef tour\n♡Blue lagoon tour\n♡Kwale island tour\n♡Historical baobab tour\n\n 🌴 DAY III DOLHIN TOUR, AQUARIUM & Sunset Cruise 🌴\nYet a convenient moment and alot to create as part of your lovely memories, Dolphin tour is a popular tour in Zanzibar yet let say no chase to these creatures.\nTour will begin from your hotel to Matemwe village where we will began our tour, then we will ride to Nungwi for next tour which will be swimming with sea turtles a d end up in sunset cruise for the evening party.\n🏝 ACTIVITES 🏝\n♡ Snorkeling \n♡ Swimming with sea turtles \n♡Relax and the sandbank\n♡Dolphin tour\n♡ Traditional music`,
    inclusions: [
      "APT TRANSFER",
      "SHUTTLE CAR ",
      "ACCOMODATION ",
      "BREAKFAST ",
      "BBQ FOR 3 DAYS",
      "EXPERT TOUR GUIDE",
      "EXCURSION",
      "BOAT FOR TRIO TRIPS",
      "ALL ENTRANCES FEES"
    ],
  },
  [slugify("Beach Wedding Package")]: {
    name: "Beach Wedding Package",
    price: "KSH.6000 per person",
    images: [
      "/ANTEL EVENTS/BEACH WEDDING PACKAGE/BEACH PCK 1.jpg",
      "/ANTEL EVENTS/BEACH WEDDING PACKAGE/BEACH PCK 2.jpg",
      "/ANTEL EVENTS/BEACH WEDDING PACKAGE/BEACH PCK 3.jpg",
    ],
    description: "Beach wedding package for your special day.",
  },
  [slugify("Garden Wedding Package")]: {
    name: "Garden Wedding Package",
    price: "KSH.500000 (min 300 guests)",
    images: [
      "/ANTEL EVENTS/GARDEN WEDDING PACKAGE/GARDEN WEDDING 1.jpg",
      "/ANTEL EVENTS/GARDEN WEDDING PACKAGE/GARDEN WEDDING 2.jpg",
      "/ANTEL EVENTS/GARDEN WEDDING PACKAGE/GARDEN WEDDING 3.jpg",
      "/ANTEL EVENTS/GARDEN WEDDING PACKAGE/GARDEN WEDDING 4.jpg",
      "/ANTEL EVENTS/GARDEN WEDDING PACKAGE/GARDEN WEDDING 5.jpg",
      "/ANTEL EVENTS/GARDEN WEDDING PACKAGE/GARDEN WEDDING 6.jpg",
      "/ANTEL EVENTS/GARDEN WEDDING PACKAGE/GARDEN WEDDING 7.jpg",
    ],
    description: "Garden wedding minimum 300 guests.",
    inclusions: [
      "Hexagon tent",
      "Dressed Chairs",
      "Dressed round tables",
      "Rectangle dressed tables",
      "Food tent",
      "Table flowers",
      "Tent Deco",
      "Tent lights",
      "Church flowers & reception deco",
      "Carpet",
      "Transport",
      "Moontable",
      "Bridegroom chairs",
      "Stage",
      "Cake 3 tier",
      "Photography"
    ],
  },
  [slugify("Diani Camping Packages")]: {
    name: "Diani Camping Packages",
    price: "KSH.15000",
    images: [
      "/ANTEL EVENTS/DIANI CAMPING PACKAGES/DIANI 1.jpg",
      "/ANTEL EVENTS/DIANI CAMPING PACKAGES/DIANI 2.jpg",
      "/ANTEL EVENTS/DIANI CAMPING PACKAGES/DIANI 3.jpg",
    ],
    description: "Camping packages in Diani word of life.",
    inclusions: [
      "Full board meal plan",
      "Return SGR tickets",
      "Return private transfers",
      "6 nights accommodation"
    ],
  },
  [slugify("Birthday packages")]: {
    name: "Birthday packages",
    duration: "2 Nights 3 Days",
    price: "KSH.25000 per person",
    images: [
      "/ANTEL EVENTS/BIRTHDAY PACKAGES/BIRTHDAY PC 1.jpg",
      "/ANTEL EVENTS/BIRTHDAY PACKAGES/BIRTHDAY PC 2.jpg",
      "/ANTEL EVENTS/BIRTHDAY PACKAGES/BIRTHDAY PC 3.jpg",
      "/ANTEL EVENTS/BIRTHDAY PACKAGES/BIRTHDAY PC 4.jpg",
    ],
    description: "2 nights 3 days Birthday packages for 16 guests (Max 10 adults). This is in Watamu.",
    inclusions: [
      "Return SGR tickets",
      "Return private transfers",
      "2 nights accommodation",
      "Chef on set"
    ],
    extraInfo: <div className="mt-2">$200</div>,
  },
  [slugify("Couple's Getaway Package")]: {
    name: "Couple's Getaway Package",
    duration: "3 Nights 4 Days",
    price: "KSH.18000 per person",
    images: [
      "/ANTEL EVENTS/COUPLE'S GETAWAY PACKAGE/COUPLE'S 1.jpg",
      "/ANTEL EVENTS/COUPLE'S GETAWAY PACKAGE/COUPLE'S 2.jpg",
      "/ANTEL EVENTS/COUPLE'S GETAWAY PACKAGE/COUPLE'S 3.jpg",
      "/ANTEL EVENTS/COUPLE'S GETAWAY PACKAGE/COUPLE'S 4.jpg",
      "/ANTEL EVENTS/COUPLE'S GETAWAY PACKAGE/COUPLE'S 5.jpg",
    ],
    description: "3 NIGHTS 4 DAYS COUPLE’S GETAWAY PACKAGE FOR 30 GUESTS. In Nyali.",
    inclusions: [
      "Return SGR tickets",
      "Return private transfers",
      "3 nights accommodation",
      "Chef on set"
    ],
    extraInfo: <div className="mt-2">$125</div>,
  },
  [slugify("Girls Trip Package")]: {
    name: "Girls Trip Package",
    duration: "3 Nights 4 Days",
    price: "KSH.18000 per person",
    images: [
      "/ANTEL EVENTS/GIRLS TRIP PACKAGE/SULTANAS 1.jpg",
      "/ANTEL EVENTS/GIRLS TRIP PACKAGE/SULTANAS 2.jpg",
      "/ANTEL EVENTS/GIRLS TRIP PACKAGE/SULTANAS 3.jpg",
      "/ANTEL EVENTS/GIRLS TRIP PACKAGE/SULTANAS 4.jpg",
      "/ANTEL EVENTS/GIRLS TRIP PACKAGE/SULTANAS 5.jpg",
    ],
    description: "DIANI 3 NIGHTS 4 DAYS GIRLS TRIP PACKAGE FOR 20 GUESTS (Villa Sultanas)",
    inclusions: [
      "Return SGR tickets",
      "Return private transfers",
      "3 nights accommodation",
      "Chef on set"
    ],
  },
  [slugify("Anniversary Package")]: {
    name: "Anniversary Package",
    duration: "2 Nights 3 Days",
    price: "KSH.75000 per couple",
    images: [
      "/ANTEL EVENTS/ANNIVERSARY PACKAGE/ANNIVERSARY 1.jpg",
      "/ANTEL EVENTS/ANNIVERSARY PACKAGE/ANNIVERSARY 2.jpg",
      "/ANTEL EVENTS/ANNIVERSARY PACKAGE/ANNIVERSARY 3.jpg",
      "/ANTEL EVENTS/ANNIVERSARY PACKAGE/ANNIVERSARY 4.jpg",
      "/ANTEL EVENTS/ANNIVERSARY PACKAGE/ANNIVERSARY 5.jpg",
      "/ANTEL EVENTS/ANNIVERSARY PACKAGE/ANNIVERSARY PACKAGE BG.png",
    ],
    description: "2 NIGHTS 3 DAYS ANNIVERSARY PACKAGE. Anniversary package at Diani reef beach resort & spa.",
    inclusions: [
      "Return SGR tickets",
      "Return private transfers",
      "2 nights accommodation",
      "Full board meal plan"
    ],
  },
  [slugify("End of Year Party Package")]: {
    name: "End of Year Party Package",
    duration: "3 Nights 4 Days",
    price: "KSH.50000 per person",
    images: [
      "/ANTEL EVENTS/END OF YEAR PARTY PACKAGE/END YEAR PARTY 1.jpg",
      "/ANTEL EVENTS/END OF YEAR PARTY PACKAGE/END YEAR PARTY 2.jpg",
      "/ANTEL EVENTS/END OF YEAR PARTY PACKAGE/END YEAR PARTY 3.jpg",
      "/ANTEL EVENTS/END OF YEAR PARTY PACKAGE/END YEAR PARTY 4.jpg",
      "/ANTEL EVENTS/END OF YEAR PARTY PACKAGE/END YEAR PARTY 5.jpg",
    ],
    description: "3 NIGHTS 4 DAYS END OF YEAR PARTY PACKAGE. End of year party event @ the reef hotel Mombasa.",
    inclusions: [
      "Return SGR tickets",
      "Return private transfers",
      "3 nights accommodation",
      "All inclusive meal plan"
    ],
  },
  [slugify("Family Trip Package")]: {
    name: "Family Trip Package",
    duration: "3 Nights 4 Days",
    price: "KSH.15000 per person",
    images: [
      "/ANTEL EVENTS/FAMILY TRIP PACKAGE/FAMILY PC 1.jpg",
      "/ANTEL EVENTS/FAMILY TRIP PACKAGE/FAMILY PC 2.jpg",
      "/ANTEL EVENTS/FAMILY TRIP PACKAGE/FAMILY PC 3.jpg",
      "/ANTEL EVENTS/FAMILY TRIP PACKAGE/FAMILY PC 4.jpg",
    ],
    description: "3 NIGHTS 4 DAYS FAMILY TRIP PACKAGE.",
    inclusions: [
      "Return SGR tickets",
      "Return private transfers",
      "3 nights accommodation",
      "Chef on set"
    ],
  },
};

const EventPackageDetail: React.FC = () => {
  const { eventSlug } = useParams();
  const event = eventSlug ? eventDetails[eventSlug] : undefined;
  const [selectedImage, setSelectedImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [date, setDate] = useState("");
  const navigate = useNavigate();
  // Helper to add to cart
  function addToCart() {
    if (!event) return;
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push({
      name: event.name,
      price: parseInt(event.price.replace(/[^0-9]/g, ""), 10),
      quantity: 1,
      date,
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    navigate("/cart");
  }

  if (!event) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-3xl font-bold mb-4">Event Package Not Found</h1>
          <p className="text-lg">The event package you are looking for does not exist.</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-8 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <Breadcrumb
            items={[
              { label: "Event Packages", href: "/event-package" },
              { label: event.name }
            ]}
            className="mb-4 text-white"
          />
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center mx-auto">{event.name}</h1>
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-8">
          {/* Gallery */}
          <div className="flex-1">
            <div className="mb-4">
              <ImageWithLoader
                src={event.images[selectedImage]}
                alt={event.name + " main gallery"}
                className="rounded-lg object-cover w-full h-[340px] md:h-[420px] mb-4 cursor-pointer"
                skeletonClassName="rounded-lg w-full h-[340px] md:h-[420px]"
                onClick={() => setLightboxOpen(true)}
              />
              <div className="flex gap-3 overflow-x-auto pb-2">
                {event.images.map((img, i) => (
                  <ImageWithLoader
                    key={i}
                    src={img}
                    alt={event.name + " gallery " + (i + 1)}
                    className={`rounded-lg object-cover w-28 h-20 cursor-pointer border-2 transition-all duration-200 flex-shrink-0 ${selectedImage === i ? 'border-orange-500' : 'border-transparent'}`}
                    skeletonClassName="rounded-lg w-28 h-20"
                    onClick={() => setSelectedImage(i)}
                  />
                ))}
              </div>
            </div>
            {/* Event Details Below Gallery */}
            <div className="bg-white rounded-2xl shadow p-8 mt-8">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                {event.duration && (
                  <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-1 rounded-full font-semibold text-sm">
                    <Calendar className="w-4 h-4" /> {event.duration}
                  </span>
                )}
                <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1 rounded-full font-semibold text-sm">
                  <Gift className="w-4 h-4" /> {event.price}
                </span>
              </div>
              <h2 className="text-2xl font-bold mb-2 flex items-center gap-2 text-orange-500">
                <Sparkles className="w-6 h-6" /> Event Details
              </h2>
              {event.description && (
                <div className="mb-6 text-base leading-relaxed whitespace-pre-wrap">
                  {event.description.split('\n').map((line, idx) => (
                    <div key={idx} className={line.startsWith('🌴') || line.startsWith('🏝') ? 'font-semibold text-lg text-orange-600 mt-4 mb-1 flex items-center gap-2' : ''}>
                      {line.startsWith('🌴') && <Sun className="w-5 h-5 inline-block text-yellow-400 mr-1" />}
                      {line.startsWith('🏝') && <MapPin className="w-5 h-5 inline-block text-blue-400 mr-1" />}
                      {line.startsWith('♡') && <Heart className="w-4 h-4 inline-block text-pink-400 mr-1" />}
                      {line.startsWith('Party') && <PartyPopper className="w-4 h-4 inline-block text-purple-400 mr-1" />}
                      {line}
                    </div>
                  ))}
                </div>
              )}
              {event.inclusions && (
                <>
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-2 text-green-600"><CheckCircle className="w-5 h-5" /> Package Inclusions</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                    {event.inclusions.map((inc, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-base text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-600" /> {inc}
                      </li>
                    ))}
                  </ul>
                </>
              )}
              {event.extraInfo && (
                <div className="mt-4 p-4 bg-blue-50 rounded-lg flex items-center gap-2 text-blue-700">
                  <Info className="w-5 h-5" /> {event.extraInfo}
                </div>
              )}
            </div>
            {/* Booking Tour Form — temporarily disabled */}
            <div className="bg-white rounded-2xl shadow p-8 mt-8">
              <h2 className="text-2xl font-bold mb-6">Book This Package</h2>
              <div className="flex flex-col items-center justify-center py-8 text-center gap-5">
                <p className="text-lg font-semibold text-gray-700">Book via WhatsApp or Call us</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://wa.me/254725814767"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-full transition-all shadow text-lg"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.52 5.847L0 24l6.335-1.498A11.956 11.956 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.667-.5-5.207-1.377l-.373-.22-3.864.914.965-3.768-.242-.387A9.94 9.94 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                    </svg>
                    WhatsApp
                  </a>
                  <a
                    href="tel:+254725814767"
                    className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full transition-all shadow text-lg"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call Us
                  </a>
                </div>
                <p className="text-sm text-gray-400">+254 725 814767</p>
              </div>
            </div>
          </div>
          {/* Sidebar */}
          <div className="w-full lg:w-96 flex-shrink-0 flex flex-col gap-8">
            {/* Booking Form */}
            <div className="bg-white rounded-2xl shadow p-8 mb-0">
              <h2 className="text-2xl font-bold mb-4">Book the Event</h2>
              <hr className="my-4" />
              <div className="mb-4">
                <div className="font-semibold mb-2">Select Your Date</div>
                <input type="date" className="w-full border rounded px-4 py-2" />
              </div>
              <div className="font-semibold text-lg mb-4">Price: <span className="text-orange-500 font-bold">{event.price}</span></div>
              <button className="w-full bg-orange-500 text-white font-semibold py-3 rounded shadow hover:bg-orange-600 transition-all text-lg" onClick={addToCart}>Book Now</button>
            </div>
            {/* Map Location Card */}
            <div className="bg-white rounded-xl shadow p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="text-lg font-semibold">Map Location</div>
                <a
                  href={`https://www.google.com/maps/search/${encodeURIComponent(event.name || "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:underline flex items-center gap-1"
                >
                  Open in Maps ↗
                </a>
              </div>
              <iframe
                src={getMapUrl(eventSlug || "", event.name || "Kenya")}
                width="100%"
                height="220"
                style={{ border: 0, borderRadius: "8px" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Event Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      
      {lightboxOpen && (
        <ImageLightbox
          images={event.images}
          currentIndex={selectedImage}
          onClose={() => setLightboxOpen(false)}
          onNext={() => setSelectedImage((prev) => (prev + 1) % event.images.length)}
          onPrevious={() => setSelectedImage((prev) => (prev - 1 + event.images.length) % event.images.length)}
          alt={event.name}
        />
      )}
      
      <Footer />
    </div>
  );
};

export default EventPackageDetail; 