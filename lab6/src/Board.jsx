import React from 'react';
import { connect } from 'react-redux';
import Tile from './Tile';

const mapStateToProps = (state) => {
    return { snake: state.snake }
}
const mapDispatchToProps = (state) =>{
    moveLeft: ()=> dispatch({type:"MOVE_LEFT"})
}

export class Board extends React.Component {
    render() {
        return this.paintBoard().map(col => col.map(color=> {<Tile color={color} />}))
    
    }
    paintBoard(){
        let grid = new Array(this.props.width);
        for (let i = 0; i < this.props.width; i++){
            grid[i]= new Array(this.props.height);
        }
        for (let s in this.props.snake){
            grid[this.props.snake[s].x][this.props.snake[s].y] = "green"
        }
        return grid;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)