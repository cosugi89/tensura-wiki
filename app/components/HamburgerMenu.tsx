"use client";

import React from "react";
import { X } from "lucide-react";
import { MenuItem } from "../types";

interface HamburgerMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
  menuItems: MenuItem[];
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  isOpen,
  toggleMenu,
  menuItems,
}) =>
  isOpen && (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-10 flex flex-col items-center justify-center">
      <button
        onClick={toggleMenu}
        className="absolute top-4 right-4 text-white"
      >
        <X size={24} />
      </button>
      <nav className="flex flex-col items-center space-y-6">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="text-white text-2xl hover:text-blue-400"
          >
            {item.name}
          </a>
        ))}
        <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">
          ログイン
        </button>
      </nav>
    </div>
  );

export default HamburgerMenu;
