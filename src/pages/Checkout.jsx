import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import CommonSection from '../components/UI/common-section/CommonSection';
import Helmet from '../components/Helmet/Helmet';

import '../styles/checkout.css';

const Checkout = () => {
  const [enterName, setEnterName] = useState('');
  const [enterEmail, setEnterEmail] = useState('');
  const [enterNumber, setEnterNumber] = useState('');
  const [enterCountry, setEnterCountry] = useState('');
  const [enterCity, setEnterCity] = useState('');
  const [postalCode, setPostalCode] = useState('');

  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingCost = 50;

  const totalAmount = cartTotalAmount + Number(shippingCost);

  const shippingInfo = [];

  const submitHandler = (e) => {
    e.preventDefault();
    const userShippingAddress = {
      name: enterName,
      email: enterEmail,
      phone: enterNumber,
      country: enterCountry,
      city: enterCity,
      postalCode: postalCode,
    };

    shippingInfo.push(userShippingAddress);
    console.log(shippingInfo);
  };
  return (
    <Helmet title="checkout">
      <CommonSection title="checkout" />
      <section>
        <Container>
          <Row className="mt-5">
            <Col lg="8" md="6">
              <h6 className="mb-4">Shipping Address</h6>
              <form className="checkout__form" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    required
                    onChange={(e) => setEnterName(e.target.value)}
                  />
                </div>

                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Enter Your Email"
                    required
                    onChange={(e) => setEnterEmail(e.target.value)}
                  />
                </div>

                <div className="form__group">
                  <input
                    type="number"
                    placeholder="Phone Number"
                    required
                    onChange={(e) => setEnterNumber(e.target.value)}
                  />
                </div>

                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Country"
                    required
                    onChange={(e) => setEnterCountry(e.target.value)}
                  />
                </div>

                <div className="form__group">
                  <input
                    type="text"
                    placeholder="City"
                    required
                    onChange={(e) => setEnterCity(e.target.value)}
                  />
                </div>

                <div className="form__group">
                  <input
                    type="Number"
                    placeholder="Postal Code"
                    required
                    onChange={(e) => setPostalCode(e.target.value)}
                  />
                </div>

                <button className="addToCart__btn">Payment</button>
              </form>
            </Col>

            <Col lg="4" md="6">
              <div className="checkout__bill">
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Subtotal: <span>Rp.{cartTotalAmount}</span>
                </h6>
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Shipping: <span>Rp.{shippingCost}</span>
                </h6>
                <div className="checkout__total ">
                  <h5 className="d-flex align-items-center justify-content-between">
                    Total: <span>Rp.{totalAmount}</span>
                  </h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
