import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CardItem, ScrollableCardSectionProps } from "../types";
import { cn } from "@/lib/utils";

const ScrollableCardSection: React.FC<ScrollableCardSectionProps> = ({
  title,
  items,
  allLink,
  color,
}) => {
  const pairedItems = items.reduce<CardItem[][]>(
    (result, item, index, color) => {
      if (index % 2 === 0) {
        result.push([item]);
      } else {
        result[result.length - 1].push(item);
      }
      return result;
    },
    []
  );

  return (
    <section className="my-6">
      <div className="flex justify-between items-center mb-3 px-3">
        <h2 className="text-xl font-bold">{title}</h2>
        <a href={allLink} className="text-sm">
          All {title}
        </a>
      </div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent className="w-[93%] ml-[2px]">
          {pairedItems.map((pair, pairIndex) => (
            <CarouselItem key={pairIndex} className="basis-1/2 pl-2">
              <div className="p-1">
                {pair.map((item, itemIndex) => (
                  <Card key={itemIndex} className="mb-4">
                    <CardContent className="flex flex-col p-4 min-h-32">
                      <div className="flex items-center mb-2">
                        <div
                          className={cn(
                            "w-1 h-[18px] mr-2 inline-block",
                            color
                          )}
                        ></div>
                        <h3 className="text-lg font-semibold">{item.name}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious /> */}
        {/* <CarouselNext /> */}
      </Carousel>
    </section>
  );
};

export default ScrollableCardSection;
