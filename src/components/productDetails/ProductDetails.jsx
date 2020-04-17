import React, { useContext } from 'react';
import Col from 'react-bootstrap/col';
import Row from 'react-bootstrap/row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CartContext } from '../../core/context/CartContext';
import { useHistory } from 'react-router-dom';

export const ProductDetails = (props) => {
  const { product } = props;
  const cartContext = useContext(CartContext);
  const history = useHistory();

  const onAddCart = () => {
    cartContext.addProductToCart(product);
    history.push('/cart');
  };

  if (!product) {
    return <div>carregando produto...</div>;
  }

  return (
    <Row>
      <Col xs={12} sm={6} md={5}>
        <Card style={{ maxWidth: '100%', width: '100%' }}>
          <Card.Img variant='top' src={props.product.image} />
        </Card>
      </Col>
      <Col xs={12} sm={6} md={7}>
        <Card style={{ maxWidth: '100%', width: '100%' }}>
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Subtitle>{product.price}</Card.Subtitle>
            <Card.Text>{product.description}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Row>
              <Col>
                <Button variant='success' onClick={onAddCart}>
                  Buy
                </Button>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
      </Col>
    </Row>
  );
};
