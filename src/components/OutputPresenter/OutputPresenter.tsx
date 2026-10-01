import { useState, memo } from 'react';

import StringToComponent from '../StringToComponent/StringToComponent';
import ControlPanel from '../ControlPanel/ControlPanel';
import CustomButton from '../CustomButton/CustomButton';

import type { EmailWrapper } from '../../types';

import classes from './OutputPresenter.module.scss';

type OutputPresenterProps = {
  code: string;
  wrapper: EmailWrapper;
  moveComponent: (direction: 'UP' | 'DOWN') => void;
  removeComponent: () => void;
};

const OutputPresenter = ({
  code,
  wrapper,
  moveComponent,
  removeComponent,
}: OutputPresenterProps) => {
  const [toggleControls, setToggleControls] = useState(false);

  return (
    <article
      className={classes.OutputPresenter}
      onMouseEnter={() => setToggleControls(true)}
      onMouseLeave={() => setToggleControls(false)}
    >
      <StringToComponent stringCode={code} wrapper={wrapper} />

      {toggleControls && (
        <ControlPanel
          containerClasses={``}
          containerStyle={{
            width: '100%',
            position: 'absolute',
            marginTop: '-30px',
            zIndex: '20',
          }}
        >
          <CustomButton
            buttonClasses={'Image Green Narrower NoRightMargin'}
            image="Up"
            handleClick={() => moveComponent('UP')}
          />
          <CustomButton
            buttonClasses={'Image Yellow Narrower NoLeftMargin'}
            image="Down"
            handleClick={() => moveComponent('DOWN')}
          />
          <CustomButton
            buttonClasses={'Image Red Narrower'}
            image="Delete"
            handleClick={removeComponent}
          />
        </ControlPanel>
      )}
    </article>
  );
};

export default memo(OutputPresenter);
