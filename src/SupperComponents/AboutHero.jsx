import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export function AboutHero() {
  const [api, setApi] = useState();
  const [count, setCount] = useState(0);
  const demoImages = [
    "./villa/img1.jpg",
    "./villa/img2.jpg",
    "./villa/img3.jpg",
    "./villa/img4.jpg",
    "./villa/img5.jpg",
    "./villa/img6.jpg",
    "./villa/img7.jpg",
  ]
  useEffect(() => {
    if (!api) return;

    // Set initial count and current slide
    setCount(api.scrollSnapList().length);
   
    // Set up auto-scroll
    const interval = setInterval(() => {
      if (api) {
        const nextSlide = (api.selectedScrollSnap() + 1) % count; // Loop back to the first slide
        api.scrollTo(nextSlide);
      }
    }, 2000); // 2 seconds

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, [api, count]);

  return (
    <div className="w-full h-[900px] flex justify-center items-center flex-col p-0 m-0">
      <Carousel setApi={setApi} className="w-full h-[900px] p-0">
        <CarouselContent className="w-full  h-[900px] p-0 m-0">
          {demoImages.map((src, index) => (
            <CarouselItem
            key={index}
            className=" md:basis-1/1 w-full h-[900px] p-0 m-0"
            
          >
            <div className="p-1 w-full h-[600px]">
              <Card className="overflow-hidden w-full h-[900px] relative transform transition-transform duration-300 ">
                {/* Demo Image */}
                <img
                  src={src}
                  alt={`Demo ${index + 1}`}
                  className="h-full w-full object-cover"
                />
                {/* Text on Hover */}
                <div className="absolute inset-0 flex items-center justify-center bg-[#433B71] bg-opacity-60  opacity-100 transition-opacity duration-300">
                  <span className="text-white text-xl font-semibold">
                    Demo {index + 1}
                  </span>
                </div>
              </Card>
            </div>
          </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground text-black">
      </div>
    </div>
  );
}
