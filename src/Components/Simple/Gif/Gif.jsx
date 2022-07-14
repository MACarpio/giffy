import React from "react";
import "./Gif.css";

export default function Gif({ title, id, url }) {
  return (
    <div className="Gif-container">
      <h2 className="Gif-title">{title}</h2>
      <img src={url} alt={title} className="Gif-imagen" />
    </div>
  );
}
