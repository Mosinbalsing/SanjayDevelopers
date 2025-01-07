import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

export function CarouselProject() {
  const [api, setApi] = useState()


  useEffect(() => {
    if (!api ) {
      return
    }

    const interval = setInterval(() => {
      api.scrollNext()
    }, 2000) // 2000 ms = 2 seconds

    return () => clearInterval(interval) // Clean up the interval on component unmount
  }, [api])

  
  const demoImages = [
    "./images/placeholderImage.svg",
    "./images/placeholderImage.svg",
    "./images/placeholderImage.svg",
    "./images/placeholderImage.svg",
    "./images/placeholderImage.svg",
    "./images/placeholderImage.svg",
    "./images/placeholderImage.svg",
  ]

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "start",
        loop: true,
      }}
      orientation="vertical"
      className="w-[70%]  overflow-visible"
    >
      <CarouselContent className="-mt-1 h-[300px] overflow-visible p-10">
        {demoImages.map((src, index) => (
          <CarouselItem
            key={index}
            className="pt-1 md:basis-1/2"
          >
            <div className="p-1">
              <Card className="overflow-hidden h-[250px] relative transform transition-transform duration-300">
                {/* Demo Image */}
                <img
                  src={src}
                  alt={`Demo ${index + 1}`}
                  className="h-full w-full object-cover"
                />
                {/* Text on Hover */}
                <div className="absolute inset-0 flex items-center justify-center  transition-opacity duration-300">
                  <span className="text-white text-xl font-semibold">
                   
                  </span>
                </div>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
