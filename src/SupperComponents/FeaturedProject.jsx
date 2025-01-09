import  { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaMapMarkerAlt,
  FaRulerCombined,
  FaBuilding,
  FaUserTie,
  FaLaptop,
  FaProjectDiagram,
} from "react-icons/fa";

export function FeaturedProject({ project }) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing function
      once: true, // Whether animation should happen only once
    });
  }, []);
  return (
    <div className="space-y-6" data-aos="fade-right" data-aos-duration="1000">
      {/* Image Section */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Description Section */}
      <div className="space-y-8">
        <h2 className="text-4xl font-bold text-center" data-aos="fade-up">
          Structural Consultancy
        </h2>
        <dl
          className="grid grid-cols-2 gap-x-8 gap-y-6 text-lg"
          data-aos="fade-up"
        >
          <div className="flex items-center">
            <FaMapMarkerAlt className="mr-3 text-blue-500 text-2xl" />
            <dt className="font-semibold">Location:</dt>
            <dd className="ml-2">{project.location}</dd>
          </div>
          <div className="flex items-center">
            <FaRulerCombined className="mr-3 text-green-500 text-2xl" />
            <dt className="font-semibold">Built-up Area:</dt>
            <dd className="ml-2">{project.builtUpArea}</dd>
          </div>
          <div className="flex items-center">
            <FaBuilding className="mr-3 text-orange-500 text-2xl" />
            <dt className="font-semibold">Building Configuration:</dt>
            <dd className="ml-2">{project.buildingConfiguration}</dd>
          </div>
          <div className="flex items-center">
            <FaUserTie className="mr-3 text-purple-500 text-2xl" />
            <dt className="font-semibold">Architect:</dt>
            <dd className="ml-2">{project.architect}</dd>
          </div>
          <div className="flex items-center">
            <FaLaptop className="mr-3 text-pink-500 text-2xl" />
            <dt className="font-semibold">Client:</dt>
            <dd className="ml-2">{project.client}</dd>
          </div>
          <div className="flex items-center">
            <FaProjectDiagram className="mr-3 text-teal-500 text-2xl" />
            <dt className="font-semibold">Project Type:</dt>
            <dd className="ml-2">{project.projectType}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
