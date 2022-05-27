import './Form.css';

const Form = props => {
    return <form action={props.action}>{props.children}</form>;
};

export default Form;