import './BorderedPanel.css';

const BorderedPanel = props => {
    return (
        <div className="bordered-container">
            <hr />
            {props.children}
            <hr />
        </div>
    );
};

export default BorderedPanel;