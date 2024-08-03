"use client";

import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HamburgerMenu from "./components/HamburgerMenu";
import { menuItems, menuLinks } from "./data/menuItems";
import { ThemeProvider } from "@/components/theme-provider";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="flex flex-col">
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <Header menuItems={menuItems} />
        <HamburgerMenu
          isOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          menuItems={menuItems}
        />
        {children}
        <Footer menuItems={menuItems} menuLinks={menuLinks} />
      </ThemeProvider>
    </div>
  );
}
