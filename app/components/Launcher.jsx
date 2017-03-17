import React, { Component, PropTypes } from 'react';
var exec = require('child_process').exec, child;


export default class Login extends Component {
  static propTypes = {
    onLogin: PropTypes.func.isRequired
  };

  handleLogin() {
    const { onLogin } = this.props;
    const username = this.refs.username.value;

    onLogin({ username, loggedIn: true });

    this.props.router.push('/loggedin');
  }

  triggerNotepad = ()=>{
    child = exec('start notepad',
    function (error, stdout, stderr) {
        if (error !== null) {
             console.log('exec error: ' + error);
        }
    });
  child();
  }

  render() {
    return (
      <div>
        {
         // <h2>Welcome</h2>
        //<button onClick={this.triggerNotepad}>Open notepad</button>
        }
        
        <img onClick={this.triggerNotepad} src="./images/icon_launch.png"></img>
      </div>
    );
  }
}
