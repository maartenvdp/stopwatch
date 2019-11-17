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
    } else if (props.activebutton === 'continue') {
            statustext = 'Running';        
    } else {
        statustext = 'Ready to Go';
    }
    return (
        <div id="message" >
            {statustext}
        </div>
    );
}


function Coins(props) {

    let time = props.time.split(":");
    let seconds = Number(time[1]);
    let minutes = Number(time[0]);

    // console.log('time', props.time);
    // console.log(time);
    let Numberofcoins = minutes; 

    let balls = 'COIN '.repeat(Numberofcoins); 
    // console.log(balls);
//     const listItems = numbers.map((number) =>
//     <li>{number}</li>
//   );
//   return (
//     <ul>{listItems}</ul>
//   );

    // variable interpolation in JSX only possible with () brackets after returns
    if (! props.activebutton) {
        if(seconds >= 0 && seconds <= 30) {
        return (<div className="coins">{'COIN '.repeat(minutes)}</div>)
        } else {
            return (<div className="coins">{'COIN '.repeat(minutes+ 1)}</div>)
        }
    } else {
        
            return (<div className="coins">{'COIN '.repeat(minutes)}</div>)
           
    }
}

export { Statusline, Coins };