import React from 'react';
import './App.css'
import './animate.css';
// https://daneden.github.io/animate.css/
import './watch.css';


import Timer from './components/Timer'
import { Knoppenbord } from './components/Knoppenbord'
import Statusline from './components/Statusline'
import Coins  from './components/Coins'

import Preferences from './components/Preferences'
import Sound from './components/Sound'
import Storage from './components/Storage'

import { time2seconds, seconds2time } from './components/tijdfuncties'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            time: '6:00',
            starttime: '6:00',
            activebutton: '',
            visible: 'yes',
            sound: 'yes'
        };

        this.verwerkKlik = this.verwerkKlik.bind(this);
        this.changeStartTime = this.changeStartTime.bind(this);
        this.validateTimeOnBlur = this.validateTimeOnBlur.bind(this);
        // this.maakGeluid();
    }

    componentDidMount() {
        // var localStorage = '';

        // StorageHandling after mounting
        // also after changing inputvalue
        if (localStorage.getItem('initt')) {
            let initt = localStorage.getItem('initt');
            document.getElementById("inittime").value = initt; // only possible after everything mounted
            this.setState({ time: initt, starttime: initt });
            this.setState({ starttime: initt });
        } else if (document.getElementById("inittime").value) {
            this.setState({ time: document.getElementById("inittime").value });
            this.setState({ starttime: document.getElementById("inittime").value });
            localStorage.setItem('initt', document.getElementById("inittime").value);
        }
        // Configuration show
        if (localStorage.getItem('showconfig')) {
            let showconfig = localStorage.getItem('showconfig') === 'show' ? 'yes' : 'no';
            this.setState({ visible: showconfig });
        }

        if (localStorage.getItem('sound')) {
            let sound = localStorage.getItem('sound');
            this.setState({ sound: sound });
        }


    }

    verwerkKlik(e) { // from dashboard
        if (e.target.value === 'start') {
            this.componentDidMount();
            clearInterval(this.timer)
            this.timer = setInterval(() => this.updateTime(), 1000);
        } else if (e.target.value === 'wait') { // not sure if this is alright
            clearInterval(this.timer)

        } else if (e.target.value === 'continue') {
            clearInterval(this.timer)
            this.timer = setInterval(() => this.updateTime(), 1000);
        } else {
            clearInterval(this.timer)
        }
        this.setState({ activebutton: e.target.value }, function () {
            // console.log(this.state.activebutton);
        });
    }

    verwerkVisibilitiyClick = (e) => { // from Preferences, don't need to bind the handler in the constructor
        // console.log(e.target);
        console.log(e.target.value);
        // e.preventDefault();
        if (e.target.value === 'show') {
            this.setState({ visible: 'yes' });

        } else if (e.target.value === 'hide') {
            this.setState({ visible: 'no' });

        }
        localStorage.setItem('showconfig', e.target.value);
    }

    updateTime() {
        let currentTime = this.state.time;
        let currentSeconds = time2seconds(currentTime) - 1;
        let newTime = seconds2time(currentSeconds);
        if (currentSeconds === 0) {
            clearInterval(this.timer); // is this the place?
        }
        this.setState({ time: newTime });
    }

    // twee eventhandlers, 1 voor de invoer, 1 voor validering, je wil alleen valideren op het verlaten van het veld
    changeStartTime(e) {
        // console.log(e);
        this.setState({ starttime: e.target.value });
        this.setState({ time: e.target.value });
        localStorage.setItem('initt', document.getElementById("inittime").value);
    }

    validateTimeOnBlur(e) {
        const re = /^\d\d?:\d\d$/;
        // heel precies de boundaries aangeven.
        console.log('validate test: ' + e.target.value)
        if (re.test(e.target.value)) {
            // console.log('validate: yep dus ')
            return true;
        } else {
            // this.setState({ starttime: '6:00' });
            this.setState({ time: '6:00' });
        }
    }

    onSoundChange = (e) => { // from Preferences, don't need to bind the handler in the constructor
        // console.log(e.target);
        console.log('sound', e.target.value);
        if (e.target.value === 'no') {
            this.setState({ sound: 'no' });
        } else {
            this.setState({ sound: 'yes' });
        }
        localStorage.setItem('sound', e.target.value);

    }



    render() {

        return (
            <div id="stopwatch">
                <Timer time={this.state.time} activebutton={this.state.activebutton} />
                <Statusline time={this.state.time} activebutton={this.state.activebutton} />
                <Knoppenbord action={this.verwerkKlik} time={this.state.time} activebutton={this.state.activebutton} />
                <Coins activebutton={this.state.activebutton} time={this.state.time} />
                <Preferences preferences={this.state} action={this.changeStartTime} validate={this.validateTimeOnBlur} visibility={this.verwerkVisibilitiyClick} onSoundChange={this.onSoundChange} />
                <Sound activebutton={this.state.activebutton} time={this.state.time} sound={this.state.sound} />
                <Storage starttime={this.state.starttime} />
            </div>
        );
    }
}

export default App;
