  "use client";
  import { useState, useEffect } from "react";
  import Image from "next/image";

  export default function Hero() {
    // Array of image URLs for the rotating display
    const images = [
      "/images/hero1.jpg",
      "/images/hero2.jpg",
      "/images/hero3.jpg",
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    // State to control the animation class for the image
    const [imageClass, setImageClass] = useState("opacity-0 scale-95");

    useEffect(() => {
      // Set initial animation state after component mounts
      setImageClass("opacity-100 scale-100");

      const interval = setInterval(() => {
        // Start fade-out and scale-down animation
        setImageClass("opacity-0 scale-95");

        // After the fade-out, change the image source and start fade-in and scale-up
        setTimeout(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
          setImageClass("opacity-100 scale-100");
        }, 500); // This duration should match the transition duration for opacity/transform
      }, 3000); // Change image every 3 seconds (3000 milliseconds)

      // Cleanup the interval when the component unmounts
      return () => clearInterval(interval);
    }, [images.length]); // Re-run effect if images array length changes

    return (
      <div className="min-h-screen bg-gray-950 flex flex-col font-sans">
        <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <section className="text-center text-gray-100 max-w-4xl mx-auto">
            {/* Rotating Image Section */}
            <div className="relative mb-8 md:mb-12 w-full max-w-md md:max-w-lg lg:max-w-xl mx-auto">
              {/* Added key prop to force re-render and ensure transition re-applies */}
              <Image
                key={currentImageIndex} // Important for triggering CSS transitions on content change
                src={images[currentImageIndex]}
                alt={`ScentEcho Hero Image ${currentImageIndex + 1}`}
                width={600}
                height={400}
                // Combined transition classes for opacity and transform
                className={`rounded-lg shadow-2xl w-full h-auto object-cover border-2 border-orange-400 transition-all duration-500 ease-in-out ${imageClass}`}
              />
              {/* Optional overlay for visual effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-70"></div>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
              Discover Your Unique{" "}
              <span className="text-orange-400 drop-shadow-lg">Scent</span>
              <span className="text-white">Echo</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Explore a world of exquisite fragrances and find the perfect aroma
              that resonates with your essence.
            </p>

            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="/products"
                className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-orange-500 focus:ring-opacity-50"
              >
                Shop Now
              </a>
              <a
                href="/about"
                className="bg-transparent border-2 border-gray-600 hover:border-orange-400 text-gray-300 hover:text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-gray-500 focus:ring-opacity-50"
              >
                Learn More
              </a>
            </div>
          </section>
        </main>
      </div>
    );
  }
