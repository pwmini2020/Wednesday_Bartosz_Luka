import React, {Component} from 'react';
import cars from './data/cars.json'

export default class CarItem extends Component{

    render(){
        return(
            <div>
                {this.props.car.name}
            </div>
        )
    }
}