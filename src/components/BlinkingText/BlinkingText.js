import { Component } from 'react';

class BlinkingText extends Component {
    constructor(props) {
        super(props);
        this.state = {showText: true};
    }

    intervalID = 0;

    componentDidMount() {
        let timesRun = 0;

        this.intervalID = setInterval(() => {
            timesRun += 1;
            if(timesRun === 3){
                clearInterval(this.intervalID);
            }
    
            this.setState(previousState => {
                return { showText: !previousState.showText };
            });
            
            console.log('updated');
        }, 1000);

        //Change the state every second 
        // this.intervalID = setInterval(() => {
        //     this.setState(previousState => {
        //         return { showText: !previousState.showText };
        //     });
        // }, 
        // // Define any blinking time.
        // 1000);

        // setTimeout(() => {
        //   this.setState({favoritecolor: "yellow"})
        // }, 1000)
    }

    componentDidUpdate() {

    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    render() {
      let display = this.state.showText ? this.props.text : '';
      return (
          <p style = {this.props.styling}>{display}</p>
      );
    }
}

export default BlinkingText;