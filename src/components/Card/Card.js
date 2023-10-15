import React from "react";
import "./Card.css";

const Card = ({ name, img }) => {
  return (
    <>
      <div className="myCard">
        <div className="img-wrap">
          <img src={img} />
        </div>
        <h6>{name}</h6>
      </div>
    </>
  );
};

export default Card;
