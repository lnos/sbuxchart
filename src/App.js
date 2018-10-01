import React, { Component } from 'react';
import './App.css';
import Chart from './components/Chart.js';
import Drinks from './components/Drinks.js';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Starbucks Caffeine Visualization</h1>
        <Chart/>
        <Drinks/>
      </div>
    );
  }
}

export default App;
