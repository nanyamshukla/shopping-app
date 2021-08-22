import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './CartDropdown.styles.scss';
import CartItem from '../CartItem/CartItem.component';
import CustomButton from '../CustomButton/CustomButton.component';
import { selectCartItems } from '../../Redux/Cart/cart.selectors';
import { toggleCartDropdown } from '../../Redux/Cart/cart.actions';


const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className="cart-dropdown">
        <div className="cart-items" >
        {
            cartItems.length
            ? cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
            : <span className="empty-message">Your cart is empty</span>
        }
        </div>
        <CustomButton 
        onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartDropdown());
        }
        }
        >
            GO TO CHECKOUT
        </CustomButton>
    </div>
)

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
});

export default withRouter(connect(mapStateToProps)(CartDropdown));