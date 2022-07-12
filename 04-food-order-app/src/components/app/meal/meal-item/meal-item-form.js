import { useState } from 'react';
import SingleLineBox from '../../../ui/textbox/single-line';
import styles from './meal-item-form.module.css';

const MealItemForm = props => {
    const [amount, setAmount] = useState('1');

    const amountChangeHandler = amount => {
        setAmount(amount);
    };

    const onSubmitHandler = event => {
        event.preventDefault();
        props.onAddToCart(amount);
    };

    return (
        <form className={styles.form} onSubmit={onSubmitHandler}>
            <SingleLineBox label="Amount" input={{
                type: "number",
                id: `txtAmount${props.id}`,
                name: `txtAmount${props.id}`,
                min: "1",
                max: "5",
                step: "1",
                defaultValue: "1"
            }} onAmountChange={amountChangeHandler} />
            <button>+ Add</button>
        </form>
    );
};

export default MealItemForm;