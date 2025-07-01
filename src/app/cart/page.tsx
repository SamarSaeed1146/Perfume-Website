// app/cart/page.tsx
"use client";

import { useCart } from "@/components/CartProvider"; // Import the useCart hook
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    cartTotalPrice,
    clearCart,
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-extrabold text-orange-400 mb-4">
          Your Cart is Empty
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Looks like you haven&#39;t added anything to your cart yet.
        </p>
        <Link
          href="/scents"
          className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-orange-400 mb-10 drop-shadow-lg">
          Your Shopping Cart
        </h1>

        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 transition-all duration-200 hover:scale-[1.01]"
            >
              <div className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 relative rounded-md overflow-hidden border border-gray-700">
                {item.imageUrl ? (
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100px, 128px"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-700 flex items-center justify-center text-gray-400 text-xs">
                    No Image
                  </div>
                )}
              </div>

              <div className="ml-4 flex-grow">
                <h2 className="text-xl sm:text-2xl font-semibold text-white">
                  {item.name}
                </h2>
                <p className="text-orange-400 text-lg sm:text-xl mt-1">
                  ${item.price.toFixed(2)}
                </p>
                <div className="flex items-center mt-3 space-x-2">
                  <label htmlFor={`quantity-${item.id}`} className="sr-only">
                    Quantity
                  </label>
                  <input
                    id={`quantity-${item.id}`}
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.id, parseInt(e.target.value))
                    }
                    className="w-16 bg-gray-700 border border-gray-600 rounded-md text-white text-center py-1 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  />
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-400 ml-4 font-medium transition-colors duration-200 flex items-center gap-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.92c-1.01 0-1.957-.73-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.13-2.09-2.201L13.787 3c-1.389-.571-3.072.643-3.072 2.153V6.25M6 10.25h12"
                      />
                    </svg>
                    Remove
                  </button>
                </div>
              </div>

              <div className="text-right text-lg sm:text-xl font-bold text-white">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center text-lg sm:text-xl">
          <p className="text-gray-300 font-semibold mb-4 sm:mb-0">
            Total:{" "}
            <span className="text-orange-400 text-2xl font-bold">
              ${cartTotalPrice.toFixed(2)}
            </span>
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
            <button
              onClick={clearCart}
              className="w-full sm:w-auto bg-gray-700 hover:bg-gray-600 text-white py-3 px-6 rounded-full font-semibold transition-all duration-200 ease-in-out shadow-md"
            >
              Clear Cart
            </button>
            <Link
              href="/checkout"
              className="w-full sm:w-auto text-center bg-orange-600 hover:bg-orange-700 text-white py-3 px-6 rounded-full font-bold transition-all duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
