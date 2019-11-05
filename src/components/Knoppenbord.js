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

    let buttons =  ['start', 'wait', 'continue', 'stop'];

    const lijstding = buttons.map((textding, index) => {
        if (textding === props.activebutton) {
            console.log('yep' + textding);
            return <button key={index} value={textding} className="active" id={textding} name={textding} onClick={props.action}>{textding || 'hier moet iets staan'} </button>

        } else {
            return <button key={index} value={textding} id={textding} name={textding} onClick={props.action}>{textding || 'hier moet iets staan'} </button>
        }
    });
    return (
        <div id="knoppenbord">
            {lijstding}
        </div>
    );
}

export { Knoppenbord, Button, ActiveButton };  