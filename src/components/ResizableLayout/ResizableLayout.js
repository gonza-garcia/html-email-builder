import { Fragment, useState } from 'react';

import classes from './ResizableLayout.module.scss';


const ResizableLayout = ({ leftContent, rightContent, leftContentInitialWidth }) => {
    const [leftSectionWidth, setLeftSectionWidth] = useState(leftContentInitialWidth);

    const handleResizeMouseDown = (e) => {
        e.preventDefault();

        onmousemove = (event) => {
            resizeSections(window.innerWidth, event.clientX);
        }

        onmouseup = () => {
            onmousemove = null;
        }
    }

    const resizeSections = (windowWidth, mousePosition) => {
        let percentMousePosition = (100 * mousePosition) / windowWidth;

        if (percentMousePosition < 5) { percentMousePosition = 5; }
        if (percentMousePosition > 95) { percentMousePosition = 95; }

        setLeftSectionWidth(percentMousePosition);
    }


    return (
        <Fragment>
            <section style={{width: `${leftSectionWidth}%`}}>
                {leftContent}
            </section>

            <div
                className={classes.ResizeMiddleTool}
                onMouseDownCapture={handleResizeMouseDown}
                style={{width: `1%`}}
            ></div>

            <section
                style={{width: `${99 - leftSectionWidth}%`}}
            >
                {rightContent}
            </section>
        </Fragment>
    )
}


export default ResizableLayout;