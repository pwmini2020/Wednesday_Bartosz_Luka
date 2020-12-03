import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import EmployeeList from './EmployeeList'
import NewEmployee from './NewEmployee'
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <EmployeeList />
        </Route>
      </Switch>
      <Route path="/employees/new">
        <NewEmployee />
      </Route>
    </Router>
  );
}

export default App;
