import './SingleLineTextBox.css';

const SingleLineTextBox = props => {
    const changeHandler = event => {
        props.onChangeText(event.target.value);
    }

    return (
        <input
            type="text"
            name={props.name}
            placeholder={props.placeHolder}
            onChange={changeHandler}
        />
    );
};

export default SingleLineTextBox;