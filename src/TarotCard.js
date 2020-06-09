import React from "react";
import "./TarotCard.css";

export default function TarotCard(props) {
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }

  const images = importAll(
    require.context("./steampunk-tarot", false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <div className="TarotCard">
      <img src={images[`${props.card.id}.png`]} />
      <p>{props.card.name}</p>
    </div>
  );
}
