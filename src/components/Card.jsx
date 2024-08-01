import React from "react";
import "./Card.css";
const Card = ({ pic }) => {
  return (
    <div className="card">
      <div className="card-info">
        <img src={pic} alt="" />
        <p className="title">Magic Card</p>
      </div>
    </div>
  );
};

export default Card;
