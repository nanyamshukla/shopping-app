import React from 'react';
import { connect } from 'react-redux';

import './CartIcon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../Assets/shopping-bag.svg';
import { toggleCartDropdown } from '../../Redux/Cart/cart.actions';

const CartIcon = ({ toggleCartDropdown }) => (
    <div className="cart-icon" onClick={ toggleCartDropdown }>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count" > 5 </span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartDropdown: () => dispatch(toggleCartDropdown())
})

export default connect(null, mapDispatchToProps)(CartIcon);