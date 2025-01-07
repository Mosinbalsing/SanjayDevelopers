import { AboutHero } from "@/SupperComponents/AboutHero"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
const About = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])
  return (
    <div className=' text-white h-[600px] flex flex-col w-full'>
      <AboutHero />
      <div className="bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4 py-16">
        {/* About Us Section */}
        <section data-aos="fade-up" className="mb-12">
          <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">About Us</h1>
          <p className="text-lg text-center">
            At <span className="font-bold">Sanjay Developers</span>, we build more than just structures. We create trust, harmony, and enduring relationships. Specializing in luxury residential, commercial, and redevelopment projects, we have carved a legacy of excellence in Pune’s real estate landscape.
          </p>
        </section>

        {/* Mission Section */}
        <section data-aos="fade-right" className="mb-12">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Our Mission</h2>
          <p className="text-lg">
            Our mission is to ensure <span className="font-semibold">complete customer satisfaction</span> through trust, reliability, and environmental stewardship. We deliver innovative and ambitious solutions that meet the highest standards of quality and sustainability.
          </p>
        </section>

        {/* Vision Section */}
        <section data-aos="fade-left" className="mb-12">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Our Vision</h2>
          <p className="text-lg">
            We envision expanding our footprint in Pune and beyond, fostering growth through our real estate and redevelopment initiatives. By maintaining transparency and excellence, we aim to surpass expectations and build a legacy.
          </p>
        </section>

        {/* Core Values */}
        <section data-aos="zoom-in" className="mb-12">
          <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Transparency", description: "We prioritize openness in all our interactions." },
              { title: "Integrity", description: "We uphold ethical standards in every aspect." },
              { title: "Trust & Loyalty", description: "We cherish long-term relationships with our stakeholders." },
              { title: "Customer Focus", description: "Our customers are at the center of everything we do." },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white shadow-md p-6 rounded-md text-center"
                data-aos="flip-left"
              >
                <h3 className="text-xl font-bold text-blue-600 mb-2">{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Chairman's Message */}
        <section data-aos="fade-up" className="mb-12">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Chairman’s Message</h2>
          <p className="text-lg">
            At <span className="font-bold">Sanjay Developers</span>, we are committed to excellence and quality in every project. From concept to completion, our customer-centric approach ensures we deliver innovative luxury solutions tailored to our clients’ needs. Our expertise in redevelopment, plotting, and residential projects positions us as a leader in Pune’s real estate market.
          </p>
        </section>
      </div>
    </div>
    </div>
  )
}

export default About
