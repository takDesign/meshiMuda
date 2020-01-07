import React from 'react';
import { Redirect } from 'react-router-dom';
import User from './User';

const Auth = props =>
  User.isLoggedIn() ? props.children : <Redirect to={'/signup'} />;

export default Auth;