import deleteIcon   from './delete-icon-24-black.png';
import upIcon       from './arrow-up-icon-24-black.png';
import downIcon     from './arrow-down-icon-24-black.png';

import classes from './CustomButton.module.scss';

const CustomButton = ({ buttonClasses, label, image, handleClick, isDisabled, width }) => {

    //this function will identify what icon to render
    const renderIcon = () => {
        switch(image) {
        case 'Up': return <img src={upIcon} width="20" alt='Up' />;
        case 'Down': return <img src={downIcon} width="20" alt='Down' />;
        case 'Delete': return <img src={deleteIcon} width="20" alt='Delete' />;
        default: return null;
        }
    }

    buttonClasses = buttonClasses.split(' ');
    buttonClasses = buttonClasses.map(btc => (classes[btc]));
    buttonClasses = buttonClasses.join(' ');

    return (
        <button
            className={buttonClasses}
            onClick={handleClick}
            disabled={isDisabled === undefined ? false : isDisabled}
            style={{width: width}}
        >
            {renderIcon()}
            {label}
        </button>
    );
}

export default CustomButton;