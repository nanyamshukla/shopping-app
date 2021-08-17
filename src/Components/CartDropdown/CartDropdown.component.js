import React from 'react';

import './CartDropdown.styles.scss';
import CustomButton from '../CustomButton/CustomButton.component';


const CartDropdown = () => (
    <div className="cart-dropdown">
        <div className="cart-items" />
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

export default CartDropdown;