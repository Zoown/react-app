// Card.js
import React from "react";
import { Link } from "react-router-dom";
import "../myCustomStyles.css";

interface CardProps {
  image: string;
  title: string;
  description: string;
  link: string;
  street: string;
  city: string;
}

const Card: React.FC<CardProps> = ({
  image,
  title,
  description,
  link,
  street,
  city,
}) => {
  return (
    <Link to={link} className="card-link">
      <div className="card">
        <img src={image} alt={title} className="card-img-top fixed-size" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">{"Street: " + street}</p>
          <p className="card-text">{"City: " + city}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
