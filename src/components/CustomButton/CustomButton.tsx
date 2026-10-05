import deleteIcon from './delete-icon-24-black.png';
import upIcon from './arrow-up-icon-24-black.png';
import downIcon from './arrow-down-icon-24-black.png';

import classes from './CustomButton.module.scss';

type CustomButtonProps = {
  buttonClasses: string;
  label?: string;
  image?: 'Up' | 'Down' | 'Delete';
  ariaLabel?: string;
  title?: string;
  handleClick: () => void;
  isDisabled?: boolean;
  width?: string;
};

const CustomButton = ({
  buttonClasses,
  label,
  image,
  ariaLabel,
  title,
  handleClick,
  isDisabled,
  width,
}: CustomButtonProps) => {
  //this function will identify what icon to render
  const renderIcon = () => {
    switch (image) {
      case 'Up':
        return <img src={upIcon} width="20" alt="" />;
      case 'Down':
        return <img src={downIcon} width="20" alt="" />;
      case 'Delete':
        return <img src={deleteIcon} width="20" alt="" />;
      default:
        return null;
    }
  };

  const resolvedClasses = buttonClasses
    .split(' ')
    .map((btc) => classes[btc])
    .join(' ');

  return (
    <button
      type="button"
      className={resolvedClasses}
      onClick={handleClick}
      disabled={isDisabled === undefined ? false : isDisabled}
      style={{ width: width }}
      aria-label={ariaLabel ?? label}
      title={title ?? ariaLabel ?? label}
    >
      {renderIcon()}
      {label}
    </button>
  );
};

export default CustomButton;
