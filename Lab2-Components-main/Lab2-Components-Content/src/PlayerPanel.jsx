import React, { Component } from 'react'

export default function PlayerPanel(props) {
    return (
      <div>
        <label>
          Set Name of Player {props.playerNumber}
        </label>
        <input onChange={props.ChangePlayerName}></input>
      </div>
    );
  }
  