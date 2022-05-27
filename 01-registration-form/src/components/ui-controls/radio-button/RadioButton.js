import './RadioButton.css';
import Label from '../label/Label';

const RadioButton = props => {
    return (
        <div>
            <input type="radio" value={props.value} id={props.id} name={props.name} />
            <Label forid={props.id} classes="radio">{props.children}</Label>
        </div>
    );
};

export default RadioButton;