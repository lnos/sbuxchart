import React, { Component } from 'react';

class Drink extends Component{
    
    render(){

        const imageClick = () => {
            console.log('Click');
          } 

        return(
            <div>
                <a href="#">
                    <img className="thumbnail" src='./img/LM.jpg' alt="" onClick={() => imageClick()}/>
                    <p>{this.props.name}</p>    
                </a>          
            </div>
        );
    }
}

export default Drink;