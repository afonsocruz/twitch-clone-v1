import React from "react";

import Home from './pages/Home/';
import Profile from './pages/Profile';
import Streaming from './pages/Streaming';
import Search from './pages/Search';

import Navbar from './components/Navbar/';
import SnackbarComponent from './components/Snackbar';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function Routes() {
  return (
    <Router>
        <SnackbarComponent/>
        <Navbar/>
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/streaming/:uid" >
                <Streaming/>
            </Route>
            <Route path="/profile" >
                <Profile />
            </Route>
            <Route path="/search">
                <Search />
            </Route>
        </Switch>
    </Router>
  );
}