import React, { useState } from 'react';
import NameStep from './NameStep.jsx'
import AddressStep from './AddressStep.jsx'
import SummaryStep from './SummaryStep.jsx'

export default function CustomerForm() {
    const [activeStep, setActiveStep] = useState(0);

    //name step props
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');

    //address step props
    const [deliveryStreetName, setDeliveryStreetName] = useState('');
    const [deliveryZipCode, setDeliveryZipCode] = useState('');
    const [deliveryCityName, setDeliveryCityName] = useState('');

    const [isInvoiceTheSameAsDelivery, setIsInvoiceTheSameAsDelivery] = useState(false);

    const [invoiceStreetName, setInvoiceStreetName] = useState('');
    const [invoiceZipCode, setInvoiceZipCode] = useState('');
    const [invoiceCityName, setInvoiceCityName] = useState('');

    const nextStep = () => {
        setActiveStep(activeStep + 1);
    }
    return (
        <div>
            {activeStep === 0
                ? <NameStep nextStep={nextStep}
                    firstName={firstName} setFirstName={setFirstName}
                    lastName={lastName} setLastName={setLastName}
                    emailAddress={emailAddress} setEmailAddress={setEmailAddress} />
                : activeStep === 1
                    ? <AddressStep nextStep={nextStep}
                        deliveryStreetName={deliveryStreetName} setDeliveryStreetName={setDeliveryStreetName}
                        deliveryZipCode={deliveryZipCode} setDeliveryZipCode={setDeliveryZipCode}
                        deliveryCityName={deliveryCityName} setDeliveryCityName={setDeliveryCityName}
                        isInvoiceTheSameAsDelivery={isInvoiceTheSameAsDelivery} setIsInvoiceTheSameAsDelivery={setIsInvoiceTheSameAsDelivery}
                        invoiceStreetName={invoiceStreetName} setInvoiceStreetName={setInvoiceStreetName}
                        invoiceZipCode={invoiceZipCode} setInvoiceZipCode={setInvoiceZipCode}
                        invoiceCityName={invoiceCityName} setInvoiceCityName={setInvoiceCityName}
                    />
                    : <SummaryStep 
                    firstName={firstName}
                    lastName={lastName}
                    emailAddress={emailAddress}
                    deliveryStreetName={deliveryStreetName}
                    deliveryZipCode={deliveryZipCode}
                    deliveryCityName={deliveryCityName}
                    isInvoiceTheSameAsDelivery={isInvoiceTheSameAsDelivery}
                    invoiceStreetName={invoiceStreetName}
                    invoiceZipCode={invoiceZipCode}
                    invoiceCityName={invoiceCityName}
                    />
            }
        </div>
    );
}
