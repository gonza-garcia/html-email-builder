import classes from './ControlPanel.module.scss';


const ControlPanel = ({ containerClasses, containerStyle, children }) => {

    containerClasses = containerClasses.split(' ');
    containerClasses = containerClasses.map(btc => (classes[btc]));
    containerClasses = containerClasses.join(' ');

    return (
        <div className={containerClasses} style={containerStyle}>
            {
                children
            }
        </div>
    );
}

export default ControlPanel;