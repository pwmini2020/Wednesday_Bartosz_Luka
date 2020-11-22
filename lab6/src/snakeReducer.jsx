
export default function snakeReducer(state = {
    snake: [{ x: 1, y: 7 }, { x: 1, y: 8 }, { x: 1, y: 9 }]
}, action) {
    const head = state.snake[0];
    switch (action.type) {
        case "MOVE_LEFT":
            if (head.y === 0) {
                return state;
            }
            state.snake.pop();
            return { ...state, snake: [{ x: head.x, y: head.y - 1 }, ...state.snake] };
        case "MOVE_RIGHT":
            if (head.y === 9) {
                return state;
            }
            state.snake.pop();
            return { ...state, snake: [{ x: head.x, y: head.y + 1 }, ...state.snake] };
        case "MOVE_UP":
            if (head.x === 0) {
                return state;
            }
            state.snake.pop();
            return { ...state, snake: [{ x: head.x - 1, y: head.y }, ...state.snake] };
        case "MOVE_DOWN":
            if (head.x === 9) {
                return state;
            }
            state.snake.pop();
            return { ...state, snake: [{ x: head.x + 1, y: head.y }, ...state.snake] };
        default:
            return state;
    }
}