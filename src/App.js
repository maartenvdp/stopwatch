import React from 'react';

import './stopwatch.css';

import Timer from './components/Timer'
import { Knoppenbord } from './components/Knoppenbord'
import { Statusline, Spinningbal } from './components/Statusline'
import Configuration from './components/Configuration'
import { time2seconds, seconds2time } from './components/tijdfuncties'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            time: '6:00',
            statustext: 'Ready to Go',
            starttime: '6:00',
            activebutton: '',
            running: false
        };
        this.buttons = ['start', 'wait', 'continue', 'stop'];
        this.statuslines = ['Running', 'Interupted', 'Running again', 'Stopped'];

        this.verwerkKlik = this.verwerkKlik.bind(this);
        this.changeStartTime = this.changeStartTime.bind(this);
        this.validateTimeOnBlur = this.validateTimeOnBlur.bind(this);
    }

    componentDidMount() {
        if (localStorage.getItem('initt')) {
            let initt = localStorage.getItem('initt');
            document.getElementById("inittime").value = initt; // only possible after everything mounted
            this.setState({ time: initt });
            this.setState({ starttime: initt });
        } else if (document.getElementById("inittime").value) {
            this.setState({ time: document.getElementById("inittime").value });
            this.setState({ starttime: document.getElementById("inittime").value });
            localStorage.setItem('initt', document.getElementById("inittime").value);
        }
        // } else {
        //   this.setState({ time: '16:00' })
        // }
    }
    verwerkKlik(e) {
        console.log(e.target.value);
        console.log('verwerkKlik ' + e);
        if (e.target.value === 'start') {
            this.componentDidMount();
            clearInterval(this.timer)
            this.timer = setInterval(() => this.updateTime(), 1000);
        } else {
            clearInterval(this.timer)
            this.setState({ running: false })
        }
        this.setState({ activebutton: e.target.value }, function () {
            console.log(this.state.activebutton);
        });
        const i = this.buttons.indexOf(e.target.value);
        const status = this.statuslines[i];
        this.setState({ statustext: status });
    }

    updateTime() {
        let currentTime = this.state.time;
        let currentSeconds = time2seconds(currentTime) - 1;
        let newTime = seconds2time(currentSeconds);
        this.setState({ time: newTime });
    }

    // twee eventhandlers, 1 voor de invoer, 1 voor validering, je wil alleen valideren op het verlaten van het veld
    changeStartTime(e) {
        console.log(e);
        this.setState({ starttime: e.target.value });
        this.setState({ time: e.target.value });
        localStorage.setItem('initt', document.getElementById("inittime").value);
    }

    validateTimeOnBlur(e) {
        const re = /^\d\d?:\d\d$/;
        // heel precies de boundaries aangeven.
        console.log('validate test: ' + e.target.value)
        if (re.test(e.target.value)) {
            console.log('validate: yep dus ')
            return true;
        } else {
            // this.setState({ starttime: '6:00' });
            this.setState({ time: '6:00' });
        }
    }

    render() {
        return (
            <div id="wrap">
                <Timer time={this.state.time} state={this.state.activebutton} />
                <Knoppenbord action={this.verwerkKlik} buttons={this.buttons} activebutton={this.state.activebutton} />
                <Statusline statustext={this.state.statustext} />
                <Configuration starttime={this.state.starttime} action={this.changeStartTime} validate={this.validateTimeOnBlur} />
                <Spinningbal activebutton={this.state.activebutton} time={this.state.time} />
            </div>
        );
    }
}

export default App;
