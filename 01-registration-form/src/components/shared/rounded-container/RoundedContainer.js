import './RoundedContainer.css'

const RoundedContainer = props => {
    return (
        <div className="main-block">
            <h1>{props.title}</h1>
            {props.children}
        </div>
    );
};

export default RoundedContainer;