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
  NavLink,
} from "react-router-dom";
// import { Header } from "./Components/Header";
import { PrivateRouter } from "./Components/PrivateRouter";

function App() {
  return (
    <div className="App">
      <h1>Router Functional Component !</h1>
      <Router>
        {/* <Header /> */}

        <div>
          <NavLink
            exact
            activeStyle={{
              background: "#acd",
              border: "1px solid red",
              borderRadius: "50%",
              margin: "10px",
              padding: "10px",
              color: "#000",
              fontWeight: "bold",
              textDecoration: "none",
            }}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            activeStyle={{
              background: "#acd",
              border: "1px solid red",
              borderRadius: "20%",
              margin: "10px",
              padding: "10px",
              color: "#000",
              fontWeight: "bold",
              textDecoration: "none",
            }}
            to="/posts"
          >
            Posts
          </NavLink>
          <NavLink
            activeStyle={{
              background: "#acd",
              border: "1px solid red",
              borderRadius: "50%",
              margin: "10px",
              padding: "10px",
              color: "#000",
              fontWeight: "bold",
              textDecoration: "none",
            }}
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            activeStyle={{
              background: "#acd",
              border: "1px solid red",
              borderRadius: "50%",
              margin: "10px",
              padding: "10px",
              color: "#000",
              fontWeight: "bold",
            }}
            to="/private"
          >
            Private
          </NavLink>
          {/* //set login key and value using local Storage.setItem() */}

          <button
            onClick={() => {
              console.log("Logged In");
              localStorage.setItem("isLoggedIn", true);
            }}
          >
            Login
          </button>
        </div>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/posts" component={Posts} />
          <Route path="/about" component={About} />
          {/*  component={About} = render={()=> return <About/>} render ={} gives component  */}{" "}
          r
          <Route path="/home">
            <Redirect to="/" />
          </Route>
          <Route path="*" component={NotFound} />
          {/* Route gives us render() it will for private purpose: */}
          <Route
            path="/private"
            render={() => {
              const isLoggedIn = localStorage.getItem("isLoggedIn"); //need to give key to the getItem ();
              console.log(isLoggedIn);
              return isLoggedIn ? (
                <PrivateRouter />
              ) : (
                <p>Please Login with correct password!</p>
              );
            }}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
