export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existing = cartItems.find(
        cartItem => cartItem.id===cartItemToAdd.id
    );

    if(existing) {
        return cartItems.map(cartItem => 
            cartItem.id===cartItemToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem  
        );
    }

    return [ ...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const subtractItemFromCart = (cartItems, cartItemToSubtract) => {
    if(cartItemToSubtract.quantity===1) {
        return removeItemFromCart( cartItems, cartItemToSubtract );
    }

    return cartItems.map( cartItem => 
        cartItem.id===cartItemToSubtract.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    )
}

export const removeItemFromCart = ( cartItems, cartItemToClear ) => {
    return cartItems.filter(cartItem => cartItem.id!==cartItemToClear.id);
}

