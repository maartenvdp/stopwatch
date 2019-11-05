import React from 'react';
// import '../App.css';



function Statusline(props) {
    let statustext = 'Ready to Go';
    // let statuslines = ['Ready to Go', 'Running', 'Interupted', 'Stopped'];
    let time = props.time.split(":");
    // let seconds = time[1];
    // let minutes = time[0];
    // console.log('statusline seconds:', seconds);
    if (props.time === '0:00') {
        statustext = 'BOOOOOOOOOM!';
    } else if (props.activebutton === 'start') {
        statustext = 'Running';

    } else if (props.activebutton === 'stop') {
        statustext = 'Stopped';
    } else if (props.activebutton === 'wait') {
        statustext = 'Interupted';
    } else {
        statustext = 'Ready to Go';
    }
    return (
        <div id="message" >
            {statustext}
        </div>
    );

}



function Spinningbal(props) {
    // console.log('time', props.time);
    let time = props.time.split(":");
    // console.log(time);
    let staticcoin = Number(time[0]);

    let num = staticcoin;
    let balls = 'COIN '.repeat(num);
    // console.log(balls);


    // variable interpolation in JSX only possible with () brackets after returns
    if (props.activebutton === 'start') {
        return (<div className="spinningbal running">{balls}</div>)
    } else {
        return (<div className="spinningbal">{balls}</div>)
    }
}

export { Statusline, Spinningbal };