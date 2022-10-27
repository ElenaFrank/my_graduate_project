import React from "react"
import API from "../API"

const Projects = () => {
    const projects = API.projects.fetchAll()
    return ( 
        <>
        {projects.map(project => {
            return (
                <div key={project.id}>
                    <span>{project.name}</span>
                    <span>{project.time}</span>
                </div>
            )
        })}
        </>
     )
}
 
export default Projects