import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import './main.css';

// <Header /> should go below <BrowserRouter>
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/login' component={Login}/>
    </Switch>
  </BrowserRouter>
  ,document.getElementById('root')
);
