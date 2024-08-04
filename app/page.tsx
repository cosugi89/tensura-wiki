"use client";

import React from "react";
import HeroSection from "./components/Hero";
import { cardSectionConfigs } from "./data/carditem";
import ScrollableCardSection from "./components/CardSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <main className="flex-grow p-4">
        {cardSectionConfigs.map((config, index) => (
          <ScrollableCardSection key={index} {...config} />
        ))}
      </main>
    </div>
  );
}
