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
        },
        playerTwo: {
            playerName: "",
            active: "true",
            timesPlayed: "0"
          }
      }
      this.ChangePlayerNameOne = this.ChangePlayerNameOne.bind(this);
      this.ChangePlayerNameTwo = this.ChangePlayerNameTwo.bind(this);
    }
    render() {
      return (
        <div>
          <Player playerNumber="One" playerName={this.state.playerOne.playerName}
            timesPlayed={this.state.playerOne.timesPlayed} />
          <Player playerNumber="Two" playerName={this.state.playerTwo.playerName} 
            timesPlayed={this.state.playerOne.timesPlayed} />
          <hr />
          <PlayerPanel playerNumber="One" ChangePlayerName={this.ChangePlayerNameOne} />
          <PlayerPanel playerNumber="Two" ChangePlayerName={this.ChangePlayerNameTwo} />
        </div>
      );
    }
    ChangePlayerNameOne(event) {
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
    ChangePlayerNameTwo(event) {
        this.setState({
          playerTwo: {
            playerName: event.target.value,
            timesPlayed: this.state.playerTwo.timesPlayed
          }
        })
        // this.setState((prevState, props) => ({
        //   age: prevState.age + noOfYears
        // }));
      }
  }