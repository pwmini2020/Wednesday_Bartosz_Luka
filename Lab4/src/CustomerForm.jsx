import React, {useState } from 'react';
import NameStep from './NameStep.jsx'
import AdressStep from './AdressStep.jsx'
import SummaryStep from './SummaryStep.jsx'

export default function CustomerForm()
{
    const [activeStep,setActiveStep]  = useState(0);

    const nextStep = () => {
        setActiveStep(activeStep+1);
    }
    return(
        <div>
            {activeStep === 0
                ? <NameStep nextStep={nextStep}/>
                : activeStep === 1
                    ? <AdressStep nextStep={nextStep}/>
                    : <SummaryStep/>  
            }
        </div>
    );
}
