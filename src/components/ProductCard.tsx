// components/ProductCard.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/CartProvider"; // Ensure this path is correct based on your setup
import { Product } from "@/data/products"; // Adjust path as necessary

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigating to product detail page
    e.stopPropagation(); // Stop event propagation to the parent Link
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      imageUrl: product.imageUrl,
    });
    // You might want a toast notification here instead of an alert
    // alert(`${product.name} added to cart!`);
    console.log(`${product.name} added to cart!`); // For debugging
  };

  return (
    <div className="bg-gray-900 rounded-xl shadow-xl border border-gray-800 transform transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:border-orange-500 group">
      <Link href={`/products/${product.id}`} className="block">
        <div className="relative w-full h-64 overflow-hidden rounded-t-xl">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
            className="transition-transform duration-500 ease-in-out group-hover:scale-110"
            // Optional: Add onError for placeholder if image fails
            onError={(e) => {
              e.currentTarget.src =
                "https://placehold.co/400x400/333/fff?text=No+Image";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent"></div>
        </div>

        <div className="p-6 text-center">
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
            {product.name}
          </h3>
          <p className="text-orange-300 text-2xl font-bold mb-4">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-gray-400 text-sm mb-4 line-clamp-2">
            {product.description}
          </p>
          <button
            onClick={handleAddToCart}
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-4 rounded-full text-md transition-all duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-orange-500 focus:ring-opacity-50"
          >
            Add to Cart
          </button>
        </div>
      </Link>
    </div>
  );
}
