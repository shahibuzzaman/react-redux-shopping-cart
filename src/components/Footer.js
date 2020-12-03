import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className='m-0'>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            Copyright &copy; React Shopping Cart
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
