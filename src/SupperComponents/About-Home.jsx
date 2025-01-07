import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowRight, Users, Lightbulb, Target } from 'lucide-react';

const AboutHome = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-500 via-indigo-700 to-purple-900 flex flex-col items-center w-full p-8 gap-12 relative overflow-hidden">
      {/* Floating shapes for visual interest */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full mix-blend-overlay"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              backgroundColor: `rgba(255, 255, 255, ${Math.random() * 0.1 + 0.1})`,
              animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Title and Introduction */}
        <div className="text-center mb-12" data-aos="fade-down">
          <h1 className="text-5xl font-bold text-white mb-6">About Our Journey</h1>
          <p className="text-xl text-white leading-7 max-w-2xl mx-auto">
            We are passionate about creating innovative solutions that make a difference. Our team of experts is dedicated to pushing the boundaries of what's possible in technology and design.
          </p>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            { icon: Users, title: "Expert Team", description: "Our diverse team brings a wealth of experience and creativity to every project." },
            { icon: Lightbulb, title: "Innovative Solutions", description: "We're constantly exploring new technologies to deliver cutting-edge results." },
            { icon: Target, title: "Client-Focused", description: "Your success is our priority. We tailor our approach to meet your unique needs." },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <feature.icon className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-white">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Image Showcase */}
        <div className="flex flex-wrap justify-center gap-6">
          {[1, 2, 3, 4].map((id) => (
            <div
              key={id}
              className="relative overflow-hidden rounded-lg"
              data-aos="flip-left"
              data-aos-delay={id * 100}
            >
              <img
                src={`https://picsum.photos/400/300?random=${id}`}
                alt={`Our Work ${id}`}
                className="w-64 h-48 object-cover transition-transform duration-300 hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">Project {id}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center" data-aos="fade-up">
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition-colors duration-300"
          >
            Get in Touch
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutHome;

