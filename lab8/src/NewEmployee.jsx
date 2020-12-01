import React, { useState } from 'react'

export default function NewEmployee(props) {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("");
    const [isPosting, setIsPosting] = useState(false);
    // const [showForm, setShowForm] = useState(true);
    const post = (employee) => fetch("http://localhost:3004/employees", {
        method: "POST",
        body: JSON.stringify(employee),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    }).catch(error => console.log('error', error));

    function create() {
        setIsPosting(true);
        let postPromise = post({ name, age, company, email, isActive: true, });
        postPromise.then(() => {
            props.setShowForm(false);
            setIsPosting(false);
        }).then(() => props.fun())
    }

    return (
        <div>
            {
                !props.showForm ? null :
                    isPosting ?
                        <span>posting...</span> :
                        <div>
                            <FormElement placeholder="name" value={name} set={setName} />
                            <FormElement placeholder="age" value={age} set={setAge} />
                            <FormElement placeholder="company" value={company} set={setCompany} />
                            <FormElement placeholder="email" value={email} set={setEmail} />
                            <button onClick={create}>add</button>
                        </div>
            }
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