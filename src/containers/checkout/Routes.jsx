import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { CartContainer } from './cart/CartContainer';
import { DeliveryContainer } from './delivery/DeliveryContainer';
import { PaymentContainer } from './payment/PaymentContainer';
import { PrivateRoute } from '../../core/routes/PrivateRoute';

export const CheckoutRoutes = () => {
  return (
    <Switch>
      <Route path='/cart' component={CartContainer} exact />
      <PrivateRoute path='/delivery' component={DeliveryContainer} exact />
      <PrivateRoute path='/payment' component={PaymentContainer} exact />
    </Switch>
  );
};
