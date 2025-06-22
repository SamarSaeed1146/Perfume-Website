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

export function Header() {
  const { isAuthenticated, user } = useKindeAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-gray-100 py-4 px-4 sm:px-6 lg:px-8 shadow-xl sticky top-0 z-50">
      <nav className="flex items-center justify-between max-w-screen-xl mx-auto">
        {/* Brand/Logo */}
        <div className="flex items-center">
          <span className="text-3xl font-serif italic text-white mr-2">S</span>
          <h1 className="text-2xl font-light tracking-widest uppercase">
            ScentEcho
          </h1>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          <li>
            <Link
              href="/"
              className="hover:text-white transition-colors duration-200 relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-white transition-colors duration-200 relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-white transition-colors duration-200 relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        </ul>

        {/* Authentication Buttons / User Profile & Logout */}
        <div className="hidden md:flex items-center space-x-4">
          {!isAuthenticated ? (
            <>
              <LoginLink className="text-gray-300 hover:text-white px-4 py-2 border border-gray-600 hover:border-white rounded-md text-sm font-semibold transition-all duration-200 ease-in-out">
                Sign In
              </LoginLink>
              <RegisterLink className="bg-white text-gray-900 hover:bg-gray-200 px-4 py-2 rounded-md text-sm font-semibold transition-all duration-200 ease-in-out">
                Sign Up
              </RegisterLink>
            </>
          ) : (
            <div className="flex items-center space-x-4">
              {user?.picture ? (
                // FIX: Add width and height properties here
                <Image
                  src={user.picture}
                  alt="User Profile"
                  className="w-10 h-10 rounded-full object-cover border-2 border-white"
                  width={40} // Example: width in pixels, matches w-10 (40px)
                  height={40} // Example: height in pixels, matches h-10 (40px)
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center text-white font-bold text-sm">
                  {user?.given_name
                    ? user.given_name.charAt(0).toUpperCase()
                    : "U"}
                </div>
              )}
              <span className="text-gray-200 text-sm hidden lg:inline">
                Hi, {user?.given_name || "User"}!
              </span>
              <LogoutLink className="bg-red-600 text-white hover:bg-red-700 px-4 py-2 rounded-md text-sm font-semibold transition-all duration-200 ease-in-out">
                Logout
              </LogoutLink>
            </div>
          )}
          <ModeToggle />
        </div>

        {/* Mobile Menu Button (Hamburger) - visible only on small screens */}
        <div className="md:hidden flex items-center space-x-4">
          <ModeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-100 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
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
        <div className="md:hidden fixed inset-0 bg-gray-900 bg-opacity-95 flex flex-col items-center justify-center space-y-8 text-2xl z-40">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-6 right-6 text-gray-100 hover:text-white text-4xl focus:outline-none"
            aria-label="Close menu"
          >
            &times;
          </button>
          <ul className="flex flex-col space-y-8">
            <li>
              <Link
                href="/"
                className="hover:text-white transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-white transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-white transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="flex flex-col space-y-4 w-full px-8 mt-8">
            {!isAuthenticated ? (
              <>
                <LoginLink
                  className="text-center text-gray-300 hover:text-white px-4 py-3 border border-gray-600 hover:border-white rounded-md text-lg font-semibold transition-all duration-200 ease-in-out"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign In
                </LoginLink>
                <RegisterLink
                  className="text-center bg-white text-gray-900 hover:bg-gray-200 px-4 py-3 rounded-md text-lg font-semibold transition-all duration-200 ease-in-out"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign Up
                </RegisterLink>
              </>
            ) : (
              <>
                {user?.picture && (
                  // FIX: Add width and height properties here for mobile too
                  <Image
                    src={user.picture}
                    alt="User Profile"
                    className="w-16 h-16 rounded-full object-cover border-4 border-white mx-auto mb-4"
                    width={64} // Example: width in pixels, matches w-16 (64px)
                    height={64} // Example: height in pixels, matches h-16 (64px)
                  />
                )}
                <span className="text-center text-white text-xl font-bold">
                  Hi, {user?.given_name || "User"}!
                </span>
                <LogoutLink
                  className="text-center bg-red-600 text-white hover:bg-red-700 px-4 py-3 rounded-md text-lg font-semibold transition-all duration-200 ease-in-out"
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
