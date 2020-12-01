import React, { useState, useEffect } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

export default function EmployeeList(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        setIsLoading(true);
        const url = "http://localhost:3004/employees"
        let promise = fetch(url);
        promise.then((response) => response.json())
            .then(response => setEmployees(response))
            .then(() => setIsLoading(false))
    }, [setIsLoading, setEmployees]);
    console.log()
    return (
        <div>
            {
                isLoading ?
                    <label>Loading...</label>
                    : <div>
                        <ul>{employees.map(employee => <li>{employee.name}</li>)}</ul>
                        <button>
                            <Link to={`/employees/new`}>Add employee</Link>
                        </button>
                    </div>
            }
        </div>
    )
}