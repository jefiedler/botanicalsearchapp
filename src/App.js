import React from "react";
import "./App.css";
import Card from "./componens/CardElement";
import List from "./componens/List";

function App() {
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
        <List>
          
        </List>
      </main>
    </div>
  );
}

export default App;
