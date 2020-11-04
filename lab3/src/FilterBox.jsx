import React, { Component } from 'react';

export default function(props) {
    return(
        <div>
            <input type="text" placeholder="filter" onChange={this.props.onFilterChange()}/>
            <button>Filter</button>
        </div>
    )
}