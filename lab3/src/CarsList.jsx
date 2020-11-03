import React, {Component} from 'react';
import CarItem from './CarItem';
import cars from './data/cars.json'

export default class CarsList extends Component{
    render(){
        return(
            <div>
                {cars.map((car)=> <CarItem car={car}/>)}
            </div>
        )
    }
}