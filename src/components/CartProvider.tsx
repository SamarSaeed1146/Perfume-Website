"use client";

import React, { createContext, useState, useContext, useEffect } from "react";
import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
import toast, { Toaster } from "react-hot-toast"; // Import toast and Toaster

// Define the shape of a cart item
export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl?: string; // Optional image for the cart item
};

// Define the shape of the CartContext
interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">, quantityToAdd?: number) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, newQuantity: number) => void;
  clearCart: () => void;
  cartItemCount: number;
  cartTotalPrice: number;
}

// Create the context with a default undefined value
const CartContext = createContext<CartContextType | undefined>(undefined);

// Cart Provider component
export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const { isAuthenticated } = useKindeAuth();

  // Load cart from localStorage on initial load
  useEffect(() => {
    const storedCart = localStorage.getItem("scentecho_cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  // Save cart to localStorage whenever cartItems change
  useEffect(() => {
    localStorage.setItem("scentecho_cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item: Omit<CartItem, "quantity">, quantityToAdd = 1) => {
    if (!isAuthenticated) {
      // Show a toast notification with a "Sign In" button
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
          ariaProps: { role: "status", "aria-live": "polite" },
        }
      );
      return; // Stop the function here if not authenticated
    }

    // If signed in, proceed to add to cart
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        // If item exists, update its quantity
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantityToAdd }
            : cartItem
        );
      } else {
        // If item is new, add it to the cart
        return [...prevItems, { ...item, quantity: quantityToAdd }];
      }
    });

    // Optional: Show a success toast when item is added
    toast.success(`${item.name} added to cart!`, {
      duration: 3000,
      position: "bottom-right",
    });
  };

  const removeFromCart = (id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, newQuantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  // Calculate total item count
  const cartItemCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Calculate total cart price
  const cartTotalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartItemCount,
        cartTotalPrice,
      }}
    >
      {children}
      <Toaster /> {/* Add the Toaster component here */}
    </CartContext.Provider>
  );
}

// Custom hook to use the CartContext
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
