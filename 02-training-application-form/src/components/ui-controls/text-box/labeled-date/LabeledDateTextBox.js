import './LabeledDateTextBox.css';
import FormItem from '../../../app/form-item/FormItem';

const LabeledDateTextBox = props => {
    const textChangeHandler = event => {
        props.onChangeText(newevent.target.value);
    };

    return (
        <FormItem>
            <p>{props.title}</p>
            <input
                type="date"
                name={props.name}
                placeholder={props.placeHolder}
                onChange={textChangeHandler} />
            <i className="fas fa-calendar-alt"></i>
        </FormItem>
    );
};

export default LabeledDateTextBox;