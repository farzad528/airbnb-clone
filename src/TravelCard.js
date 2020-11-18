import React from "react";
import "./TravelCard.css";

export default function TravelCard({ src, title, description }) {
  return (
    <div className="travelCard">
      <img src={src} alt="" />
      <div className="travelCard__info">
        <h2>{title}</h2>
        <h4>{description}</h4>
      </div>
    </div>
  );
}
