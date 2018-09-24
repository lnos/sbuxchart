import React, { Component } from 'react';
import Drink from './Drink.js'
import './Drinks.css';

class Drinks extends Component{
    
    render(){
        return(
            <div className="drinks-contents">
                <Drink
                    name="Latte macchiato"
                    acronym="LM"
                />
            </div>

        );
    }
}

export default Drinks;