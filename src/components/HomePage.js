import React from 'react';
import { Row, Col } from 'react-bootstrap';
import products from '../products';
import Product from './Product';

const HomePage = () => {
  return (
    <>
      <Row>
        <Col sm={3}>
          <div className='sidebar '>
            <h3>
              <strong>Product Filter</strong>
            </h3>
            <div>Sort by</div>
            <div>Price range</div>
            <div>Size</div>
          </div>
        </Col>
        <Col sm={9}>
          <div>
            <h3>Latest Products</h3>
            <Row>
              {products.map((product) => (
                <Col sm={12} md={6} xl={4} lg={4}>
                  <Product product={product} />
                </Col>
              ))}
            </Row>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default HomePage;
