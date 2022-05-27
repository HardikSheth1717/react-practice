import './EmailTextBox.css'
import Label from '../../label/Label';

const EmailTextBox = props => {
    return (
        <div>
            <Label controlId="icon" forid={props.id}>
                <i class="fas fa-envelope"></i>
            </Label>
            <input
                type="text"
                name={props.name}
                id={props.id}
                placeholder="Email"
                required
            />
        </div>
    );
};

export default EmailTextBox;