import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import logo from '../../assets/images/logo1.png';
import '../../styles/footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className="footer__logo justify-content-center">
              <img src={logo} alt="logo" />

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
                in.
              </p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Delivery Item</h5>
            <ListGroup className="delivery__time-list">
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Sunday - Thursday</span>
                <p>10:00am - 11:00pm</p>
                <span>Friday - Saturday</span>
                <p>OFF Day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Contact</h5>
            <ListGroup className="delivery__time-list">
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <p>Location: Bandar Lampung</p>
                <p>Phone: 08572637298</p>
                <p>Email: devices@gmail.com</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Newsletter</h5>
            <p>Subscribe our newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder="Enter your email" />
              <span>
                <i className="ri-send-plane-line"></i>
              </span>
            </div>
          </Col>
        </Row>

        <Row className="footer__b">
          <Col lg="6" md="6" className="mt-3">
            <p className="copyright__text">
              Copyright - 2022, website made by Sanjaya Ilham. All Rights
              Reserved.
            </p>
          </Col>

          <Col lg="6" md="6" className="mt-3">
            <div
              className="social__links d-flex align-items-center
                        gap-2 justify-content-end"
            >
              <span>
                <Link to="">
                  <i id="fb" className="ri-facebook-line"></i>
                </Link>
              </span>

              <span>
                <Link to="">
                  <i id="github" className="ri-github-line"></i>
                </Link>
              </span>

              <span>
                <Link to="">
                  <i id="ig" className="ri-instagram-line"></i>
                </Link>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
