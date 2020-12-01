import React, { useState, useEffect } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import NewEmployee from './NewEmployee'
export default function EmployeeList(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [employees, setEmployees] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const url = "http://localhost:3004/employees"
    useEffect(() => {
        setIsLoading(true);
        let promise = fetch(url);
        promise.then((response) => response.json())
            .then(response => setEmployees(response))
            .then(() => setIsLoading(false))
    }, [setIsLoading, setEmployees]);

    function gget() {
        setIsLoading(true);
        let promise = fetch(url);
        promise.then((response) => response.json())
            .then(response => setEmployees(response))
            .then(() => setIsLoading(false))
    }
    return (
        <div>
            {
                isLoading ?
                    <label>Loading...</label>
                    : <div>
                        {employees.map(employee => <Employee
                            eid={employee.id} name={employee.name} fun={gget} />)}
                        <div>
                            {
                                showForm ?
                                    <NewEmployee showForm={showForm}
                                        setShowForm={setShowForm} fun={gget} />
                                    :
                                    <button onClick={() => setShowForm(true)}>add
                                    {/* <Link to={`/employees/new`}>Add employee</Link> */}
                                    </button>
                            }
                        </div>
                    </div>
            }
        </div >
    )
}

function Employee(props) {
    function del(id) {
        const url = "http://localhost:3004/employees"
        let delPromise = fetch(url + '/' + id, { method: 'DELETE' }).
            then(() => console.log(id))
            .then(() => props.fun())
    }
    return (
        <div>
            <label>{props.name}</label>
            <button onClick={() => del(props.eid)}>
                delete
            </button>
        </div>
    )
}