"use client";

import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard"; // Adjust path
import { Product, getProductsByCategory } from "@/data/products"; // Adjust path

export default function MensFragrancesPage() {
  const [mensProducts, setMensProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data from a backend
    const fetchProducts = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate network delay
      const data = getProductsByCategory("men");
      setMensProducts(data);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  return (
    <div className="bg-gray-950 text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 lg:py-36 flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="relative z-10 px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-4 text-orange-400 drop-shadow-lg">
            Men&#39;s Fragrances
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto">
            Discover sophisticated and captivating scents designed for the
            modern man.
          </p>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
        {loading ? (
          <div className="text-center text-xl text-gray-400">
            Loading fragrances...
          </div>
        ) : mensProducts.length === 0 ? (
          <div className="text-center text-xl text-gray-400">
            No men&#39;s fragrances found at the moment.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {mensProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
