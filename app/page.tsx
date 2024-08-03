"use client";

import React, { useState } from "react";
import HeroSection from "./components/HeroSection";
import ScrollableCardSection from "./components/ScrollableCardSection";
import { characterItems, magicItems, skillItems } from "./data/carditem";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <HeroSection />
      <main className="flex-grow p-4">
        <ScrollableCardSection
          title="Characters"
          allLink="/all-characters"
          items={characterItems}
        />
        <ScrollableCardSection
          title="Skills"
          allLink="/all-skills"
          items={skillItems}
        />
        <ScrollableCardSection
          title="Magic"
          allLink="/all-magic"
          items={magicItems}
        />
      </main>
    </div>
  );
}
