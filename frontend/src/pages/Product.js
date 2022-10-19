import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import {
  Row,
  Col,
  Image,
  Form,
  ListGroup,
  Card,
  Button,
} from 'react-bootstrap';
import Loader from '../components/Loader';
import Alert from 'react-bootstrap/Alert';
import Rating from '../components/Rating';
import {
  getProductById,
  resetCreateReview,
  createReview,
} from '../features/products/productSlice';
import { useDispatch, useSelector } from 'react-redux';

// import products from '../products';

const ProductScreen = () => {
  const { id } = useParams(); // useParams() is a hook that allows us to access the URL parameters
  //   const product = products.find((p) => p._id === id); // find() is a method that returns the value of the first element in an array that pass a test (provided as a function)
  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    product,
    loading,
    error,
    createReviewLoading,
    createReviewSuccess,
    createReviewError,
  } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProductById(id));
    dispatch(resetCreateReview());
  }, [dispatch, id, createReviewSuccess]);

  const addToCartHandler = () => {
    // console.log('addToCartHandler');
    navigate(`/cart/${id}?qty=${qty}`); // navigate() is a hook that allows us to navigate to a new URL
  };

  const onReviewSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createReview({
        id: product._id,
        details: {
          rating,
          comment,
        },
      })
    );
    setRating(1);
    setComment('');
  };

  return (
    <>
      <Button as={Link} to="/" className="btn-light mb-2">
        Go Back
      </Button>
      {loading ? (
        <Loader />
      ) : error ? (
        <Alert variant="danger">{error}</Alert>
      ) : (
        <>
          <Row>
            <Col md={6}>
              <Image src={product.image} alt={product.name} fluid />
            </Col>
            <Col md={3}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h2>{product.name}</h2>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating
                    value={product.rating}
                    text={`${product.numReviews} reviews`}
                  />
                </ListGroup.Item>
                <ListGroup.Item>Price: €{product.price}</ListGroup.Item>
                <ListGroup.Item>
                  Description: {product.description}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Row>
                      <Col>Price:</Col>
                      <Col>
                        <strong>€{product.price}</strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Status:</Col>
                      <Col>
                        {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  {/* Select quantity button */}
                  {product.countInStock > 0 && (
                    <ListGroup.Item>
                      <Row>
                        <Col className="my-3">Qty:</Col>
                        <Col xs={8} className="my-1">
                          <Form.Select
                            aria-label="Quantity Select"
                            value={qty}
                            className="text-center"
                            onChange={(e) => setQty(e.target.value)}
                          >
                            {[...Array(product.countInStock).keys()].map(
                              (x) => (
                                <option key={x} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
                          </Form.Select>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  )}

                  <ListGroup.Item>
                    <Button
                      className="w-100"
                      type="button"
                      disabled={product.countInStock === 0}
                      onClick={addToCartHandler}
                    >
                      Add To Cart
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col md={6}>
              <h2>Reviews</h2>
              <ListGroup variant="flush">
                {product.reviews?.length === 0 ? (
                  <Alert variant="info text-center">
                    No reviews yet for this product
                  </Alert>
                ) : (
                  product.reviews?.map((review) => (
                    <ListGroup.Item key={review._id}>
                      <strong>{review.name}</strong>
                      <Rating value={review.rating} />
                      <p>{review.createdAt.slice(0, 10)}</p>
                      <p>{review.comment}</p>
                    </ListGroup.Item>
                  ))
                )}
                <ListGroup.Item className="pt-4">
                  <h4>Write a review</h4>
                  {createReviewLoading && <Loader />}
                  {createReviewError && (
                    <Alert variant="danger">{createReviewError}</Alert>
                  )}
                  <Form onSubmit={onReviewSubmit}>
                    <Form.Group controlId="rating">
                      <Form.Label>Rating</Form.Label>
                      <Form.Select
                        aria-label="Rating Select"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                      >
                        <option value="">Select...</option>
                        <option value="1">1 - Poor</option>
                        <option value="2">2 - Fair</option>
                        <option value="3">3 - Good</option>
                        <option value="4">4 - Very Good</option>
                        <option value="5">5 - Excellent</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group controlId="comment" className="pt-4 pb-4">
                      <Form.Label>Review</Form.Label>
                      <Form.Control
                        as="textarea"
                        row="5"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                      ></Form.Control>
                    </Form.Group>
                    <Button
                      variant="primary"
                      size="md"
                      type="submit"
                      className="w-100"
                    >
                      Submit Review
                    </Button>
                  </Form>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default ProductScreen;
