import React from "react";
import { Card, Image } from "react-bootstrap";

import "./FoodCard.css";

const FoodCard = (props) => {
  return (
    <>
      <a href="#" className="useless">
        <Card fluid className="card">
          <Image src={props.img} className="food-img" />
          <h4 className="fav-title">
            <a>{props.title}</a>
          </h4>
          <div className="fav-text">
            <span>{props.minutes} mins</span>
            <span>•</span>
            <span>${props.fee} delivery fee</span>
          </div>
        </Card>
      </a>
    </>
  );
};

export default FoodCard;
