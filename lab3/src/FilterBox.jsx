import React, { Component } from 'react';

export default class FilterBox extends Component {

    constructor(props) {
        super(props);
        this.handleFilterTextChange= this.handleFilterTextChange.bind(this);
    }


    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value);
    }
    render() {

        return (
            <div>
                <input type="text" placeholder="filter"
                    value={this.props.filterText} onChange={this.handleFilterTextChange} />
            </div>
        );
    }
}