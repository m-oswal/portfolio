import React from 'react'

function ProjectCard({ src , url ,projectname , projectdesc}) {
  return (
    <a href={url} target="_blank">
    <img className="hover" src={src} alt="dummy" />
    <h3>{projectname}</h3>
    <p>{projectdesc}</p>
</a>
  )
}

export default ProjectCard
