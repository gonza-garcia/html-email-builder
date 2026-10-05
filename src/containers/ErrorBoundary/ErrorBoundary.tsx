import { Component } from 'react';
import type { ReactNode } from 'react';

import CustomButton from '../../components/CustomButton/CustomButton';
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

  handleDismiss = () => {
    //recover the parent to its pre-error state when a reset is available, then clear the error UI
    this.props.resetState?.();
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className={classes.ErrorContainer} role="alert">
          <img src={ErrorIcon} alt="" />
          <p>{this.props.message}</p>
          <CustomButton
            buttonClasses={'Normal Red'}
            label={'Dismiss'}
            handleClick={this.handleDismiss}
          />
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
