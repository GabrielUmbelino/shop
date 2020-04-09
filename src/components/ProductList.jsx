import React from 'react';
import { ProductItem } from './ProductItem';

export const ProductList = (props) => {
  if (!props.products || !props.products.length) {
    return null;
  }
  return props.products.map((product) => <ProductItem product={product} key={product.id} />);
};
