import React from 'react';
import { ProductContext } from './context';
export class ProductDetails extends React.Component {
  static contextType = ProductContext;

  state = {
    product: {
      name: '',
      price: '',
    },
    loading: false,
    error: null,
  };

  componentDidMount() {
    if (!this.props.match.params.id) {
      return this.history.pushState('/');
    }

    const product = this.context.getProduct(this.props.match.params.id);
    if (!product) {
      return this.history.pushState('/');
    }

    this.setState({ product });
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>{this.state.product.name}</div>
      </div>
    );
  }
}
