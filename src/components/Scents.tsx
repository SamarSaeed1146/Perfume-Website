"use client";

import Link from "next/link";
import Image from "next/image";

// Define the structure for our category data
type FragranceCategory = {
  name: string;
  description: string;
  href: string;
  imageUrl: string;
};

// Array of category data for easy mapping
const categories: FragranceCategory[] = [
  {
    name: "Men's Fragrances",
    description: "Bold, charismatic, and timeless scents for the modern man.",
    href: "/category/men",
    imageUrl: "/images/men-fragrance.jpg", // Example image path
  },
  {
    name: "Women's Fragrances",
    description:
      "Elegant, captivating, and graceful perfumes that celebrate femininity.",
    href: "/category/women",
    imageUrl: "/images/women-fragrance.jpg", // Example image path
  },
  {
    name: "Unisex Scents",
    description:
      "Versatile and modern fragrances designed for everyone to wear.",
    href: "/category/unisex",
    imageUrl: "/images/unisex-fragrance.jpg", // Example image path
  },
  {
    name: "New Arrivals",
    description:
      "Discover the latest and most exciting additions to our collection.",
    href: "/category/new-arrivals",
    imageUrl: "/images/new-arrivals.jpg", // Example image path
  },
];

export default function Scents() {
  return (
    <div className="bg-gray-950 text-white min-h-screen font-sans">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        {/* Page Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight uppercase text-orange-400 drop-shadow-lg mb-4">
            All Scents
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore our curated collections. Each fragrance tells a story—find
            the one that speaks to you and resonates with your unique essence.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {categories.map((category) => (
            <Link href={category.href} key={category.name} className="group">
              <div className="relative h-80 sm:h-96 w-full rounded-xl overflow-hidden shadow-xl transform transition-all duration-300 ease-in-out group-hover:-translate-y-2 group-hover:shadow-2xl border border-gray-700 group-hover:border-orange-500">
                {/* Background Image using next/image for optimization */}
                <Image
                  src={category.imageUrl}
                  alt={`Background for ${category.name}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-500 ease-in-out group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/50 to-transparent"></div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-6 text-center">
                  <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-wider text-orange-300 group-hover:text-white transition-colors duration-300">
                    {category.name}
                  </h2>
                  <p className="text-gray-400 text-sm sm:text-base mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out max-w-xs mx-auto">
                    {category.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
