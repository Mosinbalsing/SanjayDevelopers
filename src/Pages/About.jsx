import { ChairmanMessage } from "@/SupperComponents/About-chairman-message";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Hero2 from "@/SupperComponents/Hero2";
import { MissionVision } from "@/SupperComponents/mission-vision";
import { CoreValues } from "@/SupperComponents/core-values";
import Navigation from "@/SupperComponents/AboutNav";
import ServicesSection from "@/SupperComponents/Service";
import OurProcess from "@/SupperComponents/OurProcess";
import Clients from "@/SupperComponents/Clients";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="w-full relative top-[-300px]">
      <Hero2 />
      <Navigation />
      <div id="vision" className="">
        <MissionVision />
      </div>
      <div id="values" className="">
        <CoreValues />
      </div>
      <div id="team" className="">
        <ServicesSection />
      </div>
      <div id="founders" className="">
        <ChairmanMessage />
        <Clients/>
      </div>
      <div id="brands" className="">
        <OurProcess/>
      </div>
    </div>
  );
};

export default About;
