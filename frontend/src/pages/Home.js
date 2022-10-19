import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../features/products/productSlice';
import { Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import InputGroup from 'react-bootstrap/InputGroup';

import Product from '../components/Product';
import Loader from '../components/Loader';

// component level state
// global or application level state

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.product);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const onSearch = (e) => {
    console.log('searchTerm:', searchTerm);
    e.preventDefault();
    dispatch(getProducts(searchTerm));
  };

  return (
    <>
      <h1>Latest Products</h1>
      <Form onSubmit={onSearch}>
        <InputGroup>
          <Form.Control
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button type="submit">Search</Button>
          <Button
            type="button"
            onClick={() => {
              setSearchTerm('');
              dispatch(getProducts());
            }}
          >
            Reset
          </Button>
        </InputGroup>
      </Form>
      {loading ? (
        <Loader />
      ) : error ? (
        <Alert variant="danger">{error}</Alert>
      ) : (
        <Row className="text-center">
          {products?.map((product) => (
            <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
              <Product product={product} />
            </Col>
          ))}
          {products?.length === 0 && (
            <Alert variant="info">No products found</Alert>
          )}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
