import { CartActionTypes } from './cart.types';
import { addItemToCart, subtractItemFromCart, removeItemFromCart } from './cart.utils';

const INITIAL_STATE = {
    hideCartDropdown: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CartActionTypes.TOGGLE_CART_DROPDOWN :
            return {
                ...state,
                hideCartDropdown: !state.hideCartDropdown
            }
        case CartActionTypes.ADD_ITEM :
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case CartActionTypes.SUBTRACT_ITEM :
            return {
                ...state,
                cartItems: subtractItemFromCart(state.cartItems, action.payload)
            }
        case CartActionTypes.CLEAR_ITEM_FROM_CART :
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
        default: 
            return state;
    }
}

export default cartReducer;