import Label from '../../label/Label';
import './SingeLineTextBox.css';

const SingeLineTextBox = props => {
    return (
        <div>
            <Label controlId="icon" forid={props.id}>
                <i class={props.iconClass}></i>
            </Label>
            <input
                type="text"
                name={props.name}
                id={props.id}
                placeholder={props.placeHolder}
                required
            />
        </div>
    );
};

export default SingeLineTextBox;