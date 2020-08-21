import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./pages/Home";
import AddPlant from "./pages/AddPlant";
import DetailsPlant from "./pages/DetailsPlant";
import ListPlant from "./pages/ListPlant";

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/plantList">
          <ListPlant/>
        </Route>
        <Route path="/plantDetails">
          <DetailsPlant/>
        </Route>
        <Route path="/addPlant">
          <AddPlant/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
      <footer>
        <Link to="/">Home</Link>
        <Link to="/plantList">List of Plants</Link>
        <Link to="/plantDetails">Plant</Link>
        <Link to="/addPlant">Add new Plant</Link>
      </footer>
    </Router>
  );
}

export default App;
