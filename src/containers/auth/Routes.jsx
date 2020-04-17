import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { LoginContainer } from './LoginContainer';
export const AuthRoutes = () => (
  <Switch>
    <Route path='/login' component={LoginContainer} />
  </Switch>
);
