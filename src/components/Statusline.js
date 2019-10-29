import React from 'react';
// import '../App.css';

class Statusline extends React.Component {

    render() {
        return (
            <div id="message" >
                {this.props.statustext}
            </div>
        );
    }
}


function Spinningbal(props) {
    console.log('time', props.time);
    let time = props.time.split(":");
    // console.log(time);
    let staticcoin = Number(time[0]);
    let staticballs = 'COIN '.repeat(staticcoin);

    let num = staticcoin ;
    let balls = 'COIN '.repeat(num);
    console.log(balls);
    let testletter = 'q';

  
    if(props.activebutton === 'start') {
        return (<div className="spinningbal running">{balls }</div>)
    } else {
        return (<div className="spinningbal">{balls }</div>)
    }
}

export {Statusline, Spinningbal};