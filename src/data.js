export const categories = [
  "All",
  "Protein",
  "Mass Gainers",
  "Creatine",
  "Pre Workout",
  "Vitamins",
  "Accessories"
];

// Reusable gallery mock using our generated assets
const getGallery = (mainImg) => [
  mainImg,
  "/images/whey.png",
  "/images/creatine.png",
  "/images/preworkout.png"
];

export const products = [
  {
    id: 1,
    name: "100% Gold Standard Whey",
    category: "Protein",
    price: 650,
    image: "/images/whey.png",
    gallery: getGallery("/images/whey.png"),
    description: "Premium whey protein isolate for maximum muscle recovery. Packed with 24g of high-quality protein per serving.",
    flavorOptions: ["Double Rich Chocolate", "Vanilla Ice Cream", "Delicious Strawberry"],
    weightOptions: ["2 Lbs", "5 Lbs"],
    availability: "IN STOCK"
  },
  {
    id: 2,
    name: "Iso100 Hydrolyzed",
    category: "Protein",
    price: 800,
    image: "/images/whey.png",
    gallery: getGallery("/images/whey.png"),
    description: "Fast-absorbing hydrolyzed whey protein isolate. Designed for the hardest working athletes.",
    flavorOptions: ["Fudge Brownie", "Gourmet Vanilla"],
    weightOptions: ["1.6 Lbs", "5 Lbs"],
    availability: "LOW STOCK"
  },
  {
    id: 3,
    name: "Serious Mass Gainer",
    category: "Mass Gainers",
    price: 550,
    image: "/images/massgainer.png",
    gallery: getGallery("/images/massgainer.png"),
    description: "High-calorie weight gainer formula with 50g of protein and 250g of carbs per serving to pack on size.",
    flavorOptions: ["Chocolate", "Banana", "Vanilla"],
    weightOptions: ["6 Lbs", "12 Lbs"],
    availability: "IN STOCK"
  },
  {
    id: 4,
    name: "Creatine Monohydrate",
    category: "Creatine",
    price: 250,
    image: "/images/creatine.png",
    gallery: getGallery("/images/creatine.png"),
    description: "100% pure micronized creatine monohydrate. Increase strength, power, and muscle mass.",
    flavorOptions: ["Unflavored"],
    weightOptions: ["300g", "600g"],
    availability: "IN STOCK"
  },
  {
    id: 5,
    name: "C4 Original Pre-Workout",
    category: "Pre Workout",
    price: 350,
    image: "/images/preworkout.png",
    gallery: getGallery("/images/preworkout.png"),
    description: "Explosive energy, heightened focus, and an overwhelming urge to tackle any challenge.",
    flavorOptions: ["Fruit Punch", "Icy Blue Razz", "Watermelon"],
    weightOptions: ["30 Servings", "60 Servings"],
    availability: "IN STOCK"
  },
  {
    id: 6,
    name: "Daily Multi-Vitamin",
    category: "Vitamins",
    price: 150,
    image: "/images/vitamins.svg",
    gallery: [
      "/images/vitamins.svg",
      "/images/vitamins.svg",
      "/images/creatine.png"
    ],
    description: "High-potency essential vitamins and minerals for overall health and immune support.",
    flavorOptions: ["Unflavored"],
    weightOptions: ["60 Tablets", "120 Tablets"],
    availability: "OUT OF STOCK"
  },
  {
    id: 7,
    name: "Casein Nighttime Protein",
    category: "Protein",
    price: 700,
    image: "/images/whey.png",
    gallery: getGallery("/images/whey.png"),
    description: "Slow-digesting micellar casein to feed your muscles while you sleep.",
    flavorOptions: ["Chocolate Supreme", "Cookies & Cream"],
    weightOptions: ["2 Lbs", "4 Lbs"],
    availability: "IN STOCK"
  },
  {
    id: 8,
    name: "BCAA Energy Amino",
    category: "Pre Workout",
    price: 280,
    image: "/images/bcaa.svg",
    gallery: [
      "/images/bcaa.svg",
      "/images/preworkout.png"
    ],
    description: "Essential amino acids with natural caffeine for sustained energy and recovery.",
    flavorOptions: ["Grape", "Green Apple", "Lemon Lime"],
    weightOptions: ["30 Servings"],
    availability: "IN STOCK"
  },
  {
    id: 9,
    name: "Titan Mass Gainer XL",
    category: "Mass Gainers",
    price: 600,
    image: "/images/massgainer.png",
    gallery: getGallery("/images/massgainer.png"),
    description: "Extreme bulk formulation with added creatine and BCAAs for the ultimate hard gainer.",
    flavorOptions: ["Double Chocolate", "Strawberry"],
    weightOptions: ["10 Lbs", "15 Lbs"],
    availability: "LOW STOCK"
  },
  {
    id: 10,
    name: "Steel Shaker Bottle",
    category: "Accessories",
    price: 120,
    image: "/images/shaker.svg",
    gallery: [
      "/images/shaker.svg",
      "/images/creatine.png"
    ],
    description: "Premium stainless steel shaker bottle. Odor resistant and keeps your shakes cold for 12 hours.",
    flavorOptions: ["Matte Black", "Neon Volt"],
    weightOptions: ["700ml"],
    availability: "IN STOCK"
  }
];
