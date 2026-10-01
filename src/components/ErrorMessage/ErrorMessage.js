import PropTypes from 'prop-types';

import ErrorIcon from './error-icon-64.png'; // Tells webpack this JS file uses this image
import WarningIcon from './warning-icon-64.png';
import classes from './ErrorMessage.module.scss';

const ErrorMessage = ({ type, title, messages }) => {

    return (
        <div className={classes[type]}>
            <img src={ type === 'Error' ? ErrorIcon : WarningIcon} alt={type} />
            <div>
                <p className={classes.Title}>{title}</p>
                {messages.map((msg, index) => <span key={index}> {msg} </span>)}
            </div>
        </div>
    );
}

ErrorMessage.propTypes = {
    type: PropTypes.string,
    title: PropTypes.string,
    messages: PropTypes.arrayOf(PropTypes.string),
}

export default ErrorMessage;