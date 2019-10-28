import React from 'react';


function ActiveButton(props) {
    return (
        <button value={props.name} id={props.name} className="active" name={props.name} onClick={props.action}>{props.label || 'hier moet iets staan'} </button>
    )
}

function Timer(props) {
    if (props.state === 'stop') {
        return (
            <div id="tel" className="end">
                {props.time}
            </div>
        )

    } else {
        return (
            <div id="tel" className="init">
                {props.time}
            </div>
        )
    }
}

export default Timer;