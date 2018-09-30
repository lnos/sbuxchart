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
        var HotChocolate = {name: 'Hot Chocolate', src: './img/HC.jpg', caffeine: [25,30,35]};
        var GreenTeaLatte = {name: 'Green Tea Latte', src: './img/GTLT.jpg', caffeine: [55,80,110]};
        var ChaiTeaLatte = {name: 'Chai Tea Latte', src: './img/CH.jpg', caffeine: [70,95,120]};
        var StarbucksRefresher = {name: 'Starbucks Refresher', src: './img/MDR.jpg', caffeine: [45,55,85]};
        var IcedBlackTea = {name: 'Iced Black Tea', src: './img/BT.jpg', caffeine: [25,30,40]};
        var IcedPassionTea = {name: 'Iced Passion Tea', src: './img/PT.jpg', caffeine: [0,0,0]};
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