import ErrorIcon from './error-icon-64.png';
import WarningIcon from './warning-icon-64.png';
import classes from './ErrorMessage.module.scss';

type ErrorMessageProps = {
    type: string;
    title: string;
    messages: string[];
};

const ErrorMessage = ({ type, title, messages }: ErrorMessageProps) => {

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

export default ErrorMessage;
