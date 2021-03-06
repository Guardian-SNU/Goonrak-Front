import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to='/login'> Click to login </Link>
      </div>
    );
  }
}

export default Home;