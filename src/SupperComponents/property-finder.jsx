"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { MapPin, Building, Users, Compass, Briefcase } from "lucide-react";

const properties = [
  {
    title: "Vrundavan Phase II (Purandar Farmhouse Project) - Upcoming",
    image: "./images/Vrundavan.jpg", // Replace with the correct image path
    stats: [
      { icon: <MapPin />, text: "40 plots across 5 acres" },
      { icon: <Compass />, text: "45 mins from Pune" },
    ],
    categories: [
      { name: "NATURE RETREAT", count: 1 },
      { name: "SERENE LOCATION", count: 1 },
      { name: "ACCESSIBILITY", count: 1 },
    ],
  },
  {
    title: "CasaRon Resort (Panchgani Mahabaleshwar) – On-going",
    image: "./images/CasaRon.jpg", // Replace with the correct image path
    stats: [
      { icon: <Building />, text: "67,000 sq. ft. development" },
      { icon: <Users />, text: "6 BHK Villa (12,000 sq. ft.)" },
      { icon: <Briefcase />, text: "3,000 sq. ft. Auditorium" },
    ],
    categories: [
      { name: "LUXURIOUS LIVING", count: 1 },
      { name: "CRAFTSMANSHIP", count: 1 },
      { name: "SEAMLESS BLEND", count: 1 },
    ],
  },
  {
    title:
      "Sanjay Primus (Shivaji Nagar Pune) – Upcoming Redevelopment Project",
    image: "./images/Primus.jpg", // Replace with the correct image path
    stats: [
      { icon: <Briefcase />, text: "20+ sophisticated office spaces" },
      { icon: <MapPin />, text: "Exceptional connectivity" },
    ],
    categories: [
      { name: "STRATEGIC LOCATION", count: 1 },
      { name: "FUNCTIONAL DESIGN", count: 1 },
      { name: "ELEGANCE", count: 1 },
    ],
  },
];

export default function PropertyListing() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1
        className="text-4xl md:text-5xl lg:text-6xl mb-12 font-Sans weight-400 text-gray-800"
        data-aos="fade-down"
      >
        Let us help you find what <br /> you are looking for
      </h1>

      {properties.map((property, index) => (
        <div key={index} className="mb-16">
          <h2
            className="text-2xl text-gray-600 mb-8"
            data-aos="fade-right"
            data-aos-delay={`${index * 100}`}
          >
            {property.title}
          </h2>
          <div
            className="h-0.5 w-24 bg-gray-300 mb-12"
            data-aos="width"
            data-aos-delay={`${index * 200}`}
          ></div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div
              className="relative h-[400px] overflow-hidden rounded-lg"
              data-aos="fade-right"
              data-aos-delay={`${index * 300}`}
            >
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div
              className="space-y-8"
              data-aos="fade-left"
              data-aos-delay={`${index * 400}`}
            >
              <h3 className="text-4xl font-semibold">{property.title}</h3>

              <div className="space-y-4">
                {property.stats.map((stat, statIndex) => (
                  <div key={statIndex} className="flex items-center gap-4">
                    <div className="w-8 h-8 text-gray-800">{stat.icon}</div>
                    <p className="text-gray-600">{stat.text}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {property.categories.map((category, catIndex) => (
                  <p key={catIndex} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                    {category.name} ({category.count})
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Gray line after each project */}
          <hr className="border-gray-300 mt-16" />
        </div>
      ))}
    </div>
  );
}
