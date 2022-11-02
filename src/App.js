// import ProjectsList from "./components/projectsList"
import NavBar from "./components/navBar"
import {Switch, Route} from "react-router-dom"
import Main from "./layouts/main"
import Projects from "./layouts/projects"
import Analitic from "./layouts/analitic"

function App() {
  return (
    <div>
        <NavBar />
        <Switch>
          <Route path="/" exact component = {Main} />
          <Route path="/projects/:projectId?" component = {Projects} />
          <Route path="/analitic" component = {Analitic} />
        </Switch>

    </div>

  )
}

export default App
