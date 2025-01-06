import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

export function CarouselOrientation() {
  const [api, setApi] = useState()
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (!api || isHovered) {
      return
    }

    const interval = setInterval(() => {
      api.scrollNext()
    }, 2000) // 2000 ms = 2 seconds

    return () => clearInterval(interval) // Clean up the interval on component unmount
  }, [api, isHovered])

  const demoImages = [
    "https://via.placeholder.com/150/FF0000/FFFFFF?Text=Image1",
    "https://via.placeholder.com/150/00FF00/FFFFFF?Text=Image2",
    "https://via.placeholder.com/150/0000FF/FFFFFF?Text=Image3",
    "https://via.placeholder.com/150/FFFF00/FFFFFF?Text=Image4",
    "https://via.placeholder.com/150/FF00FF/FFFFFF?Text=Image5",
    "https://via.placeholder.com/150/00FFFF/FFFFFF?Text=Image6",
    "https://via.placeholder.com/150/000000/FFFFFF?Text=Image7",
  ]

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "start",
        loop: true,
      }}
      orientation="vertical"
      className="w-[60%]  overflow-visible"
    >
      <CarouselContent className="-mt-1 h-[600px] overflow-visible p-10">
        {demoImages.map((src, index) => (
          <CarouselItem
            key={index}
            className="pt-1 md:basis-1/3"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="p-1">
              <Card className="overflow-hidden h-[250px] relative transform transition-transform duration-300 hover:scale-105 hover:-translate-x-6 hover:shadow-lg hover:shadow-white">
                {/* Demo Image */}
                <img
                  src={src}
                  alt={`Demo ${index + 1}`}
                  className="h-full w-full object-cover"
                />
                {/* Text on Hover */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 hover:opacity-100 transition-opacity duration-300">
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
  )
}
