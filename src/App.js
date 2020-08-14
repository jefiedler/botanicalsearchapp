import React from "react";
import "./App.css";
import Card from "./componens/CardElement";
import { fetchApiData } from "./api/botanicApi";
require("dotenv").config();

function App() {
  const [plants, setPlants] = React.useState(null);

  const fetchPlants = fetchApiData();
  console.log(fetchPlants);
  return (
    <div className="app">
      <header className="app_headerNav">
        <span className="app_headerNav-text">Botanical Search</span>
        <input
          className="app_headerNav-searchBar"
          placeholder="Search a Plant"
        />
      </header>
      <main>
        <Card />
      </main>
    </div>
  );
}

export default App;
