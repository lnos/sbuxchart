import React, { Component } from 'react';
import bb from "billboard.js";

class Chart extends Component {

  componentDidMount(){
    bb.generate({
      data: {
        x: "x",
        columns: [
        ["x", "Dark Roast", "Pike Roast", "Blond Roast", "Cold Brew", "Americano", "Latte", "Refreshers"],
        ["Tall", 193, 235, 270, 150, 150, 75, 45],
       ["Grande", 260, 310, 360, 200, 225, 150, 55],
        ["Venti", 340, 410, 475, 300, 300, 150, 85]
        ],
        colors: {
          Tall: "#F8E5D6",
          Grande: "	#D19E91",
          Venti: "	#442220"
        },
        type: "bar"
      },
      axis:{
        x: {
          type: "category"
        },
        y: {
          label: "Caffeine(mg)"
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
        <div id="chart"></div>
    );
  }
}

export default Chart;