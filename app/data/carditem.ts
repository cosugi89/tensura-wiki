import { ScrollableCardSectionProps, BaseCardItem } from "../types";
import { characterItems } from "./characteritem";
import { magicItems } from "./magicitem";
import { skillItems } from "./skillitem";

export const cardSectionConfigs: ScrollableCardSectionProps[] = [
  {
    title: "Characters",
    allLink: "/all-characters",
    items: characterItems,
    color: "bg-blue-500",
  },
  {
    title: "Skills",
    allLink: "/all-skills",
    items: skillItems,
    color: "bg-red-500",
  },
  {
    title: "Magic",
    allLink: "/all-magic",
    items: magicItems,
    color: "bg-yellow-500",
  },
];
