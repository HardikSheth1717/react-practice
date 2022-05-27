import './PasswordTextBox.css'
import Label from '../../label/Label';

const PasswordTextBox = props => {
    return (
        <div>
            <Label controlId="icon" forid={props.id}>
              <i class="fas fa-unlock-alt"></i>
            </Label>
            <input
                type="password"
                name={props.name}
                id={props.id}
                placeholder="Password"
                required
            />
        </div>
    );
};

export default PasswordTextBox;