import React, { useState } from 'react'

export default function NewEmployee(props) {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("");

    const post = (employee) => fetch("http://localhost:3004/employees", {
        method: "POST",
        body: JSON.stringify(employee),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    }).catch(error => console.log('error', error));

    function create() {
        post({ name, age, company, email, isActive: true, })
    }

    return (
        <div>
            {/* <FormElement placeholder="name" value={name} onChange={setName} /> */}
            <input type="text" placeholder="name" onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="age" onChange={(e) => setAge(e.target.value)} />
            <input type="text" placeholder="company" onChange={(e) => setCompany(e.target.value)} />
            <input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
            <button onClick={create}>add</button>
        </div>
    )
}

const FormElement = (props) => (<div>
    <label htmlFor={props.placeholder}>
        <span>{props.placeholder}:</span>
        <input type="text" placeholder={props.placeholder}
            value={props.value}
            onChange={(e) => props.set(e.target.value)} />
    </label>
</div>)