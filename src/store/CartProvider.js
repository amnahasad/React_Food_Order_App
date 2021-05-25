import React, {useReducer} from 'react';
import CardContext from './cart-context';

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if(action.type === 'ADD_ITEM') {
        const updatedItems = state.items.concat(action.item);
        const uptdatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {items: updatedItems,
        totalAmount: uptdatedTotalAmount};
    }
    return defaultCartState;
};

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = item => {
        dispatchCartAction({type: 'ADD_ITEM', item: item});
    };

    const removeItemFromCartHandler = id => {
        dispatchCartAction({type: 'REMOVE_ITEM', id: id})
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    };

    return(
        <CardContext.Provider value={cartContext}>
            {props.children}
        </CardContext.Provider>
    );
};

export default CartProvider;