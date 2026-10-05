import { Fragment, useState } from 'react';
import type {
  KeyboardEvent as ReactKeyboardEvent,
  PointerEvent as ReactPointerEvent,
  ReactNode,
} from 'react';

import classes from './ResizableLayout.module.scss';

const MIN_WIDTH_PERCENT = 5;
const MAX_WIDTH_PERCENT = 95;
const KEY_STEP_PIXELS = 16;

type ResizableLayoutProps = {
  leftContent: ReactNode;
  rightContent: ReactNode;
  leftContentInitialWidth: number;
};

const clampWidth = (percent: number): number =>
  Math.min(MAX_WIDTH_PERCENT, Math.max(MIN_WIDTH_PERCENT, percent));

const ResizableLayout = ({
  leftContent,
  rightContent,
  leftContentInitialWidth,
}: ResizableLayoutProps) => {
  const [leftSectionWidth, setLeftSectionWidth] = useState(leftContentInitialWidth);

  //pointer capture routes the whole drag to the handle: no window-level handlers, nothing to clean up
  const handlePointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!e.currentTarget.hasPointerCapture(e.pointerId)) return;

    setLeftSectionWidth(clampWidth((100 * e.clientX) / window.innerWidth));
  };

  const handlePointerUp = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  };

  const handleResizeKeyDown = (e: ReactKeyboardEvent<HTMLDivElement>) => {
    const step = (KEY_STEP_PIXELS / window.innerWidth) * 100;

    switch (e.key) {
      case 'ArrowLeft':
        setLeftSectionWidth((width) => clampWidth(width - step));
        break;
      case 'ArrowRight':
        setLeftSectionWidth((width) => clampWidth(width + step));
        break;
      case 'Home':
        setLeftSectionWidth(MIN_WIDTH_PERCENT);
        break;
      case 'End':
        setLeftSectionWidth(MAX_WIDTH_PERCENT);
        break;
      default:
        return;
    }

    e.preventDefault();
  };

  return (
    <Fragment>
      <section style={{ width: `${leftSectionWidth}%` }}>{leftContent}</section>

      <div
        className={classes.ResizeMiddleTool}
        role="separator"
        aria-orientation="vertical"
        aria-label="Resize panels"
        aria-valuenow={Math.round(leftSectionWidth)}
        aria-valuemin={MIN_WIDTH_PERCENT}
        aria-valuemax={MAX_WIDTH_PERCENT}
        tabIndex={0}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onKeyDown={handleResizeKeyDown}
        style={{ width: `1%` }}
      ></div>

      <section style={{ width: `${99 - leftSectionWidth}%` }}>{rightContent}</section>
    </Fragment>
  );
};

export default ResizableLayout;
