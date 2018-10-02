import React, { Component } from 'react';
import Drink from './Drink.js'
import './Drinks.css';
import DrinksData from './Drinks.json'

class Drinks extends Component{

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {add: ''};
      }

    handleClick(name){
        this.setState({add: name});
        console.log(name);
    }

    createDrinkComponents(){
        var componentsArray = [];
        for (var i = 0; i < DrinksData.length; i++){
            componentsArray.push(
              <Drink
                name ={DrinksData[i].name}
                src={DrinksData[i].src}
                onChange={this.handleClick}
            />
            );
          }

        return componentsArray;   
    }

    render(){

        return(
            <div className="drinks-contents">
                {this.createDrinkComponents()}
            </div>

        );
    }
}

export default Drinks;