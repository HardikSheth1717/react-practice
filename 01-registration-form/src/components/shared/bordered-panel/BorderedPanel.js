import './BorderedPanel.css';

const BorderedPanel = props => {
    return (
        <div className="bordered-container">
            {props.children}
        </div>
    );
};

export default BorderedPanel;