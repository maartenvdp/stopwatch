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




export default Statusline;