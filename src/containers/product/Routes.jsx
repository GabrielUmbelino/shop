import React from 'react';
import { ProductsContainer } from './ProductsContainer';
import { ProductDetailsContainer } from './ProductDetailsContainer';
import { Route } from 'react-router-dom';
import { ProductContextProvider } from './context';
export const ProductRoutes = () => {
  return (
    <ProductContextProvider>
      <Route path='/' component={ProductsContainer} exact />
      <Route path='/product/:id' component={ProductDetailsContainer} exact />
    </ProductContextProvider>
  );
};
