import React from 'react'

export default function snakeReducer(state = { snake: [{ x: 1, y: 1 }, { x: 2, y: 1 }] }, action) {
    switch (action.type) {
        case 'MOVE_LEFT':
            if (snake[0][1] == 0)
                return state;
            else
            return { ...state, snake: [state.snake[0][0]}
            break;
        default:
            return state;
    }
}