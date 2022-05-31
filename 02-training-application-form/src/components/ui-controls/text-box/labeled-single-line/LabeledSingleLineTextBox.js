import './LabeledSingleLineTextBox.css';
import SingleLineTextBox from '../single-line/SingleLineTextBox';
import FormItem from '../../../app/form-item/FormItem';

const LabeledSingleLineTextBox = props => {
    return (
        <FormItem>
            <p>{props.title}</p>
            <SingleLineTextBox name={props.name} placeHolder={props.placeHolder} />
        </FormItem>
    );
};

export default LabeledSingleLineTextBox;