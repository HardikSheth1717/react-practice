import './Button.css';

const Button = props => {
    const onClickHandler = event => {
        props.onClickButton();
    };

    return <button type="button" onClick={onClickHandler} href="/">{props.children}</button>;
};

export default Button;