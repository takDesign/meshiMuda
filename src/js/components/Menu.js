import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

// component for each page
const login = () => <div><h1>Login</h1>login page</div>
const list = () => <div><h1>List</h1>List Page</div>
const detail = () => <div><h1>Detail</h1>Detail Page</div>

const Menu = () => {

  return (
    <Router>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup"></div>
          <div className="navbar-nav">
            <Link to='/' className="nav-item nav-link">Login</Link>
            <Link to='/list' className="nav-item nav-link">List</Link>
            <Link to='/detail' className="nav-item nav-link">Detail</Link>
          </div>
        </nav>
      </header>

      <div>
        <div>
          <Route path='/' exact component={login} />
          <Route path='/list' exact component={list} />
          <Route path='/detail' exact component={detail} />
        </div>
      </div>
    </Router >)
}

export default Menu