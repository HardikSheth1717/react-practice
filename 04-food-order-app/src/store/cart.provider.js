import { useState } from "react";
import CartStore from "./cart.store";

const CartProvider = props => {
    const [items, setItems] = useState([]);
    const [price, setPrice] = useState(0.00);
    const [amount, setAmount] = useState(0);

    const setAmountandPrice = cartItems => {
        setPrice((cartItems && cartItems.length > 0) ?
            cartItems.reduce((sum, item) => parseFloat(sum) + (parseFloat(item.price) * parseInt(item.amount)), 0)
            : 0.00);

        setAmount((cartItems && cartItems.length > 0) ?
            cartItems.reduce((count, item) => parseInt(count) + parseInt(item.amount), 0)
            : 0);
    }

    const addItemToCart = item => {
        setItems(prevState => {
            const cartItems = [...prevState];

            const itemIndex = cartItems.findIndex(data => data.name === item.name);

            if (itemIndex !== -1)
                cartItems[itemIndex].amount = parseInt(cartItems[itemIndex].amount) + parseInt(item.amount);
            else
                cartItems.push(item);

            setAmountandPrice(cartItems);

            return cartItems;
        });
    };

    const removeItemFromCart = name => {
        setItems(prevState => {
            const oldItems = [...prevState];

            const itemIndex = oldItems.findIndex(item => item.name === name);

            if (itemIndex !== -1) {
                if (parseInt(oldItems[itemIndex].amount) > 1)
                    oldItems[itemIndex].amount -= 1;
                else
                    oldItems.splice(itemIndex, 1);

                setAmountandPrice(oldItems);
            }

            return [...oldItems];
        });
    };

    const cartContext = {
        items: items,
        totalAmount: price,
        noOfItems: amount,
        addItem: addItemToCart,
        removeItem: removeItemFromCart
    };

    return <CartStore.Provider value={cartContext}>
        {props.children}
    </CartStore.Provider>
};

export default CartProvider;