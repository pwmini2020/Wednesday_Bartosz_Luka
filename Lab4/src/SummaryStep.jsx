import React from 'react';

export default function SummaryStep(props) {
    return (
        <div>
            Summary Step
            <br />
            <label>first name: {props.firstName}</label>
            <br />
            <label>last name: {props.lastName}</label>
            <br />
            <label>email: {props.emailAddress}</label>
            <br />
            <label>delivery street name: {props.deliveryStreetName}</label>
            <br />
            <label>delivery zip code: {props.deliveryZipCode}</label>
            <br />
            <label>delivery city name: {props.deliveryCityName}</label>
            <br />
            <label>invoice city name: {props.isInvoiceTheSameAsDelivery ?
                props.deliveryCityName :
                props.invoiceCityName}</label>
            <br />
            <label>invoice zip code: {props.isInvoiceTheSameAsDelivery ?
                props.deliveryZipCode :
                props.invoiceZipCode}</label>
            <br />
            <label>invoice street name: {props.isInvoiceTheSameAsDelivery ?
                props.deliveryStreetName :
                props.invoiceStreetName}</label>
        </div>
    );
}