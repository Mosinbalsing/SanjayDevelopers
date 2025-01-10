'use client'

import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from "react"

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  if (!isVisible) {
    return null
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 bg-red-600 p-3 text-white rounded hover:bg-red-700 transition-colors z-50"
      aria-label="Scroll to top"
    >
      <ArrowUp size={24} />
    </button>
  )
}

