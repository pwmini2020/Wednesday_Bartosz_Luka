import React, { useState } from 'react';

export default function AddressStep(props) {

    const [wrongDeliveryStreetName, setWrongDeliveryStreetName] = useState(false);
    const [wrongDeliveryZipCode, setWrongDeliveryZipCode] = useState(false);
    const [wrongDeliveryCityName, setWrongDeliveryCityName] = useState(false);

    const [wrongInvoiceStreetName, setWrongInvoiceStreetName] = useState(false);
    const [wrongInvoiceZipCode, setWrongInvoiceZipCode] = useState(false);
    const [wrongInvoiceCityName, setWrongInvoiceCityName] = useState(false);

    function clickNext() {
        let isCorrect = true;

        //check delivery info
        if (props.deliveryStreetName === '') {
            setWrongDeliveryStreetName(true);
            isCorrect = false;
        }
        else
            setWrongDeliveryStreetName(false);

        if (props.deliveryZipCode === '' || !(/^[0-9]{2}-[0-9]{3}/.test(props.deliveryZipCode))) {
            setWrongDeliveryZipCode(true);
            isCorrect = false;
        }
        else
            setWrongDeliveryZipCode(false);

        if (props.deliveryCityName === '') {
            setWrongDeliveryCityName(true);
            isCorrect = false;
        }
        else
            setWrongDeliveryCityName(false);

        if (props.isInvoiceTheSameAsDelivery) {
            if (!isCorrect)
                alert("fill all inputs");
            else
                props.nextStep()
        }
        //now check invoice info
        else {

            if (props.invoiceStreetName === '') {
                setWrongInvoiceStreetName(true);
                isCorrect = false;
            }
            else
                setWrongInvoiceStreetName(false);

            if (props.invoiceZipCode === '' || !(/^[0-9]{2}-[0-9]{3}/.test(props.invoiceZipCode))) {
                setWrongInvoiceZipCode(true);
                isCorrect = false;
            }
            else
                setWrongInvoiceZipCode(false);

            if (props.invoiceCityName === '') {
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
    }

    function setInvoiceInfo(event) {
        props.setIsInvoiceTheSameAsDelivery(event.target.checked);
        props.setInvoiceStreetName(props.deliveryStreetName);
        props.setInvoiceZipCode(props.deliveryZipCode);
        props.setInvoiceCityName(props.deliveryCityName);
    }

    return (
        <div>
            Delivery address
            <form>
                <input type="text" value={props.deliveryStreetName} onChange={(event) => props.setDeliveryStreetName(event.target.value)}
                    placeholder="street" />
                {wrongDeliveryStreetName ? <span> Street name must not be empty</span> : null}
                <br />
                <input type="text" value={props.deliveryZipCode} onChange={(event) => props.setDeliveryZipCode(event.target.value)}
                    placeholder="zip code (12-345)" />
                {wrongDeliveryZipCode ? <span> Wrong zip code! Accepted format is 12-345</span> : null}
                <br />
                <input type="text" value={props.deliveryCityName} onChange={(event) => props.setDeliveryCityName(event.target.value)}
                    placeholder="city" />
                {wrongDeliveryCityName ? <span> City name must not be empty</span> : null}
            </form>
            <br />
            Invoice address
            <br />
            <label>
                <input type="checkbox" onChange={(event) => setInvoiceInfo(event)} />
                keep the same as delivery
            </label>
            <form>
                <input type="text" value={props.isInvoiceTheSameAsDelivery ? props.deliveryStreetName : props.invoiceStreetName} onChange={(event) => props.setInvoiceStreetName(event.target.value)}
                    placeholder="street" disabled={props.isInvoiceTheSameAsDelivery} />
                {wrongInvoiceStreetName ? <span> Street name must not be empty</span> : null}
                <br />
                <input type="text" value={props.isInvoiceTheSameAsDelivery ? props.deliveryZipCode : props.invoiceZipCode} onChange={(event) => props.setInvoiceZipCode(event.target.value)}
                    placeholder="zip code (12-345)" disabled={props.isInvoiceTheSameAsDelivery} />
                {wrongInvoiceZipCode ? <span> Wrong zip code! Accepted format is 12-345</span> : null}
                <br />
                <input type="text" value={props.isInvoiceTheSameAsDelivery ? props.deliveryCityName : props.invoiceCityName} onChange={(event) => props.setInvoiceCityName(event.target.value)}
                    placeholder="city" disabled={props.isInvoiceTheSameAsDelivery} />
                {wrongInvoiceCityName ? <span> City name must not be empty</span> : null}
            </form>
            <button onClick={clickNext}>Next</button>
        </div>
    );
}