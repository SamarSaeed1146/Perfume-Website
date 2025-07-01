export default function Features() {
  const features = [
    {
      icon: <span className="text-6xl text-orange-400 mb-4">✨</span>,
      title: "Personalized Scent Profiles",
      description:
        "Our AI helps you discover fragrances that perfectly match your unique taste and style.",
    },
    {
      icon: <span className="text-6xl text-orange-400 mb-4">🍾</span>,
      title: "Exquisite Fragrance Collections",
      description:
        "Explore hand-picked collections of perfumes and colognes from renowned perfumers worldwide.",
    },
    {
      icon: <span className="text-6xl text-orange-400 mb-4">📖</span>,
      title: "Fragrance Discovery Guides",
      description:
        "Learn about different scent families, notes, and how to build your perfect fragrance wardrobe.",
    },
    {
      icon: <span className="text-6xl text-orange-400 mb-4">🌟</span>,
      title: "Exclusive Scent Launches",
      description:
        "Get early access to limited-edition perfumes and special collaborations before anyone else.",
    },
    {
      icon: <span className="text-6xl text-orange-400 mb-4">🗣️</span>,
      title: "Vibrant Scent Community",
      description:
        "Connect with fellow fragrance lovers, share reviews, and discuss your favorite aromas.",
    },
    {
      icon: <span className="text-6xl text-orange-400 mb-4">🧪</span>,
      title: "Custom Fragrance Creation",
      description:
        "Design your own unique perfume or cologne with our intuitive tools and expert guidance.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col font-sans">
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <section className="text-center text-gray-100 max-w-6xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
            Explore Our{" "}
            <span className="text-orange-400 drop-shadow-lg">Key</span> Features
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            ScentEcho offers a suite of powerful tools and experiences designed
            to elevate your fragrance journey.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-700 hover:border-orange-500 transition-all duration-300 ease-in-out transform hover:-translate-y-2"
              >
                <div className="flex justify-center mb-6">
                  {/* Render the text-based icon */}
                  {feature.icon}
                </div>
                <h2 className="text-3xl font-semibold mb-4 text-white">
                  {feature.title}
                </h2>
                <p className="text-gray-300 text-lg">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
