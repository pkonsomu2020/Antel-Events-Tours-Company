// Shared Kenya hotel data with area tags
// Used by DestinationPackages (area cards) and KenyaAreaPackages (filtered hotel list)

export interface KenyaPackage {
  name: string;
  image: string;
  price: string;
  area: string; // location tag used for filtering
  extraServices?: { label: string; price: string }[];
}

export const kenyaPackages: KenyaPackage[] = [
  // ── SHANZU ──────────────────────────────────────────────────────────────
  {
    name: "Eden Beach Apartments, Shanzu",
    image: "/ANTEL HOTELS/KENYAN DESTINATIONS/Eden beach apartments/EDEN 1.jpg",
    price: "KSH.6500",
    area: "Shanzu",
    extraServices: [
      { label: "1 Bedroom", price: "KSH.9000" },
      { label: "2 Bedroom", price: "KSH.14000" },
      { label: "3 Bedroom", price: "KSH.17000" },
    ],
  },
  {
    name: "Serenity villa, Shanzu",
    image: "/ANTEL HOTELS/KENYAN DESTINATIONS/SERENITY VILLA/SERENITY1.jpg",
    price: "KSH.6000",
    area: "Shanzu",
  },
  // ── NYALI ───────────────────────────────────────────────────────────────
  {
    name: "Studio Cottages, Mtwapa",
    image: "/ANTEL HOTELS/KENYAN DESTINATIONS/STUDIO COTTAGES/STUDIO1.jpg",
    price: "KSH.4500",
    area: "Nyali",
  },
  {
    name: "Jumeirah Beachfront Apartments, Nyali",
    image: "/ANTEL HOTELS/KENYAN DESTINATIONS/Jumeirah beachfront apartments/JUMEIRAH 1.jpg",
    price: "KSH.30000",
    area: "Nyali",
  },
  {
    name: "Almasi Beach apartments, Nyali",
    image: "/ANTEL HOTELS/KENYAN DESTINATIONS/Almasi beach apartments/ALMASI 1.jpg",
    price: "KSH.25000",
    area: "Nyali",
  },
  {
    name: "4 Bedroom Apartment in Nyali with SQ",
    image: "/ANTEL HOTELS/KENYAN DESTINATIONS/4BR APARTM, NYALI WITH SQ/4BR 1.jpeg",
    price: "KSH.15000",
    area: "Nyali",
  },
  {
    name: "Kwamby Apartments Nyali",
    image: "/ANTEL HOTELS/KENYAN DESTINATIONS/KWAMBY APARTMENTS/KWAMBY 1.jpeg",
    price: "KSH.12000",
    area: "Nyali",
    extraServices: [
      { label: "2 Bedroom (4 guests)", price: "KSH.12000" },
    ],
  },
  {
    name: "Villa Ella Nyali",
    image: "/ANTEL HOTELS/KENYAN DESTINATIONS/VILLA ELLA/ELLA 1.jpeg",
    price: "KSH.60000",
    area: "Nyali",
    extraServices: [
      { label: "7 Bedroom (16 guests)", price: "KSH.60000" },
    ],
  },
  {
    name: "H2O Apartments Nyali",
    image: "/ANTEL HOTELS/KENYAN DESTINATIONS/H2O APARTMENTS/H2O 1.jpeg",
    price: "KSH.12000",
    area: "Nyali",
    extraServices: [
      { label: "3 Bedroom (6 guests)", price: "KSH.12000" },
    ],
  },
  {
    name: "Creek Beach Villa Nyali",
    image: "/ANTEL HOTELS/KENYAN DESTINATIONS/CREEK BEACH VILLA/CREEEK 1.jpeg",
    price: "KSH.50000",
    area: "Nyali",
    extraServices: [
      { label: "5 Bedroom (10 guests)", price: "KSH.50000" },
    ],
  },
  {
    name: "Star Villas Nyali",
    image: "/ANTEL HOTELS/KENYAN DESTINATIONS/STAR VILLAS/STAR 1.jpeg",
    price: "KSH.30000",
    area: "Nyali",
    extraServices: [
      { label: "5 Bedroom (10 guests)", price: "KSH.30000" },
    ],
  },
  {
    name: "Swahili Beach Apartments",
    image: "/ANTEL HOTELS/KENYAN DESTINATIONS/Swahili beach apartments/swahilibeach 1.jpg",
    price: "KSH.25000",
    area: "Nyali",
  },
  // ── BAMBURI ─────────────────────────────────────────────────────────────
  {
    name: "Villa Mudzini, Bamburi",
    image: "/ANTEL HOTELS/KENYAN DESTINATIONS/4BR VILLA, BAMBURI/BAMBURI VILLA 1.jpg",
    price: "KSH.20000",
    area: "Bamburi",
  },
  {
    name: "Aurelia Sands Beachfront Apartment Bamburi",
    image: "/ANTEL HOTELS/KENYAN DESTINATIONS/AURELIA SANDS BEACHFRONT/AURELIA 1.jpeg",
    price: "KSH.20000",
    area: "Bamburi",
  },
  {
    name: "Azul Margarita Beach Apartment Bamburi",
    image: "/ANTEL HOTELS/KENYAN DESTINATIONS/AZUL MARGARITA BEACH/AZUL 1.jpeg",
    price: "KSH.18000",
    area: "Bamburi",
    extraServices: [
      { label: "Studio", price: "KSH.18000" },
      { label: "1 Bedroom", price: "KSH.20000" },
      { label: "2 Bedroom", price: "KSH.25000" },
      { label: "3 Bedroom", price: "KSH.30000" },
    ],
  },
  // ── DIANI ───────────────────────────────────────────────────────────────
  {
    name: "Diani Reef Beach Hotel",
    image: "/ANTEL HOTELS/KENYAN DESTINATIONS/Reef hotel Nyali/REEF HOTEL 1.jpg",
    price: "KSH.22000",
    area: "Diani",
  },
  {
    name: "Milamax Beach Villa",
    image: "/ANTEL HOTELS/KENYAN DESTINATIONS/MILAMAX BEACH/Milamax 1.jpeg",
    price: "KSH.60000",
    area: "Diani",
    extraServices: [
      { label: "5 Bedroom (12 guests)", price: "KSH.60000" },
    ],
  },
  {
    name: "Kwetu villas, Diani",
    image: "/ANTEL HOTELS/KENYAN DESTINATIONS/KWETU VILLAS/KWETU1.jpg",
    price: "KSH.55000",
    area: "Diani",
  },
  {
    name: "Zhuri villas, Diani",
    image: "/ANTEL HOTELS/KENYAN DESTINATIONS/ZHURI VILLAS/ZHURI1.jpg",
    price: "KSH.40000",
    area: "Diani",
  },
  {
    name: "Pendo Villas Diani",
    image: "/ANTEL HOTELS/KENYAN DESTINATIONS/Pendo villas Diani/PENDO 1.jpg",
    price: "KSH.10000",
    area: "Diani",
    extraServices: [
      { label: "1 Bedroom", price: "KSH.10000" },
      { label: "2 Bedroom", price: "KSH.14000" },
    ],
  },
  {
    name: "Southern Palm Beach Resort Diani",
    image: "/ANTEL HOTELS/KENYAN DESTINATIONS/Southern palm beach resort/SOUTHERN 1.jpg",
    price: "KSH.28000",
    area: "Diani",
  },
  {
    name: "Golden Duranta Villas Diani",
    image: "/ANTEL HOTELS/KENYAN DESTINATIONS/Golden Duranta/Golden 1.jpeg",
    price: "KSH.40000",
    area: "Diani",
    extraServices: [
      { label: "5 Bedroom (10 guests)", price: "KSH.40000" },
    ],
  },
  {
    name: "Golden Sun and Sand Beach Studio Apartments Diani",
    image: "/ANTEL HOTELS/KENYAN DESTINATIONS/Golden Sun Beach Resort/Golden Sun 1.jpeg",
    price: "KSH.6000",
    area: "Diani",
  },
  {
    name: "Kwetu Villas Diani (5 Bedroom)",
    image: "/ANTEL HOTELS/KENYAN DESTINATIONS/Kwetu Villas - NEW/KWETU 1.jpeg",
    price: "KSH.60000",
    area: "Diani",
  },
  {
    name: "Jamii Villas Diani",
    image: "/ANTEL HOTELS/KENYAN DESTINATIONS/Jamii Villas/JAMII 1.jpeg",
    price: "KSH.80000",
    area: "Diani",
    extraServices: [
      { label: "5 Bedroom (10 guests)", price: "KSH.80000" },
    ],
  },
  {
    name: "Villa Sultana Diani",
    image: "/ANTEL HOTELS/KENYAN DESTINATIONS/VILLA SULTANA/SULTANA 1.jpeg",
    price: "KSH.65000",
    area: "Diani",
    extraServices: [
      { label: "9 Bedroom (20 guests)", price: "KSH.65000" },
    ],
  },
  {
    name: "Zumaridi Villas Diani",
    image: "/ANTEL HOTELS/KENYAN DESTINATIONS/ZUMARIDI VILLAS/Zumaridi 1.jpeg",
    price: "KSH.25000",
    area: "Diani",
    extraServices: [
      { label: "2 Bedroom (4 guests)", price: "KSH.25000" },
      { label: "3 Bedroom (6 guests)", price: "KSH.30000" },
    ],
  },
  {
    name: "Blue Water Villas Diani",
    image: "/ANTEL HOTELS/KENYAN DESTINATIONS/BLUE WATER VILLAS/BLUE 1.jpeg",
    price: "KSH.25000",
    area: "Diani",
    extraServices: [
      { label: "3 Bedroom (6 guests)", price: "KSH.25000" },
    ],
  },
  {
    name: "Elnas Haven Diani",
    image: "/ANTEL HOTELS/KENYAN DESTINATIONS/ELNAS HAVEN/Elnas 1.jpeg",
    price: "KSH.30000",
    area: "Diani",
    extraServices: [
      { label: "4 Bedroom (8 guests)", price: "KSH.30000" },
    ],
  },
  {
    name: "Mandhari Villa",
    image: "/ANTEL HOTELS/KENYAN DESTINATIONS/VILLA MANDHARI/MANDHARI 1.jpg",
    price: "KSH.25000",
    area: "Diani",
  },
  {
    name: "Sultanas Villa",
    image: "/ANTEL HOTELS/KENYAN DESTINATIONS/VILLA SULTANAS/SULTANAS 1.jpg",
    price: "KSH.70000",
    area: "Diani",
  },
  // ── WATAMU & MALINDI ────────────────────────────────────────────────────
  {
    name: "Bingo house, Watamu",
    image: "/ANTEL HOTELS/KENYAN DESTINATIONS/BINGO HOUSE, WATAMU/BINGO 1.jpg",
    price: "KSH.72000",
    area: "Watamu & Malindi",
  },
  {
    name: "Turtle bay villa, Watamu",
    image: "/ANTEL HOTELS/KENYAN DESTINATIONS/TURTLE BAY VILLA/TURTLE 1.jpg",
    price: "KSH.70000",
    area: "Watamu & Malindi",
  },
  {
    name: "Medina Palms Beach Villas, Watamu",
    image: "/ANTEL HOTELS/KENYAN DESTINATIONS/Medina palms beach villas/MEDINA 1.jpg",
    price: "KSH.35000",
    area: "Watamu & Malindi",
  },
  {
    name: "Kasa Tatu Villas Watamu",
    image: "/ANTEL HOTELS/KENYAN DESTINATIONS/KASA TATU VILLAS/KASA 1.jpeg",
    price: "KSH.28000",
    area: "Watamu & Malindi",
    extraServices: [
      { label: "2 Bedroom (4 guests)", price: "KSH.28000" },
    ],
  },
  {
    name: "Azura Villa Watamu",
    image: "/ANTEL HOTELS/KENYAN DESTINATIONS/AZURA VILLA/Azura 1.jpeg",
    price: "KSH.50000",
    area: "Watamu & Malindi",
    extraServices: [
      { label: "4 Bedroom (8 guests)", price: "KSH.50000" },
    ],
  },
  {
    name: "Bingo Family Villa Watamu",
    image: "/ANTEL HOTELS/KENYAN DESTINATIONS/BINGO FAMILY VILLA/BINGO 1.jpeg",
    price: "KSH.80000",
    area: "Watamu & Malindi",
    extraServices: [
      { label: "5 Bedroom (16 guests)", price: "KSH.80000" },
    ],
  },
  {
    name: "The White Villa Watamu",
    image: "/ANTEL HOTELS/KENYAN DESTINATIONS/WHITE VILLAS/white 1.jpeg",
    price: "KSH.35000",
    area: "Watamu & Malindi",
    extraServices: [
      { label: "5 Bedroom (10 guests)", price: "KSH.35000" },
    ],
  },
  {
    name: "Turtle Bay Villas Watamu",
    image: "/ANTEL HOTELS/KENYAN DESTINATIONS/TURTLE BAY VILLAS/TURTLE 1.jpeg",
    price: "KSH.30000",
    area: "Watamu & Malindi",
    extraServices: [
      { label: "5 Bedroom (10 guests)", price: "KSH.30000" },
    ],
  },
  {
    name: "Diamond dream of Africa, Malindi",
    image: "/ANTEL HOTELS/KENYAN DESTINATIONS/Diamond dream of Africa/DIAMOND_1.jpeg",
    price: "KSH.38000",
    area: "Watamu & Malindi",
  },
  {
    name: "Kijani Paradise Malindi",
    image: "/ANTEL HOTELS/KENYAN DESTINATIONS/KIJANI PARADISE/KIJANI 1.jpeg",
    price: "KSH.12000",
    area: "Watamu & Malindi",
    extraServices: [
      { label: "2 Bedroom (4 guests)", price: "KSH.12000" },
    ],
  },
  // ── KILIFI → moved to Watamu & Malindi ──────────────────────────────────
  {
    name: "Azanza Holiday Homes Kilifi",
    image: "/ANTEL HOTELS/KENYAN DESTINATIONS/AZANZA HOLIDAY HOMES/Azanza 1.jpeg",
    price: "KSH.20000",
    area: "Watamu & Malindi",
    extraServices: [
      { label: "4 Bedroom (8 guests)", price: "KSH.20000" },
    ],
  },
  {
    name: "Pazuri Homes Kilifi",
    image: "/ANTEL HOTELS/KENYAN DESTINATIONS/PAZURI HOMES/PAZURI 1.jpeg",
    price: "KSH.50000",
    area: "Watamu & Malindi",
    extraServices: [
      { label: "4 Bedroom + SQ (10 guests)", price: "KSH.50000" },
    ],
  },
  // ── NAIVASHA ────────────────────────────────────────────────────────────
  {
    name: "Boffar Residence",
    image: "/ANTEL HOTELS/KENYAN DESTINATIONS/BOFFAR RESIDENCE, NAIVASHA/BOFFAR 1.jpg",
    price: "KSH.20000",
    area: "Naivasha",
  },
  {
    name: "Lake Elementaita Mountain Lodge",
    image: "/ANTEL HOTELS/KENYAN DESTINATIONS/ELEMENTAITA LODGE/ELEMENTAITA 1.jpeg",
    price: "KSH.30000",
    area: "Naivasha",
  },
  {
    name: "Kentwood Cabins Naivasha",
    image: "/ANTEL HOTELS/KENYAN DESTINATIONS/KENTWOOD CABINS/KENTWOOD 1.jpeg",
    price: "KSH.8000",
    area: "Naivasha",
  },
  {
    name: "Boffar Cabins Naivasha",
    image: "/ANTEL HOTELS/KENYAN DESTINATIONS/BOFFAR CABINS/BOFFAR 1.jpeg",
    price: "KSH.8500",
    area: "Naivasha",
  },
  {
    name: "Shawmut Suites Nakuru",
    image: "/ANTEL HOTELS/KENYAN DESTINATIONS/SHAWMUT SUITES/SHAWMUT 1.jpeg",
    price: "KSH.10000",
    area: "Naivasha",
    extraServices: [
      { label: "2 Bedroom (4 guests)", price: "KSH.10000" },
    ],
  },
  {
    name: "1 Bedroom Luxore Apartment Syokimau",
    image: "/ANTEL HOTELS/KENYAN DESTINATIONS/1B LUXORE APARTMENT, SYOKIMAU/LUXORE 1.jpeg",
    price: "KSH.5000",
    area: "Nairobi",
  },
  // ── NAIROBI ─────────────────────────────────────────────────────────────
  {
    name: "Isaac house Lukenya",
    image: "/ANTEL HOTELS/KENYAN DESTINATIONS/ISAAC HOUSE LUKENYA/ISAAC 1.jpg",
    price: "KSH.48000",
    area: "Nairobi",
  },
  // ── NAIROBI ─────────────────────────────────────────────────────────────
  {
    name: "The Karen Residences",
    image: "/ANTEL HOTELS/KENYAN DESTINATIONS/KAREN RESIDENCE/KAREN 1.jpg",
    price: "KSH.90000",
    area: "Nairobi",
  },
  {
    name: "5 Bedroom Garden Estate Nairobi",
    image: "/ANTEL HOTELS/KENYAN DESTINATIONS/5BED GARDEN ESTATE/GARDEN 1.jpeg",
    price: "KSH.50000",
    area: "Nairobi",
    extraServices: [
      { label: "5 Bedroom (10 guests)", price: "KSH.50000" },
    ],
  },
  {
    name: "4 Bedroom Kiserian Nairobi",
    image: "/ANTEL HOTELS/KENYAN DESTINATIONS/4B KISERIAN/KISERIAN 1.jpeg",
    price: "KSH.50000",
    area: "Nairobi",
    extraServices: [
      { label: "4 Bedroom (8 guests)", price: "KSH.50000" },
    ],
  },
  {
    name: "3 Bedroom Navilla Springs Westlands",
    image: "/ANTEL HOTELS/KENYAN DESTINATIONS/3B NAVILLA SPRINGS/NAVILLA 1.jpeg",
    price: "KSH.20000",
    area: "Nairobi",
    extraServices: [
      { label: "3 Bedroom + SQ (8 guests)", price: "KSH.20000" },
    ],
  },
  {
    name: "4 Bedroom Kilimani Nairobi",
    image: "/ANTEL HOTELS/KENYAN DESTINATIONS/4B KILIMANI/KILIMANI 1.jpeg",
    price: "KSH.25000",
    area: "Nairobi",
    extraServices: [
      { label: "4 Bedroom (8 guests)", price: "KSH.25000" },
    ],
  },
  {
    name: "4 Bedroom Green Park Estate Athi River",
    image: "/ANTEL HOTELS/KENYAN DESTINATIONS/4B GREEN PARK ESTATE/GREENPARK 1.jpeg",
    price: "KSH.25000",
    area: "Nairobi",
    extraServices: [
      { label: "4 Bedroom + SQ (10 guests)", price: "KSH.25000" },
    ],
  },
  {
    name: "5 Bedroom Garden Estate Nairobi (Budget)",
    image: "/ANTEL HOTELS/KENYAN DESTINATIONS/5B GARDEN ESTATE (25K)/GARDEN 1.jpeg",
    price: "KSH.25000",
    area: "Nairobi",
    extraServices: [
      { label: "5 Bedroom (10 guests)", price: "KSH.25000" },
    ],
  },
  {
    name: "1 Bedroom Garden Estate Nairobi",
    image: "/ANTEL HOTELS/KENYAN DESTINATIONS/1B GARDEN ESTATE/1BGARDEN 1.jpeg",
    price: "KSH.5000",
    area: "Nairobi",
  },
  // ── NANYUKI ─────────────────────────────────────────────────────────────
  {
    name: "Lifestyle villa",
    image: "/ANTEL HOTELS/KENYAN DESTINATIONS/NANYUKI VILLAS/NANYUKI 1.jpg",
    price: "KSH.25000",
    area: "Nanyuki",
  },
  {
    name: "Maiyan Villas Nanyuki",
    image: "/ANTEL HOTELS/KENYAN DESTINATIONS/Maiyan villas Nanyuki/MAIYAN 1.jpg",
    price: "KSH.32000",
    area: "Nanyuki",
  },
  {
    name: "Mt.Kenya Wildlife Estate",
    image: "/ANTEL HOTELS/KENYAN DESTINATIONS/Mt.Kenya wildlife estate/MTKENYA 1.jpg",
    price: "KSH.20000",
    area: "Nanyuki",
    extraServices: [
      { label: "2 Bedroom", price: "KSH.20000" },
      { label: "3 Bedroom", price: "KSH.30000" },
      { label: "4 Bedroom", price: "KSH.35000" },
      { label: "5 Bedroom", price: "KSH.40000" },
    ],
  },
  // ── MASAI MARA ──────────────────────────────────────────────────────────
  {
    name: "Pride Inn Mara Camp",
    image: "/ANTEL HOTELS/KENYAN DESTINATIONS/MAASAI MARA TENTS/MAASAI 1.jpg",
    price: "KSH.65000",
    area: "Masai Mara",
  },
  {
    name: "Olakaira Mara Homes, Masai Mara",
    image: "/ANTEL HOTELS/KENYAN DESTINATIONS/OLAKAIRA MARA HOMES/OLAKAIRA 1.jpg",
    price: "KSH.25000",
    area: "Masai Mara",
  },
  {
    name: "Kobe House Mara",
    image: "/ANTEL HOTELS/KENYAN DESTINATIONS/KOBE HOUSE MARA/KOBE 1.jpg",
    price: "KSH.160000",
    area: "Masai Mara",
    extraServices: [
      { label: "4 Bedroom Full Board (8 guests)", price: "KSH.160000" },
    ],
  },
];

// All unique areas with a representative image and place count
export interface KenyaArea {
  name: string;
  slug: string;
  image: string;
  count: number;
}

export function getKenyaAreas(): KenyaArea[] {
  const areaMap: Record<string, { image: string; count: number }> = {};
  for (const pkg of kenyaPackages) {
    if (!areaMap[pkg.area]) {
      areaMap[pkg.area] = { image: pkg.image, count: 0 };
    }
    areaMap[pkg.area].count++;
  }
  return Object.entries(areaMap).map(([name, data]) => ({
    name,
    slug: name.toLowerCase().replace(/\s+/g, "-"),
    image: data.image,
    count: data.count,
  }));
}

export function getPackagesByArea(areaSlug: string): KenyaPackage[] {
  const areaName = areaSlug.replace(/-/g, " ");
  return kenyaPackages.filter(
    (pkg) => pkg.area.toLowerCase() === areaName.toLowerCase()
  );
}
