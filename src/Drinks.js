import React, { Component } from 'react';
import Drink from './Drink.js'
import './Drinks.css';

class Drinks extends Component{

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {add: ''};
        var EspressoMacchiato = {name: 'Latte macchiato', src: './img/LM.jpg', caffeine: [150,225,225]};
        var CaramelMacchiato = {name: 'Caramel macchiato', src: './img/CM.jpg', caffeine: [75,150,150]};
        var CoffeeFrapuccino = {name: 'Coffee Frapuccino', src: './img/CF.jpg', caffeine: [70,95,130]};
        var FlatWhite = {name: 'Flat White', src: './img/FW.jpg', caffeine: [130,195,195]};
      }

    handleClick(name){
        this.setState({add: name});
        console.log(name);
    }

    displayDrinks(data){
        
    }

    render(){
        return(
            <div className="drinks-contents">
                <Drink
                    name="Latte macchiato"
                    src='./img/LM.jpg'
                    onChange={this.handleClick}
                />
                <Drink
                    name="Caramel macchiato"
                    src='./img/CM.jpg'
                    onChange={this.handleClick}
                />
            </div>

        );
    }
}

export default Drinks;