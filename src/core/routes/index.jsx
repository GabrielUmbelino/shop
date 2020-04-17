import React from 'react';
import { ProductRoutes } from '../../containers/product';
import { CheckoutRoutes } from '../../containers/checkout';
import { AuthRoutes } from '../../containers/auth';
import { BrowserRouter } from 'react-router-dom';
export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <ProductRoutes />
      <CheckoutRoutes />
      <AuthRoutes />
    </BrowserRouter>
  );
};
