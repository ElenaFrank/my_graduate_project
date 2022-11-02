import React, { useState } from "react"
import API from "../API"
import "bootstrap/dist/css/bootstrap.css"

const ProjectsList = () => {
    const [projects, setProjects] = useState(API.projects.fetchAll())
    const handleDeleteRow = (id) => {
        const answer = window.confirm("Do you want delete this project?")
        answer && setProjects(projects.filter(project => project.id !== id))
}
    return ( 
        <div className="container mt-2">
            <div className="mb-2 "><a href="#" className="bg-dark p-2 text-muted bg-opacity-10">+ New project</a></div>
            <table className="table table-dark">
                <tbody>
                {projects.map(project => {

                    return (
                        <>
                        <tr key={project.id}>
                        <td className ="bg" role={"button"}>{project.name}</td>
                        <td><button onClick={()=>handleDeleteRow(project.id)}>Delete</button></td>
                        </tr>
                        </>

                    )

                    })}
                </tbody>
            </table>
        </div>
     )
}
 
export default ProjectsList