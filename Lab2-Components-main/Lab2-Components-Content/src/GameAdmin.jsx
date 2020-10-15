import React, { Component } from 'react'
import Player from './Player'
import PlayerPanel from './PlayerPanel'

export default class GameAdmin extends Component {
    constructor() {
      super();
      this.state = {
        playerOne: {
          playerName: "",
          active: "true",
          timesPlayed: "0"
        }
      }
      this.ChangePlayerName = this.ChangePlayerName.bind(this);
    }
    render() {
      return (
        <div>
          <Player playerNumber="One" playerName={this.state.playerOne.playerName}
            timesPlayed={this.state.playerOne.timesPlayed} />
          <Player playerNumber="Two" playerName="gracz dwa" timesPlayed="0" />
          <hr />
          <PlayerPanel playerNumber="One" ChangePlayerName={this.ChangePlayerName} />
          <PlayerPanel playerNumber="Two" ChangePlayerName={this.ChangePlayerName} />
        </div>
      );
    }
    ChangePlayerName(event) {
      this.setState({
        playerOne: {
          playerName: event.target.value,
          timesPlayed: this.state.playerOne.timesPlayed
        }
      })
      // this.setState((prevState, props) => ({
      //   age: prevState.age + noOfYears
      // }));
    }
  }