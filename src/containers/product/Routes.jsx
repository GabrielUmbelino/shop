import React from 'react';
import { ProductsContainer } from './ProductsContainer';
import { ProductDetailsContainer } from './ProductDetailsContainer';
import { Route, Switch } from 'react-router-dom';
import { ProductContextProvider } from './context';

export const ProductRoutes = () => {
  return (
    <Switch>
      <ProductContextProvider>
        <Route path='/' component={ProductsContainer} exact />
        <Route path='/product/:id' component={ProductDetailsContainer} exact />
      </ ProductContextProvider>
    </Switch>
  );
};
