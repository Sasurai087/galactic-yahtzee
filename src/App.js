import React, { Component } from "react";
import Game from "./components/Game";
import "./App.css";

//To-Do: incorporate context state management to allieviate prop drilling

class App extends Component {
  render() {
    return (
      <div className="App">
        <Game />
      </div>
    );
  }
}

export default App;
