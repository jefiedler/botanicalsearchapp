import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.css";
import Card from "./componens/CardElement";
import { fetchApiData } from "./api/botanicApi";
import Home from "./pages/Home";
import AddPlant from "./pages/AddPlant";
import DetailsPlant from "./pages/DetailsPlant";
import ListPlant from "./pages/ListPlant";

function App() {
  const [plants, setPlants] = React.useState(null);

  const fetchPlants = fetchApiData();
  console.log(fetchPlants);

  return (
    <Router>
      <Switch>
        <Route path="/plantList">
        <div className="app">
              <header className="app_headerNav">
                <span className="app_headerNav-text">Botanical Search</span>
                <input
                  className="app_headerNav-searchBar"
                  placeholder="Search a Plant"
                />
                <button>Fetch Plant</button>
              </header>
              <main>
              </main>
            </div>
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
