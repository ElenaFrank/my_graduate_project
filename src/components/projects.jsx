import React, { useEffect, useState } from "react"
import API from "../API"

const Projects = () => {
    const [projects, setProjects] = useState()
    useEffect(() => {
        API.projects
        .fetchAll()
        .then(data =>{
            console.log(data)
            setProjects(data)
        })
    }, [])
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
 
export default Projects;