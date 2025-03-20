import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

const Card = ({ fruit }) => {
  return (
    <div className="cardOne">
      <img src={fruit.image} alt="Not available" className="ImgCard" />
      <h3 className="headingCard">{fruit.name}</h3>
      <p className="textCard">Price: ${fruit.price}</p>
      <p className="textCard" style={{ color: "green", fontWeight: "bold", margin:"20px" }}>
        ✅    In Stock
      </p>
      <Link className="addToCartBtn" to={`/card-detail/${fruit.id}`}>More Info</Link>
    </div>
  );
};

export default Card;
