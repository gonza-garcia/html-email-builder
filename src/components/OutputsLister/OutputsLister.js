import { memo } from 'react';

import OutputPresenter from '../OutputPresenter/OutputPresenter';

import { tableWrapper } from '../../assets/templateWrappers';


const OutputsLister = ({ outputs, moveComponent, removeComponent }) => {

    if (!outputs.length) return <p style={{color: '#ffffff'}}>
        Choose your components from the left, edit them if you want and start adding them to this panel. Once you are done, click on Create HTML.
    </p>;


    return (
        outputs.map((output, index) => (
            <OutputPresenter
                code={output.stringCode}
                wrapper={tableWrapper}
                moveComponent={direction => moveComponent(direction, index)}
                removeComponent={() => removeComponent(index)}
                key={output.id}
            />
        ))
    );

}

export default memo(OutputsLister);