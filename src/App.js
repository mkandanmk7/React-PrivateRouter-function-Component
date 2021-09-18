import "./App.css";
import { Home } from "./Components/Home";
import { Posts } from "./Components/Posts";
import { About } from "./Components/About";
import { NotFound } from "./Components/NotFound";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Header } from "./Components/Header";

function App() {
  return (
    <div className="App">
      <h1>Router Functional Component !</h1>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/posts" component={Posts} />
          <Route path="/about" component={About} />
          <Route path="/home">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
