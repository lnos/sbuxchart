import React, { Component } from 'react';
import './App.css';
import Chart from './components/Chart.js';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Starbucks Caffeine Visualization</h1>
        <Chart/>
        <h4>*Each caffeine is approximate value</h4>
        <h4>**All data has been obtained from <a href="https://www.starbucks.ca/menu/nutrition-info">here</a></h4>
        <p>Made by <a href="https://Lnos.ca">Seong Kim</a></p>
      </div>
    );
  }
}

export default App;
