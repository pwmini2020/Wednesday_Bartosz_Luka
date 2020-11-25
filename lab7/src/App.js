import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
// import EditCar from './EditCar';
import CarsList from './CarsList';
const url = "http://localhost:3000"
const Home = () => (<h1>Home</h1>)
const About = () => (<h1>About</h1>)

const App = () => (
  <div>
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
      <ul>
        <li><Link to={`/carsList`}>carsList</Link></li>
        <li><Link to={`/`}>home</Link></li>
      </ul>

    </Router>
  </div>
)

export default App;
