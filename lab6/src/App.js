import './App.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './snakeReducer';
import Board from './Board';

const store = createStore(reducer, composeWithDevTools());

function App() {
  return (
    <Provider store={store}>
      <Board width={10} height={10} />
    </Provider>
  );
}

export default App;
