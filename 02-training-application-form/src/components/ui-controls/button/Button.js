import './Button.css';

const Button = props => {
    return <button type="submit" href="/">{props.children}</button>;
};

export default Button;