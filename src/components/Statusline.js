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
    if(props.running === true) {
    return <div className="spinningbal running">R</div>
    } else {
        return <div className="spinningbal">r</div>
    }
}

export {Statusline, Spinningbal};