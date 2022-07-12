import { useContext } from 'react';
import Modal from '../../ui/modal/modal';
import styles from './cart.module.css';
import CartStore from '../../../store/cart.store';
import CartItem from './CartItem';

const Cart = props => {
    const cartStore = useContext(CartStore)
    const cartItems = cartStore.items;

    const totalAmount = cartStore.totalAmount;

    const itemAddHandler = item => {
        cartStore.addItem({
            id: Math.random(),
            name: item.name,
            amount: 1,
            price: parseFloat(item.price)
        });
    };

    const itemRemoveHandler = name => {
        cartStore.removeItem(name);
    };

    const cartItemList = cartItems.map(item =>
        <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            onRemove={itemRemoveHandler.bind(null, item.name)}
            onAdd={itemAddHandler.bind(null, item)}
        ></CartItem>);

    const onCloseModalHandler = () => {
        props.onClose();
    };

    return (
        <Modal onClose={onCloseModalHandler}>
            <ul className={styles['cart-items']}>{cartItemList}</ul>
            <div className={styles.total}>
                <span>Total amount</span>
                <span>$ {totalAmount.toFixed(2)}</span>
            </div>
            <div className={styles.actions}>
                <button
                    className={styles['button--alt']}
                    onClick={onCloseModalHandler}
                >Close</button>
                {totalAmount > 0 && <button className={styles.button}>Order</button>}
            </div>
        </Modal>
    );
};

export default Cart;