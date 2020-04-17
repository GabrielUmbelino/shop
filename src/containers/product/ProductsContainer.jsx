import React from 'react';
import Row from 'react-bootstrap/row';
import Container from 'react-bootstrap/container';
import { ProductContext } from './context';
import { ProductList } from '../../components/products/ProductList';
export class ProductsContainer extends React.Component {
  static contextType = ProductContext;
  state = {
    loading: false,
  };

  render() {
    return (
      <Container>
        <Row>{<ProductList products={this.context.products} />}</Row>
      </Container>
    );
  }
}
