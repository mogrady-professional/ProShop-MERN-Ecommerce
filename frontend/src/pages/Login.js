import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import Alert from 'react-bootstrap/Alert';
import { loginUser, resetError } from '../features/users/userSlice';
import FormContainer from '../components/FormContainer';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { loading, error, user } = useSelector((state) => state.user);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    dispatch(resetError());
    if (user) {
      if (searchParams.get('redirect') === 'shipping') {
        return navigate('/shipping');
      }
      navigate('/');
    }
  }, [navigate, user, dispatch, searchParams]);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
    setPassword('');
  };

  return (
    <FormContainer>
      <h1>Sign In</h1>
      {error !== '' && <Alert variant="danger">{error}</Alert>}
      {loading && <Loader />}
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="password" className="mt-4">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button
          type="submit"
          className="btn-block w-100 mt-4"
          variant="primary"
        >
          Sign In
        </Button>
      </Form>
      <Row className="py-3">
        <Col>
          New Customer? <Link to="/register">Register</Link>
        </Col>
      </Row>
    </FormContainer>
  );
}

export default Login;
