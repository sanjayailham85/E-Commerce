import React from 'react';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/common-section/CommonSection';
import { Container, Row, Col } from 'reactstrap';
import contactImg from '../assets/images/contact.jpg';

const Contact = () => {
  return (
    <Helmet title="Contact">
      <CommonSection title="Contact" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="text-center">
                <img src={contactImg} alt="contact-img" className="w-100" />
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="contact__us text-center mt-5">
                <h2>Contact</h2>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
