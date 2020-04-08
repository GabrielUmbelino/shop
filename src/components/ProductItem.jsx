import React from 'react';

export const ProductItem = (product) => {
  return (
    <div className='col-xs-12 col-sm-6 col-md-4'>
      <h3 className='heading'>{product.name}</h3>
      <p>{product.price}</p>
    </div>
  );
};
