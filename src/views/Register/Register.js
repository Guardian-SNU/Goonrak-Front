import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { registerRequest } from '../../api/auth';
import './Register.css';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      registered: false
    };
    this.handleRegister = this.handleRegister.bind(this);
  }

  handleRegister(e) {
    e.preventDefault();
    registerRequest(e, this);
  }

  render() {
    if(this.state.registered === false)
      return (
        <div id='register-wrapper'>
          <form onSubmit={this.handleRegister}>
            ID <input type='text' name='username'/><br/>
            PW <input type='password' name='password'/><br/>
            nickname <input type='text' name='nickname'/><br/>
            email <input type='text' name='email'/><br/>
            <input type='submit' value='Register'/>
          </form>
        </div>
      );
    else
      return (
        <div id='register-wrapper'>
          Register successful!<br/>
          <Link to='/'>Home</Link>
        </div>
      );
  }
}

export default Register;