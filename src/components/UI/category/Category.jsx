import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import categoryImg02 from '../../../assets/images/device2.png';

import categoryImg04 from '../../../assets/images/device4.png';

import '../../../styles/category.css';

const categoryData = [
  {
    display: 'Tablet',
    imgUrl: categoryImg02,
  },

  {
    display: 'Smartphone',
    imgUrl: categoryImg04,
  },
];

const Category = () => {
  return (
    <Container>
      <Row>
        {categoryData.map((item, index) => (
          <Col lg="6" md="6" className="mb-4" key={index}>
            <div className="category__item d-flex align-item-center gap-3">
              <div className="category__img">
                <img src={item.imgUrl} alt="category__item" />
              </div>
              <h6>{item.display}</h6>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Category;
