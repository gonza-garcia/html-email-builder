import { useState, useEffect } from "react";
import Prism from "prismjs";

import classes from './CodeEditor.module.scss';
import './mod-prism-theme.css';


const CodeEditor = ({ language, code, onValueChange }) => {

    const [textAreaValue, setTextAreaValue] = useState(code);

    useEffect(() => {
        Prism.highlightAll();
    }, []);

    // useEffect(() => {
    //     console.log('CodeEditor.js update');
    // });

    useEffect(() => {
        Prism.highlightAll();
    }, [language, textAreaValue]);

    const handleChange = (newValue) => {
        setTextAreaValue(newValue);
        onValueChange(newValue);
    }

    return (
        <div className={classes.CodeEditContainer}>
            <textarea
                className={classes.CodeInput}
                value={textAreaValue}
                onChange={evt => handleChange(evt.target.value)}
            />
            <pre className={classes.CodeOutput}>
                <code className={`language-${language}`}>
                    {textAreaValue}
                </code>
            </pre>
        </div>
    );
};

// export default React.memo(CodeEditor);
export default CodeEditor;