import { useEffect } from 'react';
import Prism from 'prismjs';

import classes from './CodeEditor.module.scss';
import './mod-prism-theme.css';

type CodeEditorProps = {
  language: string;
  value: string;
  onValueChange: (newValue: string) => void;
};

const CodeEditor = ({ language, value, onValueChange }: CodeEditorProps) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  useEffect(() => {
    Prism.highlightAll();
  }, [language, value]);

  return (
    <div className={classes.CodeEditContainer}>
      <textarea
        className={classes.CodeInput}
        value={value}
        onChange={(evt) => onValueChange(evt.target.value)}
      />
      <pre className={classes.CodeOutput}>
        <code className={`language-${language}`}>{value}</code>
      </pre>
    </div>
  );
};

export default CodeEditor;
