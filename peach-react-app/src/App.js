import "./App.css";
import React from "react";
import ResultsTable from "./components/ResultsTable";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
} from "react-router-dom";

import moment from "moment";


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>

            <li>
              <Link to="/games">Games</Link>
            </li>

            <li>
              <Link to="/photo">Photo</Link>
            </li>

            <li>
              <Link to="/results">Game results</Link>
            </li>

          </ul>
        </nav>

        <div className="App">
          <section>
            <Switch>

              <Route path="/photo">
                <Map />
              </Route>

              <Route path="/results">
                <h1>Game results</h1>
                <ResultsTable />
              </Route>

             

              <Route path="/">
                <h1>Home</h1>
                Welcome to our service. Please explore
              </Route>

              <Route path="*">
                <NoMatch />
              </Route>
            </Switch>
          </section>
        </div>
      </div>
    </Router>
  );
}
function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

function Map() {
  let location = useLocation();

  return (
    <div>
      <h2>Map</h2>
      <p>Here is the description of the service and necessary terms.</p>
    </div>
  );
}




export default App;