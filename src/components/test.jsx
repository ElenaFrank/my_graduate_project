import React from "react"
import "bootstrap/dist/css/bootstrap.css"

const Test = () => {
    const arrayData = [
      {id:1, name: "project 1"},
      {id:2, name: "project 2"},
      {id:3, name: "project 3"},
      {id:4, name: "project 4"},
      {id:5, name: "project 5"}
    ]
    return (
      <ul className="table-secondary">
        {arrayData.map(data => ( 
          <li key={data.id}>
            <div>{data.name}</div>
            <button>Del</button>
          </li>
        ))}
      </ul>
    )
}

export default Test

