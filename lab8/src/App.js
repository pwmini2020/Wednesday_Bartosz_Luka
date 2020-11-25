import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import EmployeeList from './EmployeeList'
function App() {
  return (
    <EmployeeList />
  );
}

export default App;
