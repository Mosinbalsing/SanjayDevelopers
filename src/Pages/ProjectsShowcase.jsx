import  { useState, useEffect } from "react"
import { projects } from "@/data/projects"
import { ProjectCard } from "@/SupperComponents/ProjectCard"
import { FeaturedProject } from "@/SupperComponents/FeaturedProject"
import AOS from 'aos'
import 'aos/dist/aos.css'
import Hero from "@/SupperComponents/Hero"

export default function ProjectsShowcase() {
  const [activeProjectId, setActiveProjectId] = useState(projects[0].id)
  
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
    })
  }, [])

  const activeProject = projects.find(p => p.id === activeProjectId)

  return (
    <div className="relative top-[-200px]"> 
    <Hero/>
    <div className="container mx-auto py-8 px-8">
      <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
        <FeaturedProject project={activeProject} />
        <div>
          <h2 className="text-2xl font-bold mb-4" data-aos="fade-left" data-aos-duration="600">Projects</h2>
          <div className="divide-y rounded-lg border space-y-4"  data-aos="fade-left" data-aos-duration="600">
            {projects.map((project) => (
              <ProjectCard
              key={project.id}
              project={project}
              isActive={project.id === activeProjectId}
              onClick={() => setActiveProjectId(project.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

