import React from 'react';
import Row from 'react-bootstrap/row';
import Container from 'react-bootstrap/container';
import { ProductContext } from './context';
import { ProductList } from '../../components/ProductList';
export class Products extends React.Component {
  static contextType = ProductContext;
  state = {
    loading: false,
  };

  componentDidMount() {
    const products = [
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
    ];

    setTimeout(() => {
      this.context.setProducts(products);
    }, 500);
  }

  onOrder = (id) => {
    console.log(id, this.state);
    // this.history.pushState(id, 'Product Details', 'product');
  };

  render() {
    return (
      <Container>
        <Row>{<ProductList products={this.context.products} onOrder={this.onOrder} />}</Row>
      </Container>
    );
  }
}
