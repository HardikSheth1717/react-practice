import './SingleLineTextBox.css';

const SingleLineTextBox = props => {
    return <input type="text" name={props.name} placeholder={props.placeHolder} />;
};

export default SingleLineTextBox;