import React from 'react';
import EditCar from './EditCar';
import {
    useRouteMatch,
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
const CarsList = () => {

    let { path, url } = useRouteMatch();
    return (
        <div>
            <h1>CarsList</h1>
            <ul>
                <li>car<button>edit</button></li>
                <li>car</li>
                <li>car</li>
                <li>car</li>
            </ul>
            <Switch>
                <Route path={path + "/new"}>
                    <EditCar />
                </Route>
            </Switch>
            <button>Add</button>
        </div>
    )
}

export default CarsList