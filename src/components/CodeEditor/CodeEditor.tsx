import { useState, useEffect } from 'react';
import Prism from 'prismjs';

import classes from './CodeEditor.module.scss';
import './mod-prism-theme.css';

type CodeEditorProps = {
  language: string;
  code: string;
  onValueChange: (newValue: string) => void;
};

const CodeEditor = ({ language, code, onValueChange }: CodeEditorProps) => {
  const [textAreaValue, setTextAreaValue] = useState(code);

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  useEffect(() => {
    Prism.highlightAll();
  }, [language, textAreaValue]);

  const handleChange = (newValue: string) => {
    setTextAreaValue(newValue);
    onValueChange(newValue);
  };

  return (
    <div className={classes.CodeEditContainer}>
      <textarea
        className={classes.CodeInput}
        value={textAreaValue}
        onChange={(evt) => handleChange(evt.target.value)}
      />
      <pre className={classes.CodeOutput}>
        <code className={`language-${language}`}>{textAreaValue}</code>
      </pre>
    </div>
  );
};

export default CodeEditor;
