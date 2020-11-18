import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
// import EditCar from './EditCar';
import CarsList from './CarsList';

const Home = () => (<h1>Home</h1>)
const About = () => (<h1>About</h1>)

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/carsList">
        <CarsList />
      </Route>
    </Switch>
  </Router>
)

export default App;
