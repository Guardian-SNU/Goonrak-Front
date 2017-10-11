import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './Login.css';
import { loginRequest } from '../../api/login';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(e) {
    e.preventDefault();
    loginRequest(e, this);
  }

  render() {
    if(this.state.redirect) return (<Redirect to='/'/>);
    return (
      <form onSubmit={this.handleLogin}>
        ID <input type='text' name='id'/><br/>
        PW <input type='password' name='password'/><br/>
        <input type='submit' value='Log In'/>
      </form>
    );
  }
}

export default Login;