import './ContainerBox.module.css';

const ContainerBox = props => {
    return (
        <fieldset>
            <legend>{props.title}</legend>
            {props.children}
        </fieldset>
    );
};

export default ContainerBox;