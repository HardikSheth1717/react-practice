import { useContext, useState } from 'react';
import CartStore from '../../../../store/cart.store';
import MealItemForm from './meal-item-form';
import styles from './meal-item.module.css';

const MealItem = props => {
    const cartStore = useContext(CartStore);

    const price = `$ ${props.price.toFixed(2)}`

    const onAddToCartHandler = amount => {
        cartStore.addItem({
            id: Math.random(),
            name: props.mealName,
            amount: parseInt(amount),
            price: parseFloat(props.price) * parseInt(amount)
        });
    };

    return (
        <li className={styles.meal}>
            <div>
                <h3>{props.mealName}</h3>
                <div className={styles.description}>{props.desc}</div>
                <div className={styles.price}>{price}</div>
            </div>
            <div>
                <MealItemForm
                    id={props.id}
                    onAddToCart={onAddToCartHandler}
                ></MealItemForm>
            </div>
        </li>
    );
};

export default MealItem;