import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import './ProductItem.css';
import { useHistory } from 'react-router-dom';
export const ProductItem = (props) => {
  const history = useHistory();
  const onOrder = () => {
    history.push(`/product/${props.product.id}`,);
  };

  return (
    <Col sm='12' md='6' lg='4'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src={props.product.image} />
        <Card.Body>
          <Card.Title>{props.product.name}</Card.Title>
          <Card.Text>{props.product.price}</Card.Text>
          <Button variant='primary' onClick={onOrder}>
            Order
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};
