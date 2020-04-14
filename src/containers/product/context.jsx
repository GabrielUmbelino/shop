import React from 'react';

export const ProductContext = React.createContext({});
export class ProductContextProvider extends React.Component {
  state = {
    products: [
      {
        id: '1',
        name: 'Ovo de Pascoa P',
        price: 'R$ 20,00',
        image:
          'https://harald.com.br/wp-content/uploads/2018/03/Ovo_Tiramissu_Melken_Confeiteiro_Lang_dez_2017_1000x1000.jpg',
      },
      {
        id: '2',
        name: 'Ovo de Pascoa M',
        price: 'R$ 40,00',
        image:
          'https://harald.com.br/wp-content/uploads/2018/03/Ovo_Tiramissu_Melken_Confeiteiro_Lang_dez_2017_1000x1000.jpg',
      },
      {
        id: '3',
        name: 'Ovo de Pascoa G',
        price: 'R$ 60,00',
        image:
          'https://harald.com.br/wp-content/uploads/2018/03/Ovo_Tiramissu_Melken_Confeiteiro_Lang_dez_2017_1000x1000.jpg',
      },
    ],
    product: null,
    error: false,
    setProducts: (products) => this.setState({ products }),
    getProduct: (id) =>
      this.state.products.find((product) => product.id === id),
  };

  render() {
    return (
      <ProductContext.Provider value={this.state}>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
