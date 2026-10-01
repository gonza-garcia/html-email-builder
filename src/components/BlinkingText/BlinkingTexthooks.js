import { useState, useEffect } from 'react';

import { usePrevious } from '../../assets/customHooks';

const BlinkingText = ({ text }) => {


    const [ showText, setShowText ] = useState(true);

    const previousShowText = usePrevious(showText);


    // let timesRun = 0;

    // let interval = setInterval(() => {
    //     timesRun += 1;
    //     if(timesRun === 3){
    //         clearInterval(interval);
    //     }

    //     setShowText(!previousShowText);
        
    //     console.log('updated');
    // }, 1000);




    //Change the state every second 
    setInterval(() => {
        setShowText(!previousShowText);
    }, 
    // Define any blinking time.
    1000);

    let display = showText ? text : '';


    //     React.useEffect(() => {
    //     // Move on to the next message every `n` milliseconds
    //     // let timeout;

    //     // if (message !== '') {
    //     //     timeout = setTimeout(() => setMessage(''), 2000);
    //     // }
    //     const previousValue = message;

    //     let timesRun = 0;
    //     let interval = setInterval(() => {
    //         timesRun += 1;
    //         if(timesRun === 3){
    //             clearInterval(interval);
    //         }

    //         setMessage('');        console.log('updated');
    //     }, 500);

    //     setMessage(previousValue);
    

    //     return () => {
    //         // clearTimeout(timeout);
    //         clearInterval(interval);
    //     };
    // }, [message]);

    return (
        <p style = {{ fontWeight: 'bold', fontSize : 20 , marginTop : 10 }}>
            {display}
        </p>
    );
}

export default BlinkingText;