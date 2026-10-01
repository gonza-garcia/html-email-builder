import { useState, useMemo } from 'react';

import StringToComponent    from '../StringToComponent/StringToComponent';
import CodeEditor           from '../CodeEditor/CodeEditor';
import ControlPanel         from '../ControlPanel/ControlPanel';
import CustomButton         from '../CustomButton/CustomButton';

import PropTypes            from 'prop-types';

import classes from './LiveCodePresenter.module.scss';

import htmlSanitizer from '../../assets/htmlSanitizer';

import ErrorMessage from '../ErrorMessage/ErrorMessage';

import { debounceMe, copyToClipboard } from '../../assets/helpers';

const LiveCodePresenter = ({ code, wrapper, shouldSanitize, handleCodeChange, handleCodeReset, handleAddCode }) => {

    const [toggleEditor,    setToggleEditor]    = useState(false);
    const [toggleControls,  setToggleControls]  = useState(false);
    const [currentCode,     setCurrentCode]     = useState(code);

    //memorize the expensive sanitizer function
    const sanitized = useMemo(() => {
        if (shouldSanitize && toggleEditor) {
            const san = new htmlSanitizer();

            const sntz = san.sanitizeHtml([ wrapper.topWrapper, code, wrapper.bottomWrapper ].join(''));

            if (sntz.invalidNodes.length || sntz.result === undefined) {
                return {invalidNodes: sntz.invalidNodes, result: ''}
            }
            else {
                return {invalidNodes: sntz.invalidNodes, result: code}
            }
        }
        else {
            return {invalidNodes: [], result: code}
        }

    }, [code, wrapper, shouldSanitize, toggleEditor])


    const handleChange = debounceMe((newCode) => {
        setCurrentCode(newCode);
        handleCodeChange(newCode);

        // console.log('debounce');
    }, 500)




    const reset = ( ) => {
        setToggleEditor(false);
        setTimeout(() => setToggleEditor(true), 100);
        handleCodeReset();
    }


    return (
        <article
            className={classes.LiveCodePresenter}
            onMouseEnter={() => setToggleControls(true)}
            onMouseLeave={() => setToggleControls(false)}
        >

            {sanitized.invalidNodes.length ? (
                <ErrorMessage
                type={'Warning2'}
                title={'Invalid expressions found in the code:'}
                messages={sanitized.invalidNodes} />
            ) : (
                <StringToComponent
                stringCode={code}
                wrapper={wrapper}
                resetWhenError={reset}
                />
            )
            }



            {toggleControls && (
                <ControlPanel
                    containerClasses={``}
                    containerStyle={{ width: '100%', position: 'absolute', marginTop: '-24px'}}
                >
                    <CustomButton
                        buttonClasses={'Normal Red'}
                        label={'Reset'}
                        handleClick={reset}
                        />

                    {sanitized.invalidNodes.length ? null : (
                        <CustomButton
                        buttonClasses={`Normal Yellow`}
                        label={toggleEditor ? 'Hide' : 'Edit'}
                        handleClick={() => setToggleEditor(!toggleEditor)}
                        />
                    )}
                    {sanitized.invalidNodes.length ? null : (
                        <CustomButton
                        buttonClasses={`Normal Blue`}
                        label={'Copy'}
                        handleClick={() => copyToClipboard(currentCode)}
                        />
                    )}
                    {sanitized.invalidNodes.length ? null : (
                        <CustomButton
                        buttonClasses={`Normal Green`}
                        label={'Add'}
                        handleClick={handleAddCode}
                        />
                    )}
                </ControlPanel>
            )}

            {toggleEditor && (
                <CodeEditor 
                    language="markup"
                    code={code}
                    onValueChange={newCode => handleChange(newCode)}
                />
            )}
        </article>
    );
}


LiveCodePresenter.propTypes = {
    code: PropTypes.string,
    wrapper: PropTypes.objectOf(PropTypes.string),
    shouldSanitize: PropTypes.bool,
    handleCodeChange: PropTypes.func,
    handleCodeReset: PropTypes.func,
    handleAddCode: PropTypes.func
};


export default LiveCodePresenter;