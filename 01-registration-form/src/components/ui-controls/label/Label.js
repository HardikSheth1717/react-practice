import './Label.css';

const Label = props => {
    return <label for={props.forid} className="{props.classes}">{props.children}</label>;
};

export default Label;