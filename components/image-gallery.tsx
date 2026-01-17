"use client";
import Autoplay from "embla-carousel-autoplay";
import { Container } from "./container";
import { ImageCard } from "./image-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";

export const ImageGallery = ({
  images,
  autoScroll,
  variant,
}: {
  images: string[];
  autoScroll: boolean;
  variant: "tilted" | "default";
}) => {
  return (
    <div className="w-full mt-5">
      <Container>
        <div className="grid grid-cols-3 gap-4 md:hidden">
          {images.map((img) => (
            <ImageCard key={img} src={img} />
          ))}
        </div>
      </Container>
      <div
        className={`
            hidden md:block
            ${variant === "tilted" ? "-rotate-3 scale-105 transform-gpu" : ""}
          `}
      >
        <Carousel
          plugins={[
            Autoplay({
              delay: 0,
              stopOnInteraction: true,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
            skipSnaps: true,
            duration: 20000,
          }}
          className={"w-full"}
        >
          <CarouselContent>
            {images.map((img, index) => (
              <CarouselItem key={index} className="md:basis-1/4">
                <div className="p-2">
                  <ImageCard src={img} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Buttons */}
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};
