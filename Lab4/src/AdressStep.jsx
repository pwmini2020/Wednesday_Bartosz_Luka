import React, { useState } from 'react';

export default function AdressStep(props) {

    const [deliveryStreetName, setDeliveryStreetName] = useState('');
    const [deliveryZipCode, setDeliveryZipCode] = useState('');
    const [deliveryCityName, setDeliveryCityName] = useState('');

    const [wrongDeliveryStreetName, setWrongDeliveryStreetName] = useState(false);
    const [wrongDeliveryZipCode, setWrongDeliveryZipCode] = useState(false);
    const [wrongDeliveryCityName, setWrongDeliveryCityName] = useState(false);

    const [isInvoiceTheSameAsDelivery, setIsInvoiceTheSameAsDelivery] = useState(false);

    const [invoiceStreetName, setInvoiceStreetName] = useState('');
    const [invoiceZipCode, setInvoiceZipCode] = useState('');
    const [invoiceCityName, setInvoiceCityName] = useState('');

    const [wrongInvoiceStreetName, setWrongInvoiceStreetName] = useState(false);
    const [wrongInvoiceZipCode, setWrongInvoiceZipCode] = useState(false);
    const [wrongInvoiceCityName, setWrongInvoiceCityName] = useState(false);

    function clickNext() {
        let isCorrect = true;

        //check delivery info
        if (deliveryStreetName === '') {
            setWrongDeliveryStreetName(true);
            isCorrect = false;
        }
        else
            setWrongDeliveryStreetName(false);

        if (deliveryZipCode === '' || !(/^[0-9]{2}-[0-9]{3}/.test(deliveryZipCode))) {
            setWrongDeliveryZipCode(true);
            isCorrect = false;
        }
        else
            setWrongDeliveryZipCode(false);

        if (deliveryCityName === '') {
            setWrongDeliveryCityName(true);
            isCorrect = false;
        }
        else
            setWrongDeliveryCityName(false);

        if (isInvoiceTheSameAsDelivery) {
            if (!isCorrect)
                alert("fill all inputs");
            else
                props.nextStep()
        }
        //now check invoice info

        if (invoiceStreetName === '') {
            setWrongInvoiceStreetName(true);
            isCorrect = false;
        }
        else
            setWrongInvoiceStreetName(false);

        if (invoiceZipCode === '' || !(/^[0-9]{2}-[0-9]{3}/.test(invoiceZipCode))) {
            setWrongInvoiceZipCode(true);
            isCorrect = false;
        }
        else
            setWrongInvoiceZipCode(false);

        if (invoiceCityName === '') {
            setWrongInvoiceCityName(true);
            isCorrect = false;
        }
        else
            setWrongInvoiceCityName(false);



        if (!isCorrect)
            alert("fill all inputs");
        else
            props.nextStep()

    }

    return (
        <div>
            Delivery address
            <form>
                <input type="text" value={deliveryStreetName} onChange={(event) => setDeliveryStreetName(event.target.value)}
                    placeholder="street" />
                {wrongDeliveryStreetName ? <span> Street name must not be empty</span> : null}
                <br />
                <input type="text" value={deliveryZipCode} onChange={(event) => setDeliveryZipCode(event.target.value)}
                    placeholder="zip code (12-345)" />
                {wrongDeliveryZipCode ? <span> Wrong zip code! Accepted format is 12-345</span> : null}
                <br />
                <input type="text" value={deliveryCityName} onChange={(event) => setDeliveryCityName(event.target.value)}
                    placeholder="city" />
                {wrongDeliveryCityName ? <span> City name must not be empty</span> : null}
            </form>
            <br />
            Invoice address
            <br />
            <label>
                keep the same as delivery
            </label>
            <form>
                <input type="text" value={isInvoiceTheSameAsDelivery ? deliveryStreetName : invoiceStreetName} onChange={(event) => setInvoiceStreetName(event.target.value)}
                    placeholder="street" disabled={isInvoiceTheSameAsDelivery} />
                {wrongInvoiceStreetName ? <span> Street name must not be empty</span> : null}
                <br />
                <input type="text" value={invoiceZipCode} onChange={(event) => setInvoiceZipCode(event.target.value)}
                    placeholder="zip code (12-345)" />
                {wrongInvoiceZipCode ? <span> Wrong zip code! Accepted format is 12-345</span> : null}
                <br />
                <input type="text" value={invoiceCityName} onChange={(event) => setInvoiceCityName(event.target.value)}
                    placeholder="city" />
                {wrongInvoiceCityName ? <span> City name must not be empty</span> : null}
            </form>
            <button onClick={clickNext}>Next</button>
        </div>
    );
}