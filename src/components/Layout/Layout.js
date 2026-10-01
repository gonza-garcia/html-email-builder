import { Fragment, memo } from 'react';

import ResizableLayout from '../ResizableLayout/ResizableLayout';

import classes from './Layout.module.scss';

const Layout = ( { leftContent, rightContent, headerLeft, headerCenter, button1, button2, subHeader } ) => {

    return (
        <Fragment>
            <header className={classes.Header}>
                <div className={classes.Left}>
                    {headerLeft}
                </div>
                <div className={classes.Center}>
                    {headerCenter}
                </div>
                <div className={classes.Right}>
                    {button1} {button2}
                </div>
                <div className={classes.SubHeader}>
                    {subHeader}
                </div>
            </header>
            

            
            <main className={classes.MainContainer}>

                <ResizableLayout 
                    leftContent={(
                        <section className={classes.LeftSection}>
                            {leftContent}
                        </section>
                    )}
                    rightContent={(
                        <section className={classes.RightSection}>
                            {rightContent}
                        </section>
                    )}
                    leftContentInitialWidth={50}
                />
                
            </main>
        </Fragment>
    );
}

export default memo(Layout);