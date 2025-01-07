import AboutHome from "@/SupperComponents/About-Home";
import AboutHome2 from "@/SupperComponents/AboutHome2";
import Hero from "@/SupperComponents/Hero";
import ProjectHome from "@/SupperComponents/Project-Home";
import BlogHome from "@/SupperComponents/BlogHome";
const Home = () => {
  return (
    <div className=" bg-black">
      <Hero />
      <AboutHome2 />
      <AboutHome />
      <ProjectHome />
      <BlogHome />
    </div>
  );
};

export default Home;


