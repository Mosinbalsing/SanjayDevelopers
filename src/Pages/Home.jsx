import AboutHome2 from "@/SupperComponents/AboutHome2";
import PropertyFinder from "@/SupperComponents/property-finder";
import ProjectHome from "@/SupperComponents/Project-Home";
import BlogHome from "@/SupperComponents/BlogHome";
import { AboutHero } from "@/SupperComponents/AboutHero";
const Home = () => {
  return (
    <div className="  relative top-[-300px] "> 
      <AboutHero />
      <AboutHome2 />
      <PropertyFinder />
      <ProjectHome />
      <BlogHome />
    </div>
  );
};

export default Home;


