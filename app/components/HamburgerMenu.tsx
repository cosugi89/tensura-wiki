"use client";

import React from "react";
import { Link, X } from "lucide-react";
import { MenuItem } from "../types";
import { Button } from "@/components/ui/button";

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
    <div className="fixed inset-0 z-10 flex flex-col items-center justify-center">
      <button onClick={toggleMenu} className="absolute top-4 right-4">
        <X size={24} />
      </button>
      <nav className="flex flex-col items-center space-y-6">
        {menuItems.map((item, index) => (
          <a key={index} href={item.link} className="">
            {item.name}
          </a>
        ))}
        <Button
          className="mt-6  px-6 py-2 rounded-full text-lg font-semibold transition duration-300"
          asChild
        >
          <a href="/">ログイン</a>
        </Button>
      </nav>
    </div>
  );

export default HamburgerMenu;
