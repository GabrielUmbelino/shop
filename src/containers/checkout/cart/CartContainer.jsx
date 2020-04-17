import React from 'react';
import {
  Container,
  Row,
  Col,
  Table,
  Card,
  Button,
  Figure,
} from 'react-bootstrap';
import { CartContext } from '../../../core/context/CartContext';

export class CartContainer extends React.Component {
  static contextType = CartContext;

  onDeliveryAndPayment = () => {
    this.props.history.push('/delivery');

  };

  onContinueShopping = () => {
    this.props.history.push('/payment');
  };

  render() {
    return (
      <Container>
        <Row>
          <Col xs={12} md={6} lg={7} xl={8}>
            <Table striped bordered hover>
              <tbody>
                {this.context.products.map(({ name, quantity, image }, i) => {
                  console.log(name, quantity, image);
                  return (
                    <tr key={i}>
                      <td>{name}</td>
                      <td>
                        <Figure>
                          <Figure.Image
                            width={100}
                            height={110}
                            rounded
                            src={image}
                          />
                        </Figure>
                      </td>
                      <td>{quantity}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
          <Col xs={12} md={6} lg={5} xl={4}>
            <Card style={{ maxWidth: '100%', width: '100%' }}>
              <Card.Body>
                <Card.Title>price</Card.Title>
              </Card.Body>
              <Card.Footer>
                <Row>
                  <Col>
                    <Button
                      variant='primary'
                      onClick={this.onDeliveryAndPayment}
                    >
                      Delivery and payment
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button variant='success' onClick={this.onContinueShopping}>
                      Continue Shopping
                    </Button>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
