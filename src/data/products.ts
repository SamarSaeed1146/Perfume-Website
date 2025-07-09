// data/products.ts

export type ProductCategory = "men" | "women" | "unisex" | "new-arrivals";

export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  category: ProductCategory[];
};

export const products: Product[] = [
  {
    id: "men-fragrance-1",
    name: "Mystic Woods",
    price: 85.0,
    description:
      "A bold and earthy scent with notes of sandalwood, cedar, and a hint of spice.",
    imageUrl: "https://placehold.co/400x400/2d3748/a0aec0?text=Mystic+Woods",
    category: ["men"], // Now an array
  },
  {
    id: "men-fragrance-2",
    name: "Urban Explorer",
    price: 72.5,
    description:
      "Fresh and invigorating, perfect for the modern man on the go. Features citrus and marine notes.",
    imageUrl: "https://placehold.co/400x400/2d3748/a0aec0?text=Urban+Explorer",
    category: ["men"], // Now an array
  },
  {
    id: "men-fragrance-3",
    name: "Nightfall Elixir",
    price: 98.0,
    description:
      "A sophisticated evening fragrance with deep amber, leather, and musk undertones.",
    imageUrl:
      "https://placehold.co/400x400/2d3748/a0aec0?text=Nightfall+Elixir",
    category: ["men"], // Now an array
  },
  {
    id: "men-fragrance-4",
    name: "Classic Gentleman",
    price: 65.0,
    description:
      "Timeless and elegant, a blend of vetiver, bergamot, and oakmoss for the discerning individual.",
    imageUrl:
      "https://placehold.co/400x400/2d3748/a0aec0?text=Classic+Gentleman",
    category: ["men"], // Now an array
  },
  {
    id: "men-fragrance-5",
    name: "Adventurer's Spirit",
    price: 78.0,
    description:
      "Invokes the thrill of discovery with crisp pine, wild herbs, and a smoky finish.",
    imageUrl:
      "https://placehold.co/400x400/2d3748/a0aec0?text=Adventurer's+Spirit",
    category: ["men"], // Now an array
  },
  {
    id: "women-fragrance-1",
    name: "Floral Bloom",
    price: 90.0,
    description:
      "A delicate and enchanting floral bouquet, perfect for spring.",
    imageUrl: "https://placehold.co/400x400/2d3748/a0aec0?text=Floral+Bloom",
    category: ["women"], // Now an array
  },
  {
    id: "women-fragrance-2-new", // Example: A new women's arrival
    name: "Sunset Serenade",
    price: 105.0,
    description:
      "A warm and inviting scent with hints of vanilla and exotic fruits, perfect for evening wear.",
    imageUrl: "https://placehold.co/400x400/2d3748/a0aec0?text=Sunset+Serenade",
    category: ["women"], // This product will show on BOTH Women's and New Arrivals pages
  },
  {
    id: "unisex-fragrance-1",
    name: "Zen Garden",
    price: 75.0,
    description:
      "A calming and balanced scent with green tea and bamboo notes.",
    imageUrl: "https://placehold.co/400x400/2d3748/a0aec0?text=Zen+Garden",
    category: ["unisex"], // Now an array
  },
  {
    id: "new-arrival-1",
    name: "Aurora Borealis",
    price: 110.0,
    description:
      "A limited edition, shimmering fragrance inspired by the northern lights.",
    imageUrl: "https://placehold.co/400x400/2d3748/a0aec0?text=Aurora+Borealis",
    category: ["new-arrivals", "men"], // Now an array
  },
];

// Function to simulate fetching products by category
// It now checks if the product's category array INCLUDES the requested category
export const getProductsByCategory = (category: ProductCategory) => {
  return products.filter((product) => product.category.includes(category));
};

// Function to simulate fetching a single product by ID (no change needed here)
export const getProductById = (id: string) => {
  return products.find((product) => product.id === id);
};
