import './Label.css';

const Label = props => {
    return <label id={props.controlId} htmlFor={props.forid} className={props.classes}>{props.children}</label>;
};

export default Label;