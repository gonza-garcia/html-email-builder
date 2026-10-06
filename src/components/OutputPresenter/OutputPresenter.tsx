import { memo } from 'react';
import type { DragEvent, KeyboardEvent } from 'react';

import StringToComponent from '../StringToComponent/StringToComponent';
import ControlPanel from '../ControlPanel/ControlPanel';
import CustomButton from '../CustomButton/CustomButton';

import type { EmailWrapper } from '../../types';

import classes from './OutputPresenter.module.scss';

type OutputPresenterProps = {
  code: string;
  wrapper: EmailWrapper;
  isDragging: boolean;
  dropIndicator: 'before' | 'after' | null;
  moveComponent: (direction: 'UP' | 'DOWN') => void;
  removeComponent: () => void;
  onDragStart: (event: DragEvent<HTMLElement>) => void;
  onDragEnd: () => void;
  onDragOver: (event: DragEvent<HTMLElement>) => void;
  onDrop: (event: DragEvent<HTMLElement>) => void;
  onKeyDown: (event: KeyboardEvent<HTMLElement>) => void;
};

const OutputPresenter = ({
  code,
  wrapper,
  isDragging,
  dropIndicator,
  moveComponent,
  removeComponent,
  onDragStart,
  onDragEnd,
  onDragOver,
  onDrop,
  onKeyDown,
}: OutputPresenterProps) => {
  const classNames = [classes.OutputPresenter];

  if (isDragging) classNames.push(classes.Dragging);
  if (dropIndicator === 'before') classNames.push(classes.DropBefore);
  if (dropIndicator === 'after') classNames.push(classes.DropAfter);

  return (
    <article
      className={classNames.join(' ')}
      onDragOver={onDragOver}
      onDrop={onDrop}
      onKeyDown={onKeyDown}
      aria-keyshortcuts="Alt+ArrowUp Alt+ArrowDown"
    >
      <StringToComponent stringCode={code} wrapper={wrapper} />

      <ControlPanel containerClasses={'Controls'} containerStyle={{ width: '100%' }}>
        <span
          className={classes.DragHandle}
          draggable
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
          title="Drag to reorder (or focus a control and press Alt+Arrow keys)"
          aria-hidden="true"
        >
          <svg width="12" height="16" viewBox="0 0 12 16" focusable="false" aria-hidden="true">
            <circle cx="3" cy="3" r="1.7" />
            <circle cx="9" cy="3" r="1.7" />
            <circle cx="3" cy="8" r="1.7" />
            <circle cx="9" cy="8" r="1.7" />
            <circle cx="3" cy="13" r="1.7" />
            <circle cx="9" cy="13" r="1.7" />
          </svg>
        </span>
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
