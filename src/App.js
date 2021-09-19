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
import { PrivateRouter } from "./Components/PrivateRouter";

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
          {/*  component={About} = render={()=> return <About/>} render ={} gives component  */}

          <Route path="/home">
            <Redirect to="/" />
          </Route>
          {/* Normal Route  */}
          {/* <Route path="/private" component={PrivateRouter} /> */}
          {/* Route with render={} for protection private */}
          <Route
            path="/private"
            render={() => {
              const isLoggedIn = localStorage.getItem("isLoggedIn");
              console.log(isLoggedIn); //true
              return isLoggedIn ? (
                <PrivateRouter />
              ) : (
                <p>
                  <b>Page is Secured</b>
                </p>
              );
            }}
          />
          <Route path="*" component={NotFound} />
          {/* Route gives us render() it will for private purpose: */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;

//  <Route
// path="/private"
// render={() => {
//   const isLoggedIn = localStorage.getItem("isLoggedIn"); //need to give key to the getItem ();
//   console.log(isLoggedIn);
//   return isLoggedIn ? (
//     <PrivateRouter />
//   ) : (
//     <p>Please Login with correct password!</p>
//   );
// }}
// />
