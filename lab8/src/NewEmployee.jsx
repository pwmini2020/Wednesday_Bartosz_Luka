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

    const create = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <form>
                <div>
                    <div>
                        <label htmlFor="name">
                            <span>Name:</span>
                            <input type="text" placeholder="name" />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="age">
                            <span>Age:</span>
                            <input type="text" placeholder="age" />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="company">
                            <span>Company:</span>
                            <input type="text" placeholder="company" />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="email">
                            <span>Email:</span>
                            <input type="text" placeholder="email" />
                        </label>
                    </div>

                </div>
                <div>
                    <button onClick={(e) => create(e)}>add</button>
                </div>
            </form>
        </div>
    )
}

// const formelement = (value) => (<div>
//     <label htmlFor={value}>
//         <span>{value}</span>
//         <input type="text" placeholder={value} />
//     </label>
// </div>)