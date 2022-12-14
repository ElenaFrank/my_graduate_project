import NavBar from "./components/ui/navBar"
import {Switch, Route} from "react-router-dom"
import Main from "./layouts/main"
import Projects from "./layouts/projects"
import Analitic from "./layouts/analitic"
import LoginRegister from "./layouts/LoginRegister"

function App() {
  return (
    <div>
        <NavBar />
        <Switch>
          <Route path="/login" component = {LoginRegister} />
          <Route exact path="/" component = {Main} />
          <Route path="/projects/:projectId?" component = {Projects} />
          <Route path="/analitic" component = {Analitic} />
        </Switch>

    </div>

  )
}

export default App
