import React from 'react';

const CartStore = React.createContext({
    items: [],
    totalAmount: 0.00,
    noOfItems: 0,
    addItem: item => {},
    removeItem: name => {}
});

export default CartStore;