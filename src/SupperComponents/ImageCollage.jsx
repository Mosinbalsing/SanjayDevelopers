import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ImageCollage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      <img
        src="./villa/img7.jpg"
        alt="Luxury skyscraper"
        className="absolute top-0 right-0 w-[60%] h-auto z-30"
        data-aos="fade-left"
        data-aos-delay="300"
      />
      <img
        src="./villa/img8.jpg"
        alt="Modern residential building"
        className="absolute top-[15%] left-[10%] w-[50%] h-auto z-20"
        data-aos="fade-left"
        data-aos-delay="200"
      />
      <img
        src="./villa/img9.jpg"
        alt="Terrace with furniture"
        className="absolute bottom-[10%] left-0 w-[40%] h-auto z-10"
        data-aos="fade-left"
        data-aos-delay="100"
      />
      <img
        src="./villa/img10.jpg"
        alt="Swimming pool"
        className="absolute bottom-0 right-[20%] w-[30%] h-auto z-0"
        data-aos="fade-left"
        data-aos-delay="0"
      />
    </div>
  );
}

