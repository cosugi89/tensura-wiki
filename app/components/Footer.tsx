import React from "react";
import { MenuItem, MenuLink } from "../types";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface FooterProps {
  menuItems: MenuItem[];
  menuLinks: MenuLink[];
}

const Footer: React.FC<FooterProps> = ({ menuItems, menuLinks }) => (
  <footer className="p-6 border-t sticky top-full">
    <p className="text-center mb-4">
      『転生したらスライムだった件』のファンによる、ファンのためのコミュニティサイト
    </p>
    <div className="flex justify-center space-x-4 mb-4">
      {menuItems.map((item, index) => (
        <Button key={index} variant="ghost" asChild>
          <Link href={item.link}>{item.name}</Link>
        </Button>
      ))}
    </div>
    <div className="flex justify-center space-x-4">
      {menuLinks.map((item, index) => (
        <Button
          key={index}
          variant="outline"
          className="rounded-full w-14 h-14"
          asChild
        >
          <Link href={item.link} target="_blank">
            <Image
              src={item.icon}
              alt={`${item.name} icon`}
              width={24}
              height={24}
            />
          </Link>
        </Button>
      ))}
    </div>
    <p className="text-center text-sm mt-4">
      &copy; 2024 スライム転生Wiki. All rights reserved.
    </p>
  </footer>
);

export default Footer;
