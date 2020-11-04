import React, { Component } from 'react';
import CarItem from './CarItem';
import carsData from './data/cars.json'
import FilterBox from './FilterBox';

export default class CarsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: carsData,
            searchString: '',
            filterBoxValue: ''
        };
        this.deleteCarItem = this.deleteCarItem.bind(this);
        this.filterCars = this.filterCars.bind(this);
    }
    deleteCarItem(car) {
        console.log(car);
        this.setState({ cars: this.state.cars.filter(c => c !== car) });
    }

    filterCars() {
        this.setState((prevState) => ({
            searchString: prevState.filterBoxValue,
            cars: this.state.cars.filter(c => c.name !== this.state.searchString)
        }));
        console.log(this.state.searchString);
    }

    render() {
        return (
            <div>
                {/* <FilterBox onFilterChange={this.filterCars}/> */}
                <input type="text" placeholder="Filter cars" value={this.state.filterBoxValue}
                    onChange={this.filterCars} />
                {this.state.cars.map((car) =>
                    <CarItem car={car} clicked={this.deleteCarItem} />)}
            </div>
        )
    }
}