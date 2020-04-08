import React from 'react';
import { ProductList } from './components/ProductList';

export class Products extends React.Component {
  state = {
    products: [],
    loading: false,
    error: null,
  };

  componentDidMount() {
    const products = [
      {
        name: 'Ovo de Pascoa P',
        price: 'R$ 20,00',
      },
      {
        name: 'Ovo de Pascoa M',
        price: 'R$ 40,00',
      },
      {
        name: 'Ovo de Pascoa G',
        price: 'R$ 60,00',
      },
    ];
    this.setState({ products });
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <ProductList products={this.products} />
        </div>
      </div>
    );
  }
}
