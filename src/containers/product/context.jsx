import React from 'react';

export const ProductContext = React.createContext({});
export class ProductContextProvider extends React.Component {
  state = {
    products: [],
    product: null,
    error: false,
    setProducts: (products) => this.setState({ products }),
    getProduct: (id) => this.products.find((product) => product.id === id),
  };

  render() {
    console.log('context');
    return <ProductContext.Provider value={this.state}>{this.props.children}</ProductContext.Provider>;
  }
}
