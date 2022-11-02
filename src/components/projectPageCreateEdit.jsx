import React, {useEffect, useState} from "react"
import API from "../API"

const ProgectPage = ({comeBack, id}) => {
    const [projectData, setProjectData] = useState()
    useEffect(()=> {
        console.log(API.projects.fetchAll(id))
        setProjectData(API.projects.fetchAll(id))
    }, [])
    console.log(projectData)
    return ( 
        <>
                <h1 style={{color: "white"}}>Hellow</h1>
                <h2>{id}</h2>
                <h2>{projectData.name}</h2>
                <button onClick={comeBack} > Back!</button>
        </>
     )
}
 
export default ProgectPage