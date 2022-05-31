import './RoundedContainer.css';

const RoundedContainer = props => {
    return (
        <div className="testbox">
            {props.children}
        </div>
    );
};

export default RoundedContainer;