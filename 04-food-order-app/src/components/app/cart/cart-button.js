import { useContext, useEffect, useState } from 'react';
import styles from './cart-button.module.css';
import CartIcon from '../../layout/cart-icon/carticon';
import CartStore from '../../../store/cart.store';

const CartButton = props => {
    const [highlihtButton, setHighlightButton] = useState(false);

    const cartStore = useContext(CartStore);

    const cartClickHandler = () => {
        props.onClickCartButton();
    };

    const btnClass = `${styles.button} ${highlihtButton ? styles.bump : ''}`

    useEffect(() => {
        if  (cartStore.items.length == 0) return;

        setHighlightButton(true);

        const timer = setTimeout(() => {
            setHighlightButton(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [cartStore.items]);

    return <button
        className={btnClass}
        onClick={cartClickHandler}
    >
        <span className={styles.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={styles.badge}>
            {cartStore.noOfItems}
        </span>
    </button>
};

export default CartButton;