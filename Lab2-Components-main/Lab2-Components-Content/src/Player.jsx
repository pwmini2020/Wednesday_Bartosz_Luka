import React, { Component } from 'react'

export default function Player(props) {
    return (
        <div>
            <h2>Player {props.playerNumber}</h2>
            <p>
                Name {props.playerName}
            </p>
            <p>
                Played number of times: {props.timesPlayed}
            </p>
            <button disabled={props.disabled}>Play</button>
        </div>
    );
}

function PlayButtonClicked(e){
    this.setState({
        active: false
    })
}