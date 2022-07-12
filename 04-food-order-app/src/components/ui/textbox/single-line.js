import styles from './single-line.module.css'

const SingleLineBox = props => {
    const onChangeHandler = event => {
        props.onAmountChange(event.target.value);
    };

    return (
        <div className={styles.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input {...props.input} onChange={onChangeHandler} />
        </div>
    );
};

export default SingleLineBox;