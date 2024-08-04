import { MenuItem } from "../types";
import { MenuLink } from "../types";

export const menuItems: MenuItem[] = [
  { name: "GLOSSARY", link: "/glossary" },
  { name: "ARTICLES", link: "/article" },
  { name: "QUIZ", link: "/quiz" },
  { name: "ABOUT", link: "/about" },
];

export const menuLinks: MenuLink[] = [
  {
    name: "YouTube",
    link: "https://www.youtube.com/@co_sugi",
    icon: "/youtube_icon_dark.svg",
    dark: "/youtube_icon.svg",
  },
  {
    name: "Twitter",
    link: "https://x.com/CO_sugi_",
    icon: "/x_icon_dark.svg",
    dark: "/x_icon_dark.svg",
  },
];
