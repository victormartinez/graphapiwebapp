import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import './reset.css';
import HomePage from './pages/HomePage';
import NodePage from './pages/NodePage';
import FriendsPage from './pages/FriendsPage';
import FriendsOfFriendsPage from './pages/FriendsOfFriendsPage';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/nodes" component={NodePage} />
        <Route exact path="/friends" component={FriendsPage} />
        <Route exact path="/friends-of-friends" component={FriendsOfFriendsPage} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
