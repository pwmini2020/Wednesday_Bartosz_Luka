
export default function snakeReducer(state = {
    snake: [{ x: 1, y: 1 }, { x: 2, y: 1 }]
}, action) {
    switch (action.type) {
        case "MOVE_LEFT":
            // return { ...state, snake: [...state.snake, state.snake.push({ x: 0, y: 1 })] };
            console.log('lewo');
            return state;
        case "MOVE_RIGHT":
            console.log("prawo")
            return state;
        case "MOVE_UP":
            console.log("gora")
            return state;
        case "MOVE_DOWN":
            console.log("dol")
            return state;
        default:
            return state;
    }
}