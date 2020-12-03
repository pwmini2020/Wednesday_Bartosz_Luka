import React, { useState } from 'react';

export default function Employee(props) {
    const [isDeleting, setIsDeleting] = useState(false);
    function del(id) {
        const url = "http://localhost:3004/employees"
        setIsDeleting(true)
        let delPromise = fetch(url + '/' + id, { method: 'DELETE' })
        delPromise.then(() => console.log(id))
            .then(() => props.reloadData())
    }
    return (
        <tbody>
            <tr>
                <td>
                    {isDeleting ?
                        <label>Deleting...</label> :
                        <label>{props.name}</label>
                    }
                </td>
                <td>
                    <button onClick={() => del(props.eid)} disabled={isDeleting}>
                        <span>delete</span>
                    </button>
                </td>
            </tr>
        </tbody>
    )
}