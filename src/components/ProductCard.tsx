// components/ProductCard.tsx
"use client"; // This component needs to be a Client Component because it handles user interaction (Add to Cart) and uses client-side hooks.

import Image from "next/image";
import Link from "next/link"; // Import Link for navigation
import { Product } from "@/data/products"; // Import your Product type and data
import { useCart } from "@/components/CartProvider"; // Assuming CartProvider is correctly set up
import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs"; // Kinde Auth hook
import toast from "react-hot-toast"; // For toast notifications

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const { isAuthenticated } = useKindeAuth();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent default link navigation when the button is clicked
    e.stopPropagation(); // Stop event propagation so clicking the button doesn't trigger the Link's navigation

    if (!isAuthenticated) {
      toast.custom(
        (t) => (
          <div
            className={`${
              t.visible ? "animate-enter" : "animate-leave"
            } max-w-md w-full bg-gray-800 shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
          >
            <div className="flex-1 w-0 p-4">
              <div className="flex items-start">
                <div className="ml-3 flex-1">
                  <p className="text-sm font-medium text-white">
                    Sign In Required
                  </p>
                  <p className="mt-1 text-sm text-gray-400">
                    You need to be signed in to add items to your cart.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex border-l border-gray-700">
              <button
                onClick={() => {
                  toast.dismiss(t.id); // Dismiss the toast
                  window.location.href = "/api/auth/login"; // Redirect to Kinde login
                }}
                className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-orange-400 hover:text-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                Sign In
              </button>
            </div>
          </div>
        ),
        {
          duration: 5000, // Show for 5 seconds
          position: "top-center", // Position at top-center
          ariaProps: {
            "aria-live": "polite",
            role: "status",
          },
        }
      );
      return;
    }

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      imageUrl: product.imageUrl,
    });
    toast.success(`${product.name} added to cart!`, {
      duration: 3000,
      position: "bottom-right",
    });
    console.log(`${product.name} added to cart!`);
  };

  return (
    // The Link component wraps the entire card, making it clickable.
    // The href uses a template literal to embed the product.id into the URL path.
    <Link
      href={`/products/${product.id}`}
      className="group block bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 border border-gray-800 hover:border-orange-500 cursor-pointer"
    >
      <div className="relative h-64 w-full">
        <Image
          src={
            product.imageUrl ||
            "https://placehold.co/400x400/333/fff?text=No+Image"
          }
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
          className="transition-transform duration-500 ease-in-out group-hover:scale-110"
          onError={(e) => {
            e.currentTarget.src =
              "https://placehold.co/400x400/333/fff?text=No+Image";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-orange-400 text-2xl font-bold mb-4">
          PKR {product.price.toFixed(2)}
        </p>
        <button
          onClick={handleAddToCart}
          className={`w-full font-bold py-3 px-4 rounded-full text-md transition-all duration-300 ease-in-out transform shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-opacity-50
            ${
              isAuthenticated
                ? "bg-orange-600 hover:bg-orange-700 text-white hover:scale-105 focus:ring-orange-500"
                : "bg-gray-700 text-gray-400 cursor-not-allowed"
            }`}
          disabled={!isAuthenticated}
        >
          {isAuthenticated ? "Add to Cart" : "Sign in to Add"}
        </button>
      </div>
    </Link>
  );
}
