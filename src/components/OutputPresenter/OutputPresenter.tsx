import { memo } from 'react';

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
  return (
    <article className={classes.OutputPresenter}>
      <StringToComponent stringCode={code} wrapper={wrapper} />

      <ControlPanel containerClasses={'Controls'} containerStyle={{ width: '100%' }}>
        <CustomButton
          buttonClasses={'Image Green Narrower NoRightMargin'}
          image="Up"
          ariaLabel="Move up"
          handleClick={() => moveComponent('UP')}
        />
        <CustomButton
          buttonClasses={'Image Yellow Narrower NoLeftMargin'}
          image="Down"
          ariaLabel="Move down"
          handleClick={() => moveComponent('DOWN')}
        />
        <CustomButton
          buttonClasses={'Image Red Narrower'}
          image="Delete"
          ariaLabel="Delete block"
          handleClick={removeComponent}
        />
      </ControlPanel>
    </article>
  );
};

export default memo(OutputPresenter);
