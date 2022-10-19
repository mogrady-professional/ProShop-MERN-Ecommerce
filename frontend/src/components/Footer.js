import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            Copyright &copy; ProShop. Developed by{' '}
            <a href="https://www.michaelogrady.com">Michael O'Grady</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
