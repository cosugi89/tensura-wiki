import React from "react";

const HeroSection: React.FC = () => (
  <section className="relative h-64">
    <img
      src="/api/placeholder/400/320"
      alt="Hero Background"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition duration-300 uppercase tracking-wider">
        Explore Glossary
      </button>
    </div>
  </section>
);

export default HeroSection;
