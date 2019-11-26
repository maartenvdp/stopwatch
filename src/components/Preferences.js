import React from 'react';
// import '../App.css';

function Preferences(props) {
    // console.log('p', props);
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
        <div id="preferences">
            <button className="link-button" value={buttonvalue} onClick={props.visibility}>Prefs {buttonvalue}</button>
            <div id="configuration"  className={klass} >
                <div className="config">
                    <label htmlFor="inittime">start time: </label>
                    <input size="10" name="inittime" id="inittime" type="text" value={props.starttime} onChange={props.action} onBlur={props.validate} ></input>
                </div>
                <div className="config">
                    <label htmlFor="sound">sound: </label>
                    yes <input name="sound" type="radio" value="yes" checked={props.preferences.sound === "yes"} onChange={props.onSoundChange} />
                    no <input name="sound" type="radio" value="no" checked={props.preferences.sound === "no"} onChange={props.onSoundChange} />
                </div>
            </div>
        </div>
    );

}

export default Preferences;