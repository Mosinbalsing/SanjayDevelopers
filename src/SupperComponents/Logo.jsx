'use client'

import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

export default function Log() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])



  if (!isVisible) {
    return null
  }

  return (
    <div
      className="fixed top-20 left-8   text-white rounded   z-50 w-[150px] h-[150px] bg-transparent"
    >
        <Link to="/" className="w-full relative left-1" >
        <div className="flex items-center space-x-2 cursor-pointer justify-start  w-[100%]" data-aos="fade-up">
          <img src="./images/logo.png" alt="Logo" className="h-40 w-40" />
         
        </div>
      </Link>
    </div>
  )
}

