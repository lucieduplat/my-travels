// src/App.js
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"></h1>
        </header>
        <Travel
        photo = "http://www.angelio.net/blogangelio/wp-content/uploads/2018/01/berlin-vie-nocturne.jpg"
        country = "Berlin"
        distance = "234 km"
        destination = "Allemagne"

        />
         <Travel
        photo = "https://static.posters.cz/image/1300/carta-da-parati/rio-de-janeiro-i25132.jpg"
        country = "Rio"
        distance = "234 km"
        destination = "Brezil"

        />
      </div>
    );
  }
}

export default App;
