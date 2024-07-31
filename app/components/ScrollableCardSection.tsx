import React, { useState, useRef, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CardItem } from "../types";

interface ScrollableCardSectionProps {
  title: string;
  items: CardItem[];
  allLink: string;
}

const ScrollableCardSection: React.FC<ScrollableCardSectionProps> = ({
  title,
  items,
  allLink,
}) => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = useCallback((direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount = direction === "left" ? -220 : 220;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setScrollPosition((prev) => prev + scrollAmount);
    }
  }, []);

  useEffect(() => {
    const currentRef = containerRef.current;
    const handleScroll = () => {
      if (currentRef) {
        setScrollPosition(currentRef.scrollLeft);
      }
    };

    currentRef?.addEventListener("scroll", handleScroll);
    return () => currentRef?.removeEventListener("scroll", handleScroll);
  }, []);

  const pairedItems = items.reduce<CardItem[][]>((result, item, index) => {
    if (index % 2 === 0) {
      result.push([item]);
    } else {
      result[result.length - 1].push(item);
    }
    return result;
  }, []);

  return (
    <section className="my-6">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-xl font-bold text-white">{title}</h2>
        <a href={allLink} className="text-blue-400 hover:underline text-sm">
          All {title}
        </a>
      </div>
      <div className="relative">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10"
          style={{ display: scrollPosition > 0 ? "block" : "none" }}
        >
          <ChevronLeft size={24} />
        </button>
        <div
          ref={containerRef}
          className="flex overflow-x-auto hide-scrollbar space-x-4 p-2"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {pairedItems.map((pair, pairIndex) => (
            <div key={pairIndex} className="flex-shrink-0 w-52 space-y-4">
              {pair.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="bg-gray-800 rounded-lg shadow-lg p-4 h-40"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default ScrollableCardSection;
