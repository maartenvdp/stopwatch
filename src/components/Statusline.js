import React from 'react';
// import '../App.css';



function Statusline(props) {
    let statustext = 'Ready to Go';
    // let statuslines = ['Ready to Go', 'Running', 'Interupted', 'Stopped'];
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
    let ncoins = 0;
    ncoins = seconds === 0 ? minutes : minutes + 1;
    // console.log(ncoins);
    let coins = [];
    for (let i = 0; i < ncoins; ++i) {
        coins.push(<div className="coin" key={i}></div>)
    }
    return (
        <div className="coins">
            {coins}
        </div>
    )
}


export { Statusline, Coins };