import React, { Component } from 'react';
import CarItem from './CarItem';
import carsData from './data/cars.json'
import FilterBox from './FilterBox';

export default class CarsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: carsData,
            filterBoxValue: ''
        };
        this.deleteCarItem = this.deleteCarItem.bind(this);
        // this.filterCars = this.filterCars.bind(this);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }
    deleteCarItem(car) {
        console.log(car);
        this.setState({ cars: this.state.cars.filter(c => c !== car) });
    }

    handleFilterTextChange(filterText) {
        this.setState({
            filterBoxValue: filterText,
            cars: this.state.cars.filter(c => c.name !== this.state.searchString)
        });
    }
    render() {
        return (
            <div>
                <FilterBox filterText={this.state.filterBoxValue}
                    onFilterTextChange={this.handleFilterTextChange} />
                {this.state.cars.map((car) =>
                    <CarItem car={car} clicked={this.deleteCarItem} 
                    filterText={this.state.filterBoxValue.toLocaleLowerCase()} />)}
            </div>
        )
    }
}