"use client"; // This page is explicitly a Client Component as it uses useState and useEffect.

import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard"; // Adjust path if necessary
import { Product, products as allProductsData } from "@/data/products"; // Import all products

export default function Scents() {
  const [allScents, setAllScents] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching all products from a backend
    const fetchAllProducts = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate network delay
      setAllScents(allProductsData); // Use the imported allProductsData
      setLoading(false);
    };

    fetchAllProducts();
  }, []);

  return (
    <div className="bg-gray-950 text-white min-h-screen font-sans">
      {/* Page Header */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight uppercase text-orange-400 drop-shadow-lg mb-4">
            All Scents
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore our complete collection of exquisite fragrances. Each scent
            tells a unique story—find the one that resonates with your essence.
          </p>
        </div>

        {/* All Products Grid */}
        <section className="py-8 md:py-12">
          {" "}
          {/* Reduced padding slightly as it's part of the main page */}
          {loading ? (
            <div className="text-center text-xl text-gray-400">
              Loading all scents...
            </div>
          ) : allScents.length === 0 ? (
            <div className="text-center text-xl text-gray-400">
              No scents found at the moment.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {allScents.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </section>
      </div>    
    </div>
  );
}
