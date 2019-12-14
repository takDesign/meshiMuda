import React from "react";
import { HashRouter as Router, Link, Route, Switch } from "react-router-dom";
import Auth from './Auth';

export default class Footer extends React.Component {
  render() {
    return (
      <Router>
        <Auth>
          <Switch>
            <footer>
              <div className="text-center py-3">
                <Link to='/'><i className="material-icons">perm_identity</i></Link>
                <Link to='/list'><i className="material-icons">room</i></Link>
                <Link to='/dashboard'><i className="material-icons">home</i></Link>
                <Link to='/cart'><i className="material-icons">restaurant</i></Link>
              </div>
            </footer>
          </Switch>
        </Auth>
      </Router>
    );
  }
}