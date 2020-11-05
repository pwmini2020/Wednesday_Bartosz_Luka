import React, { Component } from 'react';

export default class CarItem extends Component {
    constructor(props) {
        super(props);

    }
    handleEditButton(event){
        this.props.onEditClicked(event.target.value);
    }

    render() {
        return (
            <div>
                {
                    this.props.filterText === '' ||
                        this.props.car.name.toLocaleLowerCase().indexOf(this.props.filterText)!==-1 ?
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
                            <button onClick={() => this.props.onDeleteClicked(this.props.car)}>delete</button>
                            {/* <button onClick={() =>this.props.onEditClicked(this.props.car)}>edit price</button> */}
                        </fieldset>
                        : null
                }
            </div>
        )
    }
}