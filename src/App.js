import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import './stopwatch.css';

import Timer from './components/Timer'
import { Knoppenbord } from './components/Knoppenbord'
import { Statusline, Spinningbal } from './components/Statusline'
import Configuration from './components/Configuration'
import {time2seconds, seconds2time} from './components/tijdfuncties'

class App extends React.Component {

  // static buttons = ['start', 'wait', 'continue', 'stop'];

  constructor(props) {
    super(props);
    this.state = {
      time: '5:00',
      statustext: 'Ready to Go',
      starttime: this.determineStartTime(),
      // buttons: ['start', 'wait', 'continue', 'stop'],
      activebutton: '',
      running: false
    };
    this.buttons = ['start', 'wait', 'continue', 'stop'];
    this.statuslines = ['Running', 'Interupted', 'Running again', 'Stopped'];

    this.verwerkKlik = this.verwerkKlik.bind(this);
    this.changeStartTime = this.changeStartTime.bind(this);
    this.validateTimeOnBlur = this.validateTimeOnBlur.bind(this);

    //  console.log(this.state.activeButton);

  }
  componentDidUpdate(prevProps, prevState) {

  }
  determineStartTime() {
    // function getInitteller() {
    //   var initseconds;
    //   if(document.getElementById("inittime").value) {
    //     initseconds = time2seconds(document.getElementById("inittime").value);
    //     localStorage.setItem('initt', initseconds);
    //   } else if(localStorage.getItem('initt')) {
    //     initseconds = localStorage.getItem('initt');
    //     document.getElementById("inittime").value = seconds2time(initseconds);
    //    } else {
    //      initseconds = 360;
    //     document.getElementById("inittime").value = seconds2time(initseconds);
    //   }
    //   return initseconds;
    // }

    return '6:00';
  }
  verwerkKlik(e) {
    console.log(e.target.value);
    console.log('verwerkKlik ' + e);
    // this.setState({activebutton: staat});
    // this.forceUpdate();
    // this.setState((state,e) => ({
    //   activebutton: e.target.value
    // }));
    // this.setState((state, staat) => ({
    //   activebutton: staat
    // }));
    let nIntervId;

    if (e.target.value === 'start') {
      // clearInterval(nIntervId);
      // nIntervId = setInterval(this.updateTime, 1000); // 1000ms == 1 s

      // let currentTime = this.state.time;
      // let currentSeconds = time2seconds(currentTime) - 1;
      // let newTime = seconds2time(currentSeconds);
      // this.setState({time: newTime});


      this.timer = setInterval( () => this.updateTime(), 1000);


      // this.updateTime();
    } else {
      // clearInterval(nIntervId);
      // this.timer = 0;
      clearInterval(this.timer)
      this.setState({ running: false })
    }
    this.setState({ activebutton: e.target.value }, function () {
      console.log(this.state.activebutton);
      // this.forceUpdate();
    });
    const i = this.buttons.indexOf(e.target.value);
    const status = this.statuslines[i];

    // this.setState({ statustext: status }, function () {
    //   console.log(this.state.statustext);
    //   // this.forceUpdate();
    // });

    this.setState({ statustext: status });


    // HIERBOVEN EEN FUNCTIE OMDAT DAT NIET CORRECT UPDATE, maar niet nodig bij changStartTime??? WTF
    // NOu ja nu lukt dat weer wel...

    // console.log('na zetten ' + this.state.activebutton);
    // this.componentDidUpdate();
  }

  updateTime() {
 
    // this.setState({ running: true });


    let currentTime = this.state.time;
    let currentSeconds = time2seconds(currentTime) - 1;
    let newTime = seconds2time(currentSeconds);
    this.setState({time: newTime});

    console.log(currentSeconds);
    // return currentSeconds;

    
  }

  // twee eventhandlers, 1 voor de invoer, 1 voor validering, je wil alleen valideren op het verlaten van het veld
  changeStartTime(e) {
    console.log(e);
    this.setState({ starttime: e.target.value });
    this.setState({ time: e.target.value });
  }

  validateTimeOnBlur(e) {
    const re = /^\d\d?:\d\d$/;
    // heel precies de boundaries aangeven.
    console.log('validate test: ' + e.target.value)
    if (re.test(e.target.value)) {
      console.log('validate: yep dus ')

      return true;
    } else {
      this.setState({ starttime: '6:00' });
      this.setState({ time: '6:00' });

    }

  }


  ValidTime(value) {
    const re = /\d:\d\d/;

    return true;
    // if(re.test(value)) {
    //     return true;
    // } else {
    //   return false;
    // }
  }
  render() {
    return (
      <div id="wrap">
        <Timer time={this.state.time} state={this.state.activebutton} />
        <Knoppenbord action={this.verwerkKlik} buttons={this.buttons} activebutton={this.state.activebutton} />
        <Statusline statustext={this.state.statustext} />
        <Configuration starttime={this.state.starttime} action={this.changeStartTime} validate={this.validateTimeOnBlur} />
        <Spinningbal running={this.state.running} />
      </div>
    );
  }
}

export default App;
