import './Label.css';

const Label = props => {
    return <label id={props.controlId} for={props.forid} className={props.classes}>{props.children}</label>;
};

export default Label;