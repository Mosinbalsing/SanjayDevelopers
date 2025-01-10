import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Hero2 = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="relative top-[-300px] w-full h-[900px]">
      {/* Image sent to the back */}
      <img
        src="/images/about hero.jpg"
        alt="Hero Background"
        className="absolute left-0 w-full h-full object-cover z-[-100] top-[300px]"
      />

      {/* Overlay */}
      <div className="absolute left-0 top-[300px] w-full h-full bg-black bg-opacity-50 z-0 flex items-center justify-center p-11">


      {/* Foreground content */}
      <div className="container mx-auto relative  overflow-hidden mt-[300px]">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full px-4 lg:w-1/2" data-aos="fade-right">
            <div className="hero-content text-white">
              <h1 className="mb-6 text-4xl font-bold !leading-tight sm:text-5xl lg:text-6xl drop-shadow-lg">
                Building dreams, <br />
                <span className="text-yellow-300 drop-shadow-lg">
                  shaping modern living
                </span>
              </h1>
              <p className="mb-8 max-w-[480px] text-lg text-blue-100 drop-shadow-lg">
                Where innovation meets excellence in every project. Sanjay
                Developers - crafting your future.
              </p>
              <div
                className="flex flex-wrap items-center"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <a
                  href="/#"
                  className="inline-flex items-center justify-center rounded-full bg-white text-blue-600 px-8 py-4 text-center text-base font-semibold transition-all hover:bg-yellow-300 hover:text-blue-800 drop-shadow-lg"
                  >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
  );
};

export default Hero2;
