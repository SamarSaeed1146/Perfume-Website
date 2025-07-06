"use client";

import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="bg-gray-950 text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] flex items-center justify-center text-center overflow-hidden">
        <Image
          src="https://placehold.co/1920x1080/1a202c/e2e8f0?text=ScentEcho+About+Hero" // Placeholder image
          alt="About ScentEcho Hero"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
          className="absolute inset-0 z-0 opacity-50 transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/70 to-transparent z-10"></div>
        <div className="relative z-20 px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-4 text-orange-400 drop-shadow-lg">
            Our Story, Your Scent.
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto">
            Crafting unique olfactory experiences that resonate with your true
            essence.
          </p>
        </div>
      </section>

      {/* Introduction/Our Philosophy */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
          The ScentEcho Philosophy
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
          At ScentEcho, we believe that fragrance is more than just a
          scent—it&#39;s an extension of your identity, a memory, and a
          statement. We are dedicated to curating a collection of exquisite
          perfumes that speak to the soul, crafted with passion and precision.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-900 p-6 rounded-lg shadow-xl border border-gray-800 hover:border-orange-500 transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="text-xl font-semibold text-orange-400 mb-3">
              Quality First
            </h3>
            <p className="text-gray-400">
              We source only the finest ingredients from around the globe to
              ensure every bottle offers a luxurious and lasting experience.
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow-xl border border-gray-800 hover:border-orange-500 transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="text-xl font-semibold text-orange-400 mb-3">
              Artistry in Every Drop
            </h3>
            <p className="text-gray-400">
              Each fragrance is a masterpiece, meticulously blended by master
              perfumers to create harmonious and captivating notes.
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow-xl border border-gray-800 hover:border-orange-500 transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="text-xl font-semibold text-orange-400 mb-3">
              Sustainable Practices
            </h3>
            <p className="text-gray-400">
              We are committed to ethical sourcing and environmentally conscious
              production, ensuring beauty without compromise.
            </p>
          </div>
        </div>
      </section>

      {/* Our Journey Section (Image Left, Text Right) */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-2xl border border-gray-700">
            <Image
              src="https://placehold.co/800x600/2d3748/a0aec0?text=Our+Journey" // Placeholder image
              alt="Our Journey"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              className="transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
              The Journey of ScentEcho
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Founded in [Year of Founding], ScentEcho began with a simple
              vision: to bring exceptional fragrances to discerning individuals.
              What started as a small passion project has grown into a renowned
              house of perfumes, celebrated for its innovation and timeless
              appeal.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Every step of our journey has been guided by a commitment to
              excellence and a deep understanding of the art of perfumery. We
              constantly explore new horizons, blending traditional techniques
              with modern inspirations to create scents that leave a lasting
              impression.
            </p>
          </div>
        </div>
      </section>

      {/* Our Team Section (Optional - can be expanded) */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-white">
          Meet Our Visionaries
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-xl border border-gray-800 transform hover:scale-105 transition-transform duration-300">
            <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-orange-500">
              <Image
                src="https://placehold.co/128x128/333/fff?text=Founder" // Placeholder
                alt="Founder Name"
                fill
                style={{ objectFit: "cover" }}
                sizes="128px"
              />
            </div>
            <h3 className="text-xl font-semibold text-orange-400 mb-1">
              Jane Doe
            </h3>
            <p className="text-gray-400 text-sm">Founder & CEO</p>
            <p className="text-gray-300 mt-3 text-sm leading-relaxed">
              With a lifelong passion for perfumery, Jane envisioned ScentEcho
              as a sanctuary for unique and high-quality fragrances.
            </p>
          </div>
          {/* Team Member 2 */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-xl border border-gray-800 transform hover:scale-105 transition-transform duration-300">
            <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-orange-500">
              <Image
                src="https://placehold.co/128x128/333/fff?text=Perfumer" // Placeholder
                alt="Lead Perfumer Name"
                fill
                style={{ objectFit: "cover" }}
                sizes="128px"
              />
            </div>
            <h3 className="text-xl font-semibold text-orange-400 mb-1">
              John Smith
            </h3>
            <p className="text-gray-400 text-sm">Lead Perfumer</p>
            <p className="text-gray-300 mt-3 text-sm leading-relaxed">
              John&lsquo;s artistic flair and deep knowledge of aromatic
              compounds bring our most captivating scents to life.
            </p>
          </div>
          {/* Team Member 3 */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-xl border border-gray-800 transform hover:scale-105 transition-transform duration-300">
            <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-orange-500">
              <Image
                src="https://placehold.co/128x128/333/fff?text=Designer" // Placeholder
                alt="Creative Director Name"
                fill
                style={{ objectFit: "cover" }}
                sizes="128px"
              />
            </div>
            <h3 className="text-xl font-semibold text-orange-400 mb-1">
              Emily White
            </h3>
            <p className="text-gray-400 text-sm">Creative Director</p>
            <p className="text-gray-300 mt-3 text-sm leading-relaxed">
              Emily ensures that every aspect of ScentEcho, from bottle design
              to brand narrative, exudes elegance.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-orange-400">
          Ready to Discover Your ScentEcho?
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
          Explore our exquisite collections and find the fragrance that truly
          resonates with you.
        </p>
        <Link
          href="/scents"
          className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-orange-500 focus:ring-opacity-50"
        >
          Shop Our Scents
        </Link>
      </section>
    </div>
  );
}
