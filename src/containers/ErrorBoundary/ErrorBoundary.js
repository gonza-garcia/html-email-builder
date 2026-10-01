import { Component } from 'react';

import ErrorIcon from './ErrorIcon64px.png'; // Tells webpack this JS file uses this image
import classes from './ErrorBoundary.module.scss';

//This function needs to get from props a reset function that resets the parent to a previous state before the error occurred. More info on: https://dev.to/maybebored/how-to-use-react-error-boundary-21el

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }
    componentDidCatch(error, errorInfo) {
        //Calling the resetState function received as props after a few seconds and setting hasError to false again so Error Boundary isn't called again

        setTimeout(() => {
            this.props.resetState();
            this.setState({ hasError: false });
        }, 3000);
        // You can also log the error to an error reporting service
        // console.log(error, errorInfo);
        // console.log('there was an error')
    }

    componentWillUnmount() {

    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <div className={classes.ErrorContainer}>
                    <img src={ErrorIcon} alt="Error" />
                    <p>{this.props.message}</p>
                </div>
            );
        }

        return this.props.children; 
    }
}

export default ErrorBoundary;