import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import products from '../products';

const Product = ({ product }) => {
  return (
    <Card className='my-3 pt-1 pl-1 pr-1 rounded'>
      <Card.Img src={product.image} variant='top' className='py-2 px-2' />
      <Card.Body>
        <Card.Title as='div'>
          <strong>{product.name}</strong>
        </Card.Title>
        <Card.Text as='div'>
          <div className='my-3'>{product.rating} reviews</div>
        </Card.Text>

        <Card.Text as='h3'>
          <strong>৳{product.price}</strong>
        </Card.Text>

        <Button variant='primary' className='btn btn-primary btn-sm btn-block'>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
