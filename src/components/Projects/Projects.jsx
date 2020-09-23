import React from 'react'
import './project.style.css'
import ProjectLogics from './ProjectLogics'

function Projects({ data }) {

  let bidspace, rockpaperscissors, newsonrails

  if (data) {
    // console.log(data.projects.RockPaperScissors)
    bidspace = data.projects.Bidspace
    rockpaperscissors = data.projects.RockPaperScissors
    newsonrails = data.projects.NewsOnRails
  }

  return (
    <div className="project" >
    <h1 className="project__heading">PROJECTS</h1>
    <div className="projects">
        <ProjectLogics projects={bidspace} />
        <ProjectLogics projects={rockpaperscissors} />
        <ProjectLogics projects={newsonrails} />
      </div>
    </div>
  )
}

export default Projects
