import React from "react"
import API from "../API"
import "bootstrap/dist/css/bootstrap.css"

const Projects = () => {
    const projects = API.projects.fetchAll()
    return ( 
        <div className="container mt-2">
        <table className="table table-dark table-striped">
        <tbody>
        {projects.map(project => {

        return (
            <>
            <tr scope="row" key={project.id}>
            <td role={"button"}>{project.name}</td>
            <td><i className="bi bi-trash text-grey" role={"button"}></i></td>
            </tr>
            </>

        )

            })}
  </tbody>
</table>
        </div>
     )
}
 
export default Projects