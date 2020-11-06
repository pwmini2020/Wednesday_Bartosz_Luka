import React, { useState } from 'react';
import NameStep from './NameStep.jsx'
import AddressStep from './AddressStep.jsx'
import SummaryStep from './SummaryStep.jsx'

export default function CustomerForm() {
    const [activeStep, setActiveStep] = useState(0);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');


    const nextStep = () => {
        setActiveStep(activeStep + 1);
    }
    return (
        <div>
            {activeStep === 0
                ? <NameStep nextStep={nextStep}
                firstName={firstName} setFirstName={setFirstName} 
                lastName={lastName} setLastName={setLastName}
                emailAddress={emailAddress} setEmailAddress={setEmailAddress}/>
                : activeStep === 1
                    ? <AddressStep nextStep={nextStep} 
                    />
                    : <SummaryStep />
            }
        </div>
    );
}
