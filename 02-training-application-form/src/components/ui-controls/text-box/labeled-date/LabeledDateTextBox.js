import './LabeledDateTextBox.css';
import FormItem from '../../../app/form-item/FormItem';

const LabeledDateTextBox = props => {
    return (
        <FormItem>
            <p>{props.title}</p>
            <input type="date" name={props.name} placeholder={props.placeHolder} />
            <i class="fas fa-calendar-alt"></i>
        </FormItem>
    );
};

export default LabeledDateTextBox;