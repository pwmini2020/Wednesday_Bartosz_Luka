import React, { Component } from 'react'
import Player from './Player'
import PlayerPanel from './PlayerPanel'

export default class GameAdmin extends Component {
    constructor() {
        super();
        this.state = {
            playerOne: {
                playerName: "",
                notPlaying: "true",
                timesPlayed: 0
            },
            playerTwo: {
                playerName: "",
                notPlaying: "true",
                timesPlayed: 0
            }
        }
        this.ChangePlayerNameOne = this.ChangePlayerNameOne.bind(this);
        this.ChangePlayerNameTwo = this.ChangePlayerNameTwo.bind(this);
        this.Button1Click = this.Button1Click.bind(this);
        this.Button2Click = this.Button2Click.bind(this);
    }
    render() {
        return (
            <div>
                <Player playerNumber="One" playerName={this.state.playerOne.playerName}
                    timesPlayed={this.state.playerOne.timesPlayed}
                    disabled={!this.state.playerOne.notPlaying}
                    playButtonClicked={this.Button1Click}
                    buttonText={this.state.playerOne.notPlaying ? "Play" : "This user is now playing"} />

                <Player playerNumber="Two" playerName={this.state.playerTwo.playerName}
                    timesPlayed={this.state.playerTwo.timesPlayed}
                    disabled={!this.state.playerTwo.notPlaying}
                    playButtonClicked={this.Button2Click}
                    buttonText={this.state.playerTwo.notPlaying ? "Play" : "This user is now playing"} />
                <hr />
                <PlayerPanel playerNumber="One" ChangePlayerName={this.ChangePlayerNameOne} />
                <PlayerPanel playerNumber="Two" ChangePlayerName={this.ChangePlayerNameTwo} />
            </div>
        );
    }
    ChangePlayerNameOne(event) {
        event.persist();
        this.setState((prevState) => ({
            playerOne: {
                ...prevState.playerOne,
                playerName: event.target.value,
            }
        }))
    }
    ChangePlayerNameTwo(event) {
        event.persist();
        this.setState((prevState) => ({
            playerTwo: {
                ...prevState.playerTwo,
                playerName: event.target.value,
            }
        }))
    }
    Button1Click(e) {
        this.setState((prevState) => ({
            playerOne: {
                ...prevState.playerOne,
                timesPlayed: prevState.playerOne.timesPlayed + 1,
                notPlaying: !prevState.playerOne.notPlaying
            },
            playerTwo: {
                ...prevState.playerTwo,
                notPlaying: true
            }
        }))
    }
    Button2Click(e) {
        this.setState((prevState) => ({
            playerTwo: {
                ...prevState.playerTwo,
                timesPlayed: prevState.playerTwo.timesPlayed + 1,
                notPlaying: !prevState.playerTwo.notPlaying
            },
            playerOne: {
                ...prevState.playerOne,
                notPlaying: true
            }
        }))
    }
}