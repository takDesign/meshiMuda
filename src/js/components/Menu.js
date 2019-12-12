import React from "react";
import Login from "./Login";
import List from "./List";
import Detail from "./Detail";

import { HashRouter as Router, Link, Route, Switch } from "react-router-dom";

// component for each page
const login = () => <Login />
const list = () => <List />
const detail = () => <Detail />
const page404 = () => <div><h1>404</h1>Page doesn't exist</div>  //<= If a requested page doesn't exist

const Menu = () => {
  return (
    <Router>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to='/' className="nav-item nav-link">Login</Link>
              <Link to='/list' className="nav-item nav-link">List</Link>
              <Link to='/detail' className="nav-item nav-link">Detail</Link>
            </div>
          </div>
        </nav>
      </header>

      <div>
        <div>
          <Switch>
            <Route path='/' exact component={login} />
            <Route path='/list' exact component={list} />
            <Route path='/detail' exact component={detail} />
            <Route exact component={page404} />
          </Switch>
        </div>
      </div>
    </Router >)
}

export default Menu