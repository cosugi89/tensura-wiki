import React from "react";
import { MenuItem, MenuLink } from "../types";
import { Link } from "lucide-react";
import { Button } from "@/components/ui/button";
import { menuLinks } from "../data/menuItems";

interface FooterProps {
  menuItems: MenuItem[];
  menuLinks: MenuLink[];
}

const Footer: React.FC<FooterProps> = ({ menuItems }) => (
  <footer className="p-6 border-t sticky top-full">
    <p className="text-center mb-4">
      『転生したらスライムだった件』のファンによる、ファンのためのコミュニティサイト
    </p>
    <div className="flex justify-center space-x-4 mb-4">
      {menuItems.map((item, index) => (
        <Button key={index} variant="ghost">
          <a href={item.link}>{item.name}</a>
        </Button>
      ))}
    </div>
    <div>
      {menuLinks.map((item, index) => (
        <Button key={index} variant="ghost">
          <a href={item.link}>{item.name}</a>
        </Button>
      ))}
    </div>
    <p className="text-center text-sm">
      &copy; 2024 スライム転生Wiki. All rights reserved.
    </p>
  </footer>
);

export default Footer;
