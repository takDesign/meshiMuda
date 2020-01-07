import React from "react";
import { HashRouter as Router, Link, Route, Switch, Redirect } from "react-router-dom";

import Auth from './Auth';

const Menu = () => {
  return (
    <Router>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to='/' className="navbar-brand" href="#">Meshi Muda</Link>
          {/* link below is just for testing */}
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Switch>
                <Link to='/signup' className="nav-item nav-link">Sign Up</Link>
                <Link to='/login' className="nav-item nav-link">Login</Link>
                <Auth>
                  <Switch>
                    <Link to='/list' className="nav-item nav-link">List</Link>
                    <Link to='/detail' className="nav-item nav-link">Detail</Link>
                    <Redirect from="/#/" to="/signup" />
                  </Switch>
                </Auth>
              </Switch>


            </div>
          </div>
        </nav>
      </header>
    </Router >)
}

export default Menu