"use client";

import React, { useState } from "react";
import HeroSection from "./components/HeroSection";
import ScrollableCardSection from "./components/ScrollableCardSection";
import { characterItems, magicItems, skillItems } from "./data/carditem";
import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <main className="flex-grow p-4">
        <ScrollableCardSection
          title="Characters"
          allLink="/all-characters"
          items={characterItems}
          color="bg-blue-500"
        />
        <ScrollableCardSection
          title="Skills"
          allLink="/all-skills"
          items={skillItems}
          color="bg-red-500"
        />
        <ScrollableCardSection
          title="Magic"
          allLink="/all-magic"
          items={magicItems}
          color="bg-yellow-500"
        />
      </main>
    </div>
  );
}
