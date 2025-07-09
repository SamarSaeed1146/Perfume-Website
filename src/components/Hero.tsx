"use client";
import { useState, useEffect } from "react";
import Link from "next/link"; // Import the Link component for internal navigation

// Import your local images directly. Next.js handles these imports for static assets.
import Hero_1 from "./../../public/Images/Hero_1.jpg";
import Hero_2 from "./../../public/Images/Hero_2.jpg";
import Hero_3 from "./../../public/Images/Hero_3.jpg";
import Hero_4 from "./../../public/Images/Hero_4.jpg";
import Hero_5 from "./../../public/Images/Hero_5.jpg";

export default function Hero() {
  // Array of imported image modules for the rotating background
  const images = [
    Hero_1.src, // Access the .src property for the image URL
    Hero_2.src,
    Hero_3.src,
    Hero_4.src,
    Hero_5.src,
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // State to control the animation class for the background image container
  const [imageClass, setImageClass] = useState("opacity-0"); // Start with opacity 0 for initial fade-in

  useEffect(() => {
    // Set initial animation state after component mounts
    setImageClass("opacity-100");

    const interval = setInterval(() => {
      // Start fade-out animation
      setImageClass("opacity-0");

      // After the fade-out, change the image source and start fade-in
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setImageClass("opacity-100");
      }, 700); // This duration should match the transition duration for opacity
    }, 4000); // Change image every 4 seconds (4000 milliseconds)

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, [images.length]); // Re-run effect if images array length changes

  return (
    // Main container for the hero section, taking full viewport height
    <div
      className="relative min-h-screen flex items-center justify-center font-sans overflow-hidden"
      style={{
        // Dynamically set background image URL
        backgroundImage: `url(${images[currentImageIndex]})`,
        // 'cover' ensures the image scales to cover the entire container, cropping if necessary.
        // This is generally the best setting for full-bleed background images.
        backgroundSize: "cover",
        // 'center' positions the image in the middle of the container.
        // Adjust this (e.g., 'top', 'bottom', '50% 20%') if important parts of your images
        // are being cropped on certain screen sizes.
        backgroundPosition: "center",
        // Smooth transition for the background image change effect
        transition: "background-image 0.7s ease-in-out",
      }}
    >
      {/* Overlay for better text readability and fade animation */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-700 ease-in-out ${imageClass}`}
        style={{ opacity: 0.6 }}
      ></div>

      {/* Content Section - positioned above the background and overlay */}
      <section className="relative z-10 text-center text-gray-100 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight text-white drop-shadow-lg">
          Discover Your Unique <span className="text-orange-400">Scent</span>
          <span className="text-white">Echo</span>
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Explore a world of exquisite fragrances and find the perfect aroma
          that resonates with your essence.
        </p>

        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Link
            href="/scents"
            className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-orange-500 focus:ring-opacity-50"
          >
            Shop Now
          </Link>
          <Link
            href="/about" // Assuming /about is an internal Next.js route
            className="bg-transparent border-2 border-gray-600 hover:border-orange-400 text-gray-300 hover:text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-gray-500 focus:ring-opacity-50"
          >
            Learn More
          </Link>
        </div>
      </section>
    </div>
  );
}
