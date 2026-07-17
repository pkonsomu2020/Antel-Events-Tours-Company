/**
 * Hotel/villa details — capacity, rooms, pricing.
 * USD rates at KSh 129.20 = $1 USD (rounded to nearest whole dollar).
 */

export interface RoomOption {
  label: string;
  priceKsh: number;
  priceUsd?: number;
}

export interface HotelDetail {
  guests: number;
  bedrooms?: string;
  mealPlan?: string;
  roomOptions?: RoomOption[];
  highlights?: string[];
  note?: string;
}

export const hotelDetails: Record<string, HotelDetail> = {

  // ── MTWAPA / SHANZU ─────────────────────────────────────────
  "studio-cottages-mtwapa": {
    guests: 2, bedrooms: "Studio",
    roomOptions: [{ label: "Studio (Omnia Cottages)", priceKsh: 4500, priceUsd: 35 }],
    highlights: ["Mtwapa Mombasa", "Private cottage", "Self-catering"],
  },
  "prestige-hotel-mtwapa": {
    guests: 2, bedrooms: "Hotel Room",
    roomOptions: [{ label: "Hotel Room", priceKsh: 5500, priceUsd: 43 }],
    highlights: ["Mtwapa Mombasa", "Budget-friendly", "2 guests"],
  },
  "seville-residency-shanzu": {
    guests: 2, bedrooms: "Studio / 1 Bedroom",
    roomOptions: [
      { label: "Studio",    priceKsh: 4500, priceUsd: 35 },
      { label: "1 Bedroom", priceKsh: 6000, priceUsd: 46 },
    ],
    highlights: ["Shanzu Mombasa", "Modern residency", "Self-catering"],
  },

  // ── SHANZU ──────────────────────────────────────────────────
  "eden-beach-apartments-shanzu": {
    guests: 6, bedrooms: "Suite / 1–3 Bedrooms",
    roomOptions: [
      { label: "Suite Room", priceKsh: 6500,  priceUsd: 50  },
      { label: "1 Bedroom",  priceKsh: 9000,  priceUsd: 70  },
      { label: "2 Bedroom",  priceKsh: 14000, priceUsd: 108 },
      { label: "3 Bedroom",  priceKsh: 17000, priceUsd: 132 },
    ],
    highlights: ["Shanzu Mombasa", "Near beach", "Multiple room options"],
  },
  "serenity-villa-shanzu": {
    guests: 4, bedrooms: "1–2 Bedrooms",
    roomOptions: [
      { label: "1 Bedroom", priceKsh: 6437,  priceUsd: 50 },
      { label: "2 Bedroom", priceKsh: 10300, priceUsd: 80 },
    ],
    highlights: ["Shanzu Mombasa", "Private villa", "Self-catering"],
  },

  // ── NYALI ───────────────────────────────────────────────────
  "jumeirah-beachfront-apartments-nyali": {
    guests: 8, bedrooms: "3–4 Bedrooms",
    roomOptions: [
      { label: "3 Bedroom", priceKsh: 30000, priceUsd: 232 },
      { label: "4 Bedroom", priceKsh: 40000, priceUsd: 309 },
    ],
    highlights: ["Beachfront", "Nyali Mombasa", "Fully furnished"],
  },
  "almasi-beach-apartments-nyali": {
    guests: 6, bedrooms: "3 Bedrooms + SQ",
    roomOptions: [{ label: "3 Bedroom + SQ", priceKsh: 25000, priceUsd: 193 }],
    highlights: ["Beachfront", "Nyali Mombasa", "SQ included"],
  },
  "4-bedroom-apartment-in-nyali-with-sq": {
    guests: 10, bedrooms: "4 Bedrooms + SQ",
    roomOptions: [{ label: "4 Bedroom + SQ", priceKsh: 15000, priceUsd: 116 }],
    highlights: ["Nyali Mombasa", "Spacious layout", "SQ included"],
  },
  "kwamby-apartments-nyali": {
    guests: 4, bedrooms: "2 Bedrooms",
    roomOptions: [{ label: "2 Bedroom", priceKsh: 12000, priceUsd: 93 }],
    highlights: ["Nyali Mombasa", "Modern apartments", "Self-catering"],
  },
  "villa-ella-nyali": {
    guests: 16, bedrooms: "7 Bedrooms",
    roomOptions: [{ label: "7 Bedroom Villa", priceKsh: 60000, priceUsd: 465 }],
    highlights: ["Nyali Mombasa", "Large group villa", "Private compound"],
  },
  "h2o-apartments-nyali": {
    guests: 6, bedrooms: "3 Bedrooms",
    roomOptions: [{ label: "3 Bedroom", priceKsh: 12000, priceUsd: 93 }],
    highlights: ["Nyali Mombasa", "Modern apartments", "Self-catering"],
  },
  "creek-beach-villa-nyali": {
    guests: 10, bedrooms: "5 Bedrooms",
    roomOptions: [{ label: "5 Bedroom Villa", priceKsh: 50000, priceUsd: 387 }],
    highlights: ["Nyali Mombasa", "Beach access", "Private villa"],
  },
  "star-villas-nyali": {
    guests: 10, bedrooms: "5 Bedrooms",
    roomOptions: [{ label: "5 Bedroom Villa", priceKsh: 30000, priceUsd: 232 }],
    highlights: ["Nyali Mombasa", "Private villa", "Self-catering"],
  },
  "swahili-beach-apartments": {
    guests: 6, bedrooms: "3 Bedrooms",
    roomOptions: [
      { label: "Executive Apartment", priceKsh: 25000, priceUsd: 193 },
      { label: "Sea View Apartment",  priceKsh: 28000, priceUsd: 216 },
    ],
    highlights: ["Nyali Mombasa", "Beachfront", "Sea views available"],
  },

  // ── BAMBURI ─────────────────────────────────────────────────
  "villa-mudzini-bamburi": {
    guests: 8, bedrooms: "4 Bedrooms",
    roomOptions: [{ label: "4 Bedroom Standalone Villa", priceKsh: 20000, priceUsd: 155 }],
    highlights: ["Bamburi Mombasa", "Private villa", "Stand-alone"],
  },
  "aurelia-sands-beachfront-apartment-bamburi": {
    guests: 6, bedrooms: "Beachfront Apartment",
    roomOptions: [{ label: "Beachfront Apartment", priceKsh: 20000, priceUsd: 155 }],
    highlights: ["Bamburi Mombasa", "Direct beach access", "Modern interiors"],
  },
  "azul-margarita-beach-apartment-bamburi": {
    guests: 6, bedrooms: "Studio / 1–3 Bedrooms",
    mealPlan: "Full Board",
    roomOptions: [
      { label: "Studio",    priceKsh: 18000, priceUsd: 139 },
      { label: "1 Bedroom", priceKsh: 20000, priceUsd: 155 },
      { label: "2 Bedroom", priceKsh: 25000, priceUsd: 194 },
      { label: "3 Bedroom", priceKsh: 30000, priceUsd: 232 },
    ],
    highlights: ["Bamburi Mombasa", "Full board meal plan", "Beach access"],
  },

  // ── DIANI ───────────────────────────────────────────────────
  "diani-reef-beach-hotel": {
    guests: 2, bedrooms: "Double Room",
    roomOptions: [{ label: "Double Room", priceKsh: 22000, priceUsd: 170 }],
    highlights: ["Diani Beach", "4-star resort", "Beach access", "Pool"],
  },
  "milamax-beach-villa": {
    guests: 12, bedrooms: "5 Bedrooms",
    roomOptions: [{ label: "5 Bedroom Villa", priceKsh: 60000, priceUsd: 465 }],
    highlights: ["Diani Beach", "Private villa", "Large group capacity"],
  },
  "kwetu-villas-diani": {
    guests: 10, bedrooms: "5 Bedrooms",
    roomOptions: [{ label: "5 Bedroom Villa (Private Pool)", priceKsh: 55000, priceUsd: 426 }],
    highlights: ["Diani Beach", "Private swimming pool", "Accommodates 10 guests"],
  },
  "zhuri-villas-diani": {
    guests: 10, bedrooms: "5 Bedrooms",
    roomOptions: [{ label: "5 Bedroom Villa", priceKsh: 40000, priceUsd: 309 }],
    highlights: ["Diani Beach", "Private villa", "Accommodates 10 guests"],
  },
  "pendo-villas-diani": {
    guests: 4, bedrooms: "1–2 Bedrooms",
    roomOptions: [
      { label: "1 Bedroom", priceKsh: 10000, priceUsd: 77 },
      { label: "2 Bedroom", priceKsh: 14000, priceUsd: 108 },
    ],
    highlights: ["Diani Beach", "Self-catering", "Cosy villas"],
  },
  "southern-palm-beach-resort-diani": {
    guests: 6, bedrooms: "Resort Rooms",
    roomOptions: [{ label: "Standard Room", priceKsh: 28000, priceUsd: 217 }],
    highlights: ["Diani Beach", "Resort facilities", "Beach access"],
  },
  "golden-duranta-villas-diani": {
    guests: 10, bedrooms: "5 Bedrooms",
    roomOptions: [{ label: "5 Bedroom Villa", priceKsh: 40000, priceUsd: 310 }],
    highlights: ["Diani Beach", "Private villa", "Accommodates 10 guests"],
  },
  "golden-sun-and-sand-beach-studio-apartments-diani": {
    guests: 2, bedrooms: "Studio",
    roomOptions: [{ label: "Studio Apartment", priceKsh: 6000, priceUsd: 46 }],
    highlights: ["Diani Beach", "Budget-friendly", "Couples / solo travellers"],
  },
  "jamii-villas-diani": {
    guests: 10, bedrooms: "5 Bedrooms",
    roomOptions: [{ label: "5 Bedroom Villa", priceKsh: 80000, priceUsd: 620 }],
    highlights: ["Diani Beach", "Luxury villa", "Accommodates 10 guests"],
  },
  "villa-sultana-diani": {
    guests: 20, bedrooms: "9 Bedrooms",
    roomOptions: [{ label: "9 Bedroom Villa", priceKsh: 65000, priceUsd: 503 }],
    highlights: ["Diani Beach", "Largest group villa", "Private compound", "Accommodates 20 guests"],
  },
  "zumaridi-villas-diani": {
    guests: 6, bedrooms: "2–3 Bedrooms",
    roomOptions: [
      { label: "2 Bedroom", priceKsh: 25000, priceUsd: 194 },
      { label: "3 Bedroom", priceKsh: 30000, priceUsd: 232 },
    ],
    highlights: ["Diani Beach", "Modern villas", "Self-catering"],
  },
  "blue-water-villas-diani": {
    guests: 6, bedrooms: "3 Bedrooms",
    roomOptions: [{ label: "3 Bedroom Villa", priceKsh: 25000, priceUsd: 194 }],
    highlights: ["Diani Beach", "Private villa", "Self-catering"],
  },
  "elnas-haven-diani": {
    guests: 8, bedrooms: "4 Bedrooms",
    roomOptions: [{ label: "4 Bedroom Villa", priceKsh: 30000, priceUsd: 232 }],
    highlights: ["Diani Beach", "Private haven", "Accommodates 8 guests"],
  },
  "mandhari-villa": {
    guests: 4, bedrooms: "2 Bedrooms",
    roomOptions: [{ label: "2 Bedroom Villa", priceKsh: 25000, priceUsd: 194 }],
    highlights: ["Diani Beach", "Private villa", "Self-catering"],
  },
  "sultanas-villa": {
    guests: 20, bedrooms: "9 Bedrooms",
    roomOptions: [{ label: "9 Bedroom Villa", priceKsh: 70000, priceUsd: 542 }],
    highlights: ["Diani Beach", "Large group villa", "Accommodates 20 guests"],
  },
  "villa-branca-diani": {
    guests: 10, bedrooms: "5 Bedrooms",
    roomOptions: [{ label: "5 Bedroom Standalone Villa", priceKsh: 200000, priceUsd: 1600 }],
    highlights: ["Diani Beach", "Standalone villa", "Private pool", "Accommodates 10 guests"],
  },
  "watano-beach-house-diani": {
    guests: 16, bedrooms: "8 Bedrooms",
    roomOptions: [{ label: "8 Bedroom Beach House", priceKsh: 500000, priceUsd: 4000 }],
    highlights: ["Diani Beach", "Luxury beach house", "Beachfront", "Accommodates 16 guests"],
  },

  // ── WATAMU & MALINDI ────────────────────────────────────────
  "bingo-house-watamu": {
    guests: 14, bedrooms: "5 Bedrooms",
    roomOptions: [{ label: "5 Bedroom Private Villa", priceKsh: 72000, priceUsd: 557 }],
    highlights: ["Watamu Beach", "Private villa", "Accommodates 14 guests"],
  },
  "turtle-bay-villa-watamu": {
    guests: 10, bedrooms: "1–5 Bedrooms",
    roomOptions: [
      { label: "1 Bedroom Apartment", priceKsh: 70000,  priceUsd: 542  },
      { label: "2 Bedroom Apartment", priceKsh: 100000, priceUsd: 774 },
      { label: "3 Bedroom Villa",     priceKsh: 150000, priceUsd: 1160 },
      { label: "4 Bedroom Villa",     priceKsh: 200000, priceUsd: 1547 },
      { label: "5 Bedroom Villa",     priceKsh: 250000, priceUsd: 1934 },
    ],
    highlights: ["Watamu Beach", "Fully furnished", "Multiple size options"],
  },
  "medina-palms-beach-villas-watamu": {
    guests: 6, bedrooms: "Villa",
    roomOptions: [{ label: "Beach Villa", priceKsh: 35000, priceUsd: 271 }],
    highlights: ["Watamu Beach", "Beachfront", "Luxury interiors"],
  },
  "kasa-tatu-villas-watamu": {
    guests: 4, bedrooms: "2 Bedrooms",
    roomOptions: [{ label: "2 Bedroom Villa", priceKsh: 28000, priceUsd: 217 }],
    highlights: ["Watamu Beach", "Private villa", "Self-catering"],
  },
  "azura-villa-watamu": {
    guests: 8, bedrooms: "4 Bedrooms",
    roomOptions: [{ label: "4 Bedroom Villa", priceKsh: 50000, priceUsd: 387 }],
    highlights: ["Watamu Beach", "Private villa", "Accommodates 8 guests"],
  },
  "bingo-family-villa-watamu": {
    guests: 16, bedrooms: "5 Bedrooms",
    roomOptions: [{ label: "5 Bedroom Villa", priceKsh: 80000, priceUsd: 620 }],
    highlights: ["Watamu Beach", "Large family villa", "Accommodates 16 guests"],
  },
  "the-white-villa-watamu": {
    guests: 10, bedrooms: "5 Bedrooms",
    roomOptions: [{ label: "5 Bedroom Villa", priceKsh: 35000, priceUsd: 271 }],
    highlights: ["Watamu Beach", "Private villa", "Accommodates 10 guests"],
  },
  "turtle-bay-villas-watamu": {
    guests: 10, bedrooms: "5 Bedrooms",
    roomOptions: [{ label: "5 Bedroom Villa", priceKsh: 30000, priceUsd: 232 }],
    highlights: ["Watamu Beach", "Private villa", "Accommodates 10 guests"],
  },
  "diamond-dream-of-africa-malindi": {
    guests: 6, bedrooms: "Villa",
    roomOptions: [{ label: "Villa", priceKsh: 38000, priceUsd: 294 }],
    highlights: ["Malindi Beach", "Luxury villa", "Direct beach access"],
  },
  "kijani-paradise-malindi": {
    guests: 4, bedrooms: "2 Bedrooms",
    roomOptions: [{ label: "2 Bedroom", priceKsh: 12000, priceUsd: 93 }],
    highlights: ["Malindi", "Private villa", "Self-catering"],
  },
  "azanza-holiday-homes-kilifi": {
    guests: 8, bedrooms: "4 Bedrooms",
    roomOptions: [{ label: "4 Bedroom", priceKsh: 20000, priceUsd: 155 }],
    highlights: ["Kilifi", "Holiday home", "Self-catering"],
  },
  "pazuri-homes-kilifi": {
    guests: 10, bedrooms: "4 Bedrooms + SQ",
    roomOptions: [{ label: "4 Bedroom + SQ", priceKsh: 50000, priceUsd: 387 }],
    highlights: ["Kilifi", "Spacious compound", "SQ included"],
  },

  // ── NAIVASHA / NAKURU ───────────────────────────────────────
  "boffar-residence": {
    guests: 8, bedrooms: "4 Bedrooms",
    roomOptions: [{ label: "4 Bedroom Villa", priceKsh: 20000, priceUsd: 155 }],
    highlights: ["Naivasha", "Lakeside area", "Private villa"],
  },
  "lake-elementaita-mountain-lodge": {
    guests: 2, bedrooms: "Lodge Room",
    roomOptions: [{ label: "Lodge Room", priceKsh: 30000, priceUsd: 232 }],
    highlights: ["Lake Elementaita", "Mountain views", "Wildlife nearby"],
  },
  "kentwood-cabins-naivasha": {
    guests: 2, bedrooms: "1 Bedroom",
    mealPlan: "Bed & Breakfast",
    roomOptions: [{ label: "Cabin (B&B)", priceKsh: 8000, priceUsd: 62 }],
    highlights: ["Naivasha", "Cosy cabin", "Breakfast included"],
  },
  "boffar-cabins-naivasha": {
    guests: 2, bedrooms: "1 Bedroom",
    roomOptions: [{ label: "1 Bedroom Cabin", priceKsh: 8500, priceUsd: 66 }],
    highlights: ["Naivasha", "Lakeside cabin", "Peaceful environment"],
  },
  "shawmut-suites-nakuru": {
    guests: 4, bedrooms: "2 Bedrooms",
    roomOptions: [{ label: "2 Bedroom Suite", priceKsh: 10000, priceUsd: 77 }],
    highlights: ["Nakuru", "Modern suites", "Self-catering"],
  },

  // ── NAIROBI ─────────────────────────────────────────────────
  "1-bedroom-luxore-apartment-syokimau": {
    guests: 2, bedrooms: "1 Bedroom",
    roomOptions: [{ label: "1 Bedroom Apartment", priceKsh: 5000, priceUsd: 39 }],
    highlights: ["Syokimau Machakos", "Modern apartment", "Near JKIA"],
  },
  "eldon-villas-studio": {
    guests: 4, bedrooms: "Studio / 1–2 Bedrooms",
    roomOptions: [
      { label: "Studio",                       priceKsh: 7725,  priceUsd: 60  },
      { label: "1 Bedroom Standard",           priceKsh: 7725,  priceUsd: 60  },
      { label: "1 Bedroom Deluxe",             priceKsh: 9012,  priceUsd: 70  },
      { label: "2 Bedroom Standard",           priceKsh: 9012,  priceUsd: 70  },
      { label: "2 Bedroom Deluxe",             priceKsh: 10944, priceUsd: 85  },
      { label: "1 Bedroom Standard Penthouse", priceKsh: 7725,  priceUsd: 60  },
      { label: "1 Bedroom Deluxe Penthouse",   priceKsh: 12875, priceUsd: 100 },
    ],
    highlights: ["Nairobi", "Modern villas", "Multiple room categories", "Penthouse options"],
  },
  "isaac-house-lukenya": {
    guests: 14, bedrooms: "7 Bedrooms",
    roomOptions: [{ label: "7 Bedroom Villa", priceKsh: 48000, priceUsd: 372 }],
    highlights: ["Nairobi / Lukenya", "Private villa", "Accommodates 14 guests"],
  },
  "the-karen-residences": {
    guests: 4, bedrooms: "2 Bedroom Cottage",
    roomOptions: [{ label: "2 Bedroom Cottage", priceKsh: 90000, priceUsd: 697 }],
    highlights: ["Karen Nairobi", "Luxury cottage", "Serene neighbourhood"],
  },
  "5-bedroom-garden-estate-nairobi": {
    guests: 10, bedrooms: "5 Bedrooms",
    roomOptions: [{ label: "5 Bedroom Garden Estate", priceKsh: 50000, priceUsd: 387 }],
    highlights: ["Nairobi", "Private compound", "Accommodates 10 guests"],
  },
  "4-bedroom-kiserian-nairobi": {
    guests: 8, bedrooms: "4 Bedrooms",
    roomOptions: [{ label: "4 Bedroom", priceKsh: 50000, priceUsd: 387 }],
    highlights: ["Kiserian Nairobi", "Private villa", "Accommodates 8 guests"],
  },
  "3-bedroom-navilla-springs-westlands": {
    guests: 8, bedrooms: "3 Bedrooms + SQ",
    roomOptions: [{ label: "3 Bedroom + SQ", priceKsh: 20000, priceUsd: 155 }],
    highlights: ["Westlands Nairobi", "Modern apartment", "Accommodates 8 guests"],
  },
  "4-bedroom-kilimani-nairobi": {
    guests: 8, bedrooms: "4 Bedrooms",
    roomOptions: [{ label: "4 Bedroom", priceKsh: 25000, priceUsd: 194 }],
    highlights: ["Kilimani Nairobi", "Private villa", "Accommodates 8 guests"],
  },
  "4-bedroom-green-park-estate-athi-river": {
    guests: 10, bedrooms: "4 Bedrooms + SQ",
    roomOptions: [{ label: "4 Bedroom + SQ", priceKsh: 25000, priceUsd: 194 }],
    highlights: ["Athi River Machakos", "Estate home", "Accommodates 10 guests"],
  },
  "5-bedroom-garden-estate-nairobi-budget": {
    guests: 10, bedrooms: "5 Bedrooms",
    roomOptions: [{ label: "5 Bedroom Garden Estate", priceKsh: 25000, priceUsd: 194 }],
    highlights: ["Nairobi", "Private compound", "Accommodates 10 guests"],
  },
  "1-bedroom-garden-estate-nairobi": {
    guests: 2, bedrooms: "1 Bedroom",
    roomOptions: [{ label: "1 Bedroom", priceKsh: 5000, priceUsd: 39 }],
    highlights: ["Nairobi Garden Estate", "Budget-friendly", "Couples / solo travellers"],
  },

  // ── NANYUKI ─────────────────────────────────────────────────
  "lifestyle-villa": {
    guests: 10, bedrooms: "5 Bedrooms",
    roomOptions: [{ label: "5 Bedroom Villa", priceKsh: 25000, priceUsd: 194 }],
    highlights: ["Nanyuki", "Private villa", "Accommodates 10 guests"],
  },
  "maiyan-villas-nanyuki": {
    guests: 6, bedrooms: "Villa",
    roomOptions: [{ label: "Villa", priceKsh: 32000, priceUsd: 248 }],
    highlights: ["Nanyuki", "Scenic highland views", "Private villa"],
  },
  "mt-kenya-wildlife-estate": {
    guests: 10, bedrooms: "2–5 Bedrooms",
    roomOptions: [
      { label: "2 Bedroom", priceKsh: 20000, priceUsd: 155 },
      { label: "3 Bedroom", priceKsh: 30000, priceUsd: 232 },
      { label: "4 Bedroom", priceKsh: 35000, priceUsd: 271 },
      { label: "5 Bedroom", priceKsh: 40000, priceUsd: 310 },
    ],
    highlights: ["Nanyuki / Mt Kenya", "Wildlife estate", "Multiple villa sizes"],
  },

  // ── MASAI MARA ──────────────────────────────────────────────
  "pride-inn-mara-camp": {
    guests: 12, bedrooms: "Tents / Cottages",
    roomOptions: [
      { label: "Savannah Tent (9 queen + 3 twin beds)",              priceKsh: 65000,  priceUsd: 503 },
      { label: "Deluxe River View Cottage (4 king + 3 twin beds)",   priceKsh: 83000,  priceUsd: 642 },
      { label: "Luxury River View Cottage (4 king + 5 queen beds)",  priceKsh: 90000,  priceUsd: 696 },
    ],
    highlights: ["Masai Mara", "Safari camp", "River views", "Luxury tents"],
  },
  "olakaira-mara-homes-masai-mara": {
    guests: 4, bedrooms: "2 Bedrooms",
    roomOptions: [{ label: "2 Bedroom Cottage", priceKsh: 25000, priceUsd: 194 }],
    highlights: ["Masai Mara", "Private cottages", "Wildlife proximity"],
  },
  "kobe-house-mara": {
    guests: 8, bedrooms: "4 Bedrooms",
    mealPlan: "Full Board",
    roomOptions: [{ label: "4 Bedroom (Full Board)", priceKsh: 160000, priceUsd: 1239 }],
    highlights: ["Masai Mara", "Full board included", "Accommodates 8 guests", "Exclusive bush home"],
  },

  // ── ZANZIBAR ────────────────────────────────────────────────
  "jungle-paradise-beach-resort-spa-zanzibar": {
    guests: 4, bedrooms: "Double / Senior Executive",
    mealPlan: "Full Board",
    roomOptions: [
      { label: "Executive Double (Full Board, 2 guests)",  priceKsh: 32000, priceUsd: 248 },
      { label: "Senior Executive (Full Board, 4 guests)",  priceKsh: 38000, priceUsd: 294 },
    ],
    highlights: ["Zanzibar", "Beachfront resort", "Full board included", "Pool & spa"],
  },
  "zanzibar-beach-resort": {
    guests: 2, bedrooms: "Double Room",
    mealPlan: "Bed & Breakfast",
    roomOptions: [{ label: "Double Room (B&B)", priceKsh: 20000, priceUsd: 155 }],
    highlights: ["Zanzibar", "Beachfront", "Breakfast included"],
  },
  "warere-beach-resort-zanzibar": {
    guests: 2, bedrooms: "Double Room",
    mealPlan: "Bed & Breakfast",
    roomOptions: [{ label: "Double Room (B&B)", priceKsh: 32000, priceUsd: 248 }],
    highlights: ["Zanzibar Nungwi", "Beachfront", "Breakfast included"],
  },

  // ── MAURITIUS ───────────────────────────────────────────────
  "lagoon-attitude-hotel-mauritius": {
    guests: 2, bedrooms: "Double Room",
    mealPlan: "Bed & Breakfast",
    roomOptions: [{ label: "Double Room (B&B)", priceKsh: 35000, priceUsd: 271 }],
    highlights: ["Cap Malheureux Mauritius", "Adults only", "Beachfront", "Breakfast included"],
  },
  "solana-beach-mauritius": {
    guests: 2, bedrooms: "Double Room",
    roomOptions: [{ label: "Double Room", priceKsh: 28000, priceUsd: 217 }],
    highlights: ["Mauritius", "Beachfront resort", "Ocean views"],
  },
  "villa-anakao-mauritius": {
    guests: 2, bedrooms: "Villa",
    roomOptions: [{ label: "Villa", priceKsh: 26000, priceUsd: 201 }],
    highlights: ["Mauritius", "Private villa", "Boutique property"],
  },

  // ── RWANDA ──────────────────────────────────────────────────
  "the-retreat-rwanda": {
    guests: 2, bedrooms: "Double Room",
    mealPlan: "Bed & Breakfast",
    roomOptions: [{ label: "Double Room (B&B)", priceKsh: 58000, priceUsd: 449 }],
    highlights: ["Kigali Rwanda", "Luxury boutique hotel", "Solar-powered", "Breakfast included"],
  },
  "4-bedroom-villa-rwanda": {
    guests: 8, bedrooms: "4 Bedrooms (All Ensuite)",
    roomOptions: [{ label: "4 Bedroom Villa (All Ensuite)", priceKsh: 26000, priceUsd: 201 }],
    highlights: ["Kigali Rwanda", "All ensuite rooms", "Private villa"],
  },
  "the-manor-hotel-rwanda": {
    guests: 2, bedrooms: "Double Room",
    roomOptions: [{ label: "Double Room", priceKsh: 24000, priceUsd: 186 }],
    highlights: ["Kigali Rwanda", "Manor-style hotel", "Gardens"],
  },

  // ── SEYCHELLES ──────────────────────────────────────────────
  "pineapple-beach-villas-seychelles": {
    guests: 4, bedrooms: "Villa",
    roomOptions: [{ label: "Beach Villa", priceKsh: 45000, priceUsd: 348 }],
    highlights: ["Baie Lazare Mahé Seychelles", "Secluded beach cove", "Self-catering"],
  },
  "palm-beach-hotel-seychelles": {
    guests: 2, bedrooms: "Double Room",
    mealPlan: "Bed & Breakfast",
    roomOptions: [{ label: "Double Room (B&B)", priceKsh: 32000, priceUsd: 248 }],
    highlights: ["Praslin Seychelles", "Beachfront", "Breakfast included"],
  },
  "oasis-hotel-restaurant-and-spa-seychelles": {
    guests: 2, bedrooms: "Double Room",
    mealPlan: "Bed & Breakfast",
    roomOptions: [{ label: "Double Room (B&B)", priceKsh: 30000, priceUsd: 232 }],
    highlights: ["Grand Anse Praslin Seychelles", "Spa & restaurant on site", "Breakfast included"],
  },

  // ── SOUTH AFRICA ────────────────────────────────────────────
  "lagoon-beach-hotel-and-spa-cape-town": {
    guests: 8, bedrooms: "Double Room / 4-Bedroom Apartment",
    roomOptions: [
      { label: "Double Room",                  priceKsh: 15000, priceUsd: 116 },
      { label: "4 Bedroom Sea View Apartment", priceKsh: 50000, priceUsd: 387 },
    ],
    highlights: ["Milnerton Cape Town", "Spa on site", "Beachfront", "Sea view apartments available"],
  },
  "premier-hotel-cape-town": {
    guests: 2, bedrooms: "Double Room",
    roomOptions: [{ label: "Double Room", priceKsh: 16000, priceUsd: 124 }],
    highlights: ["Sea Point Cape Town", "City hotel", "Close to beaches"],
  },
  "atlantic-palms-cape-town": {
    guests: 2, bedrooms: "Double Room",
    roomOptions: [{ label: "Double Room", priceKsh: 20000, priceUsd: 155 }],
    highlights: ["Sea Point Cape Town", "Boutique hotel", "Atlantic Ocean views"],
  },

  // ── THAILAND ────────────────────────────────────────────────
  "chanalai-garden-resort-thailand": {
    guests: 2, bedrooms: "Double Room",
    roomOptions: [{ label: "Double Room", priceKsh: 13000, priceUsd: 100 }],
    highlights: ["Kata Beach Phuket", "Hillside resort", "Steps from Kata Beach"],
  },
  "phuket-marriott-resort-and-spa": {
    guests: 2, bedrooms: "Double Room",
    roomOptions: [{ label: "Double Room", priceKsh: 32000, priceUsd: 248 }],
    highlights: ["Tri-Trang Beach Patong Phuket", "5-star resort", "9 restaurants", "3 pools", "Spa"],
  },
  "amari-phuket-in-thailand": {
    guests: 2, bedrooms: "Double Room",
    roomOptions: [{ label: "Double Room", priceKsh: 26000, priceUsd: 201 }],
    highlights: ["Patong Beach Phuket", "Beachfront resort", "Ocean views", "Multiple dining outlets"],
  },
};

export function getHotelDetail(slug: string): HotelDetail | undefined {
  return hotelDetails[slug];
}
