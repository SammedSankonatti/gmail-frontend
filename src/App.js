import React from 'react';
import './App.css';

import Header from './Header/Header'
import Sidebar from './Sidebar';

import {BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import Mail from './Mail';
import EmailList from './EmailList';

function App() {
  return (
    <Router>
      <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
        <Switch>
          <Route path="/mail">
            <Mail />
          </Route>
          <Route path="/">
            <EmailList />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
