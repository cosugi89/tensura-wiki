export interface MenuItem {
  name: string;
  link: string;
}

export interface MenuLink {
  name: String;
  link: string;
  icon: string;
  dark: string;
}

export interface BaseCardItem {
  name: string;
  description: string;
}

export interface CharacterItem extends BaseCardItem {
  race?: string;
  abilities?: string[];
}

export interface SkillItem extends BaseCardItem {
  category?: "active" | "passive";
  cooldown?: number;
}

export interface MagicItem extends BaseCardItem {
  element?: "fire" | "water" | "earth" | "wind" | "light" | "dark";
  mpCost?: number;
}

export interface ScrollableCardSectionProps {
  title: string;
  items: BaseCardItem[];
  color: string;
  allLink: string;
}
