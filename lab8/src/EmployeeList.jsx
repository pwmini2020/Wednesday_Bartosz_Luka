import React, { useState, useEffect } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import './styles.css'
import Employee from './EmployeeItem'
import NewEmployee from './NewEmployee'
export default function EmployeeList(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [employees, setEmployees] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const url = "http://localhost:3004/employees"
    useEffect(() => {
        fetchData();
    }, [setIsLoading, setEmployees]);

    function fetchData() {
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
                        <table className={"employeeTable"}>
                            {employees.map(employee =>
                                <Employee key={employee.id} eid={employee.id} name={employee.name} reloadData={fetchData} />)}
                        </table>
                        <br></br>

                        {
                            showForm ?
                                <NewEmployee showForm={showForm}
                                    setShowForm={setShowForm} reloadData={fetchData} />
                                :
                                <button onClick={() => setShowForm(true)}>add
                                    {/* <Link to={`/employees/new`}>Add employee</Link> */}
                                </button>
                        }

                    </div>
            }
        </div >
    )
}
