"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

const destinations = [
  {
    name: "Kenya",
    src: "/images/image1.avif",
    alt: "Silhouette of savanna landscape",
  },
  {
    name: "Rwanda",
    src: "/images/image2.avif",
    alt: "Silhouette of mountain range",
  },
  {
    name: "Tanzania",
    src: "/images/image3.avif",
    alt: "Silhouette of acacia trees",
  },
  {
    name: "Namibia",
    src: "/images/image4.avif",
    alt: "Silhouette of desert dunes",
  },
  {
    name: "Uganda",
    src: "/images/image5.avif",
    alt: "Silhouette of lush forest",
  },
];

export const DestinationsGallery = () => {
  // Using a ref for the plugin to ensure it persists correctly
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true }),
  );

  return (
    <section className="mt-10 py-4 ">
      <Carousel
        plugins={[plugin.current]}
        opts={{
          align: "start",
          loop: true,
          // duration: 40 makes the transition between slides smooth but quick
          duration: 40,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {destinations.map((item, index) => (
            <CarouselItem
              key={index}
              className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <div className="p-1">
                <Card className="bg-transparent border-none shadow-none">
                  <CardContent className="flex aspect-[3/4] items-center justify-center p-0 overflow-hidden rounded-2xl">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={400}
                      height={533}
                      className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                    />
                  </CardContent>
                  <h3 className="font-bold text-center text-stone-800 text-3xl mt-4">
                    {item.name}
                  </h3>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};
