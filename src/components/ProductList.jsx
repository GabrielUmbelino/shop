import React from 'react';
import { ProductItem } from './ProductItem';
export const ProductList = (products) => {
  return products.map((product) => <ProductItem product={product} />);
}
