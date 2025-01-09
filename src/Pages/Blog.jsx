'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Hero from '@/SupperComponents/Hero'



const blogPosts = [
  {
    id: 1,
    title: "What B Corp means to me as a working parent",
    date: "29th Nov 2024",
    excerpt: "As mummy to an energetic (almost) 3-year-old, I've learned that where you work isn't just about the job – even when working part-time it's about finding a place that aligns with your values and supports your whole life.",
    image: "/images/placeholderImage.svg"
  },
  {
    id: 2,
    title: "The Journey to B Corp: A Time to Reflect",
    date: "26th Nov 2024",
    excerpt: "Few and Far is now a Certified B Corporation. In this post, we hear from Co-Founder and Technical Director Thomas on his experience of B Corp and what it means to now be part of one.",
    image: "/images/placeholderImage.svg"
  }
]

export default function BlogSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <div className="relative top-[-200px]">
        <Hero/>
    <section className="px-20 py-16">
      <div className="container mx-auto px-4">
        <div className="space-y-12">
          {blogPosts.map((post, index) => (
            <article 
              key={post.id}
              className="grid md:grid-cols-[300px_1fr] gap-8 hover:opacity-80 transition-opacity cursor-pointer"
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              >
              <div className="relative aspect-square">
                <img
                  src={post.image}
                  alt=""
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <h2 className="text-2xl md:text-3xl font-semibold">{post.title}</h2>
                <p className="">{post.date}</p>
                <p className=" line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center space-x-2  group">
                  <span>Read</span>
                  <svg 
                    className="w-4 h-4 transform transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M17 8l4 4m0 0l-4 4m4-4H3" 
                    />
                  </svg>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
</div>
  )
}

