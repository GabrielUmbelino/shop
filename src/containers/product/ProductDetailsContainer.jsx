import React from 'react';
import { ProductContext } from './context';
import { ProductDetails } from '../../components/productDetails/ProductDetails';
export class ProductDetailsContainer extends React.Component {
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
      return this.props.history.push('/');
    }

    const product = this.context.getProduct(this.props.match.params.id);

    if (!product) {
      return this.props.history.push('/');
    }

    this.setState({ product });
  }

  render() {
    return (
      <div className='container'>
        <ProductDetails product={this.state.product}></ProductDetails>
      </div>
    );
  }
}
