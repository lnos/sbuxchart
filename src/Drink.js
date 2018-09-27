import React, { Component } from 'react';

class Drink extends Component{
    
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
      }
    
      onChange(e) {
        this.props.onChange(this.props.name);
      }

    render(){
        return(
            <div>
                <button>
                   <img className="thumbnail" src={this.props.src} alt="" onClick={this.onChange}/>
                    <p>{this.props.name}</p>        
                </button>
            </div>
        );
    }
}

export default Drink;