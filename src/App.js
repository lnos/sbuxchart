import React, { Component } from 'react';
import './App.css';
import Chart from './components/Chart.js';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Starbucks Caffeine Visualization</h1>
        <Chart/>
      </div>
    );
  }
}

export default App;
