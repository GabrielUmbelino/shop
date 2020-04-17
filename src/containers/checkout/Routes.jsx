import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { CartContainer } from './cart/CartContainer';
import { DeliveryContainer } from './delivery/DeliveryContainer';
import { PaymentContainer } from './payment/PaymentContainer';
import { CartContextProvider } from './context/Cart';

export const CheckoutRoutes = () => {
  return (
    <Switch>
      <CartContextProvider>
          <Route path='/cart' component={CartContainer} exact />
          <Route path='/delivery' component={DeliveryContainer} exact />
          <Route path='/payment' component={PaymentContainer} exact />
      </CartContextProvider>
    </Switch>
  );
};
