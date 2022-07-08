import React, { useState, useEffect } from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';

import Helmet from '../components/Helmet/Helmet';
import Category from '../components/UI/category/Category';
import ProductCard from '../components/UI/product-card/ProductCard';
import TestimonialSlider from '../components/UI/slider/TestimonialSlider';
import products from '../assets/fake-data/products';

import '../styles/hero-section.css';
import '../styles/home.css';
import 'react-toastify/dist/ReactToastify.css';

import heroImg from '../assets/images/fotoHome1.jpg';
import featureImg01 from '../assets/images/cat1.png';
import featureImg02 from '../assets/images/cat2.png';
import devImg from '../assets/images/devImg.jpg';
import networkImg from '../assets/images/networkImg.jpg';

import { ToastContainer } from 'react-toastify';

const featureData = [
  {
    title: 'Service 1',
    imgUrl: featureImg01,
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, facilis!',
  },
  {
    title: 'Service 2',
    imgUrl: featureImg01,
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, facilis!',
  },
  {
    title: 'Service 3',
    imgUrl: featureImg01,
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, facilis!',
  },
];

const Home = () => {
  const [category, setCategory] = useState('ALL');
  const [allProducts, setAllProducts] = useState(products);

  const [limitedSmartphone, setLimitedSmartphone] = useState([]);

  //Filter slice(0,4) for limited smartphone
  useEffect(() => {
    const filteredSmartphone = products.filter(
      (item) => item.category === 'Smartphone'
    );
    const sliceSmartphone = filteredSmartphone.slice(0, 4);
    setLimitedSmartphone(sliceSmartphone);
  }, []);

  //filter category
  useEffect(() => {
    if (category === 'ALL') {
      setAllProducts(products);
    }

    if (category === 'SMARTPHONE') {
      const filteredProducts = products.filter(
        (item) => item.category === 'Smartphone'
      );
      setAllProducts(filteredProducts);
    }

    if (category === 'TABLET') {
      const filteredProducts = products.filter(
        (item) => item.category === 'Tablet'
      );
      setAllProducts(filteredProducts);
    }
  }, [category]);

  return (
    <Helmet title="Home">
      <Container fluid>
        <section>
          <Container>
            <Row>
              <Col lg="6" md="6">
                <div className="hero__content">
                  <h5 className="mb-3">Lorem ipsum dolor sit amet</h5>
                  <h1 className="mb-4 hero__title">
                    <span>Lorem ipsum</span> Lorem dolor Lorem.
                    <span> ipsum dolor.</span>
                  </h1>

                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Alias, ea praesentium. Perspiciatis animi id adipisci.
                  </p>

                  <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                    <button className="order__btn d-flex align-items-center justify-content-between">
                      <Link to="/cart">Buy Now</Link>
                      <i className="ri-arrow-right-s-line"></i>
                    </button>

                    <button className="all__devices-btn">
                      <Link to="/devices">See all Devices</Link>
                    </button>
                  </div>

                  <div className="hero__service d-flex align-items-center gap-5 mt-5">
                    <p className="d-flex align-items-center gap-2">
                      <span className="shipping__icon">
                        <i className="ri-car-line"></i>
                      </span>{' '}
                      Lorem ipsum dolor sit.
                    </p>

                    <p className="d-flex align-items-center gap-2">
                      <span className="shipping__icon">
                        <i className="ri-shield-check-line"></i>
                      </span>{' '}
                      Lorem ipsum dolor sit.
                    </p>
                  </div>
                </div>
              </Col>

              <Col lg="6" md="6">
                <div className="hero__img">
                  <img src={heroImg} alt="hero-img" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="pt-0 justify-content-between mb-5">
          <Category />
        </section>

        <section>
          <Container>
            <Row>
              <Col lg="12" className="text-center mt-20">
                <h5 className="feature__subtitle">Lorem, ipsum dolor.</h5>
                <h2 className="feature__title">Lorem ipsum dolor sit amet.</h2>

                <p className="mb-1 mt-4 feature__text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
                  nostrum?
                </p>
                <p className="feature__text">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aperiam, eligendi!
                </p>
              </Col>

              {featureData.map((item, index) => (
                <Col lg="4" md="6" sm="6" key={index} className="mt-3">
                  <div className="feature__item text-center px-5 py-3 mb-5">
                    <img
                      src={item.imgUrl}
                      alt="feature-img"
                      className="w-10 mb-3 p-3"
                    />
                    <h5 className="fw-bold mb-3">{item.title}</h5>
                    <p>{item.desc}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <section>
          <Container>
            <Row>
              <Col lg="12" className="text-center">
                <h2>Popular Devices</h2>
              </Col>

              <Col lg="12">
                <div className="device__category d-flex align -items-center justify-content-center gap-4">
                  <button
                    className={`all__btn ${
                      category === 'ALL' ? 'deviceBtnActive' : ''
                    }`}
                    onClick={() => setCategory('ALL')}
                  >
                    All
                  </button>

                  <button
                    className={`d-flex align-items-center gap-2 ${
                      category === 'SMARTPHONE' ? 'deviceBtnActive' : ''
                    }`}
                    onClick={() => setCategory('SMARTPHONE')}
                  >
                    <img src={featureImg01} alt="" className="w-20" />
                    Smartphone
                  </button>

                  <button
                    className={`d-flex align-items-center gap-2 ${
                      category === 'TABLET' ? 'deviceBtnActive' : ''
                    }`}
                    onClick={() => setCategory('TABLET')}
                  >
                    <img src={featureImg02} alt="" />
                    Tablet
                  </button>
                </div>
              </Col>

              {allProducts.map((item) => (
                <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-4">
                  <ProductCard item={item} />
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <section>
          <Container>
            <Row>
              <Col lg="6" md="6">
                <div className="why__img mt-5">
                  <img src={devImg} alt="why-device-shop" />
                </div>
              </Col>

              <Col lg="6" md="6">
                <div className="why__device-shop mt-5">
                  <h2 className="device__shop-title mb-4">
                    Why <span>Device Shop?</span>{' '}
                  </h2>
                  <p className="device__shop-desc">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Molestiae quam tenetur odit dolorum facilis fuga placeat
                    voluptas deserunt quod ducimus possimus aut ratione dicta,
                    doloribus consectetur modi quidem quis ea.
                  </p>

                  <ListGroup className="mt-4">
                    <ListGroupItem className="border-0 ps-0">
                      <p className="choose__us-title d-flex align-items-center gap-2">
                        <i className="ri-checkbox-circle-line"></i>
                        Lorem ipsum dolor sit amet.
                      </p>
                      <p className="choose__us-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aut, alias.
                      </p>
                    </ListGroupItem>

                    <ListGroupItem className="border-0 ps-0">
                      <p className="choose__us-title d-flex align-items-center gap-2">
                        <i className="ri-checkbox-circle-line"></i>
                        Lorem ipsum dolor sit amet.
                      </p>
                      <p className="choose__us-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aut, alias.
                      </p>
                    </ListGroupItem>

                    <ListGroupItem className="border-0 ps-0">
                      <p className="choose__us-title d-flex align-items-center gap-2">
                        <i className="ri-checkbox-circle-line"></i>
                        Order from any location{' '}
                      </p>
                      <p className="choose__us-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aut, alias.
                      </p>
                    </ListGroupItem>
                  </ListGroup>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="pt-0">
          <Container>
            <Row>
              <Col lg="12" className="text-center mt-5">
                <h2>Limited Smartphone</h2>
              </Col>

              {limitedSmartphone.map((item) => (
                <Col lg="3" md="4" sm="6" xs="6" className="mt-4" key={item.id}>
                  <ProductCard item={item} />
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <section>
          <Container>
            <Row>
              <Col lg="6" md="6">
                <div className="testimonial">
                  <h5 className="testimonial__subtitle mt-5 mb-4">
                    Testimonial
                  </h5>
                  <h2 className="testimonial__title mb-4">
                    What our <span>Customers</span> are saying{' '}
                  </h2>
                  <p className="testimonial__desc mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore assumenda ut cumque minima maxime veritatis
                    debitis a saepe, repellendus eaque?
                  </p>

                  <TestimonialSlider />
                </div>
              </Col>

              <Col lg="6" md="6">
                <img
                  src={networkImg}
                  alt="testimonial-img"
                  className="w-100 mt-5"
                />
              </Col>
            </Row>
          </Container>
        </section>

        <ToastContainer />
      </Container>
    </Helmet>
  );
};

export default Home;
