import React from "react";
import "./Card.css";
function Card(props) {
  const style = "cards ";
  return <div className={style}>{props.children}</div>;
}

export default Card;
