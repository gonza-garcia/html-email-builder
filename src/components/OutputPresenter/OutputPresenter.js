import { useState, memo } from 'react';

import StringToComponent from '../StringToComponent/StringToComponent';
import PropTypes from 'prop-types';
import ControlPanel         from '../ControlPanel/ControlPanel';
import CustomButton         from '../CustomButton/CustomButton';


import classes from './OutputPresenter.module.scss';

const OutputPresenter = ({ code, wrapper, moveComponent, removeComponent }) => {

    const [toggleControls, setToggleControls] = useState(false);

    return (
        <article
            className={classes.OutputPresenter}
            onMouseEnter={() => setToggleControls(true)}
            onMouseLeave={() => setToggleControls(false)}
        >
            <StringToComponent
                stringCode={code}
                wrapper={wrapper}
                shouldSanitize={true}
            />

            {toggleControls &&
            (
                <ControlPanel 
                    containerClasses={``}
                    containerStyle={{
                    width: '100%',
                    position: 'absolute',
                    marginTop: '-30px',
                    zIndex: '20'}}
                >
                    <CustomButton
                        buttonClasses={'Image Green Narrower NoRightMargin'}
                        image='Up'
                        handleClick={() => moveComponent('UP')}
                        />
                    <CustomButton
                        buttonClasses={'Image Yellow Narrower NoLeftMargin'}
                        image='Down'
                        handleClick={() => moveComponent('DOWN')}
                        />
                    <CustomButton
                        buttonClasses={'Image Red Narrower'}
                        image='Delete'
                        handleClick={removeComponent}
                        />
                </ControlPanel>
            )}                
        </article>

    );
}


OutputPresenter.propTypes = {
    code: PropTypes.string,
    wrapper: PropTypes.objectOf(PropTypes.string),
    moveComponent: PropTypes.func,
    removeComponent: PropTypes.func,
};

export default memo(OutputPresenter);