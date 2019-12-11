import React from 'react';
// import '../App.css';



function Statusline(props) {
    let statustext = 'Ready to Go';
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
    // let animatedcoins = []; // svg
    // let distance = 35;
    for (let i = 0; i < ncoins; ++i) {
        coins.push(<div className="coin animated pulse infinite" key={i}></div>);
        // animatedcoins.push(<circle className="animated pulse infinite" cx={distance} cy="50%" r="2" key={i} />)
        // distance += 5.6;
    }
    return (
        <div className="coins">
            {coins}
            {/* <svg  viewBox="0 0 100 10" xmlns="http://www.w3.org/2000/svg"> */}
            {/* {animatedcoins} */}
            {/* </svg> */}
            
  {/* <circle className="animated pulse infinite" cx="20%" cy="50%" r="3"/> */}

        </div>
    )
}


export { Statusline, Coins };