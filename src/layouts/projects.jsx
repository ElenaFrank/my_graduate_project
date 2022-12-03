import React from "react"
import ProjectsList from "../components/Page/projectsList"
import ProgectPage from "../components/Page/projectPage"
import { useParams, useHistory } from "react-router-dom"

const Projects = () => {
    const params = useParams()
    const history = useHistory()
    const { projectId } = params

    const comeBack = () => {
        history.push("/projects")
    }
    return <>
    {projectId ? <ProgectPage comeBack = {comeBack} id={projectId}/> : < ProjectsList />}
    </>
    
}
 
export default Projects