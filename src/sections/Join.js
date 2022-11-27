import React from "react";
import "./Join.css";
import { Container, Row, Col, Image } from "react-bootstrap";

// images
import ScootScoot from "../assets/join/ScootScoot.svg";
import StoreFront from "../assets/join/StoreFront.svg";
import iPhone from "../assets/join/iPhone.svg";

export const Join = () => {
  return (
    <Container fluid className="join-container">
      <Row className="d-flex justify-content-center align-items-center">
        <Col lg={4} md={6} className="one">
          <div>
            <Image fluid className="become-img" src={ScootScoot} />
          </div>
          <h2>Become a Dasher</h2>
          <h5>
            As a delivery driver, you'll make reliable money – working anytime,
            anywhere.
          </h5>
          <button className="become-btn">
            <span>Start earning</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              class="styles__StyledInlineSvg-sc-ijha6n-0 NsJFg"
            >
              <path
                d="M12.2929 15.2929C11.9024 15.6834 11.9024 16.3166 12.2929 16.7071C12.6834 17.0976 13.3166 17.0976 13.7071 16.7071L17.7071 12.7071C18.0976 12.3166 18.0976 11.6834 17.7071 11.2929L13.7071 7.29289C13.3166 6.90237 12.6834 6.90237 12.2929 7.29289C11.9024 7.68342 11.9024 8.31658 12.2929 8.70711L14.5858 11L7 11C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13L14.5858 13L12.2929 15.2929Z"
                fill="#EB1700"
              ></path>
            </svg>
          </button>
        </Col>
        <Col lg={4} md={6} className="one">
          <div>
            <Image fluid className="become-img" src={StoreFront} />
          </div>
          <h2>Become a Partner</h2>
          <h5>
            Grow your business and reach new customers by partnering with us.
          </h5>
          <button className="become-btn">
            <span>Sign up your store</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              class="styles__StyledInlineSvg-sc-ijha6n-0 NsJFg"
            >
              <path
                d="M12.2929 15.2929C11.9024 15.6834 11.9024 16.3166 12.2929 16.7071C12.6834 17.0976 13.3166 17.0976 13.7071 16.7071L17.7071 12.7071C18.0976 12.3166 18.0976 11.6834 17.7071 11.2929L13.7071 7.29289C13.3166 6.90237 12.6834 6.90237 12.2929 7.29289C11.9024 7.68342 11.9024 8.31658 12.2929 8.70711L14.5858 11L7 11C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13L14.5858 13L12.2929 15.2929Z"
                fill="#EB1700"
              ></path>
            </svg>
          </button>
        </Col>
        <Col lg={4} md={6} className="one">
          <Image fluid className="become-img" src={iPhone} />
          <h2>Try the App</h2>
          <h5>Get the best DoorDash experience with live order tracking.</h5>
          <button className="become-btn">
            <span>Get the app</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              class="styles__StyledInlineSvg-sc-ijha6n-0 NsJFg"
            >
              <path
                d="M12.2929 15.2929C11.9024 15.6834 11.9024 16.3166 12.2929 16.7071C12.6834 17.0976 13.3166 17.0976 13.7071 16.7071L17.7071 12.7071C18.0976 12.3166 18.0976 11.6834 17.7071 11.2929L13.7071 7.29289C13.3166 6.90237 12.6834 6.90237 12.2929 7.29289C11.9024 7.68342 11.9024 8.31658 12.2929 8.70711L14.5858 11L7 11C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13L14.5858 13L12.2929 15.2929Z"
                fill="#EB1700"
              ></path>
            </svg>
          </button>
        </Col>
      </Row>
    </Container>
  );
};
