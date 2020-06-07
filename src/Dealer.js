import React, { useState } from "react";
import TarotCard from "./TarotCard";

export default function Dealer(props) {
  const [face, setFace] = useState(10);
  const cards = [
    "The Fool",
    "The Magician",
    "High Priestess",
    "The Empress",
    "The Emperor",
    "The Hierophant",
    "The Chariot",
  ];

  function handleClick(e) {
    e.preventDefault();
    setFace(Math.floor(Math.random() * 7));
  }
  return (
    <div className="Dealer">
      <button type="button" className="btn btn-dark mb-2" onClick={handleClick}>
        Deal
      </button>
      <TarotCard card={face} name={cards[face]} />
    </div>
  );
}
