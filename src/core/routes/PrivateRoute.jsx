import React from 'react';
import { Redirect, Route } from 'react-router-dom';
const auth = {
  isAuthenticated: false,
};

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      auth.isAuthenticated ? <Component {...props} /> : <Redirect to='/login' />
    }
  />
);
