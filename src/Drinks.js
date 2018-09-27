import React, { Component } from 'react';
import Drink from './Drink.js'
import './Drinks.css';

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