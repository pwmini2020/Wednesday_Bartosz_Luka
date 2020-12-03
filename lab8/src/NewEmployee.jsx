import React, { useState } from 'react'
import './styles.css'
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
                        <span>Saving...</span> :
                        <table className={"employeeTable"}>
                            <FormElement placeholder="name" value={name} set={setName} />
                            <FormElement placeholder="age" value={age} set={setAge} />
                            <FormElement placeholder="company" value={company} set={setCompany} />
                            <FormElement placeholder="email" value={email} set={setEmail} />
                            <tr>
                                <td>
                                    <button onClick={create}>add</button>
                                </td>
                                <td>
                                    <button onClick={() => props.setShowForm(false)}>cancel</button>
                                </td>
                            </tr>
                        </table>
            }
        </div>
    )
}

const FormElement = (props) => (
    <tr>
        <td>
            {/* <label htmlFor={props.placeholder}> */}
            <span>{props.placeholder}:</span>
        </td>
        <td>
            <input type="text" placeholder={props.placeholder}
                value={props.value}
                onChange={(e) => props.set(e.target.value)} />
        </td>
        {/* </label> */}
    </tr>
)