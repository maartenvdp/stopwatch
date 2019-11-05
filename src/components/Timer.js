import React from 'react';

function Timer(props) {
    let time = props.time.split(":");
    let seconds = Number(time[1]);
    console.log('active button: ', props.activebutton);

    let classname = 'init';
    if (props.activebutton === 'stop' || seconds === 0) {
        classname = 'stop';
    } else if (props.activebutton === 'wait') {
        classname += ' wait';
    } else if (props.activebutton === 'start') {
        if (seconds > 30) {
            classname = 'run';
        } else {
            classname = 'easy';
        }
    } else {
        classname = 'init';
    }
    console.log('classname: ', classname);

    return (
        <div id="tel" className={classname}>
            {props.time}
        </div>
    )


}

export default Timer;