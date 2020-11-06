import React, { useState } from 'react';

export default function NameStep(props) {

    const [wrongFirstName, setWrongFirstName] = useState(false);
    const [wrongLastName, setWrongLastName] = useState(false);
    const [wrongEmailAddress, setWrongEmailAddress] = useState(false);

    function clickNext() {
        let isCorrect = true;
        if (props.firstName === '') {
            setWrongFirstName(true);
            isCorrect = false;
        }
        else
            setWrongFirstName(false);

        if (props.lastName === '') {
            setWrongLastName(true);
            isCorrect = false;
        }
        else
            setWrongLastName(false);

        if (props.emailAddress === '' || !(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(props.emailAddress))) {
            setWrongEmailAddress(true);
            isCorrect = false;
        }
        else
            setWrongEmailAddress(false);

        if (!isCorrect)
            alert("fill all inputs");
        else
            props.nextStep()
    }

    return (
        <div>
            Name Step
            <form>
                <input type="text" value={props.firstName}
                    onChange={(event) => props.setFirstName(event.target.value)}
                    placeholder="first name" />
                {wrongFirstName ? <span>Wrong First Name!</span> : null}
                <br />
                <input type="text" value={props.lastName} onChange={(event) => props.setLastName(event.target.value)} placeholder="last name" />
                {wrongLastName ? <span>Wrong Last Name!</span> : null}
                <br />
                <input type="text" value={props.emailAddress} onChange={(event) => props.setEmailAddress(event.target.value)} placeholder="email adress" />
                {wrongEmailAddress ? <span>Wrong Email Address!</span> : null}
            </form>
            <button onClick={clickNext}>Next</button>
        </div>
    );
}