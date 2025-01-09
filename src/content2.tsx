// Content.js
import React from "react";
import Card from "./Card";
import logo from "./logo.png";

const Content = () => {
  const cardsData = [
    {
      image: logo,
      title: "Card 1",
      description: "Description for Card 1",
    },
    {
      image: logo,
      title: "Card 2",
      description: "Description for Card 2",
    },
    {
      image: logo,
      title: "Card 3",
      description: "Description for Card 3",
    },
  ];

  return (
    <div className="d-flex flex-wrap">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default Content;
