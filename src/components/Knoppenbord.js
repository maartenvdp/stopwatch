import React from 'react';

function Button(props) {
    return (
        <button value={props.name} id={props.name} name={props.name} onClick={props.action}>{props.label || 'hier moet iets staan'} </button>
    )
}

function ActiveButton(props) {
    return (
        <button value={props.name} id={props.name} className="active" name={props.name} onClick={props.action}>{props.label || 'hier moet iets staan'} </button>
    )
}

function Knoppenbord(props) {
    // console.log('Knoppenbord ' + props.activebutton);
    let time = props.time.split(":");
    let seconds = time[1];
    let buttons =  ['start', 'wait', 'continue', 'stop'];
    let activebutton = props.activebutton;
    if(seconds === '00' ) {
        activebutton = 'stop';
    }
    const lijstding = buttons.map((knoplabel, index) => {
        if (knoplabel === activebutton) {
            console.log('yep' + knoplabel);
            return <button key={index} value={knoplabel} className="active" id={knoplabel} name={knoplabel} onClick={props.action}>{knoplabel || 'hier moet iets staan'} </button>

        } else {
            return <button key={index} value={knoplabel} id={knoplabel} name={knoplabel} onClick={props.action}>{knoplabel || 'hier moet iets staan'} </button>
        }
    });
    return (
        <div id="knoppenbord">
            {lijstding}
        </div>
    );
}

export { Knoppenbord, Button, ActiveButton };  