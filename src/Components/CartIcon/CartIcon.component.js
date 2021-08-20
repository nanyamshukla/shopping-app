import React from 'react';
import { connect } from 'react-redux';

import './CartIcon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../Assets/shopping-bag.svg';
import { toggleCartDropdown } from '../../Redux/Cart/cart.actions';
import { selectCartItemsCount } from '../../Redux/Cart/cart.selectors';

const CartIcon = ({ toggleCartDropdown, itemCount }) => (
    <div className="cart-icon" onClick={ toggleCartDropdown }>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count" > {itemCount} </span>
    </div>
)

const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
})

const mapDispatchToProps = dispatch => ({
    toggleCartDropdown: () => dispatch(toggleCartDropdown())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);