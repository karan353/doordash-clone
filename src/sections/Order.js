import React from "react";
import "./Order.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import Button from "../components/Button";

// images
import food_one from "../assets/food/food_one.webp";
import food_two from "../assets/food/food_two.webp";

export const Order = (props) => {
  return (
    <>
      <Container fluid>
        <Row className="order-top-container">
          <Col lg={6} className="order-center">
            <div className="order-inner-box">
              <h2>Every Flavour Welcome</h2>
              <p>
                From your neighbourhood sushi spot to the burger and fries you
                crave, choose from over 300,000 local and national favourites
                across the U.S., Canada and Australia.
              </p>
              <Button text="Get the app" />
            </div>
          </Col>
          <Col lg={6} className="placement">
            <Image fluid src={food_one} />
          </Col>
        </Row>

        <Row className="order-bg">
          <Col lg={6} className="order-space-top">
            <Image fluid src={food_two} />
          </Col>
          <Col lg={6} className="order-center">
            <div className="order-inner-box">
              <h2>You've got stuff to do. We've got options.</h2>
              <p>
                Get it delivered right to your door. Or, try Pickup on your way
                home. It's mealtime on your time.
              </p>
              <Button text="Find Resturant" />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
