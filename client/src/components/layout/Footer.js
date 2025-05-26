import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Online Crime Reporting</h5>
            <p>Report crimes safely and securely online.</p>
          </Col>

          <Col md={4}>
            <h6>Quick Links</h6>
            <ul className="list-unstyled">
              <li><Link to="/report" className="text-light text-decoration-none">Report a Crime</Link></li>
              <li><Link to="/track" className="text-light text-decoration-none">Track Complaint</Link></li>
              <li><Link to="/faq" className="text-light text-decoration-none">FAQ</Link></li>
              <li><Link to="/contact" className="text-light text-decoration-none">Contact Us</Link></li>
            </ul>
          </Col>

          <Col md={4}>
            <h6>Contact</h6>
            <p>Email: support@ocr.gov.in</p>
            <p>Helpline: 100 / 112</p>
            <p>&copy; {new Date().getFullYear()} Online Crime Reporting System</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;