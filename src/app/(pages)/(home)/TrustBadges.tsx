import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

export function TrustBadges() {
  return (
    <div className="page_wrapper mb-16">
      <Carousel
        opts={{
          align: "start",
          slidesToScroll:1,
          loop: true,
          skipSnaps: true,
        }}
      >
        <CarouselContent>
          <CarouselItem className="max-lg:max-w-[250px] lg:basis-1/4  xl:basis-1/5">
            <div>
              <Card className="bg-transparent aspect-square rounded-full p-4">
                <CardContent className="p-0 text-white flex flex-col h-full gap-4 md:gap-4 items-center justify-center text-center">
                  <div>
                    <Image
                      src="/pages/home/trust-badges/badge-1.png"
                      alt="badge"
                      width={90}
                      height={58}
                      className="h-10 w-auto"
                    />
                  </div>
                  <div className="text-xs lg:text-sm max-w-[160px]">
                    40 Years Legacy - Since 1984
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="max-lg:max-w-[250px] lg:basis-1/4  xl:basis-1/5">
            <div>
              <Card className="bg-transparent aspect-square rounded-full p-4">
                <CardContent className="p-0 text-white flex flex-col h-full gap-2 md:gap-4 items-center justify-center text-center">
                  <div>
                    <Image
                      src="/pages/home/trust-badges/badge-2.png"
                      alt="badge"
                      width={90}
                      height={58}
                      className="h-10 w-auto"
                    />
                  </div>
                  <div className="text-xs lg:text-sm max-w-[160px]">
                    20+ Leading Technologies for Manufacturing
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="max-lg:max-w-[250px] lg:basis-1/4  xl:basis-1/5">
            <div>
              <Card className="bg-transparent aspect-square rounded-full p-4">
                <CardContent className="p-0 text-white flex flex-col h-full gap-2 md:gap-4 items-center justify-center text-center">
                  <div>
                    <Image
                      src="/pages/home/trust-badges/badge-3.png"
                      alt="badge"
                      width={90}
                      height={58}
                      className="h-10 w-auto"
                    />
                  </div>
                  <div className="text-xs lg:text-sm max-w-[160px]">
                    500+ Worldwide Dealer Network
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="max-lg:max-w-[250px] lg:basis-1/4  xl:basis-1/5">
            <div>
              <Card className="bg-transparent aspect-square rounded-full p-4">
                <CardContent className="p-0 text-white flex flex-col h-full gap-2 md:gap-4 items-center justify-center text-center">
                  <div>
                    <Image
                      src="/pages/home/trust-badges/badge-4.png"
                      alt="badge"
                      width={90}
                      height={58}
                      className="h-10 w-auto"
                    />
                  </div>
                  <div className="text-xs lg:text-sm max-w-[160px]">
                    200+ Awards in Design and Manufacturing
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="max-lg:max-w-[250px] lg:basis-1/4  xl:basis-1/5">
            <div>
              <Card className="bg-transparent aspect-square rounded-full p-4">
                <CardContent className="p-0 text-white flex flex-col h-full gap-2 md:gap-4 items-center justify-center text-center">
                  <div>
                    <Image
                      src="/pages/home/trust-badges/badge-5.png"
                      alt="badge"
                      width={90}
                      height={58}
                      className="h-10 w-auto"
                    />
                  </div>
                  <div className="text-xs lg:text-sm max-w-[160px]">
                    7000+ Strong & Committed Workforce
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default TrustBadges;
