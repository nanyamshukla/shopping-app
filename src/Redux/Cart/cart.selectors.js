import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumulatedQuamtity, cartItem) => 
            accumulatedQuamtity + cartItem.quantity 
        ,0
    )
);

export const selectCartTotalPrice = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumulatedQuamtity, cartItem) => 
            accumulatedQuamtity + cartItem.quantity*cartItem.price
        ,0
    )
);

export const selectHideCartDropdown = createSelector(
    [selectCart],
    cart => cart.hideCartDropdown
);