import React from 'react';
import { Products } from './Products';
import { ProductDetails } from './ProductDetails';
import { Route } from 'react-router-dom';
import { ProductContextProvider } from './context';
export const ProductRoutes = () => {
  return (
    <ProductContextProvider>
      <Route path='/' component={Products} exact />
      <Route path='/product:id' component={ProductDetails} exact />
    </ProductContextProvider>
  );
};
