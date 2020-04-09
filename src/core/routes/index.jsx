import React from 'react';
import { ProductRoutes } from '../../containers/product';
import { BrowserRouter, Switch } from 'react-router-dom';
export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <ProductRoutes />;
      </Switch>
    </BrowserRouter>
  );
};
