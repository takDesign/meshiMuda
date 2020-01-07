import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import Dashboard from "./Dashboard";
import List from "./List";
import Detail from "./Detail";
import { HashRouter as Router, Link, Route, Switch } from "react-router-dom";

const login = () => <Login />
const signUp = () => <SignUp />
const dashboard = () => <Dashboard />
const list = () => <List />
const detail = () => <Detail />
const page404 = () => <div><h1>404</h1>Page doesn't exist</div>  //<= If a requested page doesn't exist

export default class Body extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/signup' exact component={signUp} />
          <Route path='/login' exact component={login} />
          <Route path='/dashboard' exact component={dashboard} />
          <Route path='/list' exact component={list} />
          <Route path='/detail' exact component={detail} />
          <Route exact component={page404} />
        </Switch>
      </Router>);
  }
}