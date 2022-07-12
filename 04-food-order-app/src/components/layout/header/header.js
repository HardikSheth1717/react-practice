import styles from './header.module.css';
import headerImage from '../../../assets/meals.jpg';
import CartButton from '../../app/cart/cart-button';

const Header = props => {
    const onClickCartButtonHandler = () => {
        props.onClickCartButton()
    };

    return (
        <>
            <header className={styles.header}>
                <h1>React Meals</h1>
                <CartButton onClickCartButton={onClickCartButtonHandler} />
            </header>
            <div className={styles['main-image']}>
                <img src={headerImage} alt="A table full of delicious food!" />
            </div>
        </>
    );
};

export default Header;