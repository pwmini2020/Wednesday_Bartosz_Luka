import React, { Component } from 'react'

const App = () => (
  <GameAdmin />
)

function Player(props) {
  return (
    <div>
      <h2>Player {props.playerNumber}</h2>
      <p>
        Name {props.playerName}
      </p>
      <p>
        Played number of times: {props.timesPlayed}
      </p>
      <button>Play</button>
    </div>
  );
}

class GameAdmin extends Component {
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

function PlayerPanel(props) {
  return (
    <div>
      <label>
        Set Name of Player {props.playerNumber}
      </label>
      <input onChange={props.ChangePlayerName}></input>
    </div>
  );
}


export default App