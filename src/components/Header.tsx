"use client";

import Link from "next/link";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
import { ModeToggle } from "./Mode-Define";
import { useState } from "react";
import Image from "next/image";
import { useCart } from "@/components/CartProvider"; // Import the useCart hook

import { MdShoppingCart } from "react-icons/md";

export function Header() {
  const { isAuthenticated, user } = useKindeAuth();
  const { cartItemCount } = useCart(); // Get cartItemCount from our context
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-100 py-4 px-4 sm:px-6 lg:px-8 shadow-xl sticky top-0 z-50 transition-all duration-300 ease-in-out">
      <nav className="flex items-center justify-between max-w-screen-xl mx-auto">
        {/* Brand/Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center group">
            <span className="text-4xl font-serif italic text-orange-400 mr-2 transform group-hover:scale-110 transition-transform duration-300">
              S
            </span>
            <h1 className="text-3xl font-extralight tracking-widest uppercase text-white">
              ScentEcho
            </h1>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center space-x-10 text-lg font-medium">
          <li>
            <Link
              href="/"
              className="relative text-gray-300 hover:text-white transition-colors duration-300 ease-in-out group"
            >
              Home
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-orange-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="relative text-gray-300 hover:text-white transition-colors duration-300 ease-in-out group"
            >
              About
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-orange-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="relative text-gray-300 hover:text-white transition-colors duration-300 ease-in-out group"
            >
              Contact
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-orange-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
          </li>
          {/* New "All Scents" link */}
          <li>
            <Link
              href="/scents"
              className="relative text-gray-300 hover:text-white transition-colors duration-300 ease-in-out group"
            >
              All Scents
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-orange-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
          </li>
        </ul>

        {/* Authentication Buttons / User Profile & Logout & Cart Icon */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Cart Icon - Replaced with react-icons component */}
          <Link
            href="/cart"
            className="relative flex items-center text-gray-300 hover:text-orange-400 transition-colors duration-300"
            aria-label={`Shopping Cart with ${cartItemCount} items`} // Added for accessibility
          >
            <MdShoppingCart className="w-7 h-7" />{" "}
            {/* Using the imported icon */}
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pop">
                {cartItemCount}
              </span>
            )}
          </Link>

          {!isAuthenticated ? (
            <>
              <LoginLink className="text-gray-300 hover:text-white px-5 py-2 border border-gray-600 hover:border-orange-400 rounded-full text-sm font-semibold transition-all duration-300 ease-in-out hover:bg-orange-400 hover:bg-opacity-10">
                Sign In
              </LoginLink>
              <RegisterLink className="bg-orange-500 text-white hover:bg-orange-600 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl">
                Sign Up
              </RegisterLink>
            </>
          ) : (
            <div className="flex items-center space-x-4">
              {user?.picture ? (
                <Image
                  src={user.picture}
                  alt="User Profile"
                  className="w-10 h-10 rounded-full object-cover border-2 border-orange-400 ring-2 ring-orange-200"
                  width={40}
                  height={40}
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center text-white font-bold text-sm border-2 border-orange-400 ring-2 ring-orange-200">
                  {user?.given_name
                    ? user.given_name.charAt(0).toUpperCase()
                    : "U"}
                </div>
              )}
              <span className="text-gray-200 text-sm hidden lg:inline">
                Hi,{" "}
                <span className="font-semibold text-orange-300">
                  {user?.given_name || "User"}
                </span>
                !
              </span>
              <LogoutLink className="bg-red-600 text-white hover:bg-red-700 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ease-in-out shadow-lg">
                Logout
              </LogoutLink>
            </div>
          )}
          <ModeToggle />
        </div>

        {/* Mobile Menu Button (Hamburger) - visible only on small screens */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Mobile Cart Icon - Replaced with react-icons component */}
          <Link
            href="/cart"
            className="relative flex items-center text-gray-100 hover:text-orange-400 transition-colors duration-300"
            aria-label={`Shopping Cart with ${cartItemCount} items`} // Added for accessibility
          >
            <MdShoppingCart className="w-7 h-7" />{" "}
            {/* Using the imported icon */}
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pop">
                {cartItemCount}
              </span>
            )}
          </Link>
          <ModeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-100 hover:text-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400 transition-colors duration-200"
            aria-label="Toggle navigation"
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-gray-950 bg-opacity-95 flex flex-col items-center justify-center space-y-8 text-2xl z-40 animate-fade-in">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-6 right-6 text-orange-400 hover:text-white text-4xl focus:outline-none transition-colors duration-200"
            aria-label="Close menu"
          >
            &times;
          </button>
          <ul className="flex flex-col space-y-8 text-center">
            <li>
              <Link
                href="/"
                className="text-gray-300 hover:text-orange-400 transition-colors duration-200 text-3xl font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-gray-300 hover:text-orange-400 transition-colors duration-200 text-3xl font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-300 hover:text-orange-400 transition-colors duration-200 text-3xl font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
            {/* New "All Scents" link in mobile menu */}
            <li>
              <Link
                href="/scents"
                className="text-gray-300 hover:text-orange-400 transition-colors duration-200 text-3xl font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                All Scents
              </Link>
            </li>
            {/* Mobile Cart Link - Replaced with react-icons component */}
            <li>
              <Link
                href="/cart"
                className="text-gray-300 hover:text-orange-400 transition-colors duration-200 text-3xl font-semibold flex items-center justify-center gap-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Cart ({cartItemCount})
                <MdShoppingCart className="w-8 h-8" />{" "}
                {/* Using the imported icon */}
              </Link>
            </li>
          </ul>
          <div className="flex flex-col space-y-5 w-full px-8 mt-10">
            {!isAuthenticated ? (
              <>
                <LoginLink
                  className="text-center text-gray-300 hover:text-white px-4 py-3 border border-gray-600 hover:border-orange-400 rounded-full text-xl font-semibold transition-all duration-200 ease-in-out hover:bg-orange-400 hover:bg-opacity-10"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign In
                </LoginLink>
                <RegisterLink
                  className="text-center bg-orange-500 text-white hover:bg-orange-600 px-4 py-3 rounded-full text-xl font-semibold transition-all duration-200 ease-in-out shadow-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign Up
                </RegisterLink>
              </>
            ) : (
              <>
                {user?.picture && (
                  <Image
                    src={user.picture}
                    alt="User Profile"
                    className="w-20 h-20 rounded-full object-cover border-4 border-orange-400 ring-4 ring-orange-200 mx-auto mb-6"
                    width={80}
                    height={80}
                  />
                )}
                <span className="text-center text-white text-2xl font-bold mb-4">
                  Hi,{" "}
                  <span className="text-orange-300">
                    {user?.given_name || "User"}
                  </span>
                  !
                </span>
                <LogoutLink
                  className="text-center bg-red-600 text-white hover:bg-red-700 px-4 py-3 rounded-full text-xl font-semibold transition-all duration-200 ease-in-out shadow-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Logout
                </LogoutLink>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
