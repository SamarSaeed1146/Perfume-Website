"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-300 py-8 px-4 sm:px-6 lg:px-8 shadow-inner mt-12">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center mb-4">
            <span className="text-4xl font-serif italic text-orange-400 mr-2">
              S
            </span>
            <h2 className="text-3xl font-extralight tracking-widest uppercase text-white">
              ScentEcho
            </h2>
          </div>
          <p className="text-sm leading-relaxed max-w-xs">
            Discover your perfect scent. ScentEcho offers a curated collection
            of exquisite fragrances for every occasion and personality.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-white mb-4 border-b-2 border-orange-400 pb-2 inline-block">
            Quick Links
          </h3>
          <ul className="space-y-3">
            <li>
              <Link
                href="/"
                className="text-gray-300 hover:text-orange-400 transition-colors duration-300 ease-in-out text-base"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-gray-300 hover:text-orange-400 transition-colors duration-300 ease-in-out text-base"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-300 hover:text-orange-400 transition-colors duration-300 ease-in-out text-base"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="text-gray-300 hover:text-orange-400 transition-colors duration-300 ease-in-out text-base"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="text-gray-300 hover:text-orange-400 transition-colors duration-300 ease-in-out text-base"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        {/* Categories (Example) */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-white mb-4 border-b-2 border-orange-400 pb-2 inline-block">
            Shop By
          </h3>
          <ul className="space-y-3">
            <li>
              <Link
                href="/category/men"
                className="text-gray-300 hover:text-orange-400 transition-colors duration-300 ease-in-out text-base"
              >
                Men&#39;s Fragrances
              </Link>
            </li>
            <li>
              <Link
                href="/category/women"
                className="text-gray-300 hover:text-orange-400 transition-colors duration-300 ease-in-out text-base"
              >
                Women&#39;s Fragrances
              </Link>
            </li>
            <li>
              <Link
                href="/category/unisex"
                className="text-gray-300 hover:text-orange-400 transition-colors duration-300 ease-in-out text-base"
              >
                Unisex Scents
              </Link>
            </li>
            <li>
              <Link
                href="/new-arrivals"
                className="text-gray-300 hover:text-orange-400 transition-colors duration-300 ease-in-out text-base"
              >
                New Arrivals
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info / Social Media */}
        <div className="text-center md:text-left col-span-1 md:col-span-3 lg:col-span-1">
          <h3 className="text-lg font-semibold text-white mb-4 border-b-2 border-orange-400 pb-2 inline-block">
            Get In Touch
          </h3>
          <address className="not-italic space-y-3 mb-6">
            <p className="flex items-center justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-orange-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              123 Scent Avenue, Perfume City, PC 45678
            </p>
            <p className="flex items-center justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-orange-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              +1 (555) 123-4567
            </p>
            <p className="flex items-center justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-orange-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              info@scentecho.com
            </p>
          </address>
          <div className="flex justify-center md:justify-start space-x-5">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
            >
              {/* Replace with actual SVG icons for social media */}
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} ScentEcho. All rights reserved.</p>
      </div>
    </footer>
  );
}
