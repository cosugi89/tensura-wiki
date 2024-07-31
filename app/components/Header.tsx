"use client";

import React from "react";
import { Menu, Search } from "lucide-react";

interface HeaderProps {
  toggleMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleMenu }) => (
  <header className="bg-gray-900 p-4 flex justify-between items-center">
    <button onClick={toggleMenu} className="text-white z-20">
      <Menu size={24} />
    </button>
    <img src="/api/placeholder/120/40" alt="Logo" className="h-8" />
    <button className="text-white">
      <Search size={24} />
    </button>
  </header>
);

export default Header;
