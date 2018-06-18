import React, { Component } from "react";
import "./App.css";
import avengers from "./avengers";

class App extends Component {
  constructor() {
    super();
    this.state = {
      avengers: avengers
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Avengers: by Brandon Aguirre</h1>
        </header>
        <div>
          {this.state.avengers.map(avenger => (
            <div key={avenger.id}>
              <p>Name: {avenger.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
