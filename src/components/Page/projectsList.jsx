import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import API from "../../API"
import "bootstrap/dist/css/bootstrap.css"

const ProjectsList = () => {
    const [projects, setProjects] = useState()

    useEffect(() => {
        API.projects.fetchAll()
        .then(data => setProjects(data))
    })
    
    const handleDeleteRow = (id) => {
        const answer = window.confirm("Do you want delete this project?")
        answer && setProjects(projects.filter(project => project.id !== id))
}
    if(projects) {
    return ( 
        <div className="container mt-2">
            <div className="mb-2 "><a href="#" className="bg-dark p-2 text-muted bg-opacity-10">+ New project</a></div>
            <table className="table table-dark">
                <tbody>
                {projects && projects.map(project => {

                    return (
                        <>
                        <tr key={project.id}>
                        <td className ="bg"><Link key={project.id} to = {`/projects/${project.id}`}>{project.name}</Link></td>
                        <td className ="bg"><button onClick={()=>handleDeleteRow(project.id)}>Delete</button></td>
                        </tr>
                        </>

                    )
                    })}
                </tbody>
            </table>
        </div>
     )}
     return "Loading..."
}
 
export default ProjectsList