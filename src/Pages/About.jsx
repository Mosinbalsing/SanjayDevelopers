import { AboutHero } from "@/SupperComponents/AboutHero"
import { ChairmanMessage } from "@/SupperComponents/About-chairman-message"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import Hero from "@/SupperComponents/Hero"
const About = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])
  return (
    <div className=' text-white h-[600px] flex flex-col w-full relative top-[-300px]'>
      <Hero />
      <ChairmanMessage />
     
    </div>
  )
}

export default About
