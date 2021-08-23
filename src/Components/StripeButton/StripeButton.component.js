import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import './StripeButton.styles.scss';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JRfcGSDCCBGULdLo0cOGqnpmrM8VE8jyFjyjqlvu9PoxHpdUkxzJIBazyZZdTPIkAmU4kxVESWhtkF6vzKfcMbk00PQ4mOJS1';

    const onToken = token => {
        console.log('token: ', token);
        alert('Payment successful');
    }

    return(
        <StripeCheckout
            label="Pay Now"
            name="Nanyam's Shopping App"
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;