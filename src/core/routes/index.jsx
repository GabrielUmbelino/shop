import React from 'react';
import { ProductRoutes } from '../../containers/product';
import { CheckoutRoutes } from '../../containers/checkout';
import { BrowserRouter } from 'react-router-dom';
export const AppRoutes = () => {
  return (
    <BrowserRouter>
          <ProductRoutes />
          <CheckoutRoutes />
    </BrowserRouter>
  );
};
