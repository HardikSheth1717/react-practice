import './LabeledSingleLineTextBox.css';
import SingleLineTextBox from '../single-line/SingleLineTextBox';
import FormItem from '../../../app/form-item/FormItem';

const LabeledSingleLineTextBox = props => {
    const textChangeHandler = enteredValue => {
        props.onChangeText(enteredValue);
    };

    return (
        <FormItem>
            <p>{props.title}</p>
            <SingleLineTextBox 
            name={props.name} 
            placeHolder={props.placeHolder}
            onChangeText={textChangeHandler} />
        </FormItem>
    );
};

export default LabeledSingleLineTextBox;