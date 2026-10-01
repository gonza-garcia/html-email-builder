import { Fragment, useState } from 'react';
import type { MouseEvent as ReactMouseEvent, ReactNode } from 'react';

import classes from './ResizableLayout.module.scss';

type ResizableLayoutProps = {
  leftContent: ReactNode;
  rightContent: ReactNode;
  leftContentInitialWidth: number;
};

const ResizableLayout = ({
  leftContent,
  rightContent,
  leftContentInitialWidth,
}: ResizableLayoutProps) => {
  const [leftSectionWidth, setLeftSectionWidth] = useState(leftContentInitialWidth);

  const handleResizeMouseDown = (e: ReactMouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    window.onmousemove = (event: MouseEvent) => {
      resizeSections(window.innerWidth, event.clientX);
    };

    window.onmouseup = () => {
      window.onmousemove = null;
    };
  };

  const resizeSections = (windowWidth: number, mousePosition: number) => {
    let percentMousePosition = (100 * mousePosition) / windowWidth;

    if (percentMousePosition < 5) {
      percentMousePosition = 5;
    }
    if (percentMousePosition > 95) {
      percentMousePosition = 95;
    }

    setLeftSectionWidth(percentMousePosition);
  };

  return (
    <Fragment>
      <section style={{ width: `${leftSectionWidth}%` }}>{leftContent}</section>

      <div
        className={classes.ResizeMiddleTool}
        onMouseDownCapture={handleResizeMouseDown}
        style={{ width: `1%` }}
      ></div>

      <section style={{ width: `${99 - leftSectionWidth}%` }}>{rightContent}</section>
    </Fragment>
  );
};

export default ResizableLayout;
