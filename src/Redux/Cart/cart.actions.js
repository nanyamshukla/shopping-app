import { CartActionTypes } from './cart.types';

export const toggleCartDropdown = () => ({
    type: CartActionTypes.TOGGLE_CART_DROPDOWN
});

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});

export const subtractItem = item => ({
    type: CartActionTypes.SUBTRACT_ITEM,
    payload: item
});

export const clearItemFromCart = item => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
})