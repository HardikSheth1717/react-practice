import './Button.css';

const Button = props => {
    return <button type={props.buttonType} href={props.href}>
        {props.children}
    </button>;
};

export default Button;