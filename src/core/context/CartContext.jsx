import React from 'react';

export const CartContext = React.createContext({});
const PRODUCT_DELIVERY_COST = 10;
export class CartContextProvider extends React.Component {
  state = {
    products: [
      {
        id: '1',
        name: 'Ovo de Pascoa P',
        price: 'R$ 20,00',
        image:
          'https://harald.com.br/wp-content/uploads/2018/03/Ovo_Tiramissu_Melken_Confeiteiro_Lang_dez_2017_1000x1000.jpg',
          quantity: 1
      },
      {
        id: '1',
        name: 'Ovo de Pascoa P',
        price: 'R$ 20,00',
        image:
          'https://harald.com.br/wp-content/uploads/2018/03/Ovo_Tiramissu_Melken_Confeiteiro_Lang_dez_2017_1000x1000.jpg',
          quantity: 1
      },
    ],
    deliveryCost: 0,
    addProductToCart: (product) => {
      let { products } = this.state;
      products.push(product);

      this.setState({
        products,
      });
    },
    deleteProductFromCart: (product) => {
      const products = this.state.products.filter((p) => product.id !== p.id);
      this.setState({ products });
    },
    calculatedeliveryCost(zipcode) {
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
  };

  render() {
    return (
      <CartContext.Provider value={this.state}>
        {this.props.children}
      </CartContext.Provider>
    );
  }
}
