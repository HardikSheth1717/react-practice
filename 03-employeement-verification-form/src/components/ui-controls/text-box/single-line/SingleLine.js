import styles from './SingleLine.module.css';

const SingleLine = props => {
    const textChangeHandler = event => {
        props.onTextChange(event.target.value);
    };

    if (props.required) {
        return (
            <div className={styles.item}>
                <label htmlFor={props.id}>{props.title}<span>*</span></label>
                <input
                    id={props.id}
                    type="text"
                    name={props.name}
                    placeholder={props.placeHolder}
                    value={props.value}
                    onChange={textChangeHandler}
                    required
                />
            </div>
        );
    } else {
        return (
            <div className={styles.item}>
                <label htmlFor={props.id}>{props.title}</label>
                <input
                    id={props.id}
                    type="text"
                    name={props.name}
                    placeholder={props.placeHolder}
                    value={props.value}
                    onChange={textChangeHandler}
                />
            </div>
        );
    }
};

export default SingleLine;