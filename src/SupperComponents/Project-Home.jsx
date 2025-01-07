"use client"

import React, { useEffect, useState } from 'react'
import { CarouselProject } from './CarouselProject'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { ArrowRight, Code, Palette, Cog } from 'lucide-react'

const ProjectHome = () => {
  const [activeTab, setActiveTab] = useState('all')

  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

  const projects = [
    { id: 1, type: 'web', title: 'E-commerce Platform' },
    { id: 2, type: 'mobile', title: 'Fitness Tracking App' },
    { id: 3, type: 'design', title: 'Brand Identity Redesign' },
    { id: 4, type: 'web', title: 'Portfolio Website' },
  ]

  const filteredProjects = activeTab === 'all' ? projects : projects.filter(project => project.type === activeTab)

  return (
    <div className='flex flex-col items-center w-full bg-gradient-to-r from-blue-500 via-indigo-700 to-purple-900 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
      {/* Floating shapes */}
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
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <h1 
          className='text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-500 mb-12 text-center'
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          Our Projects
        </h1>

        {/* Project type tabs */}
        <div className="flex justify-center mb-8" data-aos="fade-up" data-aos-delay="200">
          {['all', 'web', 'mobile', 'design'].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 mx-2 rounded-full text-white font-semibold transition-colors duration-300 ${
                activeTab === tab ? 'bg-green-500' : 'bg-white bg-opacity-10 hover:bg-opacity-20'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white bg-opacity-10 rounded-lg overflow-hidden backdrop-blur-sm transition-transform duration-300 hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-green-300 mb-4">{project.type.charAt(0).toUpperCase() + project.type.slice(1)} Project</p>
                <a href="#" className="inline-flex items-center text-white hover:text-green-300 transition-colors duration-300">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel section */}
        {/* <div className='flex flex-col md:flex-row justify-between items-center w-full gap-8'>
          <div className='w-full md:w-[45%]' data-aos="fade-right" data-aos-delay="200"> 
            <CarouselProject />
          </div>
          <div className='w-full md:w-[45%]' data-aos="fade-left" data-aos-delay="400">
            <CarouselProject />
          </div>
        </div> */}

        {/* Project stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="600">
          {[
            { icon: Code, title: "20+", description: "Web Projects Completed" },
            { icon: Palette, title: "50+", description: "Design Projects Delivered" },
            { icon: Cog, title: "10+", description: "Mobile Apps Developed" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <stat.icon className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-white mb-2">{stat.title}</h3>
              <p className="text-green-300">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="800">
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition-colors duration-300"
          >
            Start Your Project
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectHome

