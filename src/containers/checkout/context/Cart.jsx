import React from 'react';
import { CartContext as GlobalCartContext } from '../../../core/context/CartContext';
export const CartContext = React.createContext({});
export const CartQuantityContext = React.createContext({});
const PRODUCT_DELIVERY_COST = 10;

export class CartContextProvider extends React.Component {
  static contextType = GlobalCartContext;

  state = {
    products: [],
    deliveryCost: 0,
    calculateFrete(zipcode) {

      if (zipcode.length !== 8) {
        return;
      }

      const { products } = this.state;
      const deliveryCost = products.reducer((sum, product) => {
        return product.quantity * PRODUCT_DELIVERY_COST;
      }, 0);

      this.setState({ deliveryCost });

      return deliveryCost;
    },
    addProductToCart: (product) => {
      let { products } = this.state;
      products.push(product);

      this.setState({
        products,
      });

      this.context.updateProducts(products);
    },
    deleteProductFromCart: (product) => {
      const products = this.state.products.filter((p) => product.id !== p.id);
      this.setState({ products });
      this.context.updateProducts([...products]);
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
