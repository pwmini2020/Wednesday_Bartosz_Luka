import React, { useState } from 'react';

export default function NameStep(props) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailAdress, setEmailAdress] = useState('');

    const [wrongFirstName, setWrongFirstName] = useState(false);
    const [wrongLastName, setWrongLastName] = useState(false);
    const [wrongEmailAdress, setWrongEmailAdress] = useState(false);

    function clickNext() {
        let ok = true;
        if (firstName === '') {
            setWrongFirstName(true);
            ok = false;
        }
        else
            setWrongFirstName(false);

        if (lastName === '') {
            setWrongLastName(true);
            ok = false;
        }
        else
            setWrongLastName(false);

        if (emailAdress === '' || !(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(emailAdress))) {
            setWrongEmailAdress(true);
            ok = false;
        }
        else
            setWrongEmailAdress(false);

        if (!ok)
            alert("fill all inputs");
        else
            props.nextStep()
    }

    return (
        <div>
            Name Step
            <form>
                <input type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)} placeholder="first name" />
                {wrongFirstName ? <span>Wrong First Name!</span> : ''}
                <input type="text" value={lastName} onChange={(event) => setLastName(event.target.value)} placeholder="last name" />
                {wrongLastName ? <span>Wrong Last Name!</span> : ''}
                <input type="text" value={emailAdress} onChange={(event) => setEmailAdress(event.target.value)} placeholder="email adress" />
                {wrongEmailAdress ? <span>Wrong Email Adress!</span> : ''}
            </form>
            <button onClick={clickNext}>Next</button>
        </div>
    );
}