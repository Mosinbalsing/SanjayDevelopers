import React from 'react'

export function ProjectCard({ project, isActive, onClick }) {
  return (
    <div 
      className={`flex gap-4 p-4 cursor-pointer transition-colors  ${
        isActive ? 'bg-accent' : 'hover:bg-accent/50'
      }`}
      onClick={onClick}
     
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-[100px] h-[75px] object-cover rounded-md"
      />
      <div className="flex flex-col justify-between">
        <h3 className="font-medium">{project.title}</h3>
        <button className="text-blue-500 hover:text-blue-700 text-sm text-left">
          Read More {'>'}
        </button>
      </div>
    </div>
  )
}

