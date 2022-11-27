import React from "react";
import "./Footer.css";
import { Col, Container, Row, Stack } from "react-bootstrap";

export const Footer = () => {
  return (
    <Container fluid className="footer-container">
      <Stack direction="horizontal" gap={3}>
        <Stack>
          <Container className="footer-row">
            <Row className="footer-header">Top Cities</Row>
            <Row>
              <Col className="footer-col">
                <a>New York City</a>
                <a>Los Angeles</a>
                <a>Toronto</a>
                <a>Chicago</a>
                <a>Houston</a>
                <a>Brooklyn</a>
                <a>San Diego</a>
                <a>Las Vegas</a>
              </Col>
              <Col className="footer-col">
                <a>San Francisco</a>
                <a>Seattle</a>
                <a>Atlanta</a>
                <a>Queens</a>
                <a>Vancouver, BC</a>
                <a>Miami</a>
                <a>San Antonio</a>
                <a>Phoenix</a>
              </Col>
              <Col className="footer-col">
                <a>Denver</a>
                <a>Austin</a>
                <a>Washington, DC</a>
                <a>Dallas</a>
                <a>Melbourne</a>
                <a>Sydney</a>
                <a>Montreal</a>
                <a>All Cities</a>
              </Col>
            </Row>
          </Container>
        </Stack>
        <Stack>
          <Container className="footer-row">
            <Row className="footer-header">Top Cuisines Near You</Row>
            <Row>
              <Col className="footer-col">
                <a> Pizza Near Me</a>
                <a>Chinese Food Near Me</a>
                <a>Sushi Near Me</a>
                <a>Mexican Food Near Me</a>
                <a>Thai Food Near Me</a>
                <a>Lunch Near Me</a>
                <a>Seafood Near Me</a>
              </Col>
              <Col Small className="footer-col">
                <a> Pizza Near Me</a>
                <a>Chinese Food Near Me</a>
                <a>Sushi Near Me</a>
                <a>Mexican Food Near Me</a>
                <a>Thai Food Near Me</a>
                <a>Lunch Near Me</a>
                <a>Seafood Near Me</a>
              </Col>
            </Row>
          </Container>
        </Stack>
      </Stack>
    </Container>
  );
};
