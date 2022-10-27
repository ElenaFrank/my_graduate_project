import React from "react"
import API from "../API"

const Projects = () => {
    const projects = API.projects.fetchAll()
    return ( 
        <>
        {projects.map(project => {
            return (

                    <div key={project.id} className="table m-2">
                        <span className="table m-2">{project.name}</span>
                        <span className="h4 pb-2 mb-4 text-danger border-bottom border-danger">{project.time}</span>
                    </div>

            )
        })}
        </>
     )
}
 
export default Projects