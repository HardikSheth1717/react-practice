import styles from './DropDown.module.css';

const DropDown = props => {
    const selectionChangeHandler = event => {
        props.onSelectionChange(event.target.value);
    };

    return (
        <div className={styles.item}>
            <label htmlFor={props.id}>{props.title}</label>
            <select
                id={props.id}
                name={props.name}
                value={props.value}
                onChange={selectionChangeHandler}
            >
                {props.children}
            </select>
        </div>
    );
};

export default DropDown;