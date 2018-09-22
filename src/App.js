import React, { Component } from 'react';
import './App.css';
import bb from "billboard.js";

class App extends Component {

  componentDidMount(){
    bb.generate({
      data: {
        x: "x",
        columns: [
        ["x", "Dark Roast", "Pike Roast", "Blond Roast", "Cold Brew", "Americano", "Latte"],
        ["Tall", 193, 235, 270, 400, 150, 75],
       ["Grande", 260, 310, 360, 200, 225, 150],
        ["Venti", 340, 410, 475, 300, 300, 150]
        ],

        type: "bar"
      },
      axis:{
        x: {
          type: "category"
        }
      },
      bar: {
        width: {
          ratio: 0.5
        }
      },
      bindto: "#chart"
    });
  }

  render() {
    return (
      <div className="App">
        <div id="chart"></div>
        <input type="text" id="textInput" onkeyup="searchFilter()" placeholder="Search for drinks"></input>
      </div>
    );
  }
}

export default App;
