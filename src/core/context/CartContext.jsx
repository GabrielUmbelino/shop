import React from 'react';

export const CartContext = React.createContext({});

export class CartContextProvider extends React.Component {
  state = {
    products: [],
    updateProducts: (products) => {
      this.setState({ products });
    },
  };

  render() {
    return (
      <CartContext.Provider value={this.state}>
        {this.props.children}
      </CartContext.Provider>
    );
  }
}
