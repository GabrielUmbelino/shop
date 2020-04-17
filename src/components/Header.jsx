import React, { useContext } from 'react';
import { Row, Col } from 'react-bootstrap';
import { CartContext } from '../core/context/CartContext';
export const Header = () => {
  const cart = useContext(CartContext);
  return (
    <header className='App-header'>
      <Row>
        <Col sm={6} md={8} xl={10}>
          <h2>Królik</h2>
        </Col>
        <Col sm={6} md={4} xl={2}>
          <p>Cart: {cart.products.length} products</p>
        </Col>
      </Row>
    </header>
  );
};
