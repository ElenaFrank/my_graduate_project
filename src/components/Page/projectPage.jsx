import React, {useEffect, useState} from "react"
import API from "../../API"
import PropType from "prop-types"

const ProgectPage = ({comeBack, id}) => {
    const [projectData, setProjectData] = useState()

    useEffect(()=> {
        API.projects.getById(id)
        .then(data => {
            setProjectData(data)
            console.log(data)
        })
        
    })
    
    if(projectData) {
    return ( 
        <>
                <h1 style={{color: "white"}}>Hellow</h1>
                <h2>{id}</h2>
                <h2>{projectData.name}</h2>
                <button onClick={comeBack} > Back!</button>
        </>
     )
    }
    return "Loading..."

    // return <h1 style={{color: "white"}}> Here is user page</h1>
}

ProgectPage.propTypes = {
    comeBack: PropType.func,
    id: PropType.string
}
export default ProgectPage