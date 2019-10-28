import React from 'react';

function Button(props) {
    return (
        <button value={props.name} id={props.name} name={props.name} onClick={props.action}>{props.label || 'hier moet iets staan'} </button>
    )
}

function ActiveButton(props) {
    return (
        <button value={props.name} id={props.name} className="active" name={props.name} onClick={props.action}>{props.label || 'hier moet iets staan'} </button>
    )
}

class Knoppenbord extends React.Component {
    constructor(props) {
        super(props);

         this.verwerkKlik = this.verwerkKlik.bind(this);

        // console.log('knoppenbord ' + this.state.activeButton);
        console.log('construct ' + this.props.activebutton);
        const lijstding = this.props.buttons.map((textding, index) => {            
            if(textding === this.props.activebutton) {
                console.log('yep' + textding);
                return   <button key={index} value={textding} className="active" id={textding} name={textding} onClick={this.verwerkKlik}>{textding || 'hier moet iets staan'} </button>
                   
           
                // return  <ActiveButton  key={index} name={textding} label={textding} action={this.props.action} />                    
            } else {  
                return   <button key={index} value={textding} id={textding} name={textding} onClick={this.verwerkKlik}>{textding || 'hier moet iets staan'} </button>
            }            
        });
        this.lijstding = lijstding;
        // this.forceUpdate();
      }
      verwerkKlik(e) {
        // console.log(e);
        console.log('verwerkKlik ' + e.target.value);
        // this.setState({activeButton: e.target.value});
        this.props.action(e.target.value);
        // this.forceUpdate();
        // this.setState((state,e) => ({
        //   activeButton: e.target.value
        // }));
    
    
        // console.log(this.state.activeButton);
      }
    render() {
        return (
            <div id="knoppenbord">
                    {this.lijstding}
            </div>
        );
    }
}

export { Knoppenbord, Button, ActiveButton };  