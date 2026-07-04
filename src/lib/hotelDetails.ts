/**
 * Hotel/villa details: capacity, bedrooms, price breakdown, meal plans, etc.
 * Keyed by slugified hotel name — same slug used in the URL.
 */

export interface RoomOption {
  label: string;
  priceKsh: number;
  priceUsd?: number;
}

export interface HotelDetail {
  guests: number;           // max capacity
  bedrooms?: string;        // e.g. "5 bedrooms"
  mealPlan?: string;        // e.g. "Bed & Breakfast"
  roomOptions?: RoomOption[];
  highlights?: string[];    // bullet points
  note?: string;            // extra note
}

export const hotelDetails: Record<string, HotelDetail> = {

  // ════════════════════════════════════════════════════════════
  //  KENYA — MTWAPA
  // ════════════════════════════════════════════════════════════
  "studio-cottages-mtwapa": {
    guests: 2, bedrooms: "Studio",
    roomOptions: [{ label: "Studio (Omnia Cottages)", priceKsh: 4506, priceUsd: 35 }],
    highlights: ["Private cottage", "Self-catering", "Quiet neighbourhood"],
  },

  // ════════════════════════════════════════════════════════════
  //  KENYA — SHANZU
  // ════════════════════════════════════════════════════════════
  "eden-beach-apartments-shanzu": {
    guests: 6, bedrooms: "Suite / 1–3 Bedrooms",
    roomOptions: [
      { label: "Suite Room", priceKsh: 6500 },
      { label: "1 Bedroom", priceKsh: 9000 },
      { label: "2 Bedroom", priceKsh: 14000 },
      { label: "3 Bedroom", priceKsh: 17000 },
    ],
    highlights: ["Near Shanzu beach", "Self-catering", "Multiple room options"],
  },
  "serenity-villa-shanzu": {
    guests: 4, bedrooms: "1–2 Bedrooms",
    roomOptions: [
      { label: "1 Bedroom", priceKsh: 6437, priceUsd: 50 },
      { label: "2 Bedroom", priceKsh: 10300, priceUsd: 80 },
    ],
    highlights: ["Shanzu Mombasa", "Private villa", "Self-catering"],
  },

  // ════════════════════════════════════════════════════════════
  //  KENYA — NYALI
  // ════════════════════════════════════════════════════════════
  "jumeirah-beachfront-apartments-nyali": {
    guests: 8, bedrooms: "3–4 Bedrooms",
    roomOptions: [
      { label: "3 Bedroom", priceKsh: 38626, priceUsd: 300 },
      { label: "4 Bedroom", priceKsh: 51502, priceUsd: 400 },
    ],
    highlights: ["Beachfront location", "Nyali Mombasa", "Fully furnished"],
  },
  "almasi-beach-apartments-nyali": {
    guests: 6, bedrooms: "3 Bedrooms + SQ",
    roomOptions: [{ label: "3 Bedroom + SQ", priceKsh: 25751, priceUsd: 200 }],
    highlights: ["Beachfront", "Nyali Mombasa", "SQ included"],
  },
  "4-bedroom-apartment-in-nyali-with-sq": {
    guests: 10, bedrooms: "4 Bedrooms + SQ",
    roomOptions: [{ label: "4 Bedroom + SQ", priceKsh: 15000 }],
    highlights: ["Nyali Mombasa", "Spacious layout", "SQ included"],
  },
  "kwamby-apartments-nyali": {
    guests: 4, bedrooms: "2 Bedrooms",
    roomOptions: [{ label: "2 Bedroom", priceKsh: 12000 }],
    highlights: ["Nyali Mombasa", "Modern apartments", "Self-catering"],
  },
  "villa-ella-nyali": {
    guests: 16, bedrooms: "7 Bedrooms",
    roomOptions: [{ label: "7 Bedroom Villa", priceKsh: 60000 }],
    highlights: ["Nyali Mombasa", "Large group villa", "Private compound"],
  },
  "h2o-apartments-nyali": {
    guests: 6, bedrooms: "3 Bedrooms",
    roomOptions: [{ label: "3 Bedroom", priceKsh: 12000 }],
    highlights: ["Nyali Mombasa", "Modern apartments", "Self-catering"],
  },
  "creek-beach-villa-nyali": {
    guests: 10, bedrooms: "5 Bedrooms",
    roomOptions: [{ label: "5 Bedroom Villa", priceKsh: 50000 }],
    highlights: ["Nyali Mombasa", "Beach access", "Private villa"],
  },
  "star-villas-nyali": {
    guests: 10, bedrooms: "5 Bedrooms",
    roomOptions: [{ label: "5 Bedroom Villa", priceKsh: 30000 }],
    highlights: ["Nyali Mombasa", "Private villa", "Self-catering"],
  },

  // ════════════════════════════════════════════════════════════
  //  KENYA — BAMBURI
  // ════════════════════════════════════════════════════════════
  "villa-mudzini-bamburi": {
    guests: 8, bedrooms: "4 Bedrooms",
    roomOptions: [{ label: "4 Bedroom Standalone Villa", priceKsh: 25751, priceUsd: 200 }],
    highlights: ["Bamburi Mombasa", "Private villa", "Stand-alone"],
  },
  "swahili-beach-apartments": {
    guests: 6, bedrooms: "3 Bedrooms",
    roomOptions: [
      { label: "Executive Apartment", priceKsh: 25751, priceUsd: 200 },
      { label: "Sea View Apartment", priceKsh: 28326, priceUsd: 220 },
    ],
    highlights: ["Bamburi Mombasa", "Beachfront", "Sea views available"],
  },
  "aurelia-sands-beachfront-apartment-bamburi": {
    guests: 6, bedrooms: "Beachfront Apartment",
    roomOptions: [{ label: "Beachfront Apartment", priceKsh: 20000 }],
    highlights: ["Bamburi Mombasa", "Direct beach access", "Modern interiors"],
  },
  "azul-margarita-beach-apartment-bamburi": {
    guests: 6, bedrooms: "Studio / 1–3 Bedrooms",
    mealPlan: "Full Board",
    roomOptions: [
      { label: "Studio", priceKsh: 18000 },
      { label: "1 Bedroom", priceKsh: 20000 },
      { label: "2 Bedroom", priceKsh: 25000 },
      { label: "3 Bedroom", priceKsh: 30000 },
    ],
    highlights: ["Bamburi Mombasa", "Full board meal plan", "Beach access"],
  },

  // ════════════════════════════════════════════════════════════
  //  KENYA — MOMBASA
  // ════════════════════════════════════════════════════════════
  "diani-reef-beach-hotel": {
    guests: 2, bedrooms: "Double Room",
    roomOptions: [{ label: "Double Room", priceKsh: 22000, priceUsd: 200 }],
    highlights: ["Diani Beach", "4-star resort", "Beach access", "Pool"],
  },
  "milamax-beach-villa": {
    guests: 12, bedrooms: "5 Bedrooms",
    roomOptions: [{ label: "5 Bedroom Villa", priceKsh: 60000 }],
    highlights: ["Mombasa Coast", "Private villa", "Large group capacity"],
  },

  // ════════════════════════════════════════════════════════════
  //  KENYA — DIANI
  // ════════════════════════════════════════════════════════════
  "kwetu-villas-diani": {
    guests: 10, bedrooms: "5 Bedrooms",
    roomOptions: [{ label: "5 Bedroom Villa (Private Pool)", priceKsh: 70816, priceUsd: 550 }],
    highlights: ["Diani Beach", "Private swimming pool", "Accommodates 10 guests"],
  },
  "zhuri-villas-diani": {
    guests: 10, bedrooms: "5 Bedrooms",
    roomOptions: [{ label: "5 Bedroom Villa", priceKsh: 45064, priceUsd: 350 }],
    highlights: ["Diani Beach", "Private villa", "Accommodates 10 guests"],
  },
  "pendo-villas-diani": {
    guests: 4, bedrooms: "1–2 Bedrooms",
    roomOptions: [
      { label: "1 Bedroom", priceKsh: 10000 },
      { label: "2 Bedroom", priceKsh: 14000 },
    ],
    highlights: ["Diani Beach", "Self-catering", "Cosy villas"],
  },
  "southern-palm-beach-resort-diani": {
    guests: 6, bedrooms: "Resort Rooms",
    roomOptions: [{ label: "Standard Room", priceKsh: 28000 }],
    highlights: ["Diani Beach", "Resort facilities", "Beach access"],
  },
  "golden-duranta-villas-diani": {
    guests: 10, bedrooms: "5 Bedrooms",
    roomOptions: [{ label: "5 Bedroom Villa", priceKsh: 40000 }],
    highlights: ["Diani Beach", "Private villa", "Accommodates 10 guests"],
  },
  "golden-sun-and-sand-beach-studio-apartments-diani": {
    guests: 2, bedrooms: "Studio",
    roomOptions: [{ label: "Studio Apartment", priceKsh: 6000 }],
    highlights: ["Diani Beach", "Budget-friendly", "Couples / solo travellers"],
  },
  "kwetu-villas-diani-5-bedroom": {
    guests: 10, bedrooms: "5 Bedrooms",
    roomOptions: [{ label: "5 Bedroom Villa", priceKsh: 60000 }],
    highlights: ["Diani Beach", "Private villa", "Accommodates 10 guests"],
  },
  "jamii-villas-diani": {
    guests: 10, bedrooms: "5 Bedrooms",
    roomOptions: [{ label: "5 Bedroom Villa", priceKsh: 80000 }],
    highlights: ["Diani Beach", "Luxury villa", "Accommodates 10 guests"],
  },
  "villa-sultana-diani": {
    guests: 20, bedrooms: "9 Bedrooms",
    roomOptions: [{ label: "9 Bedroom Villa", priceKsh: 65000 }],
    highlights: ["Diani Beach", "Largest group villa", "Private compound", "Accommodates 20 guests"],
  },
  "zumaridi-villas-diani": {
    guests: 6, bedrooms: "2–3 Bedrooms",
    roomOptions: [
      { label: "2 Bedroom", priceKsh: 25000 },
      { label: "3 Bedroom", priceKsh: 30000 },
    ],
    highlights: ["Diani Beach", "Modern villas", "Self-catering"],
  },
  "blue-water-villas-diani": {
    guests: 6, bedrooms: "3 Bedrooms",
    roomOptions: [{ label: "3 Bedroom Villa", priceKsh: 25000 }],
    highlights: ["Diani Beach", "Private villa", "Self-catering"],
  },
  "elnas-haven-diani": {
    guests: 8, bedrooms: "4 Bedrooms",
    roomOptions: [{ label: "4 Bedroom Villa", priceKsh: 30000 }],
    highlights: ["Diani Beach", "Private haven", "Accommodates 8 guests"],
  },

  // ════════════════════════════════════════════════════════════
  //  KENYA — WATAMU
  // ════════════════════════════════════════════════════════════
  "bingo-house-watamu": {
    guests: 14, bedrooms: "5 Bedrooms",
    roomOptions: [{ label: "5 Bedroom Private Villa", priceKsh: 90129, priceUsd: 700 }],
    highlights: ["Watamu Beach", "Private villa", "Accommodates 14 guests"],
  },
  "turtle-bay-villa-watamu": {
    guests: 10, bedrooms: "1–5 Bedrooms",
    roomOptions: [
      { label: "1 Bedroom Apartment", priceKsh: 6437, priceUsd: 50 },
      { label: "2 Bedroom Apartment", priceKsh: 12875, priceUsd: 100 },
      { label: "3 Bedroom Villa", priceKsh: 19313, priceUsd: 150 },
      { label: "4 Bedroom Villa", priceKsh: 25751, priceUsd: 200 },
      { label: "5 Bedroom Villa", priceKsh: 32189, priceUsd: 250 },
    ],
    highlights: ["Watamu Beach", "Fully furnished", "Multiple size options"],
  },
  "medina-palms-beach-villas-watamu": {
    guests: 6, bedrooms: "Villa",
    roomOptions: [{ label: "Beach Villa", priceKsh: 32189, priceUsd: 250 }],
    highlights: ["Watamu Beach", "Beachfront", "Luxury interiors"],
  },
  "kasa-tatu-villas-watamu": {
    guests: 4, bedrooms: "2 Bedrooms",
    roomOptions: [{ label: "2 Bedroom Villa", priceKsh: 28000 }],
    highlights: ["Watamu Beach", "Private villa", "Self-catering"],
  },
  "azura-villa-watamu": {
    guests: 8, bedrooms: "4 Bedrooms",
    roomOptions: [{ label: "4 Bedroom Villa", priceKsh: 50000 }],
    highlights: ["Watamu Beach", "Private villa", "Accommodates 8 guests"],
  },
  "bingo-family-villa-watamu": {
    guests: 16, bedrooms: "5 Bedrooms",
    roomOptions: [{ label: "5 Bedroom Villa", priceKsh: 80000 }],
    highlights: ["Watamu Beach", "Large family villa", "Accommodates 16 guests"],
  },
  "the-white-villa-watamu": {
    guests: 10, bedrooms: "5 Bedrooms",
    roomOptions: [{ label: "5 Bedroom Villa", priceKsh: 35000 }],
    highlights: ["Watamu Beach", "Private villa", "Accommodates 10 guests"],
  },
  "turtle-bay-villas-watamu": {
    guests: 10, bedrooms: "5 Bedrooms",
    roomOptions: [{ label: "5 Bedroom Villa", priceKsh: 30000 }],
    highlights: ["Watamu Beach", "Private villa", "Accommodates 10 guests"],
  },

  // ════════════════════════════════════════════════════════════
  //  KENYA — MALINDI
  // ════════════════════════════════════════════════════════════
  "diamond-dream-of-africa-malindi": {
    guests: 6, bedrooms: "Villa",
    roomOptions: [{ label: "Villa", priceKsh: 38626, priceUsd: 300 }],
    highlights: ["Malindi Beach", "Luxury villa", "Direct beach access"],
  },
  "kijani-paradise-malindi": {
    guests: 4, bedrooms: "2 Bedrooms",
    roomOptions: [{ label: "2 Bedroom", priceKsh: 12000 }],
    highlights: ["Malindi", "Private villa", "Self-catering"],
  },

  // ════════════════════════════════════════════════════════════
  //  KENYA — KILIFI
  // ════════════════════════════════════════════════════════════
  "azanza-holiday-homes-kilifi": {
    guests: 8, bedrooms: "4 Bedrooms",
    roomOptions: [{ label: "4 Bedroom", priceKsh: 20000 }],
    highlights: ["Kilifi", "Holiday home", "Self-catering"],
  },
  "pazuri-homes-kilifi": {
    guests: 10, bedrooms: "4 Bedrooms + SQ",
    roomOptions: [{ label: "4 Bedroom + SQ", priceKsh: 50000 }],
    highlights: ["Kilifi", "Spacious compound", "SQ included"],
  },

  // ════════════════════════════════════════════════════════════
  //  KENYA — NAIVASHA / NAKURU / SYOKIMAU
  // ════════════════════════════════════════════════════════════
  "boffar-residence": {
    guests: 8, bedrooms: "4 Bedrooms",
    roomOptions: [{ label: "4 Bedroom Villa", priceKsh: 16738, priceUsd: 130 }],
    highlights: ["Naivasha", "Lakeside area", "Private villa"],
  },
  "lake-elementaita-mountain-lodge": {
    guests: 2, bedrooms: "Lodge Room",
    roomOptions: [{ label: "Lodge Room", priceKsh: 30000 }],
    highlights: ["Lake Elementaita", "Mountain views", "Wildlife nearby"],
  },
  "kentwood-cabins-naivasha": {
    guests: 2, bedrooms: "1 Bedroom",
    mealPlan: "Bed & Breakfast",
    roomOptions: [{ label: "Cabin (B&B)", priceKsh: 8000 }],
    highlights: ["Naivasha", "Cosy cabin", "Breakfast included"],
  },
  "boffar-cabins-naivasha": {
    guests: 2, bedrooms: "1 Bedroom",
    roomOptions: [{ label: "1 Bedroom Cabin", priceKsh: 8500 }],
    highlights: ["Naivasha", "Lakeside cabin", "Peaceful environment"],
  },
  "shawmut-suites-nakuru": {
    guests: 4, bedrooms: "2 Bedrooms",
    roomOptions: [{ label: "2 Bedroom Suite", priceKsh: 10000 }],
    highlights: ["Nakuru", "Modern suites", "Self-catering"],
  },
  "1-bedroom-luxore-apartment-syokimau": {
    guests: 2, bedrooms: "1 Bedroom",
    roomOptions: [{ label: "1 Bedroom Apartment", priceKsh: 5000 }],
    highlights: ["Syokimau Machakos", "Modern apartment", "Near JKIA"],
  },

  // ════════════════════════════════════════════════════════════
  //  KENYA — NAIROBI
  // ════════════════════════════════════════════════════════════
  "eldon-villas-studio": {
    guests: 4, bedrooms: "Studio / 1–2 Bedrooms",
    roomOptions: [
      { label: "Studio", priceKsh: 7725, priceUsd: 55 },
      { label: "1 Bedroom Standard", priceKsh: 7725, priceUsd: 60 },
      { label: "1 Bedroom Deluxe", priceKsh: 9012, priceUsd: 70 },
      { label: "2 Bedroom Standard", priceKsh: 9012, priceUsd: 70 },
      { label: "2 Bedroom Deluxe", priceKsh: 10944, priceUsd: 85 },
      { label: "1 Bedroom Standard Penthouse", priceKsh: 7725, priceUsd: 60 },
      { label: "1 Bedroom Deluxe Penthouse", priceKsh: 12875, priceUsd: 100 },
    ],
    highlights: ["Nairobi", "Modern villas", "Multiple room categories", "Penthouse options"],
  },
  "isaac-house-lukenya": {
    guests: 14, bedrooms: "7 Bedrooms",
    roomOptions: [{ label: "7 Bedroom Villa", priceKsh: 48927, priceUsd: 380 }],
    highlights: ["Lukenya Machakos", "Private villa", "Accommodates 14 guests"],
  },
  "the-karen-residences": {
    guests: 4, bedrooms: "2 Bedroom Cottage",
    roomOptions: [{ label: "2 Bedroom Cottage", priceKsh: 103005, priceUsd: 800 }],
    highlights: ["Karen Nairobi", "Luxury cottage", "Serene neighbourhood"],
  },
  "mandhari-villa": {
    guests: 4, bedrooms: "2 Bedrooms",
    roomOptions: [{ label: "2 Bedroom Villa", priceKsh: 25751, priceUsd: 200 }],
    highlights: ["Diani / Nairobi", "Private villa", "Self-catering"],
  },
  "sultanas-villa": {
    guests: 20, bedrooms: "9 Bedrooms",
    roomOptions: [{ label: "9 Bedroom Villa", priceKsh: 64378, priceUsd: 500 }],
    highlights: ["Diani Beach", "Large group villa", "Accommodates 20 guests"],
  },
  "5-bedroom-garden-estate-nairobi": {
    guests: 10, bedrooms: "5 Bedrooms",
    roomOptions: [{ label: "5 Bedroom Garden Estate", priceKsh: 50000 }],
    highlights: ["Nairobi", "Private compound", "Accommodates 10 guests"],
  },
  "4-bedroom-kiserian-nairobi": {
    guests: 8, bedrooms: "4 Bedrooms",
    roomOptions: [{ label: "4 Bedroom", priceKsh: 50000 }],
    highlights: ["Kiserian Nairobi", "Private villa", "Accommodates 8 guests"],
  },
  "3-bedroom-navilla-springs-westlands": {
    guests: 8, bedrooms: "3 Bedrooms + SQ",
    roomOptions: [{ label: "3 Bedroom + SQ", priceKsh: 20000 }],
    highlights: ["Westlands Nairobi", "Modern apartment", "Accommodates 8 guests"],
  },
  "4-bedroom-kilimani-nairobi": {
    guests: 8, bedrooms: "4 Bedrooms",
    roomOptions: [{ label: "4 Bedroom", priceKsh: 25000 }],
    highlights: ["Kilimani Nairobi", "Private villa", "Accommodates 8 guests"],
  },
  "4-bedroom-green-park-estate-athi-river": {
    guests: 10, bedrooms: "4 Bedrooms + SQ",
    roomOptions: [{ label: "4 Bedroom + SQ", priceKsh: 25000 }],
    highlights: ["Athi River Machakos", "Estate home", "Accommodates 10 guests"],
  },
  "5-bedroom-garden-estate-nairobi-budget": {
    guests: 10, bedrooms: "5 Bedrooms",
    roomOptions: [{ label: "5 Bedroom Garden Estate", priceKsh: 25000 }],
    highlights: ["Nairobi", "Private compound", "Accommodates 10 guests"],
  },
  "1-bedroom-garden-estate-nairobi": {
    guests: 2, bedrooms: "1 Bedroom",
    roomOptions: [{ label: "1 Bedroom", priceKsh: 5000 }],
    highlights: ["Nairobi Garden Estate", "Budget-friendly", "Couples / solo travellers"],
  },

  // ════════════════════════════════════════════════════════════
  //  KENYA — NANYUKI
  // ════════════════════════════════════════════════════════════
  "lifestyle-villa": {
    guests: 10, bedrooms: "5 Bedrooms",
    roomOptions: [{ label: "5 Bedroom Villa", priceKsh: 19957, priceUsd: 155 }],
    highlights: ["Nanyuki", "Private villa", "Accommodates 10 guests"],
  },
  "maiyan-villas-nanyuki": {
    guests: 6, bedrooms: "Villa",
    roomOptions: [{ label: "Villa", priceKsh: 32000 }],
    highlights: ["Nanyuki", "Scenic highland views", "Private villa"],
  },
  "mt-kenya-wildlife-estate": {
    guests: 10, bedrooms: "2–5 Bedrooms",
    roomOptions: [
      { label: "2 Bedroom", priceKsh: 20000 },
      { label: "3 Bedroom", priceKsh: 30000 },
      { label: "4 Bedroom", priceKsh: 35000 },
      { label: "5 Bedroom", priceKsh: 40000 },
    ],
    highlights: ["Nanyuki / Mt Kenya", "Wildlife estate", "Multiple villa sizes"],
  },

  // ════════════════════════════════════════════════════════════
  //  KENYA — MASAI MARA
  // ════════════════════════════════════════════════════════════
  "pride-inn-mara-camp": {
    guests: 12, bedrooms: "Tents / Cottages",
    roomOptions: [
      { label: "Savannah Tent (9 queen + 3 twin beds)", priceKsh: 64378, priceUsd: 500 },
      { label: "Deluxe River View Cottage (4 king + 3 twin beds)", priceKsh: 83691, priceUsd: 650 },
      { label: "Luxury River View Cottage (4 king + 5 queen beds)", priceKsh: 90129, priceUsd: 700 },
    ],
    highlights: ["Masai Mara", "Safari camp", "River views", "Luxury tents"],
  },
  "olakaira-mara-homes-masai-mara": {
    guests: 4, bedrooms: "2 Bedrooms",
    roomOptions: [{ label: "2 Bedroom Cottage", priceKsh: 25000 }],
    highlights: ["Masai Mara", "Private cottages", "Wildlife proximity"],
  },
  "kobe-house-mara": {
    guests: 8, bedrooms: "4 Bedrooms",
    mealPlan: "Full Board",
    roomOptions: [{ label: "4 Bedroom (Full Board)", priceKsh: 160000 }],
    highlights: ["Masai Mara", "Full board included", "Accommodates 8 guests", "Exclusive bush home"],
  },

  // ════════════════════════════════════════════════════════════
  //  INTERNATIONAL — ZANZIBAR
  // ════════════════════════════════════════════════════════════
  "jungle-paradise-beach-resort-spa-zanzibar": {
    guests: 4, bedrooms: "Double / Senior Executive",
    mealPlan: "Full Board",
    roomOptions: [
      { label: "Executive Double (Full Board, 2 guests)", priceKsh: 32189, priceUsd: 250 },
      { label: "Senior Executive (Full Board, 4 guests)", priceKsh: 38626, priceUsd: 300 },
    ],
    highlights: ["Zanzibar", "Beachfront resort", "Full board included", "Pool & spa"],
  },
  "zanzibar-beach-resort": {
    guests: 2, bedrooms: "Double Room",
    mealPlan: "Bed & Breakfast",
    roomOptions: [{ label: "Double Room (B&B)", priceKsh: 19313, priceUsd: 150 }],
    highlights: ["Zanzibar", "Beachfront", "Breakfast included"],
  },
  "warere-beach-resort-zanzibar": {
    guests: 2, bedrooms: "Double Room",
    mealPlan: "Bed & Breakfast",
    roomOptions: [{ label: "Double Room (B&B)", priceKsh: 32189, priceUsd: 250 }],
    highlights: ["Zanzibar Nungwi", "Beachfront", "Breakfast included"],
  },

  // ════════════════════════════════════════════════════════════
  //  INTERNATIONAL — MAURITIUS
  // ════════════════════════════════════════════════════════════
  "lagoon-attitude-hotel-mauritius": {
    guests: 2, bedrooms: "Double Room",
    mealPlan: "Bed & Breakfast",
    roomOptions: [{ label: "Double Room (B&B)", priceKsh: 45064, priceUsd: 350 }],
    highlights: ["Cap Malheureux Mauritius", "Adults only", "Beachfront", "Breakfast included"],
  },
  "solana-beach-mauritius": {
    guests: 2, bedrooms: "Double Room",
    roomOptions: [{ label: "Double Room", priceKsh: 28326, priceUsd: 220 }],
    highlights: ["Mauritius", "Beachfront resort", "Ocean views"],
  },
  "villa-anakao-mauritius": {
    guests: 2, bedrooms: "Villa",
    roomOptions: [{ label: "Villa", priceKsh: 25751, priceUsd: 200 }],
    highlights: ["Mauritius", "Private villa", "Boutique property"],
  },

  // ════════════════════════════════════════════════════════════
  //  INTERNATIONAL — RWANDA
  // ════════════════════════════════════════════════════════════
  "the-retreat-rwanda": {
    guests: 2, bedrooms: "Double Room",
    mealPlan: "Bed & Breakfast",
    roomOptions: [{ label: "Double Room (B&B)", priceKsh: 57938, priceUsd: 450 }],
    highlights: ["Kigali Rwanda", "Luxury boutique hotel", "Solar-powered", "Breakfast included"],
  },
  "4-bedroom-villa-rwanda": {
    guests: 8, bedrooms: "4 Bedrooms (All Ensuite)",
    roomOptions: [{ label: "4 Bedroom Villa (All Ensuite)", priceKsh: 25751, priceUsd: 200 }],
    highlights: ["Kigali Rwanda", "All ensuite rooms", "Private villa"],
  },
  "the-manor-hotel-rwanda": {
    guests: 2, bedrooms: "Double Room",
    roomOptions: [{ label: "Double Room", priceKsh: 23176, priceUsd: 180 }],
    highlights: ["Kigali Rwanda", "Manor-style hotel", "Gardens"],
  },

  // ════════════════════════════════════════════════════════════
  //  INTERNATIONAL — SEYCHELLES
  // ════════════════════════════════════════════════════════════
  "pineapple-beach-villas-seychelles": {
    guests: 4, bedrooms: "Villa",
    roomOptions: [{ label: "Beach Villa", priceKsh: 45064, priceUsd: 350 }],
    highlights: ["Baie Lazare Mahé Seychelles", "Secluded beach cove", "Self-catering"],
  },
  "palm-beach-hotel-seychelles": {
    guests: 2, bedrooms: "Double Room",
    mealPlan: "Bed & Breakfast",
    roomOptions: [{ label: "Double Room (B&B)", priceKsh: 32189, priceUsd: 250 }],
    highlights: ["Praslin Seychelles", "Beachfront", "Breakfast included"],
  },
  "oasis-hotel-restaurant-and-spa-seychelles": {
    guests: 2, bedrooms: "Double Room",
    mealPlan: "Bed & Breakfast",
    roomOptions: [{ label: "Double Room (B&B)", priceKsh: 45064, priceUsd: 350 }],
    highlights: ["Grand Anse Praslin Seychelles", "Spa & restaurant on site", "Breakfast included"],
  },

  // ════════════════════════════════════════════════════════════
  //  INTERNATIONAL — SOUTH AFRICA
  // ════════════════════════════════════════════════════════════
  "lagoon-beach-hotel-and-spa-cape-town": {
    guests: 8, bedrooms: "Double Room / 4-Bedroom Apartment",
    roomOptions: [
      { label: "Double Room", priceKsh: 14163, priceUsd: 110 },
      { label: "4 Bedroom Sea View Apartment", priceKsh: 51502, priceUsd: 400 },
    ],
    highlights: ["Milnerton Cape Town", "Spa on site", "Beachfront", "Sea view apartments available"],
  },
  "premier-hotel-cape-town": {
    guests: 2, bedrooms: "Double Room",
    roomOptions: [{ label: "Double Room", priceKsh: 15451, priceUsd: 120 }],
    highlights: ["Sea Point Cape Town", "City hotel", "Close to beaches"],
  },
  "atlantic-palms-cape-town": {
    guests: 2, bedrooms: "Double Room",
    roomOptions: [{ label: "Double Room", priceKsh: 19313, priceUsd: 150 }],
    highlights: ["Sea Point Cape Town", "Boutique hotel", "Atlantic Ocean views"],
  },

  // ════════════════════════════════════════════════════════════
  //  INTERNATIONAL — THAILAND
  // ════════════════════════════════════════════════════════════
  "chanalai-garden-resort-thailand": {
    guests: 2, bedrooms: "Double Room",
    roomOptions: [{ label: "Double Room", priceKsh: 12875, priceUsd: 100 }],
    highlights: ["Kata Beach Phuket", "Hillside resort", "Steps from Kata Beach"],
  },
  "phuket-marriott-resort-and-spa": {
    guests: 2, bedrooms: "Double Room",
    roomOptions: [{ label: "Double Room", priceKsh: 32189, priceUsd: 250 }],
    highlights: ["Tri-Trang Beach Patong Phuket", "5-star resort", "9 restaurants", "3 pools", "Spa"],
  },
  "amari-phuket-in-thailand": {
    guests: 2, bedrooms: "Double Room",
    roomOptions: [{ label: "Double Room", priceKsh: 25751, priceUsd: 200 }],
    highlights: ["Patong Beach Phuket", "Beachfront resort", "Ocean views", "Multiple dining outlets"],
  },
};

export function getHotelDetail(slug: string): HotelDetail | undefined {
  return hotelDetails[slug];
}
