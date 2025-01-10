'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'


const services = [
  {
    title: 'Road Construction',
    description: 'Expert road construction services for all types of projects.',
    image: '/images/placeholderImage.svg'
  },
  {
    title: 'Landscaping and Hardscaping',
    description: 'Transform your outdoor spaces with our landscaping expertise.',
    image: '/images/placeholderImage.svg'
  },
  {
    title: 'Drainage and Water Systems',
    description: 'Efficient drainage and water system solutions for your property.',
    image: '/images/placeholderImage.svg'
  },
  {
    title: 'MEP Work',
    description: 'Comprehensive Mechanical, Electrical, and Plumbing services.',
    image: '/images/placeholderImage.svg'
  },
  {
    title: 'Substation Work',
    description: 'Reliable substation construction and maintenance services.',
    image: '/images/placeholderImage.svg'
  }
]

export default function ServicesSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <section className="bg-[#2E2752] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white" data-aos="fade-up">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

