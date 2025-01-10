import { ChairmanMessage } from "@/SupperComponents/About-chairman-message"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import Hero from "@/SupperComponents/Hero"
import { MissionVision } from "@/SupperComponents/mission-vision"
import { CoreValues } from "@/SupperComponents/core-values"
const About = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])
  return (
    <div className='  w-full relative top-[-300px]'>
      <Hero />
      <ChairmanMessage />
      <MissionVision/>
      <CoreValues/>
    </div>
  )
}

export default About
