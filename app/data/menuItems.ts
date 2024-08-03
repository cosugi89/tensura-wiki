import { MenuItem } from "../types";
import { MenuLink } from "../types";

export const menuItems: MenuItem[] = [
  { name: "GLOSSARY", link: "/library" },
  { name: "ARTICLES", link: "/article" },
  { name: "QUIZ", link: "/quiz" },
  { name: "ABOUT", link: "/about" },
];

export const menuLinks: MenuLink[] = [
  {
    name: "YouTube",
    link: "https://www.youtube.com/@co_sugi",
    icon: "public/youtube_icon.svg",
    dark: "public/youtube_icon_dark.svg",
  },
  {
    name: "Twitter",
    link: "https://x.com/CO_sugi_",
    icon: "public/x_icon.svg",
    dark: "public/x_icon_dark.svg",
  },
];
