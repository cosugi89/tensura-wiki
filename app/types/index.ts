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

export interface CardItem {
  name: string;
  description: string;
}

export interface ScrollableCardSectionProps {
  title: string;
  items: CardItem[];
  allLink: string;
  color: string;
}
