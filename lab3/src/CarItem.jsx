import React, { Component } from 'react';

export default class CarItem extends Component {

    render() {
        return (
            <div>
                <fieldset>
                    <label>
                        
                    {this.props.car.name}
                    </label>
                    <br />
                    <label>
                        $
                    {this.props.car.pricePerDay}
                    </label>
                    <br />
                    <button onClick={()=>this.props.clicked(this.props.car)}>delete</button>
                </fieldset>
            </div>
        )
    }
}