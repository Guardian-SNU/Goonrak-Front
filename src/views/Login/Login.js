import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';

import { loginRequest } from '../../api/auth';
import './Login.css';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      logined: false
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(e) {
    e.preventDefault();
    loginRequest(e, this);
  }

  render() {
    if(this.state.logined) return (<Redirect to='/'/>);
    return (
      <div id='login-wrapper'>
        <form onSubmit={this.handleLogin}>
          ID <input type='text' name='username'/><br/>
          PW <input type='password' name='password'/><br/>
          <input type='submit' value='Log In'/>
        </form>
        <Link to='/register' type='button'>Register</Link>
      </div>
    );
  }
}

export default Login;