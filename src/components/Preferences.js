import React from 'react';
// import '../App.css';

function Preferences(props) {
    console.log('p',props);
    let klass = "showconfiguration";
    let buttonvalue = "show";
    if (props.preferences.visible === 'no') {
        klass = "hideconfiguration";
        buttonvalue = 'show';
    } else {
        klass = "showconfiguration";
        buttonvalue = 'hide';

    }
    return (
        <div>
            <span>Preferences: </span><button id="visbutton" value={buttonvalue} onClick={props.visibility}>{buttonvalue}</button><br />
            <div id="configuration" className={klass}>
                start time <input size="10" id="inittime" type="text" value={props.starttime} onChange={props.action} onBlur={props.validate} ></input>
                <div><span>sound </span>yes<input name="sound" type="radio" value="yes" checked={props.preferences.sound === "yes"} onChange={props.onSoundChange} />
                no <input name="sound" type="radio" value="no" checked={props.preferences.sound === "no"} onChange={props.onSoundChange} />
                </div>
            </div>
        </div>
    );

}

export default Preferences;