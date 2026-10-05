import { Fragment, memo } from 'react';
import type { ReactNode } from 'react';

import ResizableLayout from '../ResizableLayout/ResizableLayout';

import classes from './Layout.module.scss';

type LayoutProps = {
  leftContent: ReactNode;
  rightContent: ReactNode;
  headerLeft: ReactNode;
  headerCenter: ReactNode;
  button1: ReactNode;
  button2: ReactNode;
  subHeader: ReactNode;
};

const Layout = ({
  leftContent,
  rightContent,
  headerLeft,
  headerCenter,
  button1,
  button2,
  subHeader,
}: LayoutProps) => {
  return (
    <Fragment>
      <header className={classes.Header}>
        <div className={classes.Left}>{headerLeft}</div>
        <div className={classes.Center}>{headerCenter}</div>
        <div className={classes.Right}>
          {button1} {button2}
        </div>
        <div className={classes.SubHeader}>{subHeader}</div>
      </header>

      <main className={classes.MainContainer}>
        <ResizableLayout
          leftContent={
            <section className={classes.LeftSection} aria-labelledby="components-panel-title">
              <h2 id="components-panel-title" className={classes.PanelTitle}>
                Components
              </h2>
              {leftContent}
            </section>
          }
          rightContent={
            <section className={classes.RightSection} aria-labelledby="output-panel-title">
              <h2 id="output-panel-title" className={classes.PanelTitle}>
                Output
              </h2>
              {rightContent}
            </section>
          }
          leftContentInitialWidth={50}
        />
      </main>
    </Fragment>
  );
};

export default memo(Layout);
