import React from "react";
import "./Favorites.css";
import { Container, Row, Col } from "react-bootstrap";

// components
import FoodCard from "../components/FoodCard";

// images
import burger from "../assets/img/burger.avif";
import burgerKing from "../assets/img/burgerKing.avif";
import greenIsland from "../assets/img/greenIsland.avif";
import rollUp from "../assets/img/rollUp.avif";
import sevenEleven from "../assets/img/sevenEleven.avif";
import thyme from "../assets/img/thyme.avif";

export const Favorites = () => {
  return (
    <Container className="favorites-container">
      <h2 className="fav-header">Favorites Near You</h2>
      <Row>
        <Col>
          <FoodCard img={burger} title="Popeyes" minutes="29" fee="0" />
        </Col>
        <Col>
          <FoodCard img={burgerKing} title="Burger King" minutes="22" fee="0" />
        </Col>
        <Col>
          <FoodCard
            img={greenIsland}
            title="Green Island"
            minutes="30"
            fee="0"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <FoodCard img={rollUp} title="Pita Pit" minutes="24" fee="0" />
        </Col>
        <Col>
          <FoodCard
            img={sevenEleven}
            title="Seven Eleven"
            minutes="25"
            fee="0"
          />
        </Col>
        <Col>
          <FoodCard img={thyme} title="It's about Thyme" minutes="23" fee="0" />
        </Col>
      </Row>
    </Container>
  );
};
