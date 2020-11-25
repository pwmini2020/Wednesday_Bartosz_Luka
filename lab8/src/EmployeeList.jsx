import React, { useState, useEffect } from 'react'

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
    return (
        <div>
            {
                isLoading ?
                    <label>Loading...</label>
                    :
                    employees.map(employee => <div>{employee.name}</div>)
            }
        </div>
    )
}