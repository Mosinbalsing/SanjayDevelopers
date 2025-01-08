"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectHome = () => {
  const projects = [
    { images: ["./villa/img1.jpg", "./villa/img2.jpg"], marginTop: 0 },
    { images: ["./villa/img3.jpg", "./villa/img4.jpg"], marginTop: "mt-28" },
    { images: ["./villa/img5.jpg", "./villa/img6.jpg"], marginTop: "mt-56" },
    { images: ["./villa/img7.jpg", "./villa/img8.jpg"], marginTop: "mt-28" },
    { images: ["./villa/img9.jpg", "./villa/img10.jpg"], marginTop: 0 },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="bg-[#2E2752] text-white py-12">
      <h1 className="text-4xl font-bold text-center mb-12" data-aos="fade-up">
      Sanjay Developers <br />
      India's Finest Real Estate Brand
      </h1>
      <div className="flex items-start justify-center gap-5 h-[600px]">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col items-center w-60 h-60 gap-4 ${project.marginTop}`}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            {project.images.map((image, imgIndex) => (
              <div
                key={imgIndex}
                className="relative group cursor-pointer"
                style={{ cursor: "url('./view-cursor.svg'), auto" }}
              >
                <img
                  src={image}
                  alt={`Project ${index + 1} Image ${imgIndex + 1}`}
                  className="transition-transform duration-300 transform group-hover:scale-105"
                />
                <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-white font-bold text-lg">
                  View Project
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectHome;
