import React, { Component } from 'react';

class Drink extends Component{
    
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
      }
    
      onClick(e) {
        this.props.update(this.props.data.id);
      }

    render(){

        const imageClick = () => {
            console.log('Click');
          } 

        return(
            <div>
                <button>
                   <img className="thumbnail" src='./img/LM.jpg' alt="" onClick={() => imageClick()}/>
                    <p>{this.props.name}</p>        
                </button>

            </div>
        );
    }
}

export default Drink;