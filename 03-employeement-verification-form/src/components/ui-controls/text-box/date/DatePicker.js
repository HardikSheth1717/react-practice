import styles from './DatePicker.module.css';

const DatePicker = props => {
    const textChangeHandler = event => {
        props.onTextChange(event.target.value);
    };

    if (props.required) {
        return (
            <div className={styles.item}>
                <label htmlFor={props.id}>{props.title}<span>*</span></label>
                <input
                    id={props.id}
                    type="date"
                    name={props.name}
                    placeholder={props.placeHolder}
                    value={props.value}
                    onChange={textChangeHandler}
                    required
                />
                <i className="fas fa-calendar-alt"></i>
            </div>
        );
    } else {
        return (
            <div className={styles.item}>
                <label htmlFor={props.id}>{props.title}</label>
                <input
                    id={props.id}
                    type="date"
                    name={props.name}
                    placeholder={props.placeHolder}
                    value={props.value}
                    onChange={textChangeHandler}
                />
                <i className="fas fa-calendar-alt"></i>
            </div>
        );
    }
};

export default DatePicker;