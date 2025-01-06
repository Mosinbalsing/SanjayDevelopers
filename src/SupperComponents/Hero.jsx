import { motion } from "framer-motion";
import { CarouselOrientation } from "./Carousel";
const Hero = () => {
  return (
    <div className="relative bg-[rgb(55,94,191)] bg-[linear-gradient(90deg,_rgba(0,212,255,1)_0%,_rgba(9,9,121,1)_31%,_rgba(2,0,36,1)_100%)] pb-[120px] xl:pt-[120px] dark:bg-dark min-h-[650px] lg:pt-[150px] px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] "></div>
      
      <div className="container mx-auto relative z-10 overflow-hidden">
        <div className="flex flex-wrap items-center -mx-4">
          <motion.div 
            className="w-full px-4 lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="hero-content text-white">
              <h1 className="mb-6 text-4xl font-bold !leading-tight sm:text-5xl lg:text-6xl">
                Building dreams, <br/>
                <span className="text-yellow-300">shaping modern living</span>
              </h1>
              <p className="mb-8 max-w-[480px] text-lg text-blue-100">
                Where innovation meets excellence in every project. Sanjay Developers - crafting your future.
              </p>
              <motion.div 
                className="flex flex-wrap items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <a
                  href="/#"
                  className="inline-flex items-center justify-center rounded-full bg-white text-blue-600 px-8 py-4 text-center text-base font-semibold transition-all hover:bg-yellow-300 hover:text-blue-800"
                >
                  Get Started
                </a>
              </motion.div>
            </div>
          </motion.div>
        
          <motion.div 
            className="w-full px-4 lg:w-1/2 mt-12 lg:mt-0 "
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative ">
              
              <div className="relative bg-transparent dark:bg-gray-800 p-2 rounded-lg top-[-100px] flex justify-end ">
              <CarouselOrientation />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;

