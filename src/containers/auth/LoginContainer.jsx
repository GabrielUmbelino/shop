import React from 'react';
import { connect } from 'react-redux';
import { Container, Form, Button } from 'react-bootstrap';
import { login } from '../../core/store/action';
class LoginContainerComponent extends React.Component {
  state = {
    user: {
      email: '',
      password: '',
    },
  };

  onLogin = (e) => {
    const { email, password } = this.state.user;

    const token = email && password && '19f077ec460a32a71f478012c78e8e91*';

    this.props.login(token);
    e.preventDefault();
    console.log(this.props);
  };

  onChangeEmail = (e) => {
    const email = e.target.value;
    this.setState((prevState) => ({
      ...prevState,
      user: { ...prevState.user, email },
    }));
  };

  onChangePassword = (e) => {
    const password = e.target.value;
    this.setState((prevState) => ({
      ...prevState,
      user: { ...prevState.user, password },
    }));
  };

  render() {
    return (
      <Container>
        <p>{this.props.token}</p>
        <p>{this.props.isAuth}</p>
        <p>{this.state.user.email}</p>
        <Form onSubmit={this.onLogin}>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              value={this.state.email}
              onInput={(e) => this.onChangeEmail(e)}
            />
          </Form.Group>
          <Form.Group controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Password'
              value={this.state.password}
              onInput={(e) => this.onChangePassword(e)}
            />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Login
          </Button>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = ({ isAuth, token }) => ({
  isAuth,
  token,
});

const mapDispatchToProps = (dispatch) => ({
  login: (token) => dispatch(login(token)),
});

export const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainerComponent);
