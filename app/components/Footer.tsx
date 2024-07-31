import React from "react";
import { MenuItem } from "../types";

interface FooterProps {
  menuItems: MenuItem[];
}

const Footer: React.FC<FooterProps> = ({ menuItems }) => (
  <footer className="bg-gray-900 text-white p-6">
    <p className="text-center mb-4">
      『転生したらスライムだった件』のファンによる、ファンのためのコミュニティサイト
    </p>
    <div className="flex justify-center space-x-4 mb-4">
      {menuItems.map((item, index) => (
        <a key={index} href={item.link} className="hover:text-blue-400">
          {item.name}
        </a>
      ))}
    </div>
    <p className="text-center text-sm">
      &copy; 2024 スライム転生Wiki. All rights reserved.
    </p>
  </footer>
);

export default Footer;
