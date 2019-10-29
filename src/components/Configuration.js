import React from 'react';
// import '../App.css';

function Configuration (props) {
    
        return (
            <div id="configuration">
               start time <input id="inittime" type="text" value={props.starttime} onChange={props.action} onBlur={props.validate} ></input>
            </div>
        );
    
}

export default  Configuration;