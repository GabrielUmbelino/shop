import React from 'react';
import Col from 'react-bootstrap/col';
import Row from 'react-bootstrap/row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const ProductDetails = (props) => {
  const { product } = props;

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
            <Button variant='primary'>Calculate Frete</Button>
            <Button variant='success'>Add To Cart</Button>
          </Card.Footer>
        </Card>
      </Col>
    </Row>
  );
};
