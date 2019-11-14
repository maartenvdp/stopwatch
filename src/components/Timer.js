import React from 'react';

function Timer(props) {
    let time = props.time.split(":");
    let seconds = Number(time[1]);
    let minutes = Number(time[0]);

    console.log('active button: ', props.activebutton);
    console.log('minutes: ', minutes, 'seconds: ', seconds);

    let classname = 'init';
    if (props.activebutton === 'stop' || (minutes === 0 && seconds === 0)) {
        classname = 'stop';
    } else if (props.activebutton === 'wait') {
        classname += ' wait';
    } else if (props.activebutton === 'start') {
        if (seconds > 30 || seconds === 0) {
            classname = 'run';
        } else {
            classname = 'easy';
        }
    } else {
        // classname = 'init';
        if (seconds > 30 || seconds === 0) {
            classname = 'run';
        } else {
            classname = 'easy';
        }
 

    }
    console.log('classname: ', classname);

    return (
        <div id="timer" className={classname}>
            {props.time}
        </div>
    )


}

export default Timer;