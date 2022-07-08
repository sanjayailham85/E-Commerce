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
            <div className="footer__logo text-start">
              <img src={logo} alt="logo" />
              <h5>----</h5>
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
              </ListGroupItem>

              <ListGroupItem className="delivery__time-item border-0 ps-0">
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
              </ListGroupItem>

              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Phone: 08572637298</span>
              </ListGroupItem>

              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Email: devices@gmail.com</span>
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

        <Row>
          <Col lg="6" md="6" className="mt-5 ">
            <p className="copyright__text">
              Copyright - 2022, website made by Sanjaya Ilham. All Rights
              Reserved.
            </p>
          </Col>

          <Col lg="6" md="6" className="mt-5">
            <div
              className="social__links d-flex align-items-center
                        gap-4 justify-content-end"
            >
              <p className="m-0">Follow: </p>
              <span>
                <Link to="">
                  <i className="ri-facebook-line"></i>
                </Link>
              </span>

              <span>
                <Link to="https://github.com/sanjayailham85">
                  <i className="ri-github-line"></i>
                </Link>
              </span>

              <span>
                <Link to="">
                  <i className="ri-instagram-line"></i>
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
