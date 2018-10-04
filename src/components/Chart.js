import React, { Component } from 'react';
import bb from "billboard.js";

class Chart extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    var chart = bb.generate({
      data: {
        x: "x",
        columns: [
        ["x", "Dark Roast", "Pike Roast", "Blond Roast", "Cold Brew", "Americano", "Latte"],
        ["Tall", 193, 235, 270, 150, 150, 75],
       ["Grande", 260, 310, 360, 200, 225, 150],
        ["Venti", 340, 410, 475, 300, 300, 150]
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
    chart.load({
      rows: [
        ["data4", 30, 20, 50, 40, 60, 50, 100, 200]
      ]
    })
  }

  render() {
    return (
        <div id="chart"></div>
    );
  }
}

export default Chart;