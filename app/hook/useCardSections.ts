import { useState, useEffect } from "react";
import { ScrollableCardSectionProps } from "../types";
import { cardSectionConfigs } from "../data/carditem";

export const useCardSections = () => {
  const [sections, setSections] = useState<ScrollableCardSectionProps[]>([]);

  useEffect(() => {
    // Here you could fetch data from an API instead of using the static data
    setSections(cardSectionConfigs);
  }, []);

  return sections;
};
