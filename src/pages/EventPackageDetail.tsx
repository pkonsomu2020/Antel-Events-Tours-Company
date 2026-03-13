import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import ImageLightbox from "@/components/ImageLightbox";
import ImageWithLoader from "@/components/ImageWithLoader";
import { Calendar, Gift, Users, CheckCircle, Info, MapPin, Sparkles, Heart, Sun, PartyPopper } from "lucide-react";

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
            {/* Booking Tour Form below event details */}
            <div className="bg-white rounded-2xl shadow p-8 mt-8">
              <h2 className="text-2xl font-bold mb-6">Booking Tour Form</h2>
              <form className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="fullName" className="block font-medium">Full Name</label>
                  <input id="fullName" type="text" placeholder="Your Full Name" className="w-full border rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-200" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block font-medium">Email</label>
                  <input id="email" type="email" placeholder="Your Email" className="w-full border rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-200" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="country" className="block font-medium">Country</label>
                  <input id="country" type="text" placeholder="Country" className="w-full border rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-200" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="guests" className="block font-medium">Number of Guests</label>
                  <input id="guests" type="number" placeholder="Number of Guests" className="w-full border rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-200" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="female" className="block font-medium">Number of Female</label>
                  <input id="female" type="number" placeholder="Number of Female" className="w-full border rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-200" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="male" className="block font-medium">Number of Male</label>
                  <input id="male" type="number" placeholder="Number of Male" className="w-full border rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-200" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="kids" className="block font-medium">Number of Kids</label>
                  <input id="kids" type="number" placeholder="Number of Kids" className="w-full border rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-200" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="kidsAge" className="block font-medium">Average Age of Kids</label>
                  <input id="kidsAge" type="number" placeholder="Average Age of Kids" className="w-full border rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-200" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="mealPlan" className="block font-medium">Meal Plan</label>
                  <select id="mealPlan" className="w-full border rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-200">
                    <option>Meal Plan</option>
                    <option>None</option>
                    <option>Breakfast only</option>
                    <option>All Inclusive</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="purpose" className="block font-medium">Purpose of Visit</label>
                  <select id="purpose" className="w-full border rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-200">
                    <option>Purpose of Visit</option>
                    <option>Business</option>
                    <option>Vacation</option>
                  </select>
                </div>
                <div className="flex gap-4">
                  <div className="flex-1 space-y-2">
                    <label htmlFor="arrival" className="block font-medium">Arrival date</label>
                    <input id="arrival" type="date" className="w-full border rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-200" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <label htmlFor="departure" className="block font-medium">Departure date</label>
                    <input id="departure" type="date" className="w-full border rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-200" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="itinerary" className="block font-medium">Need an itinerary?</label>
                  <select id="itinerary" className="w-full border rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-200">
                    <option>Need an itinerary?</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="travelOption" className="block font-medium">Travel Option</label>
                  <select id="travelOption" className="w-full border rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-200">
                    <option>Travel Option</option>
                    <option>SGR</option>
                    <option>Flight</option>
                    <option>Self-drive</option>
                  </select>
                </div>
                <button type="submit" className="w-full bg-orange-500 text-white font-semibold py-3 rounded-full shadow hover:bg-orange-600 transition-all text-lg mt-4">Book Now</button>
              </form>
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
              <div className="text-lg font-semibold mb-2">Map Location</div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.123456789!2d55.1372!3d25.1122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0!2sHotel!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="200"
                style={{ border: 0 }}
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