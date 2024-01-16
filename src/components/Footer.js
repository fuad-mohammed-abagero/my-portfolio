import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.jpg";
import navIcon1 from "../assets/img/linkedin.png";
import navIcon2 from "../assets/img/github.png";
import navIcon3 from "../assets/img/instagram.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://github.com/fuad-mohammed-abagero"
                target="_blank"
              >
                <img src={navIcon2} alt="" />
              </a>
              <a
                href="https://linkedin.com/in/fuad-mohammed-076a98297"
                target="_blank"
              >
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://www.instagram.com/fuadmhd22" target="_blank">
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
