import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';

import ErrorIcon from './ErrorIcon64px.png';
import classes from './ErrorBoundary.module.scss';

//This function needs to get from props a reset function that resets the parent to a previous state before the error occurred. More info on: https://dev.to/maybebored/how-to-use-react-error-boundary-21el

type ErrorBoundaryProps = {
  message: string;
  resetState?: () => void;
  children?: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_error: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(_error: Error, _errorInfo: ErrorInfo): void {
    //Calling the resetState function received as props after a few seconds and setting hasError to false again so Error Boundary isn't called again

    setTimeout(() => {
      this.props.resetState?.();
      this.setState({ hasError: false });
    }, 3000);
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
