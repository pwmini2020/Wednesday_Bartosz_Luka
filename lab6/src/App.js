import './App.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './snakeReducer';

const store = createStore(reducer, composeWithDevTools());
function App() {
  return (
    <Provider store={store}>

    </Provider>
  );
}

export default App;
