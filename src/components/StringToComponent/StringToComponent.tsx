import parse from 'html-react-parser';

import ErrorBoundary from '../../containers/ErrorBoundary/ErrorBoundary';

import { removeSpaceBetweenHTMLTags } from '../../assets/helpers';

import type { EmailWrapper } from '../../types';

//This component will receive some HTML code in a form of string and return a React component representing that code in the string.

type StringToComponentProps = {
  stringCode: string;
  wrapper: EmailWrapper;
  resetWhenError?: () => void;
  errorMessage?: string;
};

const StringToComponent = ({
  stringCode,
  wrapper,
  resetWhenError,
  errorMessage = 'Fatal error while rendering this component. Use Dismiss to reset it.',
}: StringToComponentProps) => {
  if (stringCode === '') return null;

  let wrappedCode = [wrapper.topWrapper, stringCode, wrapper.bottomWrapper].join('');

  wrappedCode = removeSpaceBetweenHTMLTags(wrappedCode);

  return (
    <ErrorBoundary message={errorMessage} resetState={resetWhenError}>
      {parse(wrappedCode)}
    </ErrorBoundary>
  );
};

export default StringToComponent;
