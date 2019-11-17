import React from 'react';
// import '../App.css';

function Configuration(props) {
    let klass = "showconfiguration";
    let buttonvalue = "show";
    if (props.configuration === 'hide') {
        klass = "hideconfiguration";
        buttonvalue = 'show';
    } else {
        klass = "showconfiguration";
        buttonvalue = 'hide';

    }
    return (
        <div>
            <span>Configuration</span><button id="visbutton" value={buttonvalue} onClick={props.visibility}>{buttonvalue}</button><br />
            <div id="configuration" className={klass}>
                start time <input size="10" id="inittime" type="text" value={props.starttime} onChange={props.action} onBlur={props.validate} ></input>
            </div>
        </div>
    );

}

export default Configuration;