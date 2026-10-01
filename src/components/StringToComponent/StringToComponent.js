import parser from 'html-react-parser';

import ErrorBoundary from '../../containers/ErrorBoundary/ErrorBoundary';

import { removeSpaceBetweenHTMLTags } from '../../assets/helpers';

//This component will receive some HTML code in a form of string and return a React component representing that code in the string.


const StringToComponent = ({ stringCode, wrapper, resetWhenError }) => {
    if (stringCode === '') return null;

    let wrappedCode = [ wrapper.topWrapper, stringCode, wrapper.bottomWrapper].join('');

    wrappedCode = removeSpaceBetweenHTMLTags(wrappedCode);


    return (
        <ErrorBoundary
            message='Fatal error. Resetting component...'
            resetState={resetWhenError}
            timer
        >
            {parser(wrappedCode)}
        </ErrorBoundary>
    )
}



// export default React.memo(StringToComponent);
export default StringToComponent;