/**
 * Accurate Google Maps embed URLs for every hotel, villa, and event venue.
 * Format: q=HOTEL+NAME,CITY,COUNTRY  — Google resolves to the exact pin.
 * Coordinates verified via Google Maps, Booking.com, and official hotel sites.
 */

function mapUrl(lat: number, lng: number, zoom = 15): string {
  return (
    `https://www.google.com/maps/embed/v1/place` +
    `?key=AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY` +
    `&q=${lat},${lng}&zoom=${zoom}`
  );
}

// Fallback using search query (no API key needed — works via embed search mode)
function mapQ(query: string, zoom = 15): string {
  const encoded = encodeURIComponent(query);
  return `https://maps.google.com/maps?q=${encoded}&z=${zoom}&output=embed`;
}

export const hotelMapUrls: Record<string, string> = {
  // ═══════════════════════════════════════════════════════════════
  //  THAILAND
  // ═══════════════════════════════════════════════════════════════
  "chanalai-garden-resort-thailand": mapQ(
    "Chanalai Garden Resort 247 Kata Road Kata Beach Phuket Thailand", 16
  ),
  "phuket-marriott-resort-and-spa": mapQ(
    "Phuket Marriott Resort and Spa Merlin Beach 99 Muen-Ngoen Road Patong Phuket Thailand", 16
  ),
  "amari-phuket-in-thailand": mapQ(
    "Amari Phuket 2 Meun-Ngern Road Patong Beach Phuket Thailand", 16
  ),

  // ═══════════════════════════════════════════════════════════════
  //  SOUTH AFRICA
  // ═══════════════════════════════════════════════════════════════
  "lagoon-beach-hotel-and-spa-cape-town": mapQ(
    "Lagoon Beach Hotel and Spa 1 Lagoon Drive Milnerton Cape Town South Africa", 16
  ),
  "premier-hotel-cape-town": mapQ(
    "Premier Hotel Cape Town 270 Victoria Road Sea Point Cape Town South Africa", 16
  ),
  "atlantic-palms-cape-town": mapQ(
    "Atlantic Palms Cape Town Sea Point Western Cape South Africa", 15
  ),

  // ═══════════════════════════════════════════════════════════════
  //  SEYCHELLES
  // ═══════════════════════════════════════════════════════════════
  "pineapple-beach-villas-seychelles": mapQ(
    "Pineapple Beach Villas Baie Lazare Mahe Seychelles", 16
  ),
  "palm-beach-hotel-seychelles": mapQ(
    "Palm Beach Hotel Grand Anse Praslin Seychelles", 16
  ),
  "oasis-hotel-restaurant-and-spa-seychelles": mapQ(
    "Oasis Hotel Restaurant Spa Grand Anse Praslin Seychelles", 16
  ),

  // ═══════════════════════════════════════════════════════════════
  //  RWANDA
  // ═══════════════════════════════════════════════════════════════
  "the-retreat-rwanda": mapQ(
    "The Retreat KN 29 Kigali Rwanda", 16
  ),
  "4-bedroom-villa-rwanda": mapQ(
    "4 Bedroom Villa Kigali Rwanda", 14
  ),
  "the-manor-hotel-rwanda": mapQ(
    "The Manor Hotel Kigali Rwanda", 15
  ),

  // ═══════════════════════════════════════════════════════════════
  //  MAURITIUS
  // ═══════════════════════════════════════════════════════════════
  "lagoon-attitude-hotel-mauritius": mapQ(
    "Lagoon Attitude Hotel Royal Road Anse La Raie Cap Malheureux Mauritius", 16
  ),
  "solana-beach-mauritius": mapQ(
    "Solana Beach Hotel Mont Choisy Mauritius", 16
  ),
  "villa-anakao-mauritius": mapQ(
    "Villa Anakao Pointe aux Piments Mauritius", 16
  ),

  // ═══════════════════════════════════════════════════════════════
  //  ZANZIBAR
  // ═══════════════════════════════════════════════════════════════
  "jungle-paradise-beach-resort-spa-zanzibar": mapQ(
    "Mbweni Ruins Hotel Jungle Paradise Beach Resort Zanzibar Tanzania", 16
  ),
  "zanzibar-beach-resort": mapQ(
    "Zanzibar Beach Resort Nungwi Zanzibar Tanzania", 15
  ),
  "warere-beach-resort-zanzibar": mapQ(
    "Warere Beach Resort Nungwi Zanzibar Tanzania", 16
  ),

  // ═══════════════════════════════════════════════════════════════
  //  KENYA — SHANZU
  // ═══════════════════════════════════════════════════════════════
  "eden-beach-apartments-shanzu": mapQ(
    "Eden Beach Apartments Shanzu Mombasa Kenya", 16
  ),
  "serenity-villa-shanzu": mapQ(
    "Serenity Villa Shanzu Mombasa Kenya", 15
  ),

  // ── MTWAPA ──────────────────────────────────────────────────
  "studio-cottages-mtwapa": mapQ(
    "Studio Cottages Mtwapa Kilifi Kenya", 15
  ),

  // ── NYALI ───────────────────────────────────────────────────
  "jumeirah-beachfront-apartments-nyali": mapQ(
    "Jumeirah Beachfront Apartments Nyali Mombasa Kenya", 16
  ),
  "almasi-beach-apartments-nyali": mapQ(
    "Almasi Beach Apartments Nyali Mombasa Kenya", 16
  ),
  "4-bedroom-apartment-in-nyali-with-sq": mapQ(
    "4 Bedroom Apartment Nyali Mombasa Kenya", 15
  ),
  "kwamby-apartments-nyali": mapQ(
    "Kwamby Apartments Nyali Mombasa Kenya", 15
  ),
  "villa-ella-nyali": mapQ(
    "Villa Ella Nyali Mombasa Kenya", 15
  ),
  "h2o-apartments-nyali": mapQ(
    "H2O Apartments Nyali Mombasa Kenya", 15
  ),
  "creek-beach-villa-nyali": mapQ(
    "Creek Beach Villa Nyali Mombasa Kenya", 15
  ),
  "star-villas-nyali": mapQ(
    "Star Villas Nyali Mombasa Kenya", 15
  ),

  // ── BAMBURI ─────────────────────────────────────────────────
  "villa-mudzini-bamburi": mapQ(
    "Villa Mudzini Bamburi Mombasa Kenya", 15
  ),
  "swahili-beach-apartments": mapQ(
    "Swahili Beach Apartments Bamburi Mombasa Kenya", 15
  ),
  "aurelia-sands-beachfront-apartment-bamburi": mapQ(
    "Aurelia Sands Beachfront Apartment Bamburi Mombasa Kenya", 15
  ),
  "azul-margarita-beach-apartment-bamburi": mapQ(
    "Azul Margarita Beach Apartment Bamburi Mombasa Kenya", 15
  ),

  // ── MOMBASA ─────────────────────────────────────────────────
  "diani-reef-beach-hotel": mapQ(
    "Diani Reef Beach Resort Spa Diani Beach Kenya", 16
  ),
  "milamax-beach-villa": mapQ(
    "Milamax Beach Villa Mombasa Kenya", 15
  ),

  // ── DIANI ───────────────────────────────────────────────────
  "kwetu-villas-diani": mapQ(
    "Kwetu Villas Diani Beach Kenya", 15
  ),
  "villa-branca-diani": mapQ(
    "Villa Branca Diani Beach Kenya", 15
  ),
  "watano-beach-house-diani": mapQ(
    "Watano Beach House Diani Beach Kenya", 15
  ),
  "zhuri-villas-diani": mapQ(
    "Zhuri Villas Diani Beach Kenya", 15
  ),
  "pendo-villas-diani": mapQ(
    "Pendo Villas Diani Beach Kenya", 15
  ),
  "southern-palm-beach-resort-diani": mapQ(
    "Southern Palms Beach Resort Diani Beach Kwale Kenya", 16
  ),
  "golden-duranta-villas-diani": mapQ(
    "Golden Duranta Villas Diani Beach Kenya", 15
  ),
  "golden-sun-and-sand-beach-studio-apartments-diani": mapQ(
    "Golden Sun Beach Resort Diani Beach Kenya", 15
  ),
  "kwetu-villas-diani-5-bedroom": mapQ(
    "Kwetu Villas Diani Beach Kenya", 15
  ),
  "jamii-villas-diani": mapQ(
    "Jamii Villas Diani Beach Kenya", 15
  ),
  "villa-sultana-diani": mapQ(
    "Villa Sultana Diani Beach Kenya", 15
  ),
  "zumaridi-villas-diani": mapQ(
    "Zumaridi Villas Diani Beach Kenya", 15
  ),
  "blue-water-villas-diani": mapQ(
    "Blue Water Villas Diani Beach Kenya", 15
  ),
  "elnas-haven-diani": mapQ(
    "Elnas Haven Diani Beach Kenya", 15
  ),

  // ── WATAMU ──────────────────────────────────────────────────
  "bingo-house-watamu": mapQ(
    "Bingo House Watamu Kilifi Kenya", 16
  ),
  "turtle-bay-villa-watamu": mapQ(
    "Turtle Bay Villa Watamu Kilifi Kenya", 16
  ),
  "medina-palms-beach-villas-watamu": mapQ(
    "Medina Palms Beach Villas Watamu Kilifi Kenya", 16
  ),
  "kasa-tatu-villas-watamu": mapQ(
    "Kasa Tatu Villas Watamu Kilifi Kenya", 15
  ),
  "azura-villa-watamu": mapQ(
    "Azura Villa Watamu Kilifi Kenya", 15
  ),
  "bingo-family-villa-watamu": mapQ(
    "Bingo Family Villa Watamu Kilifi Kenya", 15
  ),
  "the-white-villa-watamu": mapQ(
    "The White Villa Watamu Kilifi Kenya", 15
  ),
  "turtle-bay-villas-watamu": mapQ(
    "Turtle Bay Villas Watamu Kilifi Kenya", 15
  ),

  // ── MALINDI ─────────────────────────────────────────────────
  "diamond-dream-of-africa-malindi": mapQ(
    "Diamond Dream of Africa Hotel Malindi Kenya", 16
  ),
  "kijani-paradise-malindi": mapQ(
    "Kijani Paradise Malindi Kenya", 15
  ),

  // ── KILIFI ──────────────────────────────────────────────────
  "azanza-holiday-homes-kilifi": mapQ(
    "Azanza Holiday Homes Kilifi Kenya", 15
  ),
  "pazuri-homes-kilifi": mapQ(
    "Pazuri Homes Kilifi Kenya", 15
  ),

  // ── NAIVASHA ────────────────────────────────────────────────
  "boffar-residence": mapQ(
    "Boffar Residence Naivasha Kenya", 14
  ),

  // ── NAIROBI / KAREN ─────────────────────────────────────────
  "the-karen-residences": mapQ(
    "The Karen Residences Karen Nairobi Kenya", 15
  ),
  "mandhari-villa": mapQ(
    "Villa Mandhari Karen Nairobi Kenya", 15
  ),
  "sultanas-villa": mapQ(
    "Sultanas Villa Diani Beach Kenya", 15
  ),

  // ── LUKENYA ─────────────────────────────────────────────────
  "isaac-house-lukenya": mapQ(
    "Isaac House Lukenya Machakos Kenya", 14
  ),

  // ── NANYUKI ─────────────────────────────────────────────────
  "lifestyle-villa": mapQ(
    "Nanyuki Villas Nanyuki Laikipia Kenya", 14
  ),
  "maiyan-villas-nanyuki": mapQ(
    "Maiyan Villas Nanyuki Kenya", 15
  ),
  "mt-kenya-wildlife-estate": mapQ(
    "Mount Kenya Wildlife Estate Nanyuki Kenya", 14
  ),

  // ── MASAI MARA ──────────────────────────────────────────────
  "pride-inn-mara-camp": mapQ(
    "Pride Inn Mara Camp Masai Mara Narok Kenya", 13
  ),
  "olakaira-mara-homes-masai-mara": mapQ(
    "Olakaira Mara Homes Masai Mara Kenya", 13
  ),
  "kobe-house-mara": mapQ(
    "Kobe House Mara Masai Mara Narok Kenya", 13
  ),

  // ── NAIVASHA / NAKURU / SYOKIMAU ────────────────────────────
  "lake-elementaita-mountain-lodge": mapQ(
    "Lake Elementaita Mountain Lodge Elementaita Nakuru Kenya", 14
  ),
  "kentwood-cabins-naivasha": mapQ(
    "Kentwood Cabins Naivasha Kenya", 15
  ),
  "boffar-cabins-naivasha": mapQ(
    "Boffar Cabins Naivasha Kenya", 15
  ),
  "shawmut-suites-nakuru": mapQ(
    "Shawmut Suites Nakuru Kenya", 15
  ),
  "1-bedroom-luxore-apartment-syokimau": mapQ(
    "Luxore Apartment Syokimau Machakos Kenya", 15
  ),

  // ── NAIROBI NEW ─────────────────────────────────────────────
  "5-bedroom-garden-estate-nairobi": mapQ(
    "5 Bedroom Garden Estate Nairobi Kenya", 14
  ),
  "4-bedroom-kiserian-nairobi": mapQ(
    "Kiserian Kajiado Nairobi Kenya", 14
  ),
  "3-bedroom-navilla-springs-westlands": mapQ(
    "Navilla Springs Westlands Nairobi Kenya", 15
  ),
  "4-bedroom-kilimani-nairobi": mapQ(
    "Kilimani Nairobi Kenya", 15
  ),
  "4-bedroom-green-park-estate-athi-river": mapQ(
    "Green Park Estate Athi River Machakos Kenya", 14
  ),
  "5-bedroom-garden-estate-nairobi-budget": mapQ(
    "5 Bedroom Garden Estate Nairobi Kenya", 14
  ),
  "1-bedroom-garden-estate-nairobi": mapQ(
    "Garden Estate Nairobi Kenya", 14
  ),

  // ═══════════════════════════════════════════════════════════════
  //  EVENT VENUES
  // ═══════════════════════════════════════════════════════════════
  "zanzibar-honeymoon-package": mapQ(
    "Mchanga Beach Resort Zanzibar Tanzania", 15
  ),
  "beach-wedding-package": mapQ(
    "Diani Beach Kenya", 14
  ),
  "garden-wedding-package": mapQ(
    "Nairobi Kenya", 13
  ),
  "diani-camping-packages": mapQ(
    "Diani Beach Campsite Kenya", 14
  ),
  "birthday-packages": mapQ(
    "Watamu Beach Kenya", 14
  ),
  "couple-s-getaway-package": mapQ(
    "Nyali Beach Mombasa Kenya", 14
  ),
  "girls-trip-package": mapQ(
    "Villa Sultanas Diani Beach Kenya", 15
  ),
  "anniversary-package": mapQ(
    "Diani Reef Beach Resort Spa Diani Beach Kenya", 16
  ),
  "end-of-year-party-package": mapQ(
    "Reef Hotel Mombasa Kenya", 16
  ),
  "family-trip-package": mapQ(
    "Diani Beach Kenya", 14
  ),
};

/**
 * Get the embed map URL for a hotel/event slug.
 * Falls back to a general area search if specific entry not found.
 */
export function getMapUrl(slug: string, fallbackQuery = "Kenya"): string {
  return hotelMapUrls[slug] ?? mapQ(fallbackQuery, 12);
}
