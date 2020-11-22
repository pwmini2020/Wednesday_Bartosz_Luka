import React from 'react';
import { connect } from 'react-redux';
import Tile from './Tile';


const mapStateToProps = (state) => {
    return {
        snake: state.snake
    }
}
const mapDispatchToProps = (dispatch) => ({
    moveLeft: () => dispatch({ type: "MOVE_LEFT" })
})

export function Board(props) {

    function paintBoard() {

        // let grid = [[], []];
        // grid[props.height][props.width] = 'a';
        let grid = new Array(props.width);
        for (let i = 0; i < props.width; i++) {
            grid[i] = new Array(props.height);
        }
        for (let i = 0; i < props.width; i++) {
            for (let j = 0; j < props.height; j++) {
                grid[i][j] = 'lightgray';
            }
        }
        for (let s in props.snake) {
            grid[props.snake[s].x][props.snake[s].y] = "green"
        }
        return grid;
    }
    function moveLeft() {
        return { type: "MOVE_LEFT" }
    }
    function handleKeyPress(event) {
        // event.preventDefault();
        // if (event.key === 'Enter') {
        //     console.log('enter press here! ')
        // }
        switch (event.key) {
            case 'w':
                props.dispatch({ type: "MOVE_UP" })
                break;
            case 'a':
                props.dispatch({ type: "MOVE_LEFT" })
                break;
            case 's':
                props.dispatch({ type: "MOVE_DOWN" })
                break;
            case 'd':
                props.dispatch({ type: "MOVE_RIGHT" })
                break;

        }
    }
    return (
        <div focused={true} onKeyPress={e => handleKeyPress(e)}>
            {paintBoard().map(column =>
                <div style={{ "padding": "0px", "margin": "0px", }}>
                    {column.map(row => <Tile color={row} />)}
                </div>)}
            <button>start</button>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)