import React, {useState} from 'react';

export default function AdressStep(props)
{
    return(
        <div>
            Adress Step
            <button onClick={props.nextStep}>Next</button>
        </div>
    );
}