"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  toggleMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleMenu }) => (
  <header className="p-4 flex justify-between items-center border-b">
    <Button onClick={toggleMenu} variant="ghost">
      <Menu size={24} />
    </Button>

    <Link href="/">
      <Image
        src="public\next.svg"
        alt="Next.js Logo"
        width={10}
        height={10}
        unoptimized
      />
    </Link>

    <Button variant="ghost">
      <Search size={24} />
    </Button>
  </header>
);

export default Header;
