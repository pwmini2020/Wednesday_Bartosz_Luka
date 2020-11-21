import React from 'react';
import { connect } from 'react-redux';
import Tile from './Tile';


const mapStateToProps = (state) => {
    return { snake: state.snake }
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
                grid[i][j] = 'gray';
            }
        }
        for (let s in props.snake) {
            grid[props.snake[s].x][props.snake[s].y] = "green"
        }
        return grid;
    }
    return paintBoard().map(column =>
        <span style={{"padding":"0px", "margin":"0px", }}>
            {column.map(row => <Tile color={row} />)}
            <br/>
        </span>)
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)