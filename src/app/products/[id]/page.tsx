"use client";
import Image from "next/image";
import { notFound } from "next/navigation"; // Used to render a 404 page if product is not found
import { useCart } from "@/components/CartProvider"; // Your CartProvider hook
import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs"; // Kinde Auth hook
import toast from "react-hot-toast"; // For toast notifications
import { products } from "@/data/products";

interface ProductDetailPageProps {
  params: {
    id: string;
  };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const id = params.id;

  const { addToCart } = useCart();
  const { isAuthenticated } = useKindeAuth();

  // Find the product based on the extracted ID from your imported products array
  const product = products.find((p) => p.id === id);
  if (!product) {
    notFound();
  }

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent default button action
    e.stopPropagation(); // Stop event propagation

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
            role: "status", // Added role for better accessibility
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
    <div className="min-h-screen bg-gray-950 text-white py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-800">
        {/* Product Image Section */}
        <div className="relative h-96 lg:h-auto min-h-[400px] overflow-hidden">
          <Image
            src={
              product.imageUrl ||
              "https://placehold.co/600x600/333/fff?text=No+Image"
            }
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
            style={{ objectFit: "cover" }}
            className="transition-transform duration-500 ease-in-out group-hover:scale-110"
            onError={(e) => {
              e.currentTarget.src =
                "https://placehold.co/600x600/333/fff?text=No+Image";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent"></div>
        </div>

        {/* Product Details Section */}
        <div className="p-8 lg:p-12 flex flex-col justify-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
            {product.name}
          </h1>
          <p className="text-orange-400 text-3xl sm:text-4xl font-bold mb-6">
            PKR {product.price.toFixed(2)}
          </p>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            {product.description}
          </p>

          <div className="mt-auto">
            {" "}
            {/* Pushes button to the bottom */}
            <button
              onClick={handleAddToCart}
              className={`w-full font-bold py-4 px-6 rounded-full text-lg transition-all duration-300 ease-in-out transform shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-opacity-50
                ${
                  isAuthenticated
                    ? "bg-orange-600 hover:bg-orange-700 text-white hover:-translate-y-1 focus:ring-orange-500"
                    : "bg-gray-700 text-gray-400 cursor-not-allowed"
                }`}
              disabled={!isAuthenticated}
            >
              {isAuthenticated ? "Add to Cart" : "Sign in to Add"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
