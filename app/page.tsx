"use client";

import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HamburgerMenu from "./components/HamburgerMenu";
import HeroSection from "./components/HeroSection";
import ScrollableCardSection from "./components/ScrollableCardSection";
import { menuItems } from "./data/menuItems";
import { CardItem } from "./types";

const characterItems: CardItem[] = [
  {
    name: "リムル",
    description: "主人公のスライム。人間だった前世の記憶と知識を持つ",
  },
  {
    name: "ベニマル",
    description: "鬼族の戦士。リムルに忠誠を誓い、強力な部下となる",
  },
  // ... other character items
];

const skillItems: CardItem[] = [
  {
    name: "捕食者",
    description: "対象を丸ごと体内に取り込み、能力を吸収する特殊能力",
  },
  {
    name: "大賢者",
    description: "全知全能の助言者。あらゆる情報を分析し、最適解を導き出す",
  },
  // ... other skill items
];

const magicItems: CardItem[] = [
  { name: "メギド", description: "強大な破壊力を持つ光属性の攻撃魔法" },
  { name: "解析", description: "対象の能力や弱点を詳細に分析する情報収集魔法" },
  // ... other magic items
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header toggleMenu={toggleMenu} />
      <HamburgerMenu
        isOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        menuItems={menuItems}
      />
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
      <Footer menuItems={menuItems} />
    </div>
  );
}
