import React from 'react';
import { connect } from 'react-redux';

import './CheckoutItem.styles.scss';
import { clearItemFromCart, addItem, subtractItem } from '../../Redux/Cart/cart.actions';

const CheckoutItem = ({ cartItem, removeItem, addItem, subtractItem }) => {
    const { name, imageUrl, quantity, price } = cartItem;

    return(
        <div className="checkout-item">
            <div className="image-container">
                <img alt="item" src={imageUrl} />
            </div>
            <span className="name"> {name} </span>
            <span className="quantity"> 
                <div className="arrow" onClick={() => subtractItem(cartItem)} >&#10094;</div>
                <span className="value"> {quantity} </span>
                <div className="arrow" onClick={() => addItem(cartItem)} >&#10095;</div>
            </span>
            <span className="price"> {price} </span>

            <div 
                className="remove-button"
                onClick={() => removeItem(cartItem)}
            >
                &#10005;
            </div>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    removeItem: item => dispatch( clearItemFromCart(item) ),
    addItem: item => dispatch( addItem(item) ),
    subtractItem: item => dispatch( subtractItem(item) )
});

export default connect(null, mapDispatchToProps)(CheckoutItem);