import React from "react";
import "./Button.css";

const Button = (props) => {
  return <button className="button-primary">{props.text}</button>;
};

export default Button;
